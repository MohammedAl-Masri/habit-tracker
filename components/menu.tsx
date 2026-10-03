'use client'

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { logoutAction } from "@/lib/action"

const MenuNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    function closeMenu(){
        if(isOpen){
            return setIsOpen(false)
        }
    }

    return (
        <div>
            <div onClick={()=>setIsOpen(prev => !prev)}><button>{isOpen? <X/> : <Menu/>}</button></div>
            <div>
                {isOpen? (
                <ul className="absolute inset-x-65 top-16 bg-primary text-text w-30 text-center
                    py-4 rounded-2xl opacity-100 translate-y-0 transition-opacity cursor-pointer
                    before:content-['^'] before:absolute before:top-[-14] before:right-[10]
                    before:text-lg before:text-primary ">
                    <li>
                        <Link onClick={closeMenu} href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} href={'/dashboard'}>Dashboard</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} href={'/stats'}>Stats</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} href={'/login'}>Login</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} href={'/register'}>Signin</Link>
                    </li>
                    <li>
                        <form action={logoutAction}>
                            <button type="submit">Log out</button>
                        </form>
                    </li>
                </ul>
            ) : <ul className="absolute inset-x-65 top-16 opacity-0
                                translate-y-2.5 transition-opacity pointer-events-none"></ul>}</div>
        </div>
    )
}

export default MenuNav