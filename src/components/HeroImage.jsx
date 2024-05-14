import React from "react";
import galaxy from "../assets/galaxy.jpg";

const HeroImage = ({ heading, text }) => {
  return (
    <div>
      <img
        src={galaxy}
        alt='galaxy img'
        className='relative w-full h-[80vh] object-cover z-[-1] bg-black/30'
      />
      <div className=' absolute w-full mx-auto top-[40vh] flex flex-col justify-center items-center'>
        <h1 className='text-[2.4rem] font-bold max-sm:text-[2rem] text-white'>
          {heading}
        </h1>
        <p className='text-[1.4rem] font-semibold text-white'>{text}</p>
      </div>
    </div>
  );
};

export default HeroImage;
