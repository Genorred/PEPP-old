import React from 'react';
import MaxWidthWrapper from "~/shared/ui/MaxWidthWrapper";
import UpdateAccountForm from "~/features/update-profile";
import {getServerAuthSession} from "~/kernel/infrastructure/config/auth/authOptions";
import {redirect} from "next/navigation";
const Page = async ({searchParams}: {searchParams?: {callbackUrl: string}}) => {
    const session = await getServerAuthSession()
    if (!session){
        redirect('/auth/sign-in')
    }
    return (
        <div className='flex justify-center'>
            <MaxWidthWrapper className='flex flex-col gap-3 sm:w-2/3 lg:w-1/2 px-5'>
                <h3 className='font-bold text-xl text-center'>Success!</h3>
                <p>You can customize your profile now or a bit later</p>
                <UpdateAccountForm userId={session?.user.id ?? ''} callbackUrl={searchParams?.callbackUrl}
                                   cancelButtonName='Later' submitButtonName='Continue'/>
            </MaxWidthWrapper>
        </div>
    );
};
export default Page;