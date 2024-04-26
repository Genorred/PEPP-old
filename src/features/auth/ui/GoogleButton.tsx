import React from 'react';
import Image from "next/image";
import {Google} from '../../../shared/ui/logo/ui'
import {useGoogleSignIn} from "~/features/auth/lib/useGoogle";

const GoogleButton = () => {
    const {signIn} = useGoogleSignIn()
    return (
        <div className='flex justify-center items-center hover:bg-gray-50 px-8 py-4 rounded-xl w-full cursor-pointer'
        onClick={()=>signIn()}>
            <Image alt='Logo' width={35} height={35} src={Google}/>
            <p className='text-xl ml-4'
            >Sign in with Google</p>
        </div>
    );
};

export default GoogleButton;