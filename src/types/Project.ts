import { Tool } from "./Tool"

export interface Project {
  name : string,
  description : string,
  role: string,
  type : string,
  featured: boolean,
  thumbnail: string,
  tools : Array<Tool>
}