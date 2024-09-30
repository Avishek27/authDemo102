import { CardWrapper } from "@/components/auth/card-wrapper";
import { LoginForm } from "@/components/auth/login-form";
import { Suspense } from "react";



const Login = () => {
    return (
        <CardWrapper
        headerLabel="Welcome Back"
        backButtonLabel="Don't have an account?Sign up"
        backButtonHref="/auth/register"
        showSocials
        ><Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
        </CardWrapper>
    )
}

export default Login;