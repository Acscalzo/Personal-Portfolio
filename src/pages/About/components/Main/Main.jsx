import React from 'react'
import css from './Main.module.scss'
import { aboutMe } from '../../../../utils/data'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../utils/motion'

const Main = () => {
  return (
    <div className={css.wrapper}>

        <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>

            {/* upper section*/}
            <div className={css.leftSide}>
                {aboutMe.map((exp, i)=>{
                    return (
                        <div className={css.aboutMe} key={i}>
                            <motion.span
                            variants={fadeIn("up", "tween", .5, 1.5)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.25 }}
                            className="primaryText">{exp.title}</motion.span>
                            <motion.span
                            variants={fadeIn("up", "tween", .5, 1.5)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.25 }}
                            className="secondaryText">{exp.content}</motion.span>
                        </div>
                    );
                })}
                

            </div>

            {/* lower section*/}
            <div className={css.rightSide}>

                <div className={css.photos}>

                    <motion.img
                    className={"inflate"}
                    variants={fadeIn("up", "tween", 0.5, 0.6)}
                    initial="hidden"
                    whileInView="show"
                    src="./placeholder.svg"
                    alt="showcase1"
                    />
                    <motion.img
                    className="inflate"
                    variants={fadeIn("up", "tween", 0.6, 0.6)}
                    initial="hidden"
                    whileInView="show"
                    src="./placeholder.svg"
                    alt="showcase2"
                    />
                    <motion.img
                    className="inflate"
                    variants={fadeIn("up", "tween", 0.7, 0.6)}
                    initial="hidden"
                    whileInView="show"
                    src="./placeholder.svg"
                    alt="showcase3"
                    />

                </div>

                </div>


            </div>
    </div>

  )
}

export default Main
