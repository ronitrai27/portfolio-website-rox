import React from 'react'
import Marquee from './Marquee'
import Image from 'next/image'

const Section1 = () => {
  return (
    <div className='py-20 px-6 min-h-screen'>
      <div className='text-center'>
        <h1 className='font-orb text-4xl font-semibold line-through tracking-wider mb-1'>SKIP THE HYPE</h1>
        <h1 className='font-inter text-4xl text-orange-400 font-bold tracking-wide '>HERE’S THE REAL STUFF. </h1>
      </div>

      <Marquee/>

      <div className='w-full h-full '>
        <Image src='/h4.png' alt='ma1' width={300} height={300} />
        <Image src='/h3.png' alt='ma1' width={300} height={300} className=''/>

      </div>
    </div>
  )
}

export default Section1
