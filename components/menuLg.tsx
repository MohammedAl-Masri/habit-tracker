import Link from "next/link"
import { logoutAction } from "@/lib/action"
import { LogOutIcon } from "lucide-react"


const MenuLg = () => {
    return (
        <div>
            <ul className="flex gap-5 text-[20px] font-bold">
                    <li className="hover:scale-120 hover:text-gray-300 transition">
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li className="hover:scale-120 hover:text-gray-300 transition">
                        <Link href={'/dashboard'}>Dashboard</Link>
                    </li>
                    <li className="hover:scale-120 hover:text-gray-300 transition">
                        <Link href={'/stats'}>Stats</Link>
                    </li>
                    <li className="hover:scale-120 hover:text-gray-300 transition"> 
                        <Link href={'/login'}>LogIn</Link>
                    </li>
                    <li className="hover:scale-120 hover:text-gray-300 transition">
                        <Link href={'/register'}>SignIn</Link>
                    </li>
                    <li className="hover:scale-120 hover:text-red-900 transition">
                        <form action={logoutAction}>
                            <button type="submit"><LogOutIcon className="text-text hover:text-red-900
                            mt-1"/></button>
                        </form>
                    </li>
                </ul>
        </div>
    )
}

export default MenuLg