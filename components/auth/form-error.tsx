"use client"

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";



interface FormErrorProps {
    message: string | undefined;
}

export const FormError = ({message}: FormErrorProps) => {

    if(!message){
        return null;
    }
    return (
     <div className = "w-full flex items-center space-x-2 bg-destructive/15 p-3 rounded-md text-destructive">
       <ExclamationTriangleIcon/>
       {message}
     </div>
    )
}