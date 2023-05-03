import React from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import github from '../assets/github.png'
import node from '../assets/node.png'
import rct from '../assets/react.png'
import tail from '../assets/tailwind.png'
import mongodb from '../assets/mongodb.png'
import express from '../assets/express.png'



const Experience = () => {

    const techs = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:js,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:rct,
            title:'React JS',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:tail,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:express,
            title:'Express JS',
            style:'shadow-white'
        },
        {
            id:7,
            src:mongodb,
            title:'Mongo DB',
            style:'shadow-green-500'
        },
        {
            id:8,
            src:github,
            title:'Github',
            style:'shadow-gray-500'
        },
        {
            id:9,
            src:node,
            title:'Node JS',
            style:'shadow-green-400'
        },
    ]



  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Expreience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    techs.map(({id,src,title,style})=>(
                        <div key={id} className={"shadow-md hover:scale-105 duration-200 py-2 rounded-lg"+' '+style}>
                        <img src={src} alt={title} className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
                

        </div>


        </div>

      

    </div>
  )
}

export default Experience