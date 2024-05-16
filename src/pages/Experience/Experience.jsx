import React from 'react'
import css from '../../styles/app.module.scss';
import Header from './components/Header/Header'
import Hero from './components/Header/hero/Hero'
import Footer from './components/Footer/Footer'

const Experience = () => {
  return <div className={`bg-primary ${css.container}`}>
    <div>
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  
  </div>
}

export default Experience
