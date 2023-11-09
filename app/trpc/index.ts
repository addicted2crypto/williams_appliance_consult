import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { TRPCError } from '@trpc/server';

import { publicProcedure, router } from './trpc';



export const appRouter = router({
   authCallback: publicProcedure.query (async () =>{
    const { getUser } = getKindeServerSession()
    const User =  await getUser()

    if(!User.id || !User.email) 
    throw new TRPCError({ code: 'UNAUTHORIZED'})


    return { success: true}
   }),
    })



export type AppRouter = typeof appRouter;