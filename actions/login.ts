"use server"

import { signIn } from '@/auth';
import { getUserByEmail } from '@/data';
import { generateVerificationToken } from '@/lib/tokens';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { LoginSchema } from '@/schemas';
import { AuthError } from 'next-auth';
import * as z from 'zod';

export const Login = async (values : z.infer<typeof LoginSchema>) => {
    const validatedInputs = LoginSchema.safeParse(values);
    if(!validatedInputs.success){
        return {
            error: "Invalid inputs",
        }
    }
    const { email,password } = validatedInputs.data;
    
    const existingUser = await getUserByEmail(email);
    if(!existingUser || !existingUser.email || !existingUser.password){
        return {
            error: "Email doesn't exist!"
        }
    }
    if(!existingUser.emailVerified){
        const verificationToken = await generateVerificationToken(existingUser.email);
        return {
            success: "confirmation mail is sent!"
        }
    }
    try{
     await signIn("credentials",{
        email,
        password,
        redirectTo: DEFAULT_LOGIN_REDIRECT,
     })
    }catch(error){
      if(error instanceof AuthError){
        switch(error.type){
            case "CredentialsSignin":
                return {
                    error: "Invalid credentials"
                }
            default:
                 return {
                    error: "Something went wrong!"
                 }    
        }
      }
      throw error
    }
    return {
        success: "Email sent"
    }
}