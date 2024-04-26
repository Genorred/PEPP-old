import React from 'react';
import MaxWidthWrapper from "~/shared/ui/MaxWidthWrapper";
import {Mail} from "lucide-react";

const Page = () => {
    return (
        <div className='flex justify-center  mt-10'>
            <MaxWidthWrapper className='flex flex-col gap-3 items-center justify-center p-4 text-center my-auto'>
                    <h1 className='text-3xl md:text-4xl font-bold'>Verification</h1>
                    <Mail className='w-12 h-12'/>
                    <p>
                        Please verify your email
                    </p>
            </MaxWidthWrapper>
        </div>
    );
};

export default Page;