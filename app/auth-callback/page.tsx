"use client"

import { Loader2 } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { trpc } from "../_trpc/client"


const Page = () => {
 const router = useRouter()
  
 const searchParams = useSearchParams()
 const origin = searchParams.get('origin')

trpc.authCallback.useQuery(undefined, {
    onSuccess: ({success}) => {
        if(success){
            //user is confirmed in db
            router.push(origin ? `/${origin}` : '/dashboard')
        }
    },
    //if not logged in route to sign-in
    onError: (err) => {
        if(err.data?.code ==="UNAUTHORIZED") {
            router.push("/sign-in")
        }
    },
    retry: true,
    retryDelay: 500,
  })
  
 return (
    <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-12 w-12 animate-spin text-zinc-900" />
                <h3 className="font semi-bold text-xl">Processing your request....</h3>
                 <p>You will be redirected once the task is complete... automatically!</p>
        </div>
    </div>
 )
}

export default Page