import React from 'react'

function Title({title, description}) {
  return (
    <div className="flex flex-col items-start md:items-center maxW px-10">
      <div className="text-primary text-[13px] bg-primary/20 py-2 px-3 rounded-full font-semibold w-fit  font-Poppins my-[16px]">
        {title}
      </div>

      <h1 className="text-center font-Poppins font-bold text-2xl md:text-[36px] text-Bg dark:text-White mb-10">
        {description}
      </h1>
    </div>
  );
}

export default Title
