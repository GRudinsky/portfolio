import React from 'react'
import Project from '../Project/Project'
import {projects} from '../../data/data'

import './Projects.scss'

const Projects =()=> (
<div className="body-wrapper">
  <div className="container">
      <h1 className="section-heading">PROJECTS<span className="section-closer">_</span></h1>
      {/* <div className="section-line"></div> */}
      {projects.map(project =>
        <Project
          key={projects.indexOf(project)}
          name={project.name}
          path={project.path}
          urlLive={project.urlLive}
          urlGithub={project.urlGithub}
          description={project.description}
        />)}
  </div>     
</div>
)
export default Projects