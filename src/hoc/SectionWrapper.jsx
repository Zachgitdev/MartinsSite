import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <Parallax>     
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-full mx-auto relative z-10 bg-white`}
            >
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
            </Parallax>
        );
    };

export default SectionWrapper