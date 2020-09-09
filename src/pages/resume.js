import React, { Component } from 'react'
import resumeStyles from './resume.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

class Resume extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Online Resume of RJP"
          description="Online resume of full-stack developer Ryan Peterson." />

        <h1>Ryan Peterson</h1>
        <h3>Full Stack Developer</h3>
        <h6>Greater Chicago Area</h6>

        <section className={`${resumeStyles.aboutSection}`}>
          <h2>About</h2>
          <p>A full stack developer with 15+ years of experience designing, developing, and implementing web applications through logical, clean code. Provides years of expertise in responsive design and development across browsers and devices. Possesses the ability to understand client expectations and requirements while collaborating with them on a personal level. Vast experience within design realm, coupled with expertise in development creates a unique eye for continuity and best practices throughout projects. In-depth maintenance of code as well as testing thoroughly throughout. Leader among team collaborations.</p>
        </section>

        <section>
          <h2>Professional Experience</h2>

          <div className={resumeStyles.item}>
            <h3 className={resumeStyles.company}>Connections Marketing</h3>
            <div className={resumeStyles.sub}>
              <h4 className={resumeStyles.position}>Lead Front End Developer</h4>
              <h6 className={resumeStyles.empDates}>02'14 &mdash; 07'20</h6>
              <ul>
                <li>Led development of numerous projects while determining code base language and CMS (Content Management System) best suited for clients' needs</li>
                <li>Closely worked with internal designers and project managers to fully understand scope of creative assets to produce applications that match client requirements</li>
                <li>Ensured ease-of-use for clients within various CMS back-ends while maintaining professional, best practice code to ensure all developers could understand structure</li>
                <li>Built custom, responsive web applications for clients to ensure user retention</li>
                <li>Use of frameworks and libraries to boost trafﬁc to client sites while maintaining a small footprint</li>
                <li>Co-creation of company-wide client acquisition and development process with a focus on gathering all necessary requirements for project while planning for out-of-scope items</li>
              </ul>
              <div className={resumeStyles.keySpecs}>
                <h6>Key Specs:</h6>
                <ul class="specs">
                  <li>WordPress</li>
                  <li>JavaScript jQuery</li>
                  <li>LESS</li>
                  <li>Umbraco</li>
                  <li>C# Razor syntax</li>
                  <li>Responsive Design</li>
                  <li>JSON</li>
                  <li>API</li>
                  <li>Bootstrap</li>
                  <li>UI/UX</li>
                  <li>Client Communications</li>
                </ul>
              </div>
            </div>
            <div className={resumeStyles.sub}>
              <h4 className={resumeStyles.position}>Contract Programmer / Developer</h4>
              <h6 className={resumeStyles.empDates}>12'13 &mdash; 02'14</h6>
              <ul>
                <li>Co-creation of company-wide client acquisition and development process with a focus on gathering all necessary requirements for project while planning for out-of-scope items</li>
              </ul>
            </div>
          </div>

          <div className={resumeStyles.item}>
            <h3 className={resumeStyles.company}>HY Connect</h3>
            <div className={resumeStyles.sub}>
              <h4 className={resumeStyles.position}>Contract Web Developer</h4>
              <h6 className={resumeStyles.empDates}>10'13 &mdash; 11'13</h6>
              <ul>
                <li>Member of development team working on a project for a well-known, international company. Responsible for desktop, tablet and mobile styling in Drupal framework, as well as template file adjustments. </li>
              </ul>
              <div className={resumeStyles.keySpecs}>
                <h6>Key Specs:</h6>
                <ul class="specs">
                  <li>Drupal</li>
                  <li>jQuery</li>
                  <li>Responsive Design</li>
                  <li>UI/UX</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={resumeStyles.item}>
            <h3 className={resumeStyles.company}>SEM Visibility</h3>
            <div className={resumeStyles.sub}>
              <h4 className={resumeStyles.position}>Sr. Web Developer</h4>
              <h6 className={resumeStyles.empDates}>06'11 &mdash; 09'13</h6>
              <ul>
                <li>Key role in implementing responsive design and development to applications with ﬁxed-widths and tabled formats</li>
                <li>Client communication and understanding of technical requirements led to retention and production of new custom website built within WordPress</li>
                <li>Successfully integrated payment gateways and a knowledge of ecommerce platforms as sole developer during transition period</li>
                <li>Full-time remote working led to self-starting meetings with superiors as well as colleagues within other departments to gain knowledge and cohesion for projects and deadlines</li>
              </ul>
              <div className={resumeStyles.keySpecs}>
                <h6>Key Specs:</h6>
                <ul class="specs">
                  <li>Magento</li>
                  <li>X-Cart</li>
                  <li>HTML / CSS</li>
                  <li>Responsive Design</li>
                  <li>Client Communications</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={resumeStyles.item}>
            <h3 className={resumeStyles.company}>Dealer HD</h3>
            <div className={resumeStyles.sub}>
              <h4 className={resumeStyles.position}>Web Designer</h4>
              <h6 className={resumeStyles.empDates}>06'10 &mdash; 09'11</h6>
              <ul>
                <li>Created stylized mock-ups for car dealership websites based on a pre-themed structure of template ﬁles</li>
                <li>Incorporated jQuery for DOM manipulation into web applications to alter layouts</li>
                <li>Spearheaded project for WordPress based company podcast; design-to-launch lead for all aspects of application</li>
              </ul>
              <div className={resumeStyles.keySpecs}>
                <h6>Key Specs:</h6>
                <ul class="specs">
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>WordPress</li>
                  <li>JavaScript / jQuery</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={resumeStyles.item}>
            <h3 className={resumeStyles.company}>envisionit media</h3>
            <div className={resumeStyles.sub}>
              <h4 className={resumeStyles.position}>Web Developer</h4>
              <h6 className={resumeStyles.empDates}>03'08 &mdash; 06'10</h6>
              <ul>
                <li>Cey role in revamping structure of websites from table-based to div-based</li>
                <li>Integral part of development team working as liaison with design department</li>
                <li>Filled in as designer on numerous projects due to background in graphics</li>
                <li>Maintained email marketing design and builds for clients </li>
              </ul>
              <div className={resumeStyles.keySpecs}>
                <h6>Key Specs:</h6>
                <ul class="specs">
                  <li>Joomla!</li>
                  <li>Flash</li>
                  <li>ActionScript</li>
                  <li>Photoshop</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={resumeStyles.item}>
            <h3 className={resumeStyles.company}>Takeda Pharmaceuticals</h3>
            <div className={resumeStyles.sub}>
              <h4 className={resumeStyles.position}>Medical Graphics Technologist</h4>
              <h6 className={resumeStyles.empDates}>01'05 &mdash; 03'08</h6>
              <ul>
                <li>Worked with all senior members of MSA (Medical & Scientific Affairs) department to accomplish interconnected SMART program of audio/video recordings of expert clinician presentations; distributed through SMART intranet</li>
                <li>Oversaw all web activity for MSA department</li>
                <li>Captained design, planning, and development plan of a Flash-based, ActionScript driven website for MSA and RMSA (Regional Medical & Scientific Affairs) interactive biography site for each team member</li>
              </ul>
              <div className={resumeStyles.keySpecs}>
                <h6>Key Specs:</h6>
                <ul class="specs">
                  <li>Flash</li>
                  <li>ActionScript</li>
                  <li>Photoshop</li>
                  <li>HTML / CSS</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2>Education</h2>

          <div className={resumeStyles.item}>
            <h3 className={resumeStyles.company}>Purdue University</h3>
            <div className={resumeStyles.sub}>
              <h4 className={resumeStyles.position}>Computer Graphics Technology</h4>
              <h6 className={resumeStyles.empDates}>'99 &mdash; '04</h6>
              <ul>
                <li>Bachelor of Science</li>
                <li>Interactive Multimedia &amp; Design specialty</li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Resume
