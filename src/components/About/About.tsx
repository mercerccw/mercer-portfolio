import React, { useEffect } from "react"
import "./About.scss"
import claytonProfilePic from "../../images/clayton-profile-pic.jpeg"
import { Footer } from "../Footer"

export const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about">
      <section className="about-container">
        <div className="profile-image-container">
          <img src={claytonProfilePic} alt="Clayton Mercer" />
        </div>
        <div className="bio-container">
          <h1>Bio</h1>
          <hr />
          <p className="bio-paragraph">My name is Clayton Mercer and I'm a Web Developer that specializes in backend
            development. I have full-stack experience, mobile experience, and cloud experience.</p>
          <div className="list-container">
            <h2>Education</h2>
            <hr />
            <h5>Ball State University</h5>
            <ul>
              <li>Bachelor of Science in Computer Science</li>
              <li>Minor in Computer Technology</li>
            </ul>
          </div>
          <div className="list-container">
            <h2>Work Experience</h2>
            <hr />
            <h5><a href="https://digitalcorps.bsu.edu/" target="_blank" rel="noopener noreferrer">Digital Corps</a></h5>
            <p>Jan 2018 - Present</p>
            <p>I worked as a full-stack and mobile developer throughout my college years. I was a Development Apprentice
              for a year until I was promoted to Development Specialist in 2019. I worked on a multitude of websites
              built in React or AngularJS with REST APIs built in the PHP SLIM framework. I worked on a couple projects
              that
              were native mobile applications with one being built with React Native and another with Unity. I also
              worked on a handful of Wordpress sites.</p>
            <p>I was trained as a project manager at the Digital Corps as well. I lead meetings, designed timelines, and
              facilitated any communication with the Corps Staff and students I was overseeing.</p>
            <h5><a href="https://lifeomic.com/" target="_blank" rel="noopener noreferrer">LifeOmic</a></h5>
            <p>Summer 2020</p>
            <p>I worked as a Software Engineering Intern at LifeOmic between my junior and senior years at Ball State. I
              worked on a handful of projects throughout my summer there such as fixing Apple HealthKit bugs in their <a
                href="https://lifeapps.io/apps/life-extend/" target="_blank" rel="noopener noreferrer">Life-Extend
                App</a>, building React components to integrate with their third-party wearable technologies, and building
              support for the <a href="https://keto-mojo.com/" target="_blank"
                                 rel="noopener noreferrer">Keto-Mojo</a> ketone and glucose tracking in LifeOmic's
              Precision Health Cloud.</p>
          </div>
          <div className="list-container">
            <h2>Programming Languages</h2>
            <hr />
            <ul>
              <li>C#</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Python</li>
              <li>SQL</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div className="list-container">
            <h2>Frameworks / Libraries</h2>
            <hr />
            <h4>Frontend</h4>
            <ul>
              <li>Angular</li>
              <li>AngularJS</li>
              <li>JavaEE</li>
              <li>React</li>
              <li>Wordpress</li>
            </ul>
            <h4>Backend</h4>
            <ul>
              <li>JavaEE</li>
              <li>NodeJS</li>
              <li>SLIM</li>
              <li>Wordpress</li>
            </ul>
            <h4>Mobile</h4>
            <ul>
              <li>React Native</li>
              <li>Unity</li>
              <li>Xamarin</li>
            </ul>
            <h4>DataBase</h4>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="list-container">
            <h2>Cloud</h2>
            <hr />
            <h4>AWS</h4>
            <ul>
              <li>Amplify</li>
              <li>AWS CLI</li>
              <li>DynamoDB</li>
              <li>EC2</li>
              <li>Elastic Beanstalk</li>
              <li>IAM</li>
              <li>Lambda</li>
              <li>RDS</li>
              <li>S3</li>
            </ul>
            <h4>Azure</h4>
            <ul>
              <li>App Services</li>
              <li>Azure Functions</li>
              <li>SQL Database</li>
            </ul>
            <h4>Google Cloud</h4>
            <ul>
              <li>Firebase</li>
              <li>FireStore</li>
            </ul>
          </div>
          <div className="list-container">
            <h2>Version Control</h2>
            <hr />
            <ul>
              <li>Git</li>
              <li>
                <ul>
                  <li>AWS CodeCommit</li>
                  <li>Azure Repos</li>
                  <li>Bitbucket</li>
                  <li>GitHub</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="list-container">
            <h2>Testing</h2>
            <hr />
            <ul>
              <li>Jest</li>
              <li>JUnit</li>
              <li>MSTest</li>
            </ul>
          </div>
          <div className="list-container">
            <h2>CI/CD</h2>
            <hr />
            <ul>
              <li>GitHub Actions</li>
              <li>Jenkins</li>
            </ul>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  )
}
