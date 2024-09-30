import { CardWrapper } from "@/components/auth/card-wrapper";
import { RegisterForm } from "@/components/auth/register-form";



const Register = () => {
    return (
        <CardWrapper
        headerLabel="Create an Account"
        backButtonLabel="Already have an account?Sign in"
        backButtonHref="/auth/login"
        showSocials
        >
           <RegisterForm/>
        </CardWrapper>
    )
}

export default Register;