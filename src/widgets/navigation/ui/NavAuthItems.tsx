'use client'
import React from 'react';
import Link from "next/link";
import NavItem from "~/widgets/navigation/ui/NavItem";
import Image from 'next/image'
import {cn} from "~/shared/lib/clsx/cn";
import {LogInIcon, LogOutIcon} from "lucide-react";
import {Session} from "next-auth";
import {signOut} from "next-auth/react";

const NavAuthItems = ({session}: { session: Session | null }) => {
    if (session)
        return <>
            <div className='ml-auto my-auto'>
                <button onClick={() => signOut()} className='text-xl text-primary hover:text-primary/70 flex gap-2 items-center justify-center'>
                    Sign out <LogOutIcon/>
                </button>
            </div>
            <Link href='/profile'
                  className='text-xl text-primary hover:text-primary/70 flex gap-2 items-center justify-center ml-10'>
                Profile
                {session.user?.image&&<Image alt='user avatar' src={session.user?.image} width={50} height={50}
                       className='rounded-full border-2 border-primary-foreground'/>}
            </Link>
        </>
    else
        return (
            <div className='ml-auto flex items-center'>
                <NavItem item={{
                title: 'Sign in',
                path: '/sign-in',
                Icon: LogInIcon
            }}/>
            </div>
        );
};

export default NavAuthItems;