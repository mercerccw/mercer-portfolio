import React from "react"
import "./Home.scss"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import clayton from "../../images/clayton.png"
import clayton2 from "../../images/clayton2.png"
import working from "../../images/working.png"
import working2 from "../../images/working2.png"
import arrow from "../../images/arrowup.png"
import { Footer } from "../Footer"

export const Home = () => {
  return (
    <section className="home">

      <section className="title-card" style={{
        backgroundImage: `url("https://mercer-portfolio-assets.s3.us-east-2.amazonaws.com/hero_image.jpeg")`,
        backgroundSize: "cover"
      }}>
        <div className="title">
          <h1>Clayton Mercer</h1>
          <h2>Software Developer</h2>
        </div>
        <div style={{
          backgroundColor: "white",
          borderRadius: "50px",
          width: "fit-content",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          bottom: 20,
          textAlign: "center",
          zIndex: 1000,
          marginTop: "-20%",
          position: "absolute",
          boxShadow: "3px 3px lightgray"
        }}>
          <a href="#main-content">
            <img src={arrow} alt="arrow" style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              transform: "rotate(180deg)",
              width: "2.5em"
            }}/>
          </a>
        </div>
      </section>


      <section id="main-content" className="main-content">
        <div className="divider">
          <span className="ribbon-divider"></span>
        </div>
        <article className="content-image">
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illo laborum, minima nesciunt omnis
              possimus
              quasi sed. Consequuntur cumque ipsa iusto libero modi nulla odio pariatur quo, repellat voluptate?
              Ducimus!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illo laborum, minima nesciunt omnis
              possimus
              quasi sed. Consequuntur cumque ipsa iusto libero modi nulla odio pariatur quo, repellat voluptate?
              Ducimus!</p>
          </div>
          <img src={clayton} alt="clayton"/>
        </article>
        <article className="content-image-mobile">
          <div className="background-image">
            <div className="ribbon"></div>
            <img src={clayton2} alt="clayton"/>
          </div>
          <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illo laborum, minima nesciunt omnis
              possimus
              quasi sed. Consequuntur cumque ipsa iusto libero modi nulla odio pariatur quo, repellat voluptate?
              Ducimus!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illo laborum, minima nesciunt omnis
              possimus
              quasi sed. Consequuntur cumque ipsa iusto libero modi nulla odio pariatur quo, repellat voluptate?
              Ducimus!</p>
          </div>
        </article>
        <div className="divider"><span className="ribbon-divider"></span></div>
        <article className="content-image">
          <img src={working} alt="clayton"/>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illo laborum, minima nesciunt omnis
                possimus
                quasi sed. Consequuntur cumque ipsa iusto libero modi nulla odio pariatur quo, repellat voluptate?
                Ducimus!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illo laborum, minima nesciunt omnis
                possimus
                quasi sed. Consequuntur cumque ipsa iusto libero modi nulla odio pariatur quo, repellat voluptate?
                Ducimus!</p>
            </div>
        </article>
        <article className="content-image-mobile">
          <div className="background-image">
            <div className="ribbon"></div>
            <img src={working2} alt="clayton"/>
          </div>
          <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illo laborum, minima nesciunt omnis
              possimus
              quasi sed. Consequuntur cumque ipsa iusto libero modi nulla odio pariatur quo, repellat voluptate?
              Ducimus!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illo laborum, minima nesciunt omnis
              possimus
              quasi sed. Consequuntur cumque ipsa iusto libero modi nulla odio pariatur quo, repellat voluptate?
              Ducimus!</p>
          </div>
        </article>
      </section>
      <Footer />
    </section>
  )

}
