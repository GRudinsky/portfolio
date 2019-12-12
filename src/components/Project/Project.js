// implement parallax for images and borders
import React from 'react'
import './Project.scss'

export default class Project extends React.Component {
  render() {
    const { name, urlLive, urlGithub, path, description } = this.props;
    return (
      <>
      <div className="project-wrapper">
            <div className="project-image with-shadow" style={{ backgroundImage: `url(${path})` }}>
            </div>
        <div className="project-description">
          <div className="description-section">
          <h3>{name}</h3>
          <p>{description}</p>
            </div>
          <div className="button-section">
            <div className="button with-shadow">
                <a href={urlGithub} target="_blank" rel="noopener noreferrer" >
              <div>Github</div>
              </a>
            </div>
            <div className="button with-shadow">
                <a href={urlLive} target="_blank" rel="noopener noreferrer" >
              <div>Online</div>
              </a>
            </div>
          </div>
        </div>
          <div className="absolute-background with-shadow">
          </div>
      </div>
        
      </>
    )
  }


} 
