"use client";

import { authClient } from "@/lib/auth-client";
import { Check, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { Eye, Icon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";


const SingUpFrom = () => {

    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault()
        const fromData = new FormData(event.target)
        const userData = Object.fromEntries(fromData.entries())

        const { email, name,image, password } = userData ;

           const { data, error } = await authClient.signUp.email({
        email:email , // user email address
        password:password, // user password -> min 8 characters by default
        name:name, // user display name
        image:image, // User image URL (optional)
        callbackURL: "/" // A URL to redirect to after the user verifies their email (optional)
    })

    if(data){
        toast.success('Successfully Sing Up ')
    }

    if(error){
        toast.error(`${error.message}`)
    }



    }


    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-[20%] bg-gray-50 p-4 py-20">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-serif mb-2">Create Account</h1>
                    <p className="text-gray-500">Start your adventure with Wanderlust</p>
                </div>

                {/* Form Container */}
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm border border-gray-100 ">
                    <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4" >
                        {/* name  */}
                        <TextField
                            isRequired
                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Name</Label>
                            <Input placeholder="Enter your name" />
                            <FieldError />
                        </TextField>

                        {/* image url  */}
                        <TextField
                            name="image"
                            type="url"
                        >
                            <Label>Image URL</Label>
                            <Input placeholder="Image url" />
                            <FieldError />
                        </TextField>



                        {/* email  */}
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label>Email</Label>
                            <Input placeholder="Enter your email address" />
                            <FieldError />
                        </TextField>


                        {/* password  */}
                        <TextField className="w-full max-w-full" name="password">
                            <Label>Password</Label>
                            <InputGroup>
                                <InputGroup.Input
                                    className="w-full max-w-full"
                                    type={isVisible ? "text" : "password"}

                                />
                                <InputGroup.Suffix className="pr-0">
                                    <Button
                                        isIconOnly
                                        aria-label={isVisible ? "Hide password" : "Show password"}
                                        size="sm"
                                        variant="ghost"
                                        onPress={() => setIsVisible(!isVisible)}
                                    >
                                        {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                    </Button>
                                </InputGroup.Suffix>
                            </InputGroup>
                        </TextField>

                        {/* Submit  */}
                        <div className="flex gap-2">
                            <Button type="submit" className='w-full  rounded-xs'>
                                <Check />
                                Create Account
                            </Button>
                        </div>
                    </Form>

                    <div>
                        <div className="border-2 w-full my-5 "> </div>
                    </div>
                    {/* Google  */}
                    <div className="">
                        <button className="flex items-center justify-center gap-3 border
                      shadow p-3 w-full "><FaGoogle /> Sing in with google</button>
                    </div>

                    <div>
                        <p className="text-center my-2 ">Already have an account? <span > <Link href={'/login'} className="text-cyan-500"> Log In</Link>  </span></p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SingUpFrom;