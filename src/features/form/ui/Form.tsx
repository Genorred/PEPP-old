import React from 'react';
import {useForm} from "react-hook-form";
import {z, ZodObject, ZodTypeAny} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
interface Props {
    fields: []
}
const a = z.object({
    
})
const Form = ({ fields}: Props) => {
    const {} = useForm({
    })
    return (
        <form>
            
        </form>
    );
};

export default Form;