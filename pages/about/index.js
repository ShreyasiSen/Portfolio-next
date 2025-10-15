import React, { useState } from 'react';
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiTailwindcss
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Languages',
        icons: [
          <SiCplusplus key="cpp"/>,
          <FaJava key="java" />,
          <FaPython key="python" />,
        ],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <FaNodeJs key="node" />,
          <SiFramer key="framer" />,
          <SiTailwindcss key="tailwind" />,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Developer Intern - MBB. Consultancy Services Pvt. Ltd.',
        stage: '2023 - 2024',
        details: [
        "Built a website, leading to a 40% increase in client engagement and improving user satisfaction by 60%.",
        "Created a data processing system using Node.js and Express.js, resulting in a 40% reduction in processing time and improving data accuracy by 50%.",
        "Used Tailwind CSS for a responsive design, reducing website loading time by 30% and receiving positive feedback from 90% of users.",
        "Integrated Nodemailer to automate email communication, increasing efficiency by 70% and ensuring timely responses to client inquiries."
      ]
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'High School - Shri Shikshayatan School (2019-2021)',
        marks: '94.8%',
      },
      {
        title: 'Btech(CSE) - Techno Main Salt Lake (2021-2025)',
        marks: '8.5 CGPA',
        
      },
    ],
  },
];

//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

//counter
import CountUp from 'react-countup';
import TailwindConfig from '../../tailwind.config';

const About = () => {
  const [index, setIndex] = useState(0);
  //console.log(index);
  return (
    <div className='h-full bg-primary/30 py-36 text-center xl:text-left'>
      <Circles />
      {/*avatar img*/}
      <motion.div
        variants={fadeIn('right', 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='hidden xl:flex absolute bottom-0 -left-[330px] w-[600px] h-[600px]'>
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col 
    items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center mb-2 xl:ml-10'>
          <motion.h2 
           variants={fadeIn('right', 0.2)}
           initial="hidden"
           animate="show"
           exit="hidden" 
           className='h2'>Crafting
            <span className='text-accent font-bold'> Code,</span><br /> Creating Impact
          </motion.h2>
          <motion.p 
           variants={fadeIn('right', 0.4)}
           initial="hidden"
           animate="show"
           exit="hidden"
           className='max-w-[500px] mx-auto
           xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
            I’m a B.Tech Computer Science
            graduate passionate about turning ideas into reality.
            A full-stack developer with hands-on experience in production,
            I build engaging applications that make a difference.
            As a competitive programmer, I thrive on solving complex problems with
            efficient solutions. I’m always eager to learn and grow in the ever-evolving tech industry.
          </motion.p>
        </div>
        <motion.div
         variants={fadeIn('left', 0.4)}
         initial="hidden"
         animate="show"
         exit="hidden"
         className='flex flex-col w-full xl:max-w-[48%] h-[450px]'>
          <div className='flex flex-wrap gap-4 xl:gap-8 mx-auto xl:mx-0 mb-2 justify-center w-full z-10'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                  cursor-pointer capitalize xl:text-lg relative after:w-8 
                  after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  <button className="w-full">{item.title}</button>
                </div>
              );
            })}
          </div>
          <div className=' py-2 xl:py-6 flex flex-col 
          gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row 
                max-w-max gap-x-2 items-center text-white/60'>
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.marks}</div>
                  <div >{item.details}</div>
                  <div className='flex gap-x-4'>
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className='text-2xl text-white'>{icon}</div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
