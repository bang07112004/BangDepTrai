import React from 'react'
import {Cursor,useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import pic from '../public/pic.gif'
import Image from 'next/image'
import Link from 'next/link';
import { motion, MotionConfig } from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';
type Props = {
  pageInfo : PageInfo
}
function Hero({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words:[
        'Hi, my name is Bang',
        'This is a website that i made ',
        'This also a test website ',
        'Why you guys keep reading these useless contents?',
        'If you are reading this text, congratulation, you wasted your time!',
        'What? You still read these text? You just so patient dude!',
        'Anyway, thank you for reading these useless content and wasting your time!',
    ],
    loop: true,
    delaySpeed: 1500,

  });
    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <motion.div
        initial={{
          
          opacity: 0,
      }}
      transition={{
          duration: 2,
      }}
      whileInView={{opacity:1, x: 0}}
      // viewport={{once: true}}
        >
        <img
        className='relative rounded-full h-32  w-32 mx-auto object-cover '
        src={urlFor(pageInfo.heroImage).url()} alt="This is a gif of Darius" />
        </motion.div>
        <div className='z-20'>
          <motion.div
          initial={{
          
            opacity: 0,
        }}
        transition={{
            duration: 4,
        }}
        whileInView={{opacity:1, x: 0}}
          >
            <h2 className='text-sm uppercase text-gray-500 tracking-[15px] pb-2'>{pageInfo?.role}</h2>
          </motion.div>
          
          <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A'/>
          </h1>
          <div className='pt-5'>
            <Link href='#about'>
              <button className='heroButton'>About</button>
            </Link>
            <Link href='#experience'>
              <button className='heroButton'>Experience</button>
            </Link>
            <Link href='#skills'>
              <button className='heroButton'>Skills</button>
            </Link>
            <Link href='#project'>
              <button className='heroButton'>Project</button>
            </Link>
            <Link href='#contact'>
              <button className='heroButton'>Contact</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Hero