import React, { useEffect, useState } from "react"
import "./Projects.scss"
import Carousel from "react-bootstrap/cjs/Carousel"
import { Project } from "../../types/Project"
import { ProjectHandler } from "../../api"
// import _ from "lodash"
import { SingleProject } from "../SingleProject"

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const projectHandler = new ProjectHandler()

  useEffect(() => {
    projectHandler.getProjects().then((projects) => {
      setProjects(projects)
    })
  }, [projectHandler])

  return (
    projects &&
    <section>
      <Carousel className="project-carousel">
        {
          projects.map((project) => {
            if (project.featured) {
              return (
                <Carousel.Item interval={2000} className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={project.thumbnail}
                    alt={project.name}
                  />
                  <Carousel.Caption className="carousel-item-caption">
                    <p>{project.name}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            }
            return null
          })
        }
      </Carousel>
      <div className="projects-panel">
        {/*<h1>*/}
        {/*  Projects*/}
        {/*</h1>*/}
        <hr />
        <div className="projects">
          {
            projects.map((project) => {
              return (
                <SingleProject
                  name={project.name}
                  description={project.description}
                  role={project.role}
                  featured={project.featured}
                  tools={project.tools}
                  thumbnail={project.thumbnail}
                  type={project.type} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
