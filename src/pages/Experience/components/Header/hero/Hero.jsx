import React from 'react'
import css from './Hero.module.scss'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn  } from '../../../../../utils/motion'
import { zoomIn } from '../../../../../utils/motion'


const Hero = () => {
    return (
       <div className={`paddings ${css.wrapper}`}>

            <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25}}
            className={`innerWidth${css.container}`}>

                <div className={css.upperElements}>

                    <motion.span
                    variants={fadeIn("right", "tween", 0.2, 1)}
                    className="primaryText">
                        My Experiences
                    </motion.span>

                    <motion.span
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className="secondaryText">
                        From critical college courses <br/>
                        to real-world projects.
                    </motion.span>
                </div>

                    <div className="lowerElements">

                </div>
            </motion.div>
       </div>
    )
}

export default Hero