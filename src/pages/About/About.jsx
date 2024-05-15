import React from 'react'
import css from '../../styles/app.module.scss';
import Header from './components/Header/Header'
import Hero from './components/Header/hero/Hero'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer';

const About = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Main/>
    <Footer/>
      
    </div>
  };

export default About;
