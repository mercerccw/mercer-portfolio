import { Project } from "../types/Project"
import { IHttpClientRequestParameters} from "./HttpClient"
import { httpClient } from "./HttpClient"

export class ProjectHandler {

  getProjects(): Promise<Project[]> {
    const getParameters: IHttpClientRequestParameters<any> = {
      url: 'projects.json',
      requiresToken: false
    }
    return httpClient.get<Project[]>(getParameters)
  }
}

