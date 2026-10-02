'use client'

import { LoginAction } from "@/lib/action"

const LogInPage = () => {
    return (
        <div className="min-h-[calc(100dvh-6rem)] items-center min-w-screen flex">
                <form action={LoginAction} className="text-center w-50 h-70 rounded-2xl flex flex-col
                items-center gap-10 border-2 p-5 m-auto justify-between">
                    <div className="h-25 flex justify-between flex-col items-center">
                        <input className="outline-none border-b-2" name="email" type="text" placeholder="Email..."/>
                        <input className="outline-none border-b-2" name="password" type="password" placeholder="Password..."/>
                    </div>
                    <div>
                        <button className="bg-primary px-8 py-2 rounded-3xl" type="submit">Submit</button>
                    </div>
                </form>
        </div>
    )
}

export default LogInPage