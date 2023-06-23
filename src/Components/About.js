import './About.css';
import Collapsible from './Collapsible';
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";


const About = () => {
   return ( 
      <div className="About">
         <div className="header">
            <span className="header-text">
               <h1>Laura Swart</h1>
               <p>R&D Software Engineer and Embedded Developer</p>
               <a rel="stylesheet" href="https://www.linkedin.com/in/laura-r-swart/"><AiFillLinkedin size={40}/></a>
               <a rel="stylesheet" href="https://github.com/lrswart/laura-website/"><AiFillGithub size={40}/></a>
            </span>            
         </div>
         <div className="about-me-panel">
            <div className="about-me-summary">
               <h4 className='about-me-title'>About me</h4>
               <p className='about-me-content'>
                <b>Hello</b>, I am an embedded software developer with over five years of experience in the field. 
                I have a strong background in C# and C++ programming. I am the lead hardware
                control engineer and I develop along side an interdisciplinary team of hardware, FPGA, and production engineers. 
               </p>              
            </div>
            <div className="about-me-data">
               <h4 className='about-me-basic'>Basic Information</h4>
               <ul className='about-me-list'>
                  <li>Age: 27</li>
                  <li>Home: Santa Rosa, CA</li>
                  <li>Email: lauraswart24@gmail.com</li>
                  <li>Phone: (253) 225-4804</li>
               </ul>
            </div>

         </div>
         <div className="professional-skills">
            <h3 className='professional-skills-title'>Professional Skills</h3>
            <ul className="skills">
               <li>C#</li>
               <li>Embedded Development</li>
               <li>Hardware Control</li>
               <li>Application Dev</li>
            </ul>
            <ul className="skills-more">
               <li>Organizational Leadership</li>
               <li>React</li>
               <li>JavaScript</li>
               <li>HTML</li>
            </ul>

         </div>

         <div className="projects">
            <h3 className='projects-title'>Projects</h3>
            <div className="project-content">
            <Collapsible label="SkyFox">
               <p>
                  The collapsible component puts long sections of the information under a
                  block enabling users to expand or collapse to access its details.
               </p>
            </Collapsible>
            <hr />
            <Collapsible label="Carpool App">
               <p>
                  The collapsible component puts long sections of the information under a
                  block enabling users to expand or collapse to access its details.
               </p>
            </Collapsible>
            <hr />
            <Collapsible label="Personal Website">
               <p>
                  The collapsible component puts long sections of the information under a
                  block enabling users to expand or collapse to access its details.
               </p>
            </Collapsible>
            <hr />
            </div>
            
         </div>        

         <div className="work-expirences">
            <h3 className='work-expirence-title'>Work Experience</h3>

         </div>
         
      </div>
      
    );
}
 
export default About;