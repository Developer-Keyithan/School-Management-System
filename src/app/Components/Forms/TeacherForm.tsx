'use client'

import { z } from "zod";

const schema = z.object({
    userName: z
        .string()
        .min(3, { message: 'User name must be at least 3 characters long!' })
        .max(20, { message: 'User name must be at least 3 characters long!' }),
    email: z.string().email({message: 'Invalid email address!'}),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long!' }),
    firstName: z.string().min(8, { message: 'First name is required!' }),
    lastName: z.string().min(8, { message: 'Last name is required!' }),
    phone: z.string().min(8, { message: 'Phone number is required!' }),
    address: z.string().min(8, { message: 'Address is required!' }),
    birthDay: z.date({ message: 'Birthday is required!' })
});

const TeacherForm = ({
    type,
    data
}: {
    type: "create" | "update";
    data?: any
}) => {
    return (
        <form className="">
            <input type="text" defaultValue={data} />
        </form>
    )
}

export default TeacherForm