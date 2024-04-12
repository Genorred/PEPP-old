import React, {PropsWithChildren} from 'react';

export const MaxWidthWrapper = ({children}: PropsWithChildren) => {
    return (
        <div className='w-full lg:max-w-screen-xl p-4 flex justify-center'>
            {children}
        </div>
    );
};