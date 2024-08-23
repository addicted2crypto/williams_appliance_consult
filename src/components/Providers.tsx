"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PropsWithChildren, useState } from "react"

import { httpBatchLink } from "@trpc/client"
import { trpc } from "@/_trpc/client"




const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient )
  const [trpcClient] = useState(() => 
  trpc.createClient({
    links: [
        httpBatchLink({
        url: 'https://www.applianceconsults.com/trpc',
     }),
    ],
  })
)

  return (
    <trpc.Provider 
    client={trpcClient} 
    queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
        {children}
        </QueryClientProvider>
    </trpc.Provider>
  )


}

export default Providers