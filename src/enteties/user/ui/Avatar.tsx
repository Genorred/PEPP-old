import React from 'react';
import Image from "next/image";
import {Logo} from "~/shared/ui/logo/ui";

const shared = {
    alt: 'user avatar',
    width: 50,
    height: 50,
    className: 'rounded-full border-2 border-primary-foreground'
}
export const Avatar = ({image}: { image: string | undefined | null}) => {
    return (
        <>
            {image
                ? <Image src={image} {...shared}/>
                : <Image src={Logo} {...shared} className='bg-primary-foreground cover-fill'/>
            }
        </>
    )
}