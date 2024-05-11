import React from 'react'
import css from './Footer.module.scss'
import { footerVariants, staggerChildren } from '../../../../utils/motion'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25}}
    className={`paddings ${css.wrapper}`}>


        <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}>
            <div className={css.left}>
                <span className="primaryText">
                    Let's create something <br /> amazing together.
                </span>
                <span className="primaryText">
                    Start by <a href="mailto:adamscalzoprofessional@gmail.com"> reaching out!</a>
                </span>
            </div>


            <div className={css.right}>
                <div className={css.info}>
                    <span className="secondaryText">
                        Information
                    </span>
                    <p>704 Elizabeth Avenue, Stewartsville NJ 08886, USA<br /></p>
                </div>

                <div className={css.menu}>
                    <li></li>
                    <li><a href="/about">My Portfolio</a></li>
                    <li><a href="/about">My Experience</a></li>
                    <li><a href="/about">My Blog</a></li>
                    <li><a href="/about">About me</a></li>
                </div>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Footer
