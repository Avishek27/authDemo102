import { CardWrapper } from "@/components/auth/card-wrapper";
import { LoginForm } from "@/components/auth/login-form";



const Login = () => {
    return (
        <CardWrapper
        headerLabel="Welcome Back"
        backButtonLabel="Don't have an account?Sign up"
        backButtonHref="/auth/register"
        showSocials
        >
           <LoginForm/>
        </CardWrapper>
    )
}

export default Login;