import { InteriorContext } from "@/context/InteriorContext"
import { useContext } from "react"
import { FaTimes } from "react-icons/fa";



export default function Sidebar()
{
    const {isSidebarOpen,closeSidebar}=useContext(InteriorContext)
    return <main className={`bg-[#8443B3] w-[100%] h-[100%] max-w-[500px] absolute z-10 top-0 left-0 text-white transition-transform ${isSidebarOpen?'translate-x-[100%])':'translate-x-[-100%]'} md:hidden`}>
        <div className="px-5 py-2 grid grid-rows-[80px_5fr_70px] h-[100%]">
            <header className="flex justify-between items-center w-[100%]">
                <h2 className="font-bold text-xl">Shaji Interior</h2>
                <div className="">
                    <FaTimes onClick={closeSidebar} size={22} className="cursor-pointer"/>
                </div>
            </header>
            <ul className="">
                <li className="my-4 cursor-pointer">Design gallery</li>
                <li className="my-4 cursor-pointer">Recent Projects</li>
                <li className="my-4 cursor-pointer">Products</li>
                <li className="my-4 cursor-pointer">About Us</li>
            </ul>
            <div className="flex items-center">
                <button className="bg-white text-[#8443B3] py-2 px-3 rounded-md">Get Free Estimate</button>
            </div>  
        </div>
    </main>
}