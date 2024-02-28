'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LuAlertTriangle, LuEye, LuEyeOff } from "react-icons/lu";

type Inputs = {
    email: string;
    password: string;
};

const SignIn = () => {
    const [show, setShow] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const router = useRouter()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (data) {
            toast.success("Login successful!")
            router.push('/dashboard');
        } else {
            toast.error("Login Unsuccessful!")
        }
    }

    return (
        <div className='flex'>
            <img className="w-2/5" src="/sign-up.png" alt="Sign up image" />
            <div className='w-3/5 lg:px-20 2xl:px-24 lg:py-32 2xl:py-36'>
                <h2 className="text-2xl font-semibold text-primary">Sign In</h2>
                <p className="lg:pt-4 2xl:pt-5 text-sm lg:text-base text-[#5C5D5E]">Sign in with your valid account information</p>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 lg:pt-8 2xl:pt-12 max-w-[435px]">

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className="cursor-pointer">Email</label>
                        <input id="email" className="px-4 py-3 rounded-[10px] shadow-sm border border-[#E6E6E7]" placeholder="e.g. demo@gmail.com" {...register("email", { required: true })} />
                        {errors.email && <div className='px-2 py-1.5 flex gap-2 rounded border bg-[#FFF2E2] border-[#F87034] '>
                            <LuAlertTriangle className="text-[#F87034]" />
                            <p className="text-primary text-xs">The email and password you entered doesn’t match our records. Please double-check and try again.</p>
                        </div>}
                    </div>

                    <div className=' flex flex-col gap-1'>
                        <label htmlFor="password" className="cursor-pointer">Password</label>
                        <div className='relative w-full'>
                            <input type={show ? "text" : "password"} id="password" className="px-4 py-3 w-full rounded-[10px] shadow-sm border border-[#E6E6E7]" placeholder="e.g.***********" {...register("password", { required: true })} />
                            {
                                show ?
                                    <LuEyeOff onClick={() => setShow(prev => !prev)} className="absolute right-3 top-[30%] cursor-pointer text-[#BABABA] text-2xl" />
                                    :
                                    <LuEye onClick={() => setShow(prev => !prev)} className="absolute right-3 top-[30%] cursor-pointer text-[#BABABA] text-2xl" />
                            }
                        </div>
                        {errors.email && <div className='px-2 py-1.5 flex gap-2 rounded border bg-[#FFF2E2] border-[#F87034] '>
                            <LuAlertTriangle className="text-[#F87034]" />
                            <p className="text-primary text-xs">The email and password you entered doesn’t match our records. Please double-check and try again.</p>
                        </div>}
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2'>
                            <input type="checkbox" id="policy" className="" />
                            <label htmlFor="policy" className="text-sm cursor-pointer font-medium text-[#75777a]">Remember me</label>
                        </div>
                        <Link href={'/'} className="text-primary underline">Forgot Password</Link>
                    </div>
                    <input className="w-full bg-primary hover:bg-blue-600 cursor-pointer text-white font-semibold rounded-lg p-2 mt-4" value={'Sign In'} type="submit" />
                </form>

                <div className='text-center pt-10 font-medium text-textSecondary  max-w-[435px]'>
                    Don’t have an account?   <Link href={'/'} className="text-primary font-semibold"> Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;