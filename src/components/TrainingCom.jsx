import React from 'react'
import astronut from "../assets/astronut.jpg";
import spaceship from "../assets/spaceship.jpg"
import { Link } from 'react-router-dom'

const TrainingCom = () => {
  return (
    <div className='w-full my-12 h-full grid md:grid-cols-2 mx-auto px-6'>
      <div className='text-white text-center m-auto py-4 px-12 max-w-[600px]'>
        <h1 className='text-[2.4rem] font-bold max-sm:text-[2rem]'>Training</h1>
        <p className='my-6 text-[1.2rem]'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          perspiciatis minus saepe, nobis asperiores atque aut tenetur assumenda
          error consectetur, eius quis sint, dicta consequatur quam architecto
          animi fugit repudiandae.
        </p>
        <Link to='/contact'>
          <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className=' grid md:grid-cols-12 relative items-center text-center'>
        <div className=' col-start-1 col-end-8 pt-[40%]  z-[6] row-start-1'>
          <img
            src={astronut}
            alt='Man on the moon'
            className='max-w-[60%] border-[1px] border-[#333] m-auto'
          />
        </div>
        <div className=' col-start-4 col-end-[-1] z-[5] row-start-1'>
          <img
            src={spaceship}
            alt='space ship'
            className='max-w-[60%] border-[1px] border-[#333]'
          />
        </div>
      </div>
    </div>
  );
}

export default TrainingCom