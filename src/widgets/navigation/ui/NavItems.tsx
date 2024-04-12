'use client'
import React from 'react';
import NavGeneralItems from "~/widgets/navigation/ui/NavGeneralItems";
import NavAuthItems from "~/widgets/navigation/ui/NavAuthItems";
import {useSession} from "next-auth/react";

const NavItems = () => {
    const { data: session } = useSession()
    return (
        <>
           <NavGeneralItems session={session}/>
           <NavAuthItems session={session}/>
        </>
    );
};

export default NavItems;