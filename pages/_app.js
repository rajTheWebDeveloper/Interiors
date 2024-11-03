import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { InteriorProvider } from "@/context/InteriorContext";
import Footer from "./components/Footer";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';


export default function App({ Component, pageProps }) {
  return (
 <MantineProvider>
    <InteriorProvider>
      <Navbar/>
      <Sidebar/>
      <Component {...pageProps} />
      <Footer/>
    </InteriorProvider>
 </MantineProvider>
);
}
