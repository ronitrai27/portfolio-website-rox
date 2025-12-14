import React from 'react'
import Marquee from './Marquee'
import Image from 'next/image'
import { WobbleCardDemo } from './BentroGrid'


const Section1 = () => {
  return (
    <div className='py-20 px-6 min-h-screen'>
      <div className='text-center'>
        <h1 className='font-orb text-4xl font-semibold line-through tracking-wider mb-1'>SKIP THE HYPE</h1>
        <h1 className='font-inter text-4xl text-orange-400 font-bold tracking-wide '>HERE’S THE REAL STUFF. </h1>
      </div>

      <Marquee/>

      <div className='w-full h-full  mt-40 lg:px-20'>
        <WobbleCardDemo/>
      </div>
    </div>
  )
}

export default Section1
