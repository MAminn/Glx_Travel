import React from 'react'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full py-20 px-8 text-white bg-black/80'>
      <div className=' max-w-[1140px] grid md:grid-cols-2 gap-20 m-auto'>
        <div className='flex flex-col gap-8 '>
          <div className='flex items-center gap-8'>
            <FaSearchLocation size={20} />
            <div className='flex flex-col gap-2'>
              <p className='text-[1.2rem]'>123 Acme St.</p>
              <h4 className='text-[1.4rem] font-semibold'>Houston, TX</h4>
            </div>
          </div>
          <div className='flex items-center gap-8'>
            <FaPhone size={20} />
            <h4 className='text-[1.4rem] py-4 font-semibold'>
              +1 800-944-1234
            </h4>
          </div>
          <div className='flex items-center gap-8'>
            <FaMailBulk size={20} />
            <h4 className='text-[1.4rem] py-4 font-semibold'>
              trips@galaxy.com
            </h4>
          </div>
        </div>
        <div>
          <div className='max-sm:flex max-sm:flex-col max-sm:text-center'>
            <h3 className='text-[1.4rem] font-semibold'>About the company</h3>
            <p className='mt-8 text-[1.2rem]'>
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores fugit dolorum a doloribus quasi tenetur excepturi,
              exercitationem quam sunt quibusdam commodi corporis atque ex
              laudantium! Magni dolor vel"
            </p>
          </div>
          <div className='flex gap-4 mt-5 w-full max-sm:justify-center max-sm:gap-6'>
            <FaFacebook size={30} />
            <FaTwitter size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer