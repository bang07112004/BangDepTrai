import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import R from '../public/R.gif'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
type Props = {
    pageInfo : PageInfo
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 2}}   
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10
    justify-evenly items-center mx-auto'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <div className='group relative flex cursor-pointer'>
                <motion.img 
                    src={urlFor(pageInfo.profilePic).url()}
                    alt={'This is just a feeder'}
                    initial={{
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                    whileInView={{opacity:1}}
                    className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover relative border border-blue-500 
                        filter group-hover:grayscale transition duration-300 ease-in-out  "
                        />
            </div>
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className=' text-2xl font-semibold'>
                {pageInfo?.backgroundInformation}
            </h4>
        </div>
    </motion.div>
    
  )
}