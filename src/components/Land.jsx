import React from 'react'

import Hero from './Hero'
import About from './About'
import Contact from './Contact'
import Explore from './Extrathings/Explore'
import Navbar from './Extrathings/Navbar'
import { StarsCanvas } from './canvas'

const Land = () => {
    return (
        <div>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center overflow-hidden">
                    <Navbar />
                    <Hero />
                </div>
                <div className="relative">
                    <About />
                    <div className="gradient-04 -z-10" />
                    <Explore />
                </div>
                <div className="relative">
                    {/* <TimeLine /> */}
           
                </div>
                <div className="relative z-0">
                    <Contact />
                    <div className="footer-gradient" />
                    <StarsCanvas />
                </div>
            </div>
        </div>
    )
}

export default Land