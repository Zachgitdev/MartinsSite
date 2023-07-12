import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Parallax } from 'react-scroll-parallax';

// import { ComputersCanvas } from './canvas';


const Hero2 = () => {
  return (
    <Parallax speed={-20} className=' z-[-10] relative w-full h-[500px] mx-auto bg-hero2-pattern bg-cover bg-no-repeat bg-[center_-160px]'>
      <div className={` absolute inset-0
      top-[120px] max-w-7xl mx-auto flex flex-row
      items-start gap-5 text-center bg-hero-title-bg`}>
          <div>
            <h1 className={`${styles.heroHeadText} font-light uppercase`}>
              Plastering</h1>
          </div>
      </div>

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full 
      flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4
          border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1' />
          </div>
        </a>
      </div> */}
    </Parallax>
  )
}

export default Hero2