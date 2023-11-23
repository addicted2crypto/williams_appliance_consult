import { userAgent } from "next/server"
import UploadFileButton from "./UploadFileButton"

const Dashboard = () => {
    return (
    <main className="mx-auto max-w-7xl md:p-10">
        <div className="mt-8 flex flex-col justify-between gap-4 border-b border=gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
            <h1 className="mb-3 text-5xl font-bold text-gray-950">My appliance
           
            
            </h1>
            <UploadFileButton />
        </div>
        {/* display appliance info on dashboad for the logged in user */}
        

    </main>
        
    )
    
}

export default Dashboard