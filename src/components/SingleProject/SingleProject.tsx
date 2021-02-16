import React, { useEffect, useState } from "react"
import { Project } from "../../types/Project"
import { useParams } from "react-router-dom"
import { ProjectHandler } from "../../api"
import "./SingleProject.scss"
import loading from "../../images/loading.gif"

export const SingleProject = () => {
  const [project, setProject] = useState<Project>()
  const [isLoading, setIsLoading] = useState(true);
  let { projectId } = useParams()

  useEffect(() => {
    ProjectHandler.getSingleProject(projectId).then((project) => {
      setProject(project)
      setIsLoading(false)
    })
  }, [projectId])

  return (
    <section className="single-project-container">
      {
        isLoading && <img src={loading} alt="" width="100px" style={{
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 1000,
          position: "absolute",
          marginTop: "20px"
        }} />
      }
      {
        project &&
        <section className="single-project">
          <div className="hero-container">
            <img src={project.thumbnail} alt="thumbnail" />
            <h1 className="title">{project.name}</h1>
          </div>
          <div className="project-information-container">
            <h3>Background</h3>
            <h5>{project.type}</h5>
            <hr />
            <p><strong>Role:</strong> {project.role}</p>
            <p className="project-description">
              {project.description}
            </p>
            {
              project.tools.length !== 0 &&
              <div>
                <h3>Tools</h3>
                <hr />
                <ul className="tools">
                  {
                    project.tools.map((tool) => {
                      return (
                        <li key={tool.name}>{tool.name}</li>
                      )
                    })
                  }
                </ul>
              </div>
            }
            {
              project.languages.length !== 0 &&
              <div>
                <h3>Languages</h3>
                <hr />
                <ul className="languages">
                  {
                    project.languages.map((language) => {
                      return (
                        <li key={language.name}>{language.name}</li>
                      )
                    })
                  }
                </ul>
              </div>

            }
            {
              project.links.length !== 0 &&
              <div>
                <h3>Links</h3>
                <hr />
                <ul className="links">
                  {
                    project.links.map((link) => {
                      return (
                        <li key={link.name}><a href={link.link}>{link.name}</a></li>
                      )
                    })
                  }
                </ul>
              </div>
            }
          </div>
        </section>
      }
    </section>
  )
}