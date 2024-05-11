import React from 'react'
import css from './Portfolio.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren } from '../../../../utils/motion'

const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
     className={`paddings ${css.wrapper}`}>
        <a className="anchor" id="portfolio"></a>
        <div className={`innerWidth flexCenter ${css.container}`}>


            <div className={`flexCenter ${css.heading}`}>
                <div>
                    <span className="primaryText">My Latest Works</span>
                    <p style={{marginTop: "10px"}}>Intuitive solutions for quality products</p>
                </div>
                <span className="secondaryText">Explore More Works</span>
            </div>

            {/* Images */}
            <div className={`flexCenter ${css.showCase}`}>
               <a href="/portfolio">
                <motion.img
                  className={"inflate"}
                  variants={fadeIn("up", "tween", 0.5, 0.6)}
                  src="./placeholder.svg"
                  alt="showcase1"
                />
                <motion.img
                  className="inflate"
                  variants={fadeIn("up", "tween", 0.5, 0.6)}
                  src="./placeholder.svg"
                  alt="showcase2"
                />
                <motion.img
                  className="inflate"
                  variants={fadeIn("up", "tween", 0.5, 0.6)}
                  src="./placeholder.svg"
                  alt="showcase3"
                />
               </a>
            </div>
        </div>
    </motion.section>
  )
}

export default Portfolio
