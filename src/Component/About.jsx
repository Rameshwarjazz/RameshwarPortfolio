import React from 'react'
import {Styles} from '../utils/Styles.js'
import Resume from '../assets/resume.pdf'
import UserImg from '../assets/userimg.jpg'
import '../App.css'
const About = () => {
  return (
    <div className='flex flex-wrap justify-center items-center mt-10 p-10' id='Home'>
      <div className='flex-1 py-4'>
       <span className={Styles.heroHeadText}>
       Hi,I'm 
       <br/>
        <span className='text-orange-600'>
          Rameshwar Jaiswal
        </span>
        <br/>
        <span className={Styles.heroSubText}>
        I am Full Stack Web Developer
        </span>
       </span>
       <br/>
       <div>
        <a
        href={Resume}
        download='Resume'
        target='blank'
        rel='noreferrer'
        >
          <div className='p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 hover:border-violet-500 hover:shadow-pink-500 '>
            Download Resume
          </div>
        </a>
       </div>
      </div>
      <div className='flex flex-wrap'>
        <img src={UserImg} alt='user-img' className='element object-contain  border-current max-w-1/2 h-dvh'  />
       </div>
    </div>
  )
}

export default About
