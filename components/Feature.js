import React from "react";
import Image from 'next/image'
import img from '../images/hero-img2.png'
import Link from 'next/link'
import { IoIosArrowRoundForward } from "react-icons/io";
import Title from "./Title";

function Feature() {
  return (
    <section className=" w-full bg-White dark:bg-Black py-[72px]">
      <div className="maxW mx-auto my-20  ">

        <Title title='Feature' description='Some of the best features'/>

        {/* group */}
        <div className="flex flex-col md:flex-row  px-10 space-y-5 md:space-y-0 space-x-0 md:space-x-5">
          {/* El 1 */}
          <div className="order-1 flex flex-col space-y-5">
            <div className=" shadow-2xl -inset-1 dark:bg-gradient-to-br from-White/10 rounded-xl to-Bg md:order-1 p-[24px] border border-LightDark/20">
              <div>
                <h3 className="font-semibold text-3xl md:text-[24px] font-Poppins mb-5">
                  Multiswap
                </h3>
                <p className="text-[16px] md:text-[14px] font-medium md:font-normal font-Poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod
                </p>
              </div>
            </div>
            <div className=" shadow-2xl -inset-1 dark:bg-gradient-to-br from-White/10 rounded-xl to-Bg md:order-1 p-[24px] border border-LightDark/20">
              <div>
                <h3 className="font-semibold text-3xl md:text-[24px] font-Poppins mb-5">
                  Multiswap
                </h3>
                <p className="text-[16px] md:text-[14px] font-medium md:font-normal font-Poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod
                </p>
              </div>
            </div>
            <div className=" shadow-2xl -inset-1 dark:bg-gradient-to-br from-White/10 rounded-xl to-Bg md:order-1 p-[24px] border border-LightDark/20">
              <div>
                <h3 className="font-semibold text-3xl md:text-[24px] font-Poppins mb-5">
                  Multiswap
                </h3>
                <p className="text-[16px] md:text-[14px] font-medium md:font-normal font-Poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod
                </p>
              </div>
            </div>
          </div>

          {/* El 2 */}

          <div className="order-3 -inset-1 dark:bg-gradient-to-br from-White/10 rounded-xl to-Bg md:order-2 p-[24px] border border-LightDark/20 shadow-2xl">
            <Image src={img} alt=""></Image>
            <h2 className="font-bold font-Poppins text-3xl text-center md:text-[36px] mt-[30px] text-Black dark:text-White">
              Fultrad.
            </h2>
            <p className="text-[16px] md:text-[14px] font-medium md:font-normal text-center font-Poppins mt-[20px]">
              Earn passive income by running your own high-frequency market
              making bot
            </p>
            <div className="mx-auto mt-[35px] flex justify-center">

            <Link href="/" className="flex items-center space-x-3  w-fit">
              <span className="text-primary">view all features</span>
              <IoIosArrowRoundForward className="fill-primary"/>
            </Link>

            </div>
          </div>

          {/* El 3 */}

          <div className="order-2  md:order-3 flex flex-col space-y-5">
            <div className=" shadow-2xl -inset-1 dark:bg-gradient-to-br from-White/10 rounded-xl to-Bg md:order-1 p-[24px] border border-LightDark/20">
              <div>
                <h3 className="font-semibold text-3xl md:text-[24px] font-Poppins mb-5">
                  Multiswap
                </h3>
                <p className="text-[16px] md:text-[14px] font-medium md:font-normal font-Poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod
                </p>
              </div>
            </div>
            <div className=" shadow-2xl -inset-1  dark:bg-gradient-to-br from-White/10 rounded-xl to-Bg md:order-1 p-[24px] border border-LightDark/20">
              <div>
                <h3 className="font-semibold text-3xl md:text-[24px] font-Poppins mb-5">
                  Multiswap
                </h3>
                <p className="text-[16px] md:text-[14px] font-medium md:font-normal font-Poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod
                </p>
              </div>
            </div>
            <div className=" shadow-2xl -inset-1 dark:bg-gradient-to-br from-White/10 rounded-xl to-Bg md:order-1 p-[24px] border border-LightDark/20">
              <div>
                <h3 className="font-semibold text-3xl md:text-[24px] font-Poppins mb-5">
                  Multiswap
                </h3>
                <p className="text-[16px] md:text-[14px] font-medium md:font-normal font-Poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
