"use client"

import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"
import { FaGithub } from "react-icons/fa"
import { signIn } from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

export const Socials = () => {
  const onClickHandler = (provider: "google" | "github") => {
    signIn(provider,{
        redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  }

    return (
        <div className="w-full flex items-center space-x-2">
            <Button className="w-full  bg-slate-200" size={"lg"} variant={"secondary"} onClick={() =>{onClickHandler("google")}}>
                <FcGoogle className="h-6 w-6"/>
            </Button>
            <Button className="w-full bg-slate-200" size={"lg"} variant={"secondary"} onClick={()=> {onClickHandler("github")}}>
                <FaGithub className="h-6 w-6"/>
            </Button>
        </div>
    )
}