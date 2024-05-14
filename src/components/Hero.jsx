import React from 'react'
import background from "../assets/background.mp4"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='w-full h-screen object-contain'>
      <video
        autoPlay
        loop
        muted
        className='fixed w-full h-[100%] object-cover z-[-1]'>
        <source src={background} type='video/mp4' />
      </video>
      <div className='text-center absolute m-auto w-full h-[100%] top-[40vh]'>
        <h1 className='text-[4rem] max-sm:text-[3rem]  text-white font-bold'>
          Galaxy. Travel.
        </h1>
        <p className='text-[1.8rem] max-sm:text-[1.4rem] max-sm:mb-7 font-extralight uppercase mb-6 text-white'>
          World's first civilian space travel.
        </p>

        <div className='my-4'>
          <Link to='/training' className='btn mr-[0.3rem]'>
            Training
          </Link>
          <Link to='/launch' className='btn btn-light'>
            Launch
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero