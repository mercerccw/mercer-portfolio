import { Project } from "../types/Project"
import { IHttpClientRequestParameters} from "./HttpClient"
import { httpClient } from "./HttpClient"

export abstract class ProjectHandler {

  static getProjects(): Promise<Project[]> {
    const getParameters: IHttpClientRequestParameters<any> = {
      url: `${process.env.REACT_APP_API_BASE_URL}/projects`,
      requiresToken: false
    }
    return httpClient.get<Project[]>(getParameters)
  }

  static getSingleProject(projectId : number): Promise<Project> {
    const getParameters: IHttpClientRequestParameters<any> = {
      url: `${process.env.REACT_APP_API_BASE_URL}/projects/${projectId}`,
      requiresToken: false
    }
    return httpClient.get<Project>(getParameters)
  }
}

