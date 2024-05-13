import React from 'react'
import css from '../../styles/app.module.scss';
import Header from './components/Header/Header'
import Hero from './components/Header/hero/Hero'

const About = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
      
    </div>
  };

export default About;
