import Image from "next/image";
import theater from '@/public/assets/theater.png'
import lobby from '@/public/assets/lobby.png'

export default function Theater()
{
    return <main className="max-w-[1200px] w-[90vw] mx-auto">
        <div className="md:px-8">
            <h2 className="text-2xl text-white py-8">1000+ Dream Homes Delivered</h2>
            <div className="flex justify-start w-[100%] mb-10 relative">
                <Image src={theater} className="w-[100%] md:w-auto rounded-md"/>
                <aside className="w-[450px] h-[125px] bg-[#959490] text-white hidden lg:flex flex-col justify-center items-center absolute top-[50%] left-[50%] -translate-x-[0%] -translate-y-[50%] rounded-md">
                    <p className="mb-3">Gita Bharani </p>
                    <p>3BHK Home in Chennai</p>
                </aside>
            </div>
            <aside className="w-[100%] py-4 px-4 mb-6 bg-[#959490] text-white lg:hidden rounded-md">
                    <p className="mb-3">Gita Bharani </p>
                    <p>3BHK Home in Chennai</p>
                </aside>
            <div  className="flex justify-end w-[100%] mb-10 relative">
                <Image src={lobby} className="w-[100%] md:w-auto rounded-md"/>
                <aside className="w-[450px] h-[125px] bg-[#615348] text-white hidden lg:flex flex-col justify-center items-center absolute top-[50%] left-[50%] -translate-x-[100%] -translate-y-[50%] rounded-md">
                    <p className="mb-3">Revathi Murali</p>
                    <p>3BHK Home in Vellore</p>
                </aside>
            </div>
            <aside className="w-[100%] py-4 px-4 bg-[#615348] text-white lg:hidden rounded-md">
                    <p className="mb-3">Revathi Murali</p>
                    <p>3BHK Home in Vellore</p>
                </aside>
        </div>
    </main>
}