import React from 'react'
// import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div className=''>
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="flex flex-wrap gap-20"
      >
        <p className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]">
          Welcome to Martin's Construction - your trusted partner for top-quality plastering services. With 20 years of experience in the industry, we take pride in delivering exceptional craftsmanship and transforming spaces into stunning works of art.
          At artins Construction , we understand that every project is unique. Our team of skilled plasterers is dedicated to providing personalized solutions tailored to your specific needs. Whether it's a small repair or a large-scale renovation, we approach each task with unwavering attention to detail and a commitment to excellence.
        </p>
        {/* <img
          src={'/src/assets/aboutImg.jpg'}
          className="mt-0 w-[200px] h-auto rounded-2xl sm:mx-auto xs:mx-auto"
        /> */}

      </motion.div>
    </>
  )
}

export default SectionWrapper(About, 'about')