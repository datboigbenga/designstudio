import {Dashboard} from '../../components/DashboardLayout/dashboard'
import './about.css'

export const About = () => {
  return (
    <Dashboard>
      <div className="about">
        <div className="about__header"> 
          <h1>About Unilag Design Studio</h1>
          <p>The UNILAG Design Studio is a collaborative innovation space within the University of Lagos (Unilag) campus, serving as a hub for students, faculty, and researchers. It focuses on exploring, developing, and implementing engineering solutions, particularly in the healthcare sector. The studio provides access to advanced tools and resources for prototyping, design, testing, and iteration, fostering innovation and hands-on learning. </p>
        </div>
        {/* <div> */}
          {/* <h1>Key Features</h1> */}
          <div className="about__features">
            <div className="about__features__header">
              <h1>
              Engineering Focus:
            </h1>
            <p>
              It emphasizes engineering design and development, particularly in areas like healthcare.  
            </p>
            </div>
            <div className="about__features__header">
              <h1>
              Mentorship and Expertise:
            </h1>
            <p>
              The studio has strong ties with Rice University, offering mentorship and expertise to interns and participants.   
            </p>
            </div>
            <div className="about__features__header">
              <h1>
              Collaborative Environment:
            </h1>
            <p>
              It fosters a dynamic environment for multidisciplinary projects, encouraging creativity, experimentation, and hands-on learning.   
            </p>
            </div> 
            <div className="about__features__header">
              <h1>
              Call to Action:
            </h1>
            <p>
              The studio encourages participants to use their newly developed skills to make a positive impact on society and the health sector.    
            </p>
            </div>
            <div className="about__features__header">
              <h1>
              Innovation Hub:
            </h1>
            <p>
              The studio is designed to be a collaborative space where individuals from different backgrounds can work together on innovative projects. 
            </p>
            </div>
            <div className="about__features__header">
              <h1>
              Hands-on Learning:
            </h1>
            <p>
              The studio provides access to tools and resources that enable participants to engage in practical projects and learn through experimentation. 
            </p>
            </div>
            <div className="about__features__header">
              <h1>
              Focus on Healthcare:
            </h1>
            <p>
              The studio has a strong focus on global health, with a particular emphasis on solutions for newborn care, as highlighted by the Rice360 summer internship program.  
            </p>
            </div>
            <div className="about__features__header">
              <h1>
              Summer Internship Program:
            </h1>
            <p>
              The studio actively engages with the community through summer internship programs, providing opportunities for students and recent graduates to work on real-world projects.   
            </p>
            </div>
          </div>
        {/* </div> */}
      </div>
    </Dashboard>
  )
}
