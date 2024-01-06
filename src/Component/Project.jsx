import React from 'react'
import { Styles } from '../utils/Styles'
import Tilt from 'react-parallax-tilt';
import { project } from '../Constants'
import gitlogo from '../assets/gitlogo.png'
import deploy from '../assets/deploy.jpg'

const Project = () => {
  return (
    <div>
      <div className='items-center pl-5 justify-center pt-3 flex-row' id='Project'>
        <span className={Styles.sectionHeadText}>
          Project
        </span>
        <hr className='w-[49%]'></hr>
        <div className={Styles.sectionText}>        
          My React frontend project showcases my adeptness in crafting a seamless, 
          responsive user interface with clean code and efficient state management, 
          exemplifying my commitment to modern web development practices.
        </div>
      </div>
      <div className='flex flex-wrap justify-center'>
        {project.map((prozct)=>{
          return(
            <Tilt
                key={prozct.image}
                className='h-[500px] w-[500px] flex justify-evenly shadow-2xl
                m-10 items-center hover:shadow-2xl hover:shadow-violet-400
                shadow-pink-300 p-3 rounded-xl'
                glareColor='fed7aa'
                glareMaxOpacity={0.5}
                scale={1.02}
                gyroscope={true}
              >
                <div className='  flex flex-col justify-evenly items-center'>
                <div className='flex p-5'>
                  <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-slate-500 flex justify-center items-center'>
                    <a href={prozct.source_deploy_link}>
                      <img className='text-3xl font-bold text-violet-600' src={deploy} />
                    </a>
                  </div>
                  <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-slate-500 flex justify-center items-center'>
                    <a href={prozct.source_code_link}>
                      <img className='text-3xl font-bold text-violet-600' src={gitlogo} />
                    </a>
                  </div>
                </div>
                  <img className='h-[100%] w-[100%]' src={prozct.image} alt={prozct.name} />
                  <div className='m-5 text-indigo-600'>
                    {prozct.name}
                  </div>
                </div>
                
              </Tilt>
          )
        })}
      </div>   
    </div>
  )
}

export default Project
