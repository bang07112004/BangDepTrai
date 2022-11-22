import React from 'react'
import Image from 'next/image'
import LHP from '../public/LHP.png'
import { motion } from 'framer-motion'
import html from 'programming-languages-logos/src/html/html.svg'
import java from 'programming-languages-logos/src/java/java.svg'
import javascript from 'programming-languages-logos/src/javascript/javascript.svg'
import typescript from 'programming-languages-logos/src/typescript/typescript.svg'
import python from 'programming-languages-logos/src/python/python.svg'
import { url } from 'inspector'
import { Experience } from '../typings'
import { urlFor } from '../sanity'
type Props = {
    experience: Experience;
}

function ExperienceCard({experience}: Props) {
 
    return (
   <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]  md:w-[600-px] xl:w-[900px] 
   snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'
   >
        <motion.img
        initial={{
            y: -100,
            opacity: 0
        }}
        whileInView={{
            y: 0,
            opacity: 1
        }}
        transition={{
            duration: 1.5
        }}
         className='w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center' 
         src={urlFor(experience?.companyImage).url()} />
             
        <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-light'>Student of Le Hong Phong Highschool </h4>
            <p className='font-bold text-2xl mt-1'>Le Hong Phong Highschool</p>
            <div className='flex space-x-2 my-2'>
                {experience.technologies.map(technology =>(
                    <img 
                    key={technology._id}
                    className='h-10 w-10 rounded-full'
                    src={urlFor(technology.image).url()} 
                    alt="" />
                ))}
            </div>
            <p className='uppercase py-5 text-gray-300'>
                {new Date(experience.dateStarted).toDateString()} - {''}
                {experience.isCurrentWorkingHere
                    ? 'Present'
                    : new Date(experience.dateEnded).toDateString()

                }
            </p>
            <ul className='list-disc space-y-5 ml-5 text-lg h-80 overflow-y-scroll scrollbar-thin '>
                {experience.points.map((point,i) => (
                    <li key={i}>{point} </li>
                ))}

            </ul>
        </div>
   </article>
  )
}

export default ExperienceCard