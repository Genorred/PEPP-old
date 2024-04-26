import React, {Suspense} from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import MaxWidthWrapper from "~/shared/ui/MaxWidthWrapper";
import UpdateAccountForm from "~/features/update-profile";
import {Button, buttonVariants} from "~/shared/ui/Button";
import {useSession} from "next-auth/react";
import NewUserAccountForm from "~/app/(auth)/auth/new-user/NewUserAccountForm";
const Page = () => {
    return (
        <div className='flex justify-center'>
            <MaxWidthWrapper className='flex flex-col gap-3 sm:w-2/3 lg:w-1/2 px-5'>
                <h3 className='font-bold text-xl text-center'>Success!</h3>
                <p>You can customize your profile now or a bit later</p>
                <Suspense>
                    <NewUserAccountForm/>
                </Suspense>
            </MaxWidthWrapper>
        </div>
    );
};
export default Page;