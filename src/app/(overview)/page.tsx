'use client'
import Image from "next/image";
// Import Swiper styles
import Introduction from "../components/introduction";
import Welcome from "../components/welcome";
import Services from "../components/services";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-8 mt-4 sm:mt-16 p-4">
      <Image src={'/next.svg'} width={100} height={100} alt="Next.js Logo"  className="block sm:hidden"/>
      <Welcome/>
      <Introduction/>
      <Services/>
    </main>
  )
}
