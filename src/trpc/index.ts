


import {privateProcedure,publicProcedure, router,} from './trpc'
import { TRPCError } from '@trpc/server'
import { db } from '@/src/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'





export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const {getUser} = getKindeServerSession();
    const user = getUser();
    
    if (!user.id || user == null || !user.email)
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    
    // check if the user is in the database
    const dbUser = await db.user.findFirst({
      where: {
        id: user.id,
      },
    });

    if (!dbUser) {
      // create user in db
       db.user.create({
        data: {
          id: user.id,
          email: user.email,
        },
      })
    };
  
    return { success: true };
  }),
    getUserFiles: privateProcedure.query(async ({ ctx }) => {
      const { user } = ctx
    //this is supposed to be an await but this adds a error of extra attributes from the server
    return await db.file.findMany({
      where: {
        userId: user.id,
        id: user.id,
        
    },
   },)
  }),
})


export type AppRouter = typeof appRouter;