import { appRouter } from '@/src/trpc';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

interface KindeAuthContext {
  kindeAuth: ReturnType<typeof getKindeServerSession>;
}
// const createContext = async ({req, res}: trpcNext.CreateNextContextOptions) => {
//   const kindeAuth = await getKindeServerSession(req, res);
//   return {
//       kindeAuth
//   };
// };
const {getUser} = getKindeServerSession();
const user = await getUser();

console.log(user || `${getUser}`);

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({}),
  })

export { handler as GET, handler as POST };

