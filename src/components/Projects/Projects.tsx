import React, { useEffect, useState } from "react"
import "./Projects.scss"
import Carousel from "react-bootstrap/cjs/Carousel"
import { Project } from "../../types/Project"
import { ProjectHandler } from "../../api"
// import _ from "lodash"
import { ProjectCard } from "../ProjectCard"
import { Route, Switch, useParams, useRouteMatch, Link } from "react-router-dom"
import { SingleProject } from "../SingleProject"
import { Home } from "../Home"

export const Projects = (props) => {
  const [projects, setProjects] = useState<Project[]>([])
  const projectHandler = new ProjectHandler()
  let { path, url } = useRouteMatch()

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
        <hr />
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
                               type={project.type} />
                </li>

              )
            })
          }
        </ul>
      </div>
    </section>
  )
}
