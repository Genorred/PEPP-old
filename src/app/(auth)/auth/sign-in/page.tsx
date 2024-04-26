import React from 'react';
import {AuthForm} from "~/features/auth";
import MaxWidthWrapper from "~/shared/ui/MaxWidthWrapper";
const Page = () => {
    return (
        <div className='flex justify-center'>
            <MaxWidthWrapper>
                <AuthForm/>
            </MaxWidthWrapper>
        </div>
    );
};

export default Page;