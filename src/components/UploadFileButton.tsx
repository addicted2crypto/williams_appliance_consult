"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { Button } from "./ui/button"



const UploadFileButton = () => {
    const[isOpen, setIsOpen] = useState<boolean>(false)


    return (
        <Dialog 
        open={isOpen} 
        onOpenChange={(v) => {
            if(!v) {
            setIsOpen(v)
        }
        }}>
            <DialogTrigger onClick={() => setIsOpen(true)}
            asChild>
                <Button>Upload Documents</Button>
            </DialogTrigger>
                <DialogContent>
                    example documents
                </DialogContent>
            
        </Dialog>

        )
    }

    



export default UploadFileButton
