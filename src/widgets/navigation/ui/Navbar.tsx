'use client'
import React from 'react';
import {Logo} from "~/shared/ui/logo/ui";
import NavGeneralItems from "~/widgets/navigation/ui/NavGeneralItems";
import Link from "next/link";
import NavAuthItems from "~/widgets/navigation/ui/NavAuthItems";
import Image from 'next/image'
import {useSession} from "next-auth/react";


export const Navbar = () => {
    const { data: session } = useSession()
    return (
        <nav className='px-3 flex border-b'>
            <Link href='/'
                  className='h-28 cursor-pointer rounded-xl flex justify-center items-center font-bold text-2xl text-primary hover:text-primary/70'>
                <Image alt='Logo' width={100} height={100} src={Logo}/> PEPP
            </Link>
            <NavGeneralItems session={session}/>
            <NavAuthItems session={session}/>
        </nav>
    );
};