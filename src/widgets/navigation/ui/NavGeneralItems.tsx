'use client'
import React from 'react';
import {navGeneralItems} from "~/widgets/navigation/consts/navItems";
import NavItem from "~/widgets/navigation/ui/NavItem";
import {Session} from "next-auth";
const NavGeneralItems = ({session}: {session: Session | null}) => {
    if(session)
    return (
        <>
            {navGeneralItems.map(item=>
            <NavItem key={item.title} item={item} />
            )}
        </>
    );
};

export default NavGeneralItems;