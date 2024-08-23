// import { appRouter } from '@/src/trpc';
// import { fetchRequestHandler } from '@trpc/server/adapters/fetch'


// const handler = (req: Request) =>
//   fetchRequestHandler({
//     endpoint: 'api/trpc/route',
//     req,
//     router: appRouter,
//     createContext: () => ({}),
//   })

// export { handler as GET, handler as POST };

import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";
export const GET = handleAuth();