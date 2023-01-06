import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from 'next/link'
import { FiInstagram, FiGithub, FiMail } from "react-icons/fi";

function Footer() {
  const now = new Date().getFullYear();
  return (
    <section>
      <div className="flex flex-col mx-auto maxW ">
        <div className="flex flex-col justify-between px-2 py-[40px]">
          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-col ">
              <div className="text-[24px] font-Poppins font-bold ">Fultrad</div>
              <div className="text-sm flex items-center space-x-2">
                <FiMail />
                <span>Fultonsuperbe@gmail.com</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Link href="https://www.instagram.com/fulton_kilebe/">
                <FiInstagram />
              </Link>
              <Link href="https://github.com/fultonoff">
                <FiGithub />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs text-center border-t border-LightDark/10 py-[30px]">
            Copyright {now} Fultrad. All Right Reserved
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
