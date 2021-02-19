import React from "react"
import "./Home.scss"
import cloudSymbol from "../../images/cloud-symbol.png"
import backendSymbol from "../../images/backend-symbol.png"
import dataBaseSymbol from "../../images/database-symbol.png"
import frontendSymbol from "../../images/frontend-symbol.png"
import appleLogo from "../../images/apple-logo.png"
import androidLogo from "../../images/android-logo.png"
import unityLogo from "../../images/unity-logo.png"
import slackLogo from "../../images/slack-logo.png"
import teamsLogo from "../../images/microsoft-teams-logo.png"
import arrow from "../../images/arrowup.png"
import { Footer } from "../Footer"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <section className="home">
      <section className="title-card">
        <div className="title">
          <h1>Clayton Mercer</h1>
          <h2>Software Developer</h2>
        </div>
        <div id="down-button">
          <a href="#main-content">
            <img src={arrow} alt="arrow" id="main-content"/>
          </a>
        </div>
      </section>
      <section className="home-content">
        <div className="experience">
          <h1>Experience Summary</h1>
          <div className="row">
            <div className="column">
              <h5>Full-Stack Development</h5>
              <p>Has developed within every layer of modern web architecture.</p>
            </div>
            <div className="column logo-gallery">
              <img src={frontendSymbol} alt="" />
              <img src={backendSymbol} alt="" />
              <img src={dataBaseSymbol} alt="" />
              <img src={cloudSymbol} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <h5>Mobile Development</h5>
              <p>Has experience building native applications built in React Native and Xamarin.</p>
            </div>
            <div className="column logo-gallery">
              <img src={appleLogo} alt="" />
              <img src={androidLogo} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <h5>Game Development</h5>
              <p>Has experience developing within Unity.</p>
            </div>
            <div className="column logo-gallery">
              <img src={unityLogo} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <h5>Project Management</h5>
              <p>Has organized and lead multiple projects.</p>
            </div>
            <div className="column logo-gallery">
              <img src={slackLogo} alt="" />
              <img src={teamsLogo} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <h5>Soft Skills</h5>
              <p>Prides himself in his work ethic and people skills.</p>
            </div>
          </div>
          <div className="page-link">
            <Link to={`/projects`} className="link">To Projects<img src={arrow} alt="" /></Link>
          </div>
          <br/>
          <div className="page-link">
            <Link to={`/about`} className="link">To Bio<img src={arrow} alt="" /></Link>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  )

}
