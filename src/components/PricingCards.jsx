import React from 'react'
import { Link } from 'react-router-dom'

const PricingCards = () => {
  return (
    <div className='w-full py-24 px-4 '>
      <div className='max-w-[1140px] grid md:grid-cols-3 gap-[40px] text-center m-auto'>
        <div className='text-white border-solid border-[1px] hover:bg-[#141414] p-4'>
          <h3 className='text-[1.4rem] p-4 font-bold'>- Basic -</h3>
          <span className='border-b-2 w-[10%] my-6 mx-auto block'></span>
          <p className='text-[4rem] font-semibold p-4'>1 BTC</p>
          <p className='py-4 text-[1.2rem]'>- 3 Days -</p>
          <p className='py-4 text-[1.2rem]'>- Views -</p>
          <p className='py-4 text-[1.2rem]'>- Featured -</p>
          <p className='py-4 text-[1.2rem]'>- Private Quarters -</p>
          <Link to='/contact' className='btn block w-[80%] mx-auto my-8'>
            Book
          </Link>
        </div>
        <div className='text-white border-solid border-[1px] hover:bg-[#141414] p-4'>
          <h3 className='text-[1.4rem] p-4 font-bold'>- Basic -</h3>
          <span className='border-b-2 w-[10%] my-6 mx-auto block'></span>
          <p className='text-[4rem] font-semibold p-4'>2 BTC</p>
          <p className='py-4 text-[1.2rem]'>- 3 Days -</p>
          <p className='py-4 text-[1.2rem]'>- Views -</p>
          <p className='py-4 text-[1.2rem]'>- Featured -</p>
          <p className='py-4 text-[1.2rem]'>- Private Quarters -</p>
          <Link to='/contact' className='btn block w-[80%] mx-auto my-8'>
            Book
          </Link>
        </div>
        <div className='text-white border-solid border-[1px] hover:bg-[#141414] p-4'>
          <h3 className='text-[1.4rem] p-4 font-bold'>- Basic -</h3>
          <span className='border-b-2 w-[10%] my-6 mx-auto block'></span>
          <p className='text-[4rem] font-semibold p-4'>5 BTC</p>
          <p className='py-4 text-[1.2rem]'>- 5 Days -</p>
          <p className='py-4 text-[1.2rem]'>- Views -</p>
          <p className='py-4 text-[1.2rem]'>- Featured -</p>
          <p className='py-4 text-[1.2rem]'>- Private Quarters -</p>
          <Link to='/contact' className='btn block w-[80%] mx-auto my-8'>
            Book
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PricingCards