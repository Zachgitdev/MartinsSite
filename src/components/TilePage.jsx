import React from 'react'
import { styles } from '../styles'
import { plastering } from '../constants'
import { SectionWrapper } from '../hoc'

const TilePage = () => {
  return (
    <div>
        {/* <h2 className={styles.sectionHeadText}>Plastering</h2> */}
        <ul className='flex justify-center grid grid-cols-3 gap-10'>
            {plastering.map((plaster) => (
                <li>
                    <img src={plaster.image} className='h-[200px] min-w-full' />
                    <p className={`${styles.sectionSubText} py-5`}>{plaster.title}</p>
                    <p>{plaster.text}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SectionWrapper(TilePage, 'TilePage')