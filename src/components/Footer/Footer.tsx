import React from "react"
import facebookLogo from "../../images/facebook-logo.png"
import twitterLogo from "../../images/twitter-logo.png"
import instagramLogo from "../../images/instagram-logo.png"
import linkedinLogo from "../../images/linkedin-logo.png"
import githubLogo from "../../images/github-logo.png"
import "./Footer.scss"

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <a href={`https://www.linkedin.com/in/claytonmercer/`} target="_blank" rel="noopener noreferrer" className="link">
            <img src={linkedinLogo} alt="Clayton's LinkedIn" />
          </a>
          <a href={`https://www.facebook.com/Claytoni7Mercer`} target="_blank" rel="noopener noreferrer" className="link">
            <img src={facebookLogo} alt="Clayton's FaceBook" />
          </a>
          <a href={`https://twitter.com/Claytoni7Mercer`} target="_blank" rel="noopener noreferrer" className="link">
            <img src={twitterLogo} alt="Clayton's Twitter" />
          </a>
          <a href={`https://www.instagram.com/claytoni7mercer/`} target="_blank" rel="noopener noreferrer" className="link">
            <img src={instagramLogo} alt="Clayton's Instagram" />
          </a>
          <a href={`https://github.com/mercerccw`} target="_blank" rel="noopener noreferrer" className="link">
            <img src={githubLogo} alt="Clayton's GitHub" />
          </a>
        </div>
      </div>
    </footer>
  )
}