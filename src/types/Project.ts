import { Tool } from "./Tool"
import { Language } from "./Language"
import { Link } from "./Link"

export interface Project {
  id: number,
  name : string,
  description : string,
  role: string,
  type : string,
  featured: boolean,
  thumbnail: string,
  tools : Array<Tool>,
  languages : Array<Language>,
  links: Array<Link>
}