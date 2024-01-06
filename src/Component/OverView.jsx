import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Styles } from '../utils/Styles';
import { technologies, serice } from '../Constants';
import { motion } from 'framer-motion';
import './style.css';

const OverView = () => {
  return (
    <div>
      <div className='items-center pl-5 justify-center pt-3 flex-row' id='OverView'>
        <span className={Styles.sectionHeadText}>
          Introduction
        </span>
        <hr className='w-[49%]'></hr>
        <div className={Styles.sectionText}>
          Dedicated Full Stack Web Developer proficient in HTML, CSS, JavaScript, Node.js, and React.js, with a passion for crafting cutting-edge, user-centric web applications.
          Enthusiastic about collaborating with dynamic teams to drive success and innovation
        </div>
        <div className='flex flex-wrap justify-center'>
          {serice.map((service) => (
            <div key={service.icon}>
              <Tilt
                className='parallax-effect-glare-scale'
                glareColor='fed7aa'
                glareMaxOpacity={0.5}
                scale={1.02}  
                gyroscope={true}
              >
                <div className='p-3 m-3 flex flex-col justify-evenly items-center'>
                  <img className='h-[100px] w-[100px]' src={service.icon} alt={service.title} />
                  <div className='m-5 text-indigo-600'>
                    {service.title}
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
        <div className='flex flex-wrap justify-center'>
          {technologies.map((tech) => (
            <div 
              key={tech.name}
              className='m-4 mt-5 h-[100px] w-[100px]'
            >
              <div className='p-2 m-2 flex flex-col justify-evenly items-center rounded-lg'>
                <div>
                  <img className='shadow-lg shadow-gray-400 hover:shadow-slate-800' src={tech.icon} alt={tech.name} />
                </div>
                <div className='m-5 text-blue-400'>{tech.name.toUpperCase()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverView;
