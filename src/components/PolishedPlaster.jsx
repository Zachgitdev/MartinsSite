import React from 'react'
import { motion } from 'framer-motion';

import { profilepic } from '../assets';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const PolishedPlaster = () => {
    return (
        <>
            <motion.div className=''>
                <h2 className={styles.sectionHeadText}>Bathroom</h2>
                <div className={styles.sectionHeadLine}></div>
            </motion.div>
            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                className="flex flex-wrap gap-20"
            >
                <p className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]">
                    Discover the allure of polished plaster, a sophisticated and timeless 
                    decorative finish that adds a touch of elegance to any space. Also 
                    referred to as Venetian plaster, this artisanal technique creates 
                    a smooth and glossy surface with captivating depth and color. 
                    Whether you have a contemporary or traditional interior, polished 
                    plaster effortlessly enhances the aesthetic, bringing a unique and 
                    refined ambiance to your surroundings. As an expert plasterer with 
                    a meticulous eye for detail, I take pride in delivering flawless 
                    results that surpass expectations. Experience the enchantment of 
                    polished plaster in your home or business, as subtle yet captivating 
                    beauty transforms ordinary surfaces into extraordinary focal points. 
                    Elevate your space with the understated allure of polished plaster.
                </p>
                {<img
                    src={'/src/assets/galleryDoorFrame.jpg'}
                    className="mt-0 w-[300px] h-auto sm:mx-auto xs:mx-auto"
                />
                }
            </motion.div>

            <div className='mt-20 flex flex-wrap gap-10 xs:mx-auto'>
            </div>
        </>
    )
}

export default SectionWrapper(PolishedPlaster, 'PolishedPlaster')