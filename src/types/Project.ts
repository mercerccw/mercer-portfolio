import { ProgrammingLanguage } from "./ProgrammingLanguage"

export interface Project {
  name : string,
  description : string,
  type : string,
  featured: boolean,
  languages : Array<ProgrammingLanguage>
}