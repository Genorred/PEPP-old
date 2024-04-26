import {useSearchParams} from "next/navigation";
import {useMutation} from "@tanstack/react-query";
import {signIn} from "next-auth/react";

const useEmail = () => {
    const path = useSearchParams();
    const callbackUrl = path.get('callbackUrl') ?? undefined;
    const emailSignInMutation  = useMutation({
        mutationFn: (email: string) =>
            signIn("email", {
                email,
                callbackUrl
            })
    })
    return {
        signIn: emailSignInMutation .mutate,
        isPending: emailSignInMutation .isPending,
    }
}
export default useEmail