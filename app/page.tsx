import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
   <main className = "flex flex-col items-center justify-center h-full bg-slate-500">
     <h1 className="text-6xl font-bold">
      Authentication Simplified
     </h1>
     <p className="text-sm">One stop solution for authentication</p>
     <LoginButton>
     <Button variant={"secondary"} size={"lg"}>Sign In</Button>
     </LoginButton>
     
   </main>

  )
}