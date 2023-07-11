import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';


const Gallery = () => {
    return (
        <div className=''>
            <h2 className={styles.sectionHeadText}>Gallery</h2>
            <p className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]">
                Test here is a test
            </p>
        </div>
    )
}

export default SectionWrapper(Gallery, 'Gallery')