'use client'
import React, {PropsWithChildren} from 'react';
import {TRPCReactProvider} from "~/kernel/infrastructure/config/trpc/react";
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