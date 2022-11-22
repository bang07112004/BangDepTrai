import React from 'react'
import { PhoneIcon,MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    name: string,
    email: string,
    number: string,
    message: string,
  };
  
type Props = {}

function ContactMe({}: Props) {
    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:phong0909191145@gmail.com?number=${formData.number}&body=Hi,i am ${formData.name}.${formData.message} (${formData.email})`;
    };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center '>
                If you have any problem with the running text, you can contact me!!!
            </h4>
            <div className='space-y-10 '>
                <div className='flex items-center space-x-5 justify-center' >
                    <PhoneIcon className='text-[#b83194] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl '>Nah, you are not gonna get this!!!</p>
                </div>
                <div className='flex items-center space-x-5 justify-center' >
                    <MapPinIcon className='text-[#cbdf54] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl '>Try to guess!!!</p>
                </div>
                <div className='flex items-center space-x-5 justify-center' >
                    <EnvelopeIcon className='text-[#5243c2] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl '>If you can find all information above, you can easily figure out this one!!!</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Tell me your full name!!!' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Gimme your email!!!' className='contactInput' type="email" />
                </div>
                <input {...register('number')} placeholder='Show me your number!!!' className='contactInput' type="number" />
                <textarea {...register('message')} placeholder='Is there anything else you want to inform me??? Or leave a message!!!' className='contactInput' />
                <button type='submit' className='bg-green-700 py-5 px-10 rounded-full text-black font-bold text-lg'>Submit</button>
                
            </form>
        </div>
    </div>
  )
}

export default ContactMe