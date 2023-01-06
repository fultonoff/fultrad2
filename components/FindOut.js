import React from "react";
import Image from "next/image";
import img from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import Link from "next/link";
import LaunchBtn from "./LaunchBtn";

function FindOut() {
  return (
    <section className="w-full "  >
      <div className="flex   bg-[#24272D]/10 dark:bg-Black py-10">
        <div className="flex flex-col-reverse md:flex-row p-4 w-full md:space-x-5  maxW mx-auto">
          <div className="md:w-1/2 overflow-hidden rounded-xl">
            <Image src={img} alt="" className="w-full h-full shadow-lg" />
          </div>

          <div className="mb-10 flex flex-col space-y-5 md:w-1/2 self-center">
            <Link
              href="/"
              className="text-primary text-[13px] bg-primary/20 py-2 px-3 rounded-full font-semibold w-fit"
            >
              Find more
            </Link>
            <h1 className="text-3xl font-Poppins font-bold lg:text-[36px]">
              What is market making bot?
            </h1>
            <p className="leading-[24px] text-[14px] lg:text-[16px] font-Poppins font-semibold dark:text-[#E0E0FF]/60 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus Lorem
              ipsum dolor sit amet
            </p>
            <div className="py-5 w-fit ">
              <LaunchBtn className="w-fit" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex   bg-[#24272D]/10  py-10">
        <div className="flex flex-col md:flex-row p-4 w-full md:space-x-5  maxW mx-auto">

          <div className="mb-10 flex flex-col space-y-5 md:w-1/2 self-center">
            <Link
              href="/"
              className="text-primary text-[13px] bg-primary/20 py-2 px-3 rounded-full font-semibold w-fit"
            >
              Find more
            </Link>
            <h1 className="text-3xl font-Poppins font-bold lg:text-[36px]">
              What is market making bot?
            </h1>
            <p className="leading-[24px] text-[14px] lg:text-[16px] font-Poppins font-semibold dark:text-[#E0E0FF]/60 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus Lorem
              ipsum dolor sit amet
            </p>
            <div className="py-5 w-fit ">
              <LaunchBtn className="w-fit" />
            </div>
          </div>

          <div className="md:w-1/2 overflow-hidden rounded-xl">
            <Image src={img2} alt="" className="w-full h-full shadow-lg" />
          </div>
          
        </div>
      </div>

      <div></div>
    </section>
  );
}

export default FindOut;
