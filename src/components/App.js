import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Particles from 'react-particles-js'

import './App.css'
import profileImage from '../images/miljandjordjevic.jpg'

const particlesParams = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  static defaultProps = {
    name: 'Miljan Djordjevic',
    title: 'Full-Stack JavaScript Developer'
  }

  render() {
    return (
      <div className="app">
        <Particles params={particlesParams} className="particles" />
        <div className="profile">
          <img src={profileImage} className="img" alt={this.props.name} />

          <h1 className="name">{this.props.name}</h1>

          <p className="title">{this.props.title}</p>

          <div id="social">
            <a
              href="https://rs.linkedin.com/in/miljandjordjevic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-linkedin-in fa-2x social-item linkedin"
                title="Linkedin"
                aria-hidden="true"
              />
            </a>

            <a
              href="https://github.com/miljan-fsd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-github fa-2x social-item github"
                title="GitHub"
                aria-hidden="true"
              />
            </a>

            <a
              href="https://twitter.com/miljan_fsd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-twitter fa-2x social-item twitter"
                title="Twitter"
                aria-hidden="true"
              />
            </a>

            <a
              href="https://www.freecodecamp.com/miljan-fsd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-free-code-camp fa-2x social-item freecodecamp"
                title="FreeCodeCamp"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string
}

export default App
