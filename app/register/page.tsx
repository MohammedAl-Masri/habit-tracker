'use client'
import { registerAction } from "@/lib/action"

const RegisterPage = () => {
    return (
        <div>
            <form action={registerAction}>
                <input name="name" type="text" placeholder="Name"/>
                <input name="email" type="text" placeholder="Email"/>
                <input name="password" type="password" placeholder="Password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RegisterPage