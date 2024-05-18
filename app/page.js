

import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/herosection/HeroSection";
import Image from "next/image";
import BentoGrid from "@/components/bento-grid/BentoGrid";

export default function Home() {
  return (
   <>
   <Navbar/>
   <HeroSection/>
   <BentoGrid/>
   </>
   
  );
}
