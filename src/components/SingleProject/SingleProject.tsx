import React from "react"
import { Project } from "../../types/Project"

export const SingleProject = (project: Project) => {
  return (
    <div className="card">
      <img className="card-img-top" src={project.thumbnail} alt={project.name} />
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.type}</p>
        {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
      </div>
    </div>
  )
}