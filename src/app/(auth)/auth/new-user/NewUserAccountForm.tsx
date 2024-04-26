import React from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import {useSession} from "next-auth/react";
import UpdateAccountForm from "~/features/update-profile";

const NewUserAccountForm = () => {
    const path = useSearchParams();
    const callbackUrl = path.get('callbackUrl') ?? '';
    const router = useRouter()
    const toContinue = () => {
        router.push(callbackUrl)
    }
    const user = useSession()
    return (
        <UpdateAccountForm
            userId={user.data?.user?.id ?? ''}
            cancelButton={{onClick: toContinue, title: 'Later'}}
            submitButton={{onClick: toContinue, title: 'Continue'}}
        />
    );
};

export default NewUserAccountForm;