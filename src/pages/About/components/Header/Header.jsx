import React, { useState } from 'react'
import css from './Header.module.scss'
import {BiMenuAltRight, BiPhoneCall} from 'react-icons/bi'
import {motion} from 'framer-motion'
import { headerVariants, getMenuStyles } from '../../../../utils/motion'
import useHeaderShadow from "../../../../hooks/useHeaderShadow";
import useOutsideAlerter from '../../../../hooks/useOutsideAlerter'
import { useRef } from 'react'



const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false)
  const headerShadow = useHeaderShadow()
  const menuRef = useRef()

  useOutsideAlerter({
    menuRef,
    setMenuOpened
  })

  return (
      // Creating the wrapper and container for header
      <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{once: false, amount: 0.25}}
      className={`paddings ${css.wrapper}`
      }
      style={{boxShadow: headerShadow}}
      >
        <div className ={`flexCenter innerWidth ${css.container}`}>
          
        
        <div className={css.name}><a href="/">Adam Scalzo</a> </div>


        <ul 
        ref={menuRef}
        style={getMenuStyles(menuOpened)}
        className={`flexCenter ${css.menu}`}> 
      
          <li>
            <a href="/experience">Experience</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+1(908)878-2989</p>
            <BiPhoneCall size="40px"/>
          </li>
        </ul>
        {/* only for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
          >
          <BiMenuAltRight size={30} /> 
        </div> 
      </div>

    </motion.div>  
  
  )
}

export default Header
