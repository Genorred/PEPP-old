import React from 'react';
import {ArrowRight} from "lucide-react";
import Link from "next/link";
import {buttonVariants} from "~/shared/ui/shadcn/button";
import Auth from "~/pages/auth/ui/Auth";
const Page = () => {
    return (
            <div>
                <Auth/>
            </div>
    );
};

export default Page;