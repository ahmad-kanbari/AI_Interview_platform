'use client'

import React from 'react'
import { zodResolver} from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from 'react'
import Image from 'next/image'
import { z } from "zod"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import FormField  from "@/components/FormField"
import router  from "next/navigation"
import { useRouter } from 'next/navigation'



const authFormSchema = (type: FormType) => {
    return z.object({
        name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(8),
    })
}

const AuthForm = ({type } : {type : FormType}) => {

  const router = useRouter();

  const formSchema = authFormSchema(type);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        password: "",
      },
    })
   
    
    const isSignIn = type === "sign-in";

    function onSubmit(values: z.infer<typeof formSchema>) { 
      try {
          if (type === 'sign-up'){
            toast.success("Account created successfully, please log in");
            router.push('/sign-in');
          }else {
            toast.success("Logged in successfully");
            router.push('/');
          }
      } catch (error) { 
        console.log(error);
        toast.error(`There was an error: ${error}`);
      }
    }

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">PrepWise</h2>
        </div>
        <h3> Practice job interview with AI</h3>
      </div>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full space-y-6 mt-4 form">
          {!isSignIn &&
           <FormField 
            control={form.control} 
            name="name" 
            label="Name" 
            placeholder="Your Name" />
            }

          <FormField 
            control={form.control} 
            name="email" 
            label="Email" 
            placeholder="Your email address" 
            type="email"
            />

          <FormField 
            control={form.control} 
            name="password" 
            label="password" 
            placeholder="Enter your password" 
            type="password"
            />

          <Button className="btn" type="submit">
            {!isSignIn ? "Sign In" : "Create an Account"}
          </Button>
        </form>
      </Form>
      <p className="text-center">
          {!isSignIn ? 'Have an account already?':  'No account yet?'}
          <Link href={isSignIn ? '/sign-up' : '/sign-in'} className="font-bold text-user-primary ml-1">
              {!isSignIn ? 'Sign In' : 'Sign Up'}
          </Link>
      </p>
    </div>
  )
}

export default AuthForm