'use client'
import React from 'react';
import MaxWidthWrapper from "~/shared/ui/MaxWidthWrapper";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Input} from "~/shared/ui/input";
import {Button, buttonVariants} from "~/shared/ui/button";
import {ArrowRight} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "~/shared/ui/Form";
import useEmail from "~/features/auth/lib/useEmail";
import Image from "next/image";
import {Separator} from "~/shared/ui/separator";
import GoogleButton from "~/features/auth/ui/GoogleButton";

const authResolver = z.object({
    email: z.string().email({
        message: 'write a valid email'
    })
})
type TAuthResolver = z.infer<typeof authResolver>
export const AuthForm = () => {
    const form = useForm<TAuthResolver>({
        resolver: zodResolver(authResolver)
    })
    const emailSignIn = useEmail()
    const Submit = async (values: TAuthResolver) => {
        emailSignIn.signIn(values.email)
    }
    return (
        <div className='flex justify-center'>
            <MaxWidthWrapper>
                <div className='flex flex-col items-center gap-4 w-full sm:w-2/3 lg:w-1/2 px-5'>
                    <h1 className='text-3xl text-center self-start'>Authorization...</h1>
                    <GoogleButton/>
                    <Separator title='OR' className='my-4'/>
                    <Form {...form}>
                        <form className='flex flex-col gap-4 w-full'
                              onSubmit={form.handleSubmit(Submit)}>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="your.email@gmail.com" {...field} />
                                        </FormControl>
                                        {/*<FormDescription>*/}
                                        {/*    This is your email.*/}
                                        {/*</FormDescription>*/}
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </div>

            </MaxWidthWrapper>
        </div>
    );
};