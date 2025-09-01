import type { ReactNode } from "react"
import Image from 'next/image';
import ButtonLogoff from "@/components/ButtonLogoff";
import Link from "next/link";

type Props = {
    children:ReactNode
}

const Layout = ({ children }:Props) => {
    return(
        <div>
            <header className="py-2 bg-yellow-300 w-screen px-36">
                <nav className="flex justify-around">
                    <ul className="flex justify-around p-5 gap-32 font-semibold text-black text-2xl">
                        <li><Link href={"/system/computers"}>Computadores</Link></li>
                        <li><Link href="#">Impressoras</Link></li>
                        <li><Link href={"/system/users"}>Usuários</Link></li>
                    </ul>
                    <Image
                        src={"/images/default.jpg"}
                        width={50}
                        height={50}
                        alt="Perfil"
                        className="rounded-full object-cover"
                    />
                </nav>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;