import { motion } from 'framer-motion'
import type { GetStaticProps, NextPage,InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useTypewriter } from 'react-simple-typewriter'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Experiences from '../components/Experiences'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Project'
import Skills from '../components/Skills'
import { sanityClient } from '../sanity'
import { PageInfo, Skill, Social,Experience, Project } from '../typings'
type Props ={
  pageInfo: PageInfo,
  experiences: Experience[],
  skills: Skill[],
  projects: Project[],
  socials:Social[]
}
const Home = ({pageInfo,experiences,projects,socials,skills}: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-lime-300 '>
      <Head>
        <title>Bang's Portfolio</title>
      </Head>
      {/* Header */}
      <Header socials = {socials}/>
      {/* Hero */}
      <section id='hero' className='snap-start'>
      <Hero pageInfo ={pageInfo} />
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About pageInfo ={pageInfo} />
      </section>
      {/* Experience */}
      <section id='experience' className='snap-center'>
        <Experiences experiences = {experiences} />
      </section>
      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>
      {/* Project */}
      <section id='project' className='snap-start'>
        <Projects projects={projects}/>
      </section>
      {/* Contact */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
      <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer  '>
        <div className='flex items-center justify-center'>
          <img
          className='h-10 w-10 rounded-full cursor-pointer'
          src="https://cnttqn.com/attachments/3564353_orig-gif.15195.html" alt="" />
        </div>
      </footer>
      </Link>
    </div>
  )
}

export default Home
export const getStaticProps: GetStaticProps<Props> = async () => {
  const query1 = `
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

  const query2 = `
  *[_type == "pageInfo"] [0]
`;

  const query3 = `
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`;

  const query4 = `
  *[_type == "skill"] 
`;

  const query5 = `
  *[_type == "social"] 
`;
  const pageInfo: PageInfo = await sanityClient.fetch(query2);
  const experiences: Experience[] = await sanityClient.fetch(query1)
  const skills: Skill[] = await sanityClient.fetch(query4)
  const projects: Project[] = await sanityClient.fetch(query3)
  const socials: Social[] = await sanityClient.fetch(query5)

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  }
};
 