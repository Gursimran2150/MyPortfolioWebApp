import React from 'react'
import heroImage from '../assets/heroImage.jpeg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

import {Typewriter} from 'react-simple-typewriter'

const Home = () => {

  

  


  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full '>
                
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a 
                Full Stack Web <span className='text-cyan-500 '>Developer</span>
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have 6 months of experience building and desgining websites.
                    Currently, I love to work on web application using technologies like
                    React , Tailwind and Node JS. 
                </p>

                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500
                     to-blue-500 cursor-pointer'>
                        <a href='./resume.pdf' download={true}>Resume  </a> <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight className='ml-1' size={25}/></span>
                       
                   </button>
                </div>
            </div>
            <div>
                <img src={heroImage} alt="myImage" className='rounded-2xl mx-auto w-[300px] md:full md:w-2/3 h-auto'/>
            </div>

        </div>

    </div>
  )
}

export default Home