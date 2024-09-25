import React from 'react'
import Navbar from '../base/Navbar'
import Hero from './Hero'
import Category from './Category'
import Testimonial from './Testimonial'
import Footer from '../base/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Category/>
        {/* Popular Dishes */}
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home