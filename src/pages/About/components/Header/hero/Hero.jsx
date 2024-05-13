import React from 'react'
import css from './Hero.module.scss'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn  } from '../../../../../utils/motion'
import { zoomIn } from '../../../../../utils/motion'


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

                 {/* left elements */}
                <div className={css.leftElements}>
                    <motion.span
                    variants={fadeIn("right", "tween", 0.2, 1)}
                    className="primaryText">
                        About me
                    </motion.span>
                    
                    {/* line */}
                    <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
                        <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
                    </motion.div>  

                    <motion.div
                    variants={fadeIn("right", "tween", 0.5, 1.3)}
                    className={css.shortBio}>
                        <div className="primaryText">Professionally,</div>
                        <div className="secondaryText">I'm a software engineer</div>
                        <div className="secondaryText">and a web developer</div>
                    </motion.div>
                    <motion.div
                    variants={fadeIn("right", "tween", 1.1, 1.3)} className={css.shortBio2}>
                        <div className="primaryText">Personally,</div>
                        <div className="secondaryText">I'm a problem solver,</div>
                        <div className="secondaryText">and a hard worker</div>
                    </motion.div>
                </div>


                {/* image container */}
                <motion.div
                    variants={fadeIn("up", "tween", 0.3, 1.3)}
                    className={css.portrait}>
                        <img src="./adam.png" alt="" />
                </motion.div>
     
                 {/* right elements */}
                <div className={css.rightElements}>

                    <motion.span
                        variants={fadeIn("left", "tween", 0.2, 1)}
                        className={`yPaddingss paddings ${css.wildcat}`}>
                        <img src="wildcat.png" alt=""></img>
                        
                    </motion.span>

                    <motion.div
                    variants={fadeIn("left", "tween", 0.8, 1.3)}
                    className={css.experience}>
                        <motion.div className={css.shortBio}>
                            <div className="primaryText">Socially,</div>
                            <div className="secondaryText">I'm a giving person,</div>
                            <div className="secondaryText">and a great speaker</div>
                        </motion.div>
                        
                       
                    </motion.div>
                    

                </div>
            </motion.div>
        </section>
    )
}

export default Hero