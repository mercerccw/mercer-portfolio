import React, { useEffect, useState } from "react"
import { Project } from "../../types/Project"
import { useParams } from "react-router-dom"
import { ProjectHandler } from "../../api"

export const SingleProject = () => {
  const [project, setProject] = useState<Project>()
  let { projectId } = useParams()

  useEffect(() => {
    ProjectHandler.getSingleProject(projectId).then((project) => {
      console.log(project)
      setProject(project)
    })
  }, [projectId])

  return (
    <section>
      {project &&
      <div>
        {project.name}
      </div>}
    </section>

  )
}