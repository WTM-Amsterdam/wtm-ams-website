import React from 'react'
import logo from '../images/wtm-logo.svg'

const Navigation = () => {
  return (
    <nav className="navbar fixed-top navbar-light navbar-expand-lg bg-white">
      <div className="container">

        <a className="navbar-brand" href="#home">
          <img src={logo} className="logo"
               alt=""/>
        </a>


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about-us">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#events">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#up">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
