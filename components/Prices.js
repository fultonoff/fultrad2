import React from "react";
import Image from "next/image";
import {
  AiOutlineTag,
  AiOutlineTeam
} from "react-icons/ai";
import { BsLightning } from "react-icons/bs";

import { BsArrowRepeat, BsCurrencyExchange } from "react-icons/bs";



function Prices() {
  return (
    <section className=" maxW mx-auto py-10">
      <div className=" flex w-full flex-col  md:flex-row  overflow-hidden space-y-4 md:space-y-0 md:space-x-3 md:px-2">
        
          <div className="shadow-lg  flex md:flex-col-reverse mx-auto justify-between  bg-gradient-to-br from-[#FF5E00]  via-[#F54562] to-[#C32DE1] dark:bg-card rounded-[14px] p-10 md:p-3 lg:p-5 w-[80%] md:w-full ">
            <div className=" flex flex-col">
              <h1 className="text-[30px] md:text-[20px] font-bold text-White ">
                0.00041328
              </h1>
              <p className="text-White">Value</p>
            </div>
            <div className=" bg-white bg-Light h-10 w-10 md:h-6 md:w-6 text-white flex justify-center items-center rounded-md">
              <AiOutlineTag className="fill-[#F54562] bg-Light" />
            </div>
          </div>


        <div className="shadow-lg flex md:flex-col-reverse mx-auto justify-between  bg-gradient-to-br from-[#FFAB00]  via-[#FF5E00] to-[#F54562] dark:bg-card rounded-[14px] p-10 md:p-3 lg:p-5 w-[80%] md:w-full">
          <div className=" flex flex-col">
            <h1 className="text-[30px] md:text-[20px] font-bold text-White ">
              0.00041328
            </h1>
            <p className="text-White">Value</p>
          </div>
          <div className=" bg-white bg-Light h-10 w-10 md:h-6 md:w-6 text-white flex justify-center items-center rounded-md">
            <AiOutlineTeam className="fill-[#FF5E00] bg-Light" />
          </div>
        </div>

        <div className="shadow-lg flex md:flex-col-reverse mx-auto justify-between  bg-gradient-to-br from-[#EEFF00]  via-[#FFAA00] to-[#FF5E00] dark:bg-card rounded-[14px] p-10 md:p-3 lg:p-5 w-[80%] md:w-full">
          <div className=" flex flex-col">
            <h1 className="text-[30px] md:text-[20px] font-bold text-White ">
              0.00041328
            </h1>
            <p className="text-White">Value</p>
          </div>
          <div className=" bg-white bg-Light h-10 w-10 md:h-6 md:w-6 text-white flex justify-center items-center rounded-md">
            <BsLightning className="fill-[#FFAB00] bg-Light" />
          </div>
        </div>

        <div className="shadow-lg flex md:flex-col-reverse mx-auto justify-between  bg-gradient-to-br from-[#00FFAA]  via-[#00BBFF] to-[#4579F5] dark:bg-card rounded-[14px] p-10 md:p-3 lg:p-5 w-[80%] md:w-full">
          <div className=" flex flex-col">
            <h1 className="text-[30px] md:text-[20px] font-bold text-White ">
              0.00041328
            </h1>
            <p className="text-White">Value</p>
          </div>
          <div className=" bg-white bg-Light h-10 w-10 md:h-6 md:w-6 text-white flex justify-center items-center rounded-md">
            <BsArrowRepeat className="fill-[#00FFAA] bg-Light" />
          </div>
        </div>

        <div className="shadow-lg flex md:flex-col-reverse mx-auto justify-between  bg-gradient-to-br from-[#00BBFF]  via-[#4579F5] to-[#5D2DE1] dark:bg-card rounded-[14px] p-10 md:p-3 lg:p-5 w-[80%] md:w-full">
          <div className=" flex flex-col">
            <h1 className="text-[30px] md:text-[20px] font-bold text-White ">
              0.00041328
            </h1>
            <p className="text-White">Value</p>
          </div>
          <div className=" bg-white bg-Light h-10 w-10 md:h-6 md:w-6 text-white flex justify-center items-center rounded-md">
            <BsCurrencyExchange className="fill-[#4579F5] bg-Light" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prices;
