import React, { useState } from "react";
import Link from "next/link";
import MenuDrop from "./MenuDrop";
import ToggleDark from "./ToggleDark";
import { useRouter } from "next/router";
import LaunchBtn from "./LaunchBtn";
import { IoMdClose, IoIosMenu } from "react-icons/io";


function Nav() {
  const [show, setShow] = useState(false);
  const hambergure = () => {
    setShow(!show);
  };
  return (
    <nav className="w-full border-b border-LightDark/20 sticky top-0 z-10 dark:bg-Bg bg-White">
      <div className="flex maxW mx-auto items-center px-2 justify-between">
        <div>
          <Link
            href="/"
            className="text-[24px] font-Poppins font-bold mr-10 py-10"
          >
            Fultrad
          </Link>
        </div>

        <div className="hidden md:flex justify-between w-full">
          <ul className="flex items-center space-x-2  font-Poppins ">
            <li className="py-[36px]  dark:text-LightDark hover:-translate-y-1 duration-200">
              <Link href="/about" className="py-[36px] text-[14px] " >
                About
              </Link>
            </li>
            <li className="py-[36px]  dark:text-LightDark hover:-translate-y-1 duration-200">
              <Link href="/feature" className="py-[36px] text-[14px]">
                Features
              </Link>
            </li>
            <li className="py-[36px]  dark:text-LightDark hover:-translate-y-1 duration-200">
              <Link href="/" className="py-[36px] text-[14px]">
                Our team
              </Link>
            </li>
            <li className="py-[36px]  dark:text-LightDark hover:-translate-y-1 duration-200">
              <Link href="/" className="py-[36px] text-[14px]">
                Pricing
              </Link>
            </li>
            <li className="py-[36px]  dark:text-LightDark hover:-translate-y-1 duration-200">
              <Link href="/" className="py-[36px] text-[14px]">
                Roadmap
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-2 justify-center">
            <MenuDrop />
            <ToggleDark />

            <LaunchBtn />
          </div>
        </div>
        <div className="flex items-center md:hidden" onClick={hambergure}>
          <Link
            href="/"
            className="block md:hidden text-primary font-Poppins font-semibold text-[14px] px-2"
          >
            Launch App
          </Link>
          {!show ? (
            <IoIosMenu className="text-4xl" />
          ) : (
            <IoMdClose className="text-4xl" />
          )}
        </div>
      </div>

      {/* Mobile nav */}

      {show && (
        <div className=" bg-Light dark:bg-Bg h-screen w-full flex flex-col sticky  md:hidden ">
          <div className="w-fit mt-5 ml-auto pr-3 flex space-x-3">
            <MenuDrop />
            <ToggleDark className="" />
          </div>

          <ul className="flex flex-col items-start md:items-center space-x-0 md:space-x-2  font-Poppins ml-10">
            <li className="py-5  dark:text-LightDark hover:-translate-y-1 duration-200">
              <Link href="/about" className="py-5 text-2xl">
                About
              </Link>
            </li>
            <li className="py-5  dark:text-LightDark hover:-translate-y-1 duration-200">
              <Link href="/feature" className="py-5 text-2xl">
                Features
              </Link>
            </li>
            <li className="py-5  dark:text-LightDark hover:-translate-y-1 duration-200">
              <Link href="/" className="py-5 text-2xl">
                Our team
              </Link>
            </li>
            <li className="py-5  dark:text-LightDark hover:-translate-y-1 duration-200">
              <Link href="/" className="py-5 text-2xl">
                Pricing
              </Link>
            </li>
            <li className="py-5  dark:text-LightDark hover:-translate-y-1 duration-200">
              <Link href="/" className="py-5 text-2xl">
                Roadmap
              </Link>
            </li>
          </ul>

          <div className="relative group mt-5">
            <div className="  flex absolute bg-primary -inset-0.5 blur-lg  duration-300 w-[80%] mx-auto"></div>

            <div className="flex w-full ">
              <Link
                href="/"
                className="gradOrange text-[14px] flex relative py-3 px-6 rounded-[12px] text-White  w-[80%] mx-auto"
              >
                <span className="text-center w-full font-semibold tracking-wide text-xl ">
                  Launch App
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
