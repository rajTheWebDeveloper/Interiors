import Image from "next/image";
import localFont from "next/font/local";
import CarouselCard from "./components/Carousel";
import Appointment from "./components/Appointment";
import Theater from "./components/Theater";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <CarouselCard/>
      <Theater/>
      <Appointment/>
    </div>
  );
}
