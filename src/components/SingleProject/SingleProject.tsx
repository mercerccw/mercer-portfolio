import React, { useEffect, useState } from "react"
import { Project } from "../../types/Project"
import { useParams } from "react-router-dom"
import { ProjectHandler } from "../../api"
import "./SingleProject.scss"

export const SingleProject = () => {
  const [project, setProject] = useState<Project>()
  let { projectId } = useParams()
  let projectContainerStyle = {};
  useEffect(() => {
    ProjectHandler.getSingleProject(projectId).then((project) => {
      setProject(project)
      projectContainerStyle = {
        backgroundImage: `url('${project.thumbnail}')`
      }
    })
  }, [projectId])

  return (
    <section className="single-project">
      {
        project &&

        <div className="hero-container" style={projectContainerStyle}>

          {project.thumbnail}
        </div>
      }
    </section>
  )
}