"use server"
import bcryptjs from 'bcryptjs';
import { RegisterSchema } from '@/schemas';
import * as z from 'zod';
import prisma from '@/lib/db';
import { getUserByEmail } from '@/data';

export const Register = async (values : z.infer<typeof RegisterSchema>) => {
    const validatedInputs = RegisterSchema.safeParse(values);

    if(!validatedInputs.success){
        return {
            error: "Invalid inputs",
        }
    }
    const { email, password, name } = validatedInputs.data;
    const hashedPassword = await bcryptjs.hash(password,10);
    const existingUser = await getUserByEmail(email);
    if(existingUser){
        return {
            error: "Email already taken!",
        }
    }
    await prisma.user.create({
        data:{
            name,
            email,
            password: hashedPassword,
        }
    });
    //TODO VERIFICATION EMAIL
    return {
        success: "User successfully created!"
    }
}
