import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import id1 from '@/public/assets/id1.jpg'
import id2 from '@/public/assets/id2.jpg'
import id4 from '@/public/assets/id4.jpg'
import Image from 'next/image';
import { useEffect, useState } from 'react';


export default function CarouselCard()
{
    const [carouselHeight, setCarouselHeight] = useState(230);
    useEffect(() => {
      const updateHeight = () => {
          setCarouselHeight(window.innerWidth > 1024 ? 600 : 230);
      };

      updateHeight();

      window.addEventListener('resize', updateHeight);

      return () => window.removeEventListener('resize', updateHeight);
  }, []);
    return <main className='w-[90vw] max-w-[1200px] mx-auto'>
        <Carousel loop height={carouselHeight} style={{borderRadius:"2px",overflow:"hidden"}}>
          <Carousel.Slide style={{width:"100%"}}>
            <Image src={id2} className='w-[100%] h-[100%] object-cover'/>
          </Carousel.Slide>
          <Carousel.Slide style={{width:"100%"}}>
            <Image src={id1} className='w-[100%] h-[100%] object-cover'/>
          </Carousel.Slide>
          <Carousel.Slide style={{width:"100%"}}>
            <Image src={id4} className='w-[100%] h-[100%] object-cover'/>
          </Carousel.Slide>
        </Carousel>
    </main>
}