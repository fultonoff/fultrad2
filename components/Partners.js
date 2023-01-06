import React from 'react'
import Title from './Title';
import {
  DiAngularSimple,
  DiAtom,
  DiNodejsSmall,
  DiGithubBadge,
  DiJsBadge,
  DiNpm,
  DiSass,
  DiReact,
} from "react-icons/di";

function Partners() {
  return (
    <section className="w-full bg-[#24272D]/10 dark:bg-Black py-20 ">
      <div className="maxW mx-auto mb-[60px]">
        <div>
          <Title title="Partners" description="Exchange Connectors" />
        </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 ">
          <div className='duration-200 cursor-pointer group hover:translate-y-2 className=" shadow-2xl -inset-1 dark:bg-gradient-to-br from-White/10 rounded-xl to-Bg md:order-1 p-[24px] border border-LightDark/20 flex items-center justify-center'>
            <DiAngularSimple className="text-7xl text-primary" />
          </div>
          <div className='duration-200 cursor-pointer group hover:translate-y-2 className=" shadow-2xl -inset-1 dark:bg-gradient-to-br from-White/10 rounded-xl to-Bg md:order-1 p-[24px] border border-LightDark/20 flex items-center justify-center'>
            <DiAtom className="text-7xl text-Blue" />
          </div>
          <div className='duration-200 cursor-pointer group hover:translate-y-2 className=" shadow-2xl -inset-1 dark:bg-gradient-to-br from-White/10 rounded-xl to-Bg md:order-1 p-[24px] border border-LightDark/20 flex items-center justify-center'>
            <DiNodejsSmall className="text-7xl text-Green" />
          </div>
          <div className='duration-200 cursor-pointer group hover:translate-y-2 className=" shadow-2xl -inset-1 dark:bg-gradient-to-br from-White/10 rounded-xl to-Bg md:order-1 p-[24px] border border-LightDark/20 flex items-center justify-center'>
            <DiJsBadge className="text-7xl text-Yellow" />
          </div>
          <div className='duration-200 cursor-pointer group hover:translate-y-2 className=" shadow-2xl -inset-1 dark:bg-gradient-to-br from-White/10 rounded-xl to-Bg md:order-1 p-[24px] border border-LightDark/20 flex items-center justify-center'>
            <DiNpm className="text-7xl text-primary" />
          </div>
          <div className='duration-200 cursor-pointer group hover:translate-y-2 className=" shadow-2xl -inset-1 dark:bg-gradient-to-br from-White/10 rounded-xl to-Bg md:order-1 p-[24px] border border-LightDark/20 flex items-center justify-center'>
            <DiReact className="text-7xl text-Blue" />
          </div>
          <div className='duration-200 cursor-pointer group hover:translate-y-2 className=" shadow-2xl -inset-1 dark:bg-gradient-to-br from-White/10 rounded-xl to-Bg md:order-1 p-[24px] border border-LightDark/20 flex items-center justify-center'>
            <DiSass className="text-7xl text-primary" />
          </div>
          <div className='duration-200 cursor-pointer group hover:translate-y-2 className=" shadow-2xl -inset-1 dark:bg-gradient-to-br from-White/10 rounded-xl to-Bg md:order-1 p-[24px] border border-LightDark/20 flex items-center justify-center'>
            <DiGithubBadge className="text-7xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners
