import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import heroImg from "/images/hero-img.png";
import {motion} from 'framer-motion'

function Hero() {
  return (
    <motion.section
    
    initial={{
      opacity:0,
      x:-200
    }}
    animate={{
      opacity:1,
      x:0
    }}
    transition={{
      duration:1.2
    }}
    
    className="maxW mx-auto  flex flex-col md:flex-row items-center  justify-center py-[32px] px-2 pt-10">
      <div className="flex flex-col md:w-[50%]  text-center md:text-left text-[30px] md:text-[40px] lg:text-[60px] font-bold font-Poppins ">
        <h1 className=" ">Decentralized</h1>
        <span className="mb-[32px] md:mb-[20px]">market making</span>
        <p className="font-medium text-[14px] mb-[32px] md:mb-[40px] lg:text-[28px] font-Poppins dark:text-[#E0E0FF]">
          Earn passive income by running your own high-frequency market making
          bot
        </p>

        <div className="flex md:ml-0 mx-auto relative items-center  font-Poppins font-semibold text-[16px] md:text-[18px] gradOrange w-fit  rounded-[12px]">
          <div className="bg-primary absolute inset-0 blur-lg"></div>
          <Link href="/" className="relative text-White py-4 px-4">
            View pricing plans
            <IoIosArrowRoundForward className="text-xl relative text-White inline-block" />
          </Link>{" "}
        </div>
      </div>
      <div className="md:w-[50%] flex  justify-start">
        <Image src={heroImg} alt="" className=""></Image>
      </div>
    </motion.section>
  );
}

export default Hero;
