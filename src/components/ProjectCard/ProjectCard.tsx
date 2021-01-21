import React from "react"
import { Project } from "../../types/Project"
import { Link, Route } from "react-router-dom"
import "./ProjectCard.scss"
import { SingleProject } from "../SingleProject"

export const ProjectCard = (project: Project, match) => {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <img className="card-img-top" src={project.thumbnail} alt={project.name} />
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.type}</p>
      </div>
    </Link>
  )
}