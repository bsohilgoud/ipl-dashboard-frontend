import React from "react"
import {Link} from 'react-router-dom';
import '../css/Home.css'

function  HomePage () {
      return(
        <div className="HomePage">
            <h1 id="welcome-heading"> Welcome to IPL Dashboard </h1>
            <p id='welcome-message'>Get Ready to explore your favourite IPL team</p>
            <button id="start-btn"><Link to="/teams">Let's Get Started</Link></button>
        </div>
      )
}

export default HomePage;