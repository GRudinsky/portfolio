import React from 'react'

import './Skills.scss'
import { devicons } from '../../data/devicons';

const Skills = () => (
  <div className="body-wrapper">
    <div className="container">
      <h1 className="section-heading">SKILLS<span className="section-closer">_</span></h1>
    <div className="icons-wrapper">
{devicons.map(icon => 
  <div key={devicons.indexOf(icon)}>
    <svg viewBox="0 0 128 128">
      <path className="cls-1" fillRule="evenodd" clipRule="evenodd" fill="#1572B6" d={icon.d}></path>
    </svg>
  </div>
  )}
        {/* <svg viewBox="0 0 128 128">
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#1572B6" d={icon.d}></path>
        </svg> */}
      </div>
    </div>
  </div>
)
export default Skills
