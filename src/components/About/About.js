import React from 'react'
// import {profile} from '../../data/data'
import imgProfile from '../../assets/images/profile.jpg'
import './About.scss'

const About =()=> (
<div className="body-wrapper">
  <div className="container">
      <h1 className="section-name">ABOUT<span className="section-closer">_</span></h1>
      <div className="about-wrapper">
        <div className="about-image with-shadow" style={{ backgroundImage: `url(${imgProfile})` }}>
        </div>
        <div className="about-description">
          <p>I’m used to breaking and fixing things since my childhood and decided to learn how to do this in the digital environment. I can’t wait to take the new career path that would help me combine my newly acquired software engineering skills with my drive for problem-solving.</p>
        </div>
        <div className="about-background">
        </div>
      </div>
  </div>     
</div>
)
export default About