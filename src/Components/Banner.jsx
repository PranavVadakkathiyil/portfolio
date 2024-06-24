import React from 'react'
import img from '../Img/pranav2.1.png'
const Banner = () => {
  return (
    <div>
      <div className='grid grid-cols-8 mt-1 border-2 sm:bg-white bg-teal-400'>
        <div className='sm:col-span-7 col-span-5 h-[20vh]  p-4  '>
          <p className='text-[2rem] font-semibold '>Pranav.V</p>
          <p className='text-[0.75rem] leading-5'>self-taught developer</p>
          <p className='text-[0.7rem] leading-8'>BTech in CSE</p>
        </div>
        <div  className='sm:col-span-1 col-span-3 h-[20vh] border-2 border-black rounded-full sm:border-none bg-white	'>
          <img src={img} alt="img" className='h-full sm:ml-7 rounded-full '/>
        </div>
      </div>
    </div>
  )
}

export default Banner