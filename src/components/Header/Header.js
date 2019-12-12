import React from 'react'
import Typewriter from 'typewriter-effect'
import './Header.scss'

export default class Header extends React.Component {
  constructor() {
    super()
    this.typeMessage = ['More style and content coming soon']
  }

  render() {
    return (
      <div className="header-wrapper">
        <div className="name-block">
    <h1>Giedrius Rudzianskas</h1>
    <h5>
      <Typewriter
        options={{
        strings: this.typeMessage,
        autoStart: true,
        loop: true,
            }}
          />
    </h5>
        </div>
        <div className="absolute-border with-shadow">
        </div>
        {/* <div className='scroll-pointer'>
          ▽▽▽<br />
          ▽▽<br />
          ▽<br />
        </div> */}
  </div>
  
  )
    }
  }