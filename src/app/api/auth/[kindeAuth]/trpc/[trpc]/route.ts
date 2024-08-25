import { appRouter } from '@/src/trpc'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'


const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: 'src/api/auth/trpc',
    req,
    router: appRouter,
    createContext: () => ({}),
  })

export { handler as GET, handler as POST }