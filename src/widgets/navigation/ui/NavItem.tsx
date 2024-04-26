import React from 'react';
import type {NavGeneralItemsType} from "~/widgets/navigation/consts/navItems";
import Link from "next/link";
import {cn} from "~/shared/lib/clsx/cn";
interface Props {
    item: NavGeneralItemsType[number]
}
const NavItem = ({item}: Props) => {
    return (
        <div className='ml-10 my-auto'>
            <Link href={item.path} className='text-xl text-primary hover:text-primary/70 flex gap-1 items-center justify-center px-2'>
                {item.title}
                <item.Icon/>
            </Link>
        </div>

    );
};

export default NavItem;