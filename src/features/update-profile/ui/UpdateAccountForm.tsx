'use client'
import React, {JSX} from 'react';
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "~/shared/ui/Form";
import {useForm} from "react-hook-form";
import {Input} from "~/shared/ui/Input";
import {Button} from "~/shared/ui/Button";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";

interface Props {
    userId: string
    callbackUrl?: string
    cancelButtonName: string
    submitButtonName: string
}

const profileResolver = z.object({
    name: z.string().min(4, {
        message: 'at least 4 charachters long'
    })
})
type TAuthResolver = z.infer<typeof profileResolver>
const UpdateAccountForm = ({callbackUrl, userId, cancelButtonName, submitButtonName}: Props) => {
    const form = useForm<TAuthResolver>({
        resolver: zodResolver(profileResolver)
    })
    const router = useRouter()
    const Submit = async (values: TAuthResolver) => {
        console.log(callbackUrl)
        if (callbackUrl)
            router.push(callbackUrl)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(Submit)}>
                <FormField
                    control={form.control}
                    name={'name'}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="username" {...field} />
                            </FormControl>
                            <FormDescription>
                                You can change your username anytime, but usernames are unique.
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}/>
                <div className='mt-2 flex justify-between'>
                    <Button variant={'link'} type="submit">
                        {cancelButtonName}
                    </Button>
                    <Button type="submit">
                        {submitButtonName}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default UpdateAccountForm;
