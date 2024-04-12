import React from 'react';
import {Logo} from "~/shared/ui/logo/ui";
import NavGeneralItems from "~/widgets/navigation/ui/NavGeneralItems";
import Link from "next/link";
import NavAuthItems from "~/widgets/navigation/ui/NavAuthItems";
import NavItems from "~/widgets/navigation/ui/NavItems";

export const Navbar = () => {
    return (
        <nav className='px-3 flex border-b'>
            <Link href='/'
                  className='h-28 cursor-pointer rounded-xl flex justify-center items-center font-bold text-2xl text-primary hover:text-primary/70'>
                <Logo/> PEPP
            </Link>
            <NavItems/>
        </nav>
    );
};