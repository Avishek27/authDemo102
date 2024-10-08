import credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "./schemas"
import { getUserByEmail } from "./data";
import bcrypt from "bcryptjs";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";
export default { providers: [
    google ({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
     }),
github ({
   clientId: process.env.GITHUB_CLIENT_ID,
   clientSecret: process.env.GITHUB_CLIENT_SECRET,
}),
   credentials ({
    async authorize(credentials){
        const validatedInputs = LoginSchema.safeParse(credentials);
        if(validatedInputs.success){
            const { email, password}  = validatedInputs.data;
            const user = await getUserByEmail(email);
            if(!user || !user.password){
                return null;
            }
            const passwordMatch = await bcrypt.compare(password,user.password);
            if(passwordMatch){
                return user;
            }
            
        }
        return null;
    }
   })

] } satisfies NextAuthConfig