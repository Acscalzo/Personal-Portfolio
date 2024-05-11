import React from 'react'
import css from './Hero.module.scss'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, slideIn  } from '../../../../../utils/motion'


const Hero = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="hero"></a>
            <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25}}
            
            className={`innerWidth ${css.container}`}>

                 {/* upper elements */}
                <div className={css.upperElements}>

                    <motion.span
                    variants={fadeIn("right", "tween", 0.2, 1)}
                    className="primaryText">


                        Greetings Wanderer, <br/> I'm Adam.
                    </motion.span>


                    <motion.span
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className="secondaryText">
                        I am a software developer. <br/>
                        
                        And i love what i do.
                    </motion.span>
                </div>

                {/* person image */}
                
                <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                className={css.person}>
                    <motion.img
                    variants={slideIn("up", "tween", 0.5, 1.3)}
                    src="./adam.png" alt="" />
                </motion.div>

                {/* email */}
                <motion.a
                variants={fadeIn("right", "tween", 0.5, 1.5)}
                className={css.email} href="mailto:scalzoadam@gmail.com">
                    adamscalzoprofessional@gmail.com
                </motion.a>

                 {/* lower elements */}
                <div className={css.lowerElements}>

                    <motion.div
                    variants={fadeIn("right", "tween", 0.3, 1.3)}
                    className={css.experience}>
                        <div className="primaryText">Freshly Graduated</div>
                        <div className="secondaryText">
                            <div>from</div>
                            <div>Johnson & Wales University</div>
                        </div>
                    </motion.div>
                    <motion.div
                    variants={fadeIn("left", "tween", 0.3, 1.3)}
                    className={css.certificate}>
                        <img src="./upsilon.png" alt="" />
                        <span>Upsilon Pi Epsilon</span>
                        <span>Honors Society Member</span>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}

export default Hero