"use client"

import { RegisterSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState, useTransition } from "react";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { Register } from "@/actions/register";


export const RegisterForm = () => {
   const [isPending,startTransition] = useTransition();
   const [error,setError] = useState<string | undefined>("");
   const [success,setSuccess] = useState<string | undefined>("");
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues:{
            email: "",
            password: "",
            name: "",
        }
    })

   const onHandleSubmit = (values: z.infer<typeof RegisterSchema>) => {
        startTransition(()=>{
            Register(values).then((data)=>{
                setError(data.error);
                setSuccess(data.success);
            })
        })
          
   }

    return (
        <Form {...form}>
         <form onSubmit={form.handleSubmit(onHandleSubmit)} className="space-y-6">
            <div className="space-y-4">
            <FormField
              control = {form.control}
              name="name"
              render = {({field}) => (
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder = "John Doe" type="name" disabled={isPending}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
              )}
              />
              <FormField
              control = {form.control}
              name="email"
              render = {({field}) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder = "JohnDoe@email.com" type="email" disabled = {isPending}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
              )}
              />
              <FormField
              control = {form.control}
              name="password"
              render = {({field}) => (
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder = "*******" type="password" disabled={isPending}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
              )}
              />
            </div>
            <FormError message={error}/>
            <FormSuccess message = {success}/>
            <Button className="w-full" size={"lg"}>Register</Button>
            
         </form>
        </Form>
    )
}