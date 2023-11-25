"use client"

import { trpc } from "@/_trpc/client"
import { Ghost } from "lucide-react"
import UploadFileButton from "./UploadFileButton"
import Skeleton from "react-loading-skeleton"
import Link from "next/link"

const Dashboard = () => {
    const {data: files, isLoading} = trpc.getUserFiles.useQuery()

    return (
    <main className="mx-auto max-w-7xl md:p-10">
        <div className="mt-8 flex flex-col justify-between gap-4 border-b border=gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
            <h1 className="mb-3 text-5xl font-bold text-gray-950">My appliance
           
            
            </h1>
            <UploadFileButton />
        </div>

        {/* display appliance info on dash-board for the logged-in user */}

        {files && files?.length !== 0 ? (
            <ul className="mt-8 grid grid-cols-1 gap-6 divide-y divide-zink-200 md:grid-cols-1 lg:grid-cols-3">
                {files.sort(
                    (a,b) => 
                    new Date(b.createdAt).getTime() - 
                    new Date(a.createdAt).getTime()
                ).map((file) => (
                
                    <li key={file.id} className="col-span-1 divide-y divide-gray-300 rounded-lg bg-white shadow transition hover:shadow-lg">
                       {/* may change this let's see if linking the appliances with a link is needed ? maybe a 
                       form instead of a link but we will see won't we bob?? */}
                        <Link href={`/dashboard/${file.id}`}className="flex flex-col gap-2">
                            <div className="pt-6 px-6 flex w-full items-center justify-between space-x-6">
                                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-900">
                                 <h3 className="truncate text-lg font-medium text-zinc-900">
                                    {file.name}
                                 </h3>
                               </div>
                            </div>
                            
                        </Link>
                    </li>
                ),)}
               
                
            </ul>
        ): isLoading ? (
            <Skeleton height={100} className="my-2" count={3} />
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