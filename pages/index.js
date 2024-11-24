import Image from "next/image";
import localFont from "next/font/local";
import CarouselCard from "./components/Carousel";
import Appointment from "./components/Appointment";
import Theater from "./components/Theater";
import Footer from "./components/Footer";
import CostBanner from "./components/CostBanner";
import FAQ from "./components/FAQ";


export default function Home() {
  return (
    <div>
      <CarouselCard/>
      <CostBanner/>
      <Theater/>
      <Appointment/>
    </div>
  );
}
