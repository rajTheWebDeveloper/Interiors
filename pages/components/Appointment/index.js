import first from '@/public/assets/first.jpg'
import second from '@/public/assets/second.jpg'
import third from '@/public/assets/third.jpg'
import appointment from '@/public/assets/appointment.jpg'
import designer from '@/public/assets/designer.jpg'
import discussion from '@/public/assets/discussion.jpg'
import movein from '@/public/assets/movein.jpg'

import Image from 'next/image'

export default function Appointment()
{
    return <main className="w-[90vw] h-auto lg:h-[60vh] max-w-[1200px] mx-auto text-white mb-[2rem]">
        <h2 className='text-3xl my-8 md:my-10'>Home Interiors Made Easy</h2>
        <p className='my-6 text-[14px] md:text-[16px]'>You book a consultation, get guided by one of the 400+ top-notch interior designers, and we take care of the rest, from start to finish. we have done it for more than 1000 homes already.</p>
        <div className="appointmentCards grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr] gap-4 gap-y-8 md:gap-6 md:gap-y-10">
            <article className="w-[100%] h-[240px] text-white bg-transparent rounded-md grid grid-rows-[1fr_5fr] shadow-white overflow-hidden">
                <div className='flex items-end py-1'>
                    <h3 className='font-normal text-2xl md:text-3xl px-2'>01</h3>
                    <p>Book an appointment</p>
                </div>
                <Image src={appointment} className='h-[100%] w-[100%] min-h-[160px] object-cover rounded-md'/>
            </article>
            <article className="w-[100%] h-[240px] text-white bg-transparent rounded-md grid grid-rows-[1fr_5fr] shadow-white overflow-hidden">
                <div className='flex items-end py-1'>
                    <h3 className='font-normal text-2xl md:text-3xl px-2'>02</h3>
                    <p>Meet our designers</p>
                </div>
                <Image src={designer} className='h-[100%] w-[100%] min-h-[160px] object-cover rounded-md'/>
            </article>
            <article className="w-[100%] h-[240px] text-white bg-transparent rounded-md grid grid-rows-[1fr_5fr] shadow-white overflow-hidden">
                <div className='flex items-end py-1'>
                    <h3 className='font-normal text-2xl md:text-3xl px-2'>03</h3>
                    <p>Personalise your designs</p>
                </div>
                <Image src={discussion} className='h-[100%] w-[100%] min-h-[160px] object-cover rounded-md'/>
            </article>
            <article className="w-[100%] h-[240px] text-white bg-transparent rounded-md grid grid-rows-[1fr_5fr] shadow-white overflow-hidden">
                <div className='flex items-end py-1'>
                    <h3 className='font-normal text-2xl md:text-3xl px-2'>04</h3>
                    <p>Move in</p>
                </div>
                <Image src={movein} className='h-[100%] w-[100%] min-h-[160px] object-cover rounded-md'/>
            </article>
        </div>
        <div className='buttons'>

        </div>
    </main>
}