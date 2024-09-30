"use client"

import { CheckCheckIcon } from "lucide-react";


interface FormSuccessProps {
    message: string | undefined;
}

export const FormSuccess = ({message}: FormSuccessProps) => {

    if(!message){
        return null;
    }
    return (
     <div className = "w-full flex items-center space-x-2 bg-emerald-500/15 p-3 rounded-md text-emerald-500">
       <CheckCheckIcon/>
       {message}
     </div>
    )
}