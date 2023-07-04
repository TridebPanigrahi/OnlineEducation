import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import Test from './testimonial/Test'
import Hblog from './Hblog'
import Hpricing from './Hpricing'

const Home = () => {
  return (
    <div>
        <Hero/>
        <AboutCard/>
        <HAbout/>
        <Test/>
        <Hblog/>
        <Hpricing/>
    </div>
  )
}

export default Home