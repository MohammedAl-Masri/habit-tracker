'use client'
import { registerAction } from "@/lib/action"

const RegisterPage = () => {
    return (
        <div className="min-h-[calc(100dvh-6rem)] items-center min-w-screen flex">
            <form action={registerAction} className="text-center w-50 h-70 rounded-2xl flex flex-col
                items-center gap-10 p-5 m-auto justify-between shadow-md shadow-primary 
                lg:w-80 lg:h-100">
                <div className="h-25 flex justify-between flex-col items-center lg:gap-15 lg:mt-5">
                    <input className="outline-none border-b-2 lg:py-2" name="name" type="text" placeholder="Name"/>
                    <input className="outline-none border-b-2 lg:py-2" name="email" type="text" placeholder="Email"/>
                    <input className="outline-none border-b-2 lg:py-2" name="password" type="password"
                    placeholder="Password"/>
                </div>
                <div>
                    <button className="bg-primary text-white px-4 py-2 rounded-3xl
                    hover:scale-105 transition cursor-pointer
                    lg:px-8 lg:hover:scale-115
                    " type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage