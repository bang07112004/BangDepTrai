import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
  experiences: Experience[]
}

function Experience({experiences}: Props) {
  return (
    <motion.div 
    initial={{y: 100, opacity: 0}}
    whileInView={{y: 0 , opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen flex relative overflow-hidden flex-col md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>
        <div className='w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-lime-300'>
            {experiences?.map(experience =>(
              <ExperienceCard key={experience._id} experience={experience}/>
            ))}
        </div>
        </motion.div>
  )
}

export default Experience