import React, { useEffect, useState } from "react"
import { Project } from "../../types/Project"
import { Link, useParams } from "react-router-dom"
import { ProjectHandler } from "../../api"

export const SingleProject = () => {
  const [project, setProject] = useState<Project>()
  const projectHandler = new ProjectHandler()
  let { projectId } = useParams()
  useEffect(() => {
    projectHandler.getSingleProject(projectId).then((project) => {
      console.log(project.id)
      setProject(project)
    })
  }, [projectHandler])

  return (
    <section>
      hello
      {project &&
      <div>
        {project.id}
      </div>}
    </section>

  )
}