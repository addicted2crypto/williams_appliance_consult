"use client"

import { trpc } from "../app/_trpc/client"
import { Ghost, Loader2, MessageSquare, Plus, Trash } from "lucide-react"
import UploadFileButton from "./UploadFileButton"
import Skeleton from "react-loading-skeleton"
import Link from "next/link"
import {format} from "date-fns"
import { Button } from "./ui/button"
import { useState } from "react"



// This is the dashboard component that will display the appliances that the user has uploaded
const Dashboard = () => {
  const[currentlyDeletingFileId, setCurrentlyDeletingFileId] = useState<string | null>(null)
  
  //userContext is deprecated so i used trpc.useUtils() to get the user
   const utils = trpc.useUtils();

    const {data: files, isLoading} = 
    trpc.getUserFiles.useQuery();

    const { mutate: deleteFile} = trpc.deleteFile.useMutation({
      onSuccess: () => {
        utils.getUserFiles.invalidate();
      },
        onMutate({id}) {
          setCurrentlyDeletingFileId(id);
        },
        onSettled() {
          setCurrentlyDeletingFileId(null);
        }
    });
    
    return (
    <main className="mx-auto max-w-7xl md:p-10">
        <div className="mt-8 flex flex-col justify-between gap-4 border-b border=gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
            <h1 className="mb-3 text-5xl font-bold text-gray-950">
           
           Appliances uploaded:
            
            </h1>
            <UploadFileButton />
        </div>
        
        {/* display appliance info on the dashboard for the logged-in user i created a file in schema but that shit dont work
        so i no longer care about showing files of logged in user until i can get trpc to click*/}
        {files && files?.length !== 0 ? (
        <ul className='mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3'>
          {files
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((file) => (
              <li
                key={file.id}
                className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg'>
                <Link
                  href={`/dashboard/${file.id}`}
                  className='flex flex-col gap-2'>
        
        
                            <div className="pt-6 px-6 flex w-full items-center justify-between space-x-6">
                             <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-900" />
                              <div className="flex-1 truncate"></div>
                               <div className="flex items-center space-x-3">
                                <h3 className="truncate text-lg font-medium text-zinc-950">
                                  {file.name}
                                  </h3>
                               </div>
                            </div>
                        </Link>
                        <div className="px-6 mt-4 grid grid-cols-3 py-2 gap-6 text-xs text-zinc-500">
                          <div className="flex items-center gap-2">
                            <Plus className="h-4 w-4"/>
                            {format(new Date(file.createdAt), "MMM yyyy")}
                          
                          </div>
                           <div className="flex items-center gap-2">
                            <MessageSquare className='h-4 w-4'/>
                           </div>

                           <Button 
                            onClick={() => deleteFile({id: file.id})
                          }
                              size='sm' className="w-full" variant='destructive'>
                            {currentlyDeletingFileId === file.id ? (
                              <Loader2 className="h-4 w-4 animate-spin"/>
                            ) : (<Trash className="h-5 w-5" /> 
                          )}
                           </Button>
                        </div>
                   </li>
                ))}
            </ul>
        ) : isLoading ? (
            <Skeleton height={69} className="my-2" count={7} />
        ) : (
         <div className="mt-16 flex flex-col items-center gap-2">
            <Ghost className="h-8 w-8 text-zinc-500"/> 
            <Ghost className="h-8 w-8 text-zinc-700"/>
            <Ghost className="h-8 w-8 text-zinc-900"/>
            <h3 className="font-semibold tx-xl">No appliances</h3>
            <p>Lets&apos;s upload your appliance</p>
            
           
            
            
           
         </div>
        )}

    </main>
    
    )
    
}

export default Dashboard