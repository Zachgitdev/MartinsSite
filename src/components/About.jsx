import React from 'react'
// import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { profilepic } from '../assets';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full mx-auto'>   
//     <motion.div
//       variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450
//         }}
//         className='bg-tertiary rounded-[20px] 
//         py-5 px-12 min-h-[280px] flex 
//         justify-evenly items-center flex-col'
//       >
//         <img src={icon} alt={title}
//         className='w-16 h-16 object-contain' />
//         <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

const About = () => {
  return (
    <>
      <motion.div className=''>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="bg-about-pattern flex flex-wrap gap-20"
      >
        <p className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]">
          I am a front-end web developer with 8 years experience. Professionally I have been using Drupal and programming languages such as PHP, Sass/Less/CSS3 and javascript.
          I have worked in multiple small teams to provide projects of a high standard.
          I enjoy developing my skillset through a number of solo projects such as websites for friends and family, game jams, hacakthons and other side projects.
        </p>
        {<img
          src={'/src/assets/aboutImg.jpg'}
          className="mt-0 w-[200px] h-auto rounded-2xl sm:mx-auto xs:mx-auto"
        />
        }
        {/* <img
        src={profilepic}
        className="mt-0 w-[200px] h-auto rounded-2xl sm:mx-auto xs:mx-auto"
      /> */}
      </motion.div>


      <div className='mt-20 flex flex-wrap gap-10 xs:mx-auto'>
        {/* {services.map( (service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))} */}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')