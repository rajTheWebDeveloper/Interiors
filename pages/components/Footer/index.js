import { Grid, Stack } from "@mantine/core";
import logo from '@/public/assets/dlogo.png'
import Image from "next/image";

export default function Footer()
{
    const openWhatsApp = () => {
        const countryCode = '91'; 
        const phoneNumber = '9710459458'; 
        const message = `Hello Murali, I would like to get a estimate on my interior design requirement`; 
        const whatsappURL = `https://wa.me/${countryCode}${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
      };
      
    return <main className="w-[100vw] text-white h-auto py-2 pb-6 mt-24">
        <div className="container px-8">
            <h2 className="text-center text-2xl py-8">Ready To Design Your Dream Home?</h2>
            <button onClick={openWhatsApp} className="bg-white text-[#8443B3] font-semibold mx-auto py-2 px-4 rounded-md text-center flex justify-center hover:scale-105 transition-transform mb-8">Get Free Estimate</button>
            <Grid>
            <Grid.Col span={{base:12,md:4}}>
                <Image src={logo}/>
            </Grid.Col>
            <Grid.Col span={{base:12,md:4}}>
                <div className="pt-6 px-2 md:pt-8 md:py-6 md:px-6">
                    <Stack gap={7}>
                        <h2 className="font-bold text-lg text-[#8443B3] mb-4">Contact Info</h2>
                        <p>Trade Name: Murali Interiors</p>
                        <h2>Founder</h2>
                        <div className="flex gap-4">
                            <p className="text-[#8443B3]">G Murali</p>
                        </div>
                        <p>Customer care number</p>
                        <p>9710459458</p>
                    </Stack>
                </div>
            </Grid.Col>
            <Grid.Col span={{base:12,md:4}}>
                <div className="pt-6 px-2 md:pt-8 md:py-6 md:px-6">
                    <Stack gap={7}>
                        <h2 className="font-bold text-lg text-[#8443B3] mb-4">Helpful links</h2>
                        <p>FAQ</p>
                        <p>Shipping Policy</p>
                        <p>Refund Policy</p>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Contact us</p>
                    </Stack>
                </div>
            </Grid.Col>
        </Grid>
        </div>
    </main>
}