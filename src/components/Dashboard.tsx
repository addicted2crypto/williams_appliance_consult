"use client"

import { trpc } from "@/_trpc/client"
import { Ghost } from "lucide-react"
import UploadFileButton from "./UploadFileButton"
import Skeleton from "react-loading-skeleton"

const Dashboard = () => {
    const {data: appliances, isLoading} = trpc.getUserFiles.useQuery()

    return (
    <main className="mx-auto max-w-7xl md:p-10">
        <div className="mt-8 flex flex-col justify-between gap-4 border-b border=gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
            <h1 className="mb-3 text-5xl font-bold text-gray-950">My appliance
           
            
            </h1>
            <UploadFileButton />
        </div>

        {/* display appliance info on dashboad for the logged in user */}

        {appliances && appliances?.length !== 0 ? (
            <div></div>
        ): isLoading ? (
            <div></div>
        ) : (
         <div className="mt-16 flex flex-col items-center gap-2">
            <Ghost className="h-8 w-8 text-zinc-800"/>
            <h3 className="font-semibold tx-xl">No appliances yet</h3>
            <p>Lets&apos;s upload your appliance</p>
         </div>
        )}

    </main>
    
        
    )
    
}

export default Dashboard