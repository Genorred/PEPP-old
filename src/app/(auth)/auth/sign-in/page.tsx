import React, {Suspense} from 'react';
import {AuthForm} from "~/features/auth";
import MaxWidthWrapper from "~/shared/ui/MaxWidthWrapper";
const Page = () => {
    return (
        <div className='flex justify-center'>
            <MaxWidthWrapper>
                <Suspense>
                    <AuthForm/>
                </Suspense>
            </MaxWidthWrapper>
        </div>
    );
};

export default Page;