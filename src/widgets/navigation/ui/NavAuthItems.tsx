'use client'
import React from 'react';
import Link from "next/link";
import NavItem from "~/widgets/navigation/ui/NavItem";
import Image from 'next/image'
import {cn} from "~/shared/lib/clsx/cn";
import {LogInIcon, LogOutIcon} from "lucide-react";
import {type Session} from "next-auth";
import {signOut} from "next-auth/react";
import {Avatar} from "~/enteties/user";
import {usePathname, useSearchParams} from "next/navigation";

const NavAuthItems = ({session}: { session: Session | null }) => {
    const callbackUrl = usePathname();
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
                <Avatar image={session?.user?.image} />
            </Link>
        </>
    else
        return (
            <div className='ml-auto flex items-center'>
                <NavItem item={{
                title: 'Sign in',
                path: `/auth/sign-in${callbackUrl? '?callbackUrl='+callbackUrl: ''}`,
                Icon: LogInIcon
            }}/>
            </div>
        );
};

export default NavAuthItems;