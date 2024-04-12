'use client'
import React from 'react';
import {MaxWidthWrapper} from "~/shared/ui/maxWidthWrapper";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Label} from "~/shared/ui/shadcn/label";
import {Input} from "~/shared/ui/shadcn/input";
import {buttonVariants} from "~/shared/ui/shadcn/button";
import {ArrowRight} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const authResolver = z.object({
    email: z.string().email({
        message: 'write a valid email'
    }),
    password: z.string().min(8, {
        message: 'Password must be at least 8 characters long'
    })
})
type TAuthResolver = z.infer<typeof authResolver>
const Auth = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<TAuthResolver>({
        resolver: zodResolver(authResolver)
    })
    const isSignIn = usePathname()?.includes('sign-in')
    const Submit = async(values: TAuthResolver) => {
//
    }
    return (
        <div className='flex justify-center'>
            <MaxWidthWrapper>
                <div className='flex flex-col items-center gap-4 w-full px-5'>
                    <form className='flex flex-col gap-4 w-full sm:w-2/3 lg:w-1/2' onSubmit={handleSubmit(Submit)}>
                        <h1 className='text-2xl text-center'>Registration</h1>
                        <div>
                            <Label htmlFor='email' className='pb-2 block'>Email</Label>
                            <Input {...register('email')} id='email' placeholder='your@email.com'/>
                        </div>
                        <div>
                            <Label htmlFor='password' className='pb-2 block'>Password</Label>
                            <Input {...register('password')} id='password' placeholder='1488Xddd'/>
                        </div>
                        <Input type='submit' value='Submit' className={buttonVariants({variant: 'default'})}/>
                    </form>
                    <Link href='/sign-up' className={buttonVariants({
                        variant: 'link',
                        className: 'gap-x-1.5'
                    })}>
                        Already have an account? Sign up
                        <ArrowRight/>
                    </Link>
                </div>

            </MaxWidthWrapper>
        </div>
    );
};

export default Auth;