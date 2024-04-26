import {useSearchParams} from "next/navigation";
import {signIn} from "next-auth/react";
import {useMutation} from "@tanstack/react-query";

export function useGoogleSignIn() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const oauthSignInMutation = useMutation({
        mutationFn: () =>
            signIn("google", {
                callbackUrl: callbackUrl ?? undefined,
            }),
    });

    return {
        isPending: oauthSignInMutation.isPending,
        signIn: oauthSignInMutation.mutate,
    };
}