import { motion } from 'framer-motion';
import React from 'react'
import { urlFor } from '../sanity';
import project from '../sanity/schemas/project';
import {Project } from '../typings'
type Props = {
    projects: Project[]
}

function Project({projects}: Props) {
    return (
    <motion.div
    initial={{y:100,opacity: 0}}
    whileInView={{y:0,opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z=20 scrollbar-track-gray-400/20 scrollbar-thumb-lime-300 '>
            {projects.map((project,i) =>(
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:-p-44
                h-screen  '>
                    <motion.img
                        initial={{y:-200,opacity: 0}}
                        whileInView={{y:0,opacity: 1}}
                        transition={{duration: 2.5}}
                        className='w-[380px] h-[350px]'
                        src={urlFor(project?.image).url()} 
                        alt="" />
                   
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl '>
                        <h4 className='font-semibold text-4xl text-center'>Step {i+1} of {projects.length}: {project.title}</h4>
                        <div className='flex items-center space-x-2 justify-center'>
                            {project?.technologies.map((technology) =>(
                                <img className='h-10 w-10 rounded-full'
                                    key={technology._id} src={urlFor(technology.image).url()} alt="" />
                                ))}
                        </div>
                       
                    </div>
                    <p className='text-lg text-center md:text-left'>{project?.summary}</p>
                </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-zinc-900/10 left-0 h-[500px] -skew-y-10 '/>
    </motion.div>
  )
}

export default Project