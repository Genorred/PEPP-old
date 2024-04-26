'use client'
import React, {JSX} from 'react';
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "~/shared/ui/Form";
import {useForm} from "react-hook-form";
import {Input} from "~/shared/ui/Input";
import {Button} from "~/shared/ui/Button";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
type ButtonType = { title: string, onClick: () => void}
interface Props {
    userId: string
    cancelButton?: ButtonType
    submitButton?: ButtonType
}
const profileResolver = z.object({
    name: z.string().min(4, {
        message: 'at least 4 charachters long'
    })
})
type TAuthResolver = z.infer<typeof profileResolver>
const UpdateAccountForm = ({ cancelButton, submitButton, userId }: Props) => {
    const form = useForm<TAuthResolver>({
        resolver: zodResolver(profileResolver)
    })
    const Submit = async (values: TAuthResolver) => {
console.log('')
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(Submit)}>
                <FormField
                    control={form.control}
                    name={'name'}
                    render={({field})=>(
                <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <Input placeholder="username" {...field} />
                    </FormControl>
                    <FormDescription>
                        You can change your username anytime, but usernames are unique.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
                )}/>
                <div className='mt-2 flex justify-between'>
                    <Button onClick={cancelButton.onClick} variant={'link'}>{cancelButton.title}</Button>
                    <Button onClick={submitButton.onClick}>{submitButton.title}</Button>
                </div>
            </form>
        </Form>
    );
};

export default UpdateAccountForm;
