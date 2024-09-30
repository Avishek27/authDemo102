"use client"


interface HeaderProps{
    message: string;
}

export const Header = ({message}: HeaderProps) => {
    return (
        <div className="w-full flex flex-col items-center justify-center space-y-4">
           <h1 className="text-6xl font-semibold">Authentication</h1>
           <p>{message}</p>
        </div>
    )
}