import React from 'react'
import Title from "./Title";
import teamImg from '../images/team.jpg'
import Image from 'next/image'

function Team() {
    const team = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <section className="mb-[80px] py-[60px]">
        <div className='maxW mx-auto '>

      <Title title="Team" description="Our team" />
        </div>
      <div className='maxW mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5'>

        {team.map((item, index)=>{

        return (
          <div key={index}>
            <div className='duration-200 cursor-pointer group hover:translate-y-2 className=" shadow-2xl -inset-1 dark:bg-gradient-to-br from-White/10 rounded-xl to-Bg md:order-1 p-[24px] border border-LightDark/20'>
              <div className="h-[98px] w-[98px] overflow-hidden shadow-lg rounded-lg">
                <Image
                  src={teamImg}
                  alt=""
                  className="h-full w-full object-cover group-hover:scale-110 duration-200"
                ></Image>
              </div>
              <h3 className="font-Poppins mt-[24px] text-[20px]  font-semibold">
                Tom Hiddleston
              </h3>
              <p className='dark:text-LightDark/30 text-Black'>Chief executive officer</p>
            </div>
          </div>
        );
        })}
        
      </div>
    </section>
  );
}

export default Team
