import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './App.css'
import profileImage from '../images/miljandjordjevic.jpeg'

class App extends Component {
  static defaultProps = {
    name: 'Miljan Djordjevic',
    title: 'Full-Stack JavaScript Developer'
  }

  render() {
    return (
      <div className="app">
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
              className="fab fa-linkedin fa-3x social-item linkedin"
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
              className="fab fa-github fa-3x social-item github"
              title="GitHub"
              aria-hidden="true"
            />
          </a>

          <a
            href="https://www.freecodecamp.com/miljan-fsd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-free-code-camp fa-3x social-item freecodecamp"
              title="FreeCodeCamp"
              aria-hidden="true"
            />
          </a>

          <a
            href="https://www.facebook.com/miljandjordjevic87"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-facebook-square fa-3x social-item facebook"
              title="Facebook"
              aria-hidden="true"
            />
          </a>

          <a
            href="https://plus.google.com/+MiljanDjordjevic87"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-google-plus-square fa-3x social-item google-plus"
              title="Google+"
              aria-hidden="true"
            />
          </a>

          <a
            href="https://twitter.com/miljan_fsd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-twitter-square fa-3x social-item twitter"
              title="Twitter"
              aria-hidden="true"
            />
          </a>
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
