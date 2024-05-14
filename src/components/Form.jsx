import React from 'react'


const Form = () => {
  return (
    <form className='text-[#eee] flex flex-col p-4 m-auto max-w-[600px]'>
      <div className='flex flex-col'>
        <label className='mb-2' htmlFor='#name'>
          Your Name
        </label>
        <input type='text' id='name' className='input' />
      </div>
      <div className='flex flex-col'>
        <label className='mb-2' htmlFor=''>
          Email
        </label>
        <input type='text' className='input' />
      </div>
      <div className='flex flex-col'>
        <label className='mb-2' htmlFor=''>
          Subject
        </label>
        <input type='text' className='input' />
      </div>
      <div className='flex flex-col'>
        <label className='mb-2' htmlFor=''>
          Details
        </label>
        <textarea
          rows='6'
          placeholder='Type a short message here'
          className='input'></textarea>
      </div>
      <button className='btn'>Submit</button>
    </form>
  );
}

export default Form