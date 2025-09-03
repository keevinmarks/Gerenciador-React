import type { ReactNode } from "react"
import Image from 'next/image';
import ButtonLogoff from "@/components/ButtonLogoff";
import Link from "next/link";
import ComputerIcon from "@/img/icons/computer.svg";

type Props = {
    children:ReactNode
}

const Layout = ({ children }:Props) => {
    return(
        <div>
            <header className="py-2 bg-yellow-200 w-screen px-36">
                <nav className="flex justify-around">
                    <ul className="flex justify-around p-5 gap-32 font-semibold text-black text-2xl">
                        <li><ComputerIcon/><Link href={"/system/computers"} className="hover:text-gray-500 transition-all duration-300">Computadores</Link></li>
                        <li><Link href="#" className="hover:text-gray-500 transition-all duration-300">Impressoras</Link></li>
                        <li><Link href={"/system/users"} className="hover:text-gray-500 transition-all duration-300">Usuários</Link></li>
                    </ul>
                    <Image
                        src={"/images/default.jpg"}
                        width={50}
                        height={50}
                        alt="Perfil"
                        className="rounded-full object-cover"
                    />
                    <ButtonLogoff></ButtonLogoff>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;