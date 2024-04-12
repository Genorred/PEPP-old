'use client'
import React, {PropsWithChildren} from 'react';
import {TRPCReactProvider} from "~/shared/api/trpc/react";
import {SessionProvider} from "next-auth/react";

const Providers = ({children}: PropsWithChildren) => {
    return (
        <SessionProvider>
            <TRPCReactProvider>
                {children}
            </TRPCReactProvider>
        </SessionProvider>
        );
};

export default Providers;