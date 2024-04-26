'use client'
import React from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import MaxWidthWrapper from "~/shared/ui/MaxWidthWrapper";
import UpdateAccountForm from "~/features/update-profile";
import {Button, buttonVariants} from "~/shared/ui/Button";
import {useSession} from "next-auth/react";

const Page = () => {
    // const session = await getServerSession();
    //
    // if (!session) {
    //     return redirect("/auth/sign-in");
    // }
    const path = useSearchParams();
    const callbackUrl = path.get('callbackUrl') ?? '';
    const router = useRouter()
    const toContinue = () => {
        router.push(callbackUrl)
    }
    const user = useSession()
    return (
        <div className='flex justify-center'>
            <MaxWidthWrapper className='flex flex-col gap-3 sm:w-2/3 lg:w-1/2 px-5'>
                <h3 className='font-bold text-xl text-center'>Success!</h3>
                <p>You can customize your profile now or a bit later</p>
                <UpdateAccountForm
                    userId={user.data?.user?.id ?? ''}
                    cancelButton={{onClick: toContinue, title: 'Later'}}
                    submitButton={{onClick: toContinue, title: 'Continue'}}
                />
            </MaxWidthWrapper>
        </div>
    );
};


export default Page;