import React, { useEffect, useState } from "react"
import "./Projects.scss"
import Carousel from "react-bootstrap/cjs/Carousel"
import { Project } from "../../types/Project"
import { ProjectHandler } from "../../api"
// import _ from "lodash"
import { ProjectCard } from "../ProjectCard"
import { Link } from "react-router-dom"
import { Footer } from "../Footer"
import loading from "../../images/loading.gif"


export const Projects = (props) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    ProjectHandler.getProjects().then((projects) => {
      setProjects(projects)
      setIsLoading(false)
      window.scrollTo(0, 0)
    })
  }, [])

  return (
    projects &&
    <div>
      <section className="projects-container">
        <Carousel className="project-carousel">
          {
            projects.map((project) => {
              if (project.featured) {
                return (
                  <Carousel.Item interval={2000} className="carousel-item" key={project.id}>
                    <Link to={`/projects/${project.id}`}>
                      <img
                        className="d-block w-100"
                        src={project.thumbnail}
                        alt={project.name}
                      />
                      <Carousel.Caption className="carousel-item-caption">
                        <p>{project.name}</p>
                      </Carousel.Caption>
                    </Link>
                  </Carousel.Item>
                )
              }
              return null
            })
          }
        </Carousel>
        <div className="projects-panel">
          <ul className="projects">
            {
              projects.map((project) => {
                return (
                  <li className="card project" key={project.id}>
                    <ProjectCard id={project.id}
                                 name={project.name}
                                 description={project.description}
                                 role={project.role}
                                 featured={project.featured}
                                 tools={project.tools}
                                 thumbnail={project.thumbnail}
                                 type={project.type}
                                 languages={project.languages}
                                 links={project.links} />
                  </li>

                )
              })
            }
          </ul>
        </div>
      </section>
      {
        isLoading && <img src={loading} alt="" width="100px" style={{
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 1000,
          position: "absolute"
        }} />
      }
      {
        !isLoading && <Footer />
      }
    </div>

  )
}
