import React from 'react';
import {cn} from "~/shared/lib/clsx/cn";
interface Props {
    children: React.ReactNode,
    className?: string
}
const MaxWidthWrapper = ({children, className}: Props) => {
    return (
        <div className={cn('w-full lg:max-w-screen-xl p-4 flex justify-center', className)}>
            {children}
        </div>
    );
};
export default MaxWidthWrapper;