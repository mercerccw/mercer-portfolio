import React from "react"
import "./Projects.scss"
import Carousel from "react-bootstrap/cjs/Carousel"
import mountain1 from "../../images/mountains-1.jpg"
import mountain2 from "../../images/mountains-2.jpg"
import mountain3 from "../../images/mountains-3.jpg"

export default function Projects() {
  return (
    <section>
      <Carousel className="project-carousel">
        <Carousel.Item interval={2000} className="carousel-item">
          <img
            className="d-block w-100"
            src={mountain1}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-item-caption">
            <p>Cardinal AR</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} className="carousel-item">
          <img
            className="d-block w-100"
            src={mountain2}
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-item-caption">
            <p>Life-Extend</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} className="carousel-item">
          <img
            className="d-block w-100"
            src={mountain3}
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-item-caption">
            <p>Trust Admin App</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="projects-panel">
        <p>
          Projects
        </p>
        <ul className="projects">
          <li className="project">Cardinal AR</li>
          <li className="project">Chirper App</li>
          <li className="project">Equipment Checkout System</li>
          <li className="project">Immersive Learning Brochure</li>
          <li className="project">Life-Extend</li>
          <li className="project">Philosophy Outreach Site</li>
          <li className="project">Project Dashboard</li>
          <li className="project">Remote Teaching Site</li>
          <li className="project">Trust Admin App</li>
          <li className="project">Writing Challenge Site</li>
        </ul>
      </div>
    </section>
  )
}
