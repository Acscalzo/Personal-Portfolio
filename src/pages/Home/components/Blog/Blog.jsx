import React from 'react'
import css from './Blog.module.scss'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, textVariant } from '../../../../utils/motion'
import { projectExperience, WhatDoIHelp } from '../../../../utils/data'

const Blog = () => {
  return (
    <div>
      <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25}}
    className={css.wrapper}>
    <a className="anchor" id="blog"></a>

        <div className={`paddings  flexCenter innerWidth ${css.container}`}>
            <motion.div
            variants={fadeIn("right", "tween", 0.5, 1)}
            className={css.leftSide}>
                <span className="primaryText">Interested in my learning experience?</span>
                <motion.span
                variants={textVariant(1.3)}
                className="secondaryText"><a href="/blog">Why don't you check out my blog!</a></motion.span>
            </motion.div>

            <motion.div
                variants={fadeIn("left", "tween", 0.5, 1)}
                className={css.rightSide}>
                    <div className={css.post}>
                        <div className={` ${css.postHeader}`}>
                            <span style={{color: "#0c233d"}} className="primaryText">My React Learning Experience<br /></span>
                            <span style={{color: "#0c233d"}} className="secondaryText">Posted on 5/11/2024</span>
                        </div>
                        <div className={css.postBody}>
                            <p style={{color: "#0c233d"}}>My journey into the React framework as a newly graduated software engineer.</p>
                        </div>
                    </div>

                
            </motion.div>
        </div>
    
    </motion.section>
    </div>
  )
}

export default Blog
