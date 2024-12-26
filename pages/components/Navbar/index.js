import Image from "next/image"
import logo from '@/public/assets/dlogo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { useContext } from "react";
import { InteriorContext } from "@/context/InteriorContext";
import Link from "next/link";

export default function Navbar()
{
    const {openSidebar}=useContext(InteriorContext)
    return <main className="h-[80px] w-[100vw] text-[#8443B3]">
        <div className="flex justify-between items-center h-[100%] w-[90vw] max-w-[1200px] mx-auto">
            <article className="logo flex items-center justify-between w-[100%] md:w-auto">
                <Link href="/"><h2 className="font-bold text-xl"><Image src={logo} width={100} height={100}/></h2></Link>
                <div className="md:hidden">
                    <RxHamburgerMenu onClick={openSidebar} size={24} className="cursor-pointer"/>
                </div>
            </article>
            <ul className="hidden md:flex text-white font-semibold">
                    <li className="mx-2 cursor-pointer">Design gallery</li>
                    <li className="mx-2 cursor-pointer">Latest Projects</li>
                    <li className="mx-2 cursor-pointer">Products</li>
                    <li className="mx-2 cursor-pointer">About Us</li>
            </ul>
            <div className="enquiry hidden md:flex">
                    <button className="bg-[#8443B3] text-white py-2 px-3 md:py-2 md:px-4 rounded-md">Get Free Estimate</button>
            </div>
        </div>
    </main>
}