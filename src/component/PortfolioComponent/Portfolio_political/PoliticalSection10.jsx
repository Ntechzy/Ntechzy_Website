import React from 'react'
import { FaMailBulk, FaPhone } from 'react-icons/fa'

const PoliticalSection10 = () => {
  return (
    <div className='text-white flex flex-row h-[50vh]  '>
       <div className='w-1/2  md:block hidden'>
        <img src="/assets/section10.png" alt="" className=' h-full w-full bg-red-500' />
       </div>
      <div className='font-bold md:w-[70%] text-center pt-9 bg-red-500 '>
      <div className=' text-2xl md:text-6xl'>
            EXCITED TO TEAM UP WITH TEAM NTECHZY PVT LTD
        </div>
        <div className='md:mt-20 mt-11 md:flex md:items-center gap-7  bg-white text-black p-4 justify-center m-auto w-[90%] rounded-lg '>
           <div className='flex flex-row items-center justify-center text-2xl p-4 gap-0 md:text-3xl md:gap-6'>
           <p className=''><FaPhone/></p>
           <p> <a href="tel:+91 9151596299">+91 9151596299</a></p>
           </div>
           <div className='flex flex-row items-center justify-center md:text-3xl p-4 text-2xl gap-2 md:gap-6'>
           <p className='text-4xl'><FaMailBulk/></p>
           <p> <a href="mailto:'info@Ntechzy.in">info@Ntechzy.in</a></p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default PoliticalSection10