import React from 'react'
import { motion } from 'framer-motion';

import { profilepic } from '../assets';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const DecorativeWalls = () => {
    return (
        <>
            <motion.div className=''>
                <h2 className={`${styles.sectionHeadText} text-left lg:text-right`}>Kitchen</h2>
                <div className={`${styles.sectionHeadLine} lg:ml-auto`}></div>
            </motion.div>
            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                className="flex flex-wrap gap-20 lg:flex-row-reverse "
            >
                <p className="mt-4 text-secondary text-[16px] max-w-2xl lg:max-w-3xl leading-[30px] text-left lg:text-right">
                    Discover the enchanting beauty of decorative walls
                    embellished with the elegant touch of polished plaster.
                    This refined finish, commonly referred to as Venetian
                    plaster, brings a smooth and lustrous surface that adds
                    undeniable charm to any interior. With its vibrant color
                    palette and captivating depth, polished plaster
                    effortlessly enhances the aesthetics of both modern and
                    traditional designs. As a dedicated and skilled plastering
                    expert, I take immense pride in delivering exceptional
                    craftsmanship, ensuring meticulous attention to detail
                    for flawless results that exceed expectations.
                    Experience the transformative power of polished plaster as
                    your walls become mesmerizing focal points, emanating a
                    subtle yet undeniable sense of sophistication throughout
                    your space. Immerse yourself in the serene ambiance created
                    by the artistry of polished plaster, where timeless elegance
                    meets expert craftsmanship.
                </p>
                {<img
                    src={'/src/assets/galleryKitchenSink.jpg'}
                    className="mt-8 w-[300px] overflow-hidden object-cover sm:mx-auto xs:mx-auto"
                />
                }
                
            </motion.div>

            <div className='mt-20 flex flex-wrap gap-10 xs:mx-auto'>
            </div>
        </>
    )
}

export default SectionWrapper(DecorativeWalls, 'DecorativeWalls')