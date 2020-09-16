import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import resumeStyles from './resume.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const Resume = () => {
  const data = useStaticQuery(graphql`
    query ResumeQuery {
      contentfulResumePage {
        pageTitle
        subTitle
        location
      }
      
      contentfulResumeAbout {
        paragraph {
          json
        }
        title
      }

      allContentfulResumeProfessionalExperienceCompany {
        edges {
          node {
            companyName
            id
            position {
              position
              id
              startDate(formatString: "MM'YY")
              endDate(formatString: "MM'YY")
              responsibilities {
                json
              }
              keySpecs {
                json
              }
            }
            order
          }
        }
      }

      allContentfulResumeEducationUniversity {
        edges {
          node {
            id
            universityName
            school {
              endDate(formatString: "MM'YY")
              school
              startDate(formatString: "MM'YY")
              id
              responsibilities {
                json
              }
            }
          }
        }
      }
      
      contentfulPageModel(contentful_id: {eq: "7yY1O7UqKSOwuTPezI6rrZ"}) {
        pageModelReferences {
          ... on ContentfulResumeTechnicalSkillsSet {
            skillSetTitle
            order
            skillsReference {
              skill
              id
            }
          }
        }
      }
    }
  `)

  // console.log(data)

  return (
    <Layout>
      <SEO
        title="Online Resume of RJP"
        description="Online resume of full-stack developer Ryan Peterson." />

      <h1 className={resumeStyles.pageTitle}>{data.contentfulResumePage.pageTitle}</h1>
      <h3>{data.contentfulResumePage.subTitle}</h3>
      <h6>{data.contentfulResumePage.location}</h6>

      <section className={resumeStyles.aboutSection}>
        <h2>{data.contentfulResumeAbout.title}</h2>
        <p>{data.contentfulResumeAbout.paragraph.json.content[0].content[0].value}</p>
      </section>

      <section className={resumeStyles.skillsSection}>
        <h2>Technical Skills</h2>
        
        <div className={resumeStyles.skillsBlock}>
          {data.contentfulPageModel.pageModelReferences.map((ref, index) => {
            return (
              <div className={resumeStyles.area}>
                <h5>{ref.skillSetTitle}</h5>
                
                <ul>
                  {ref.skillsReference.map((skill) => {
                    return <li key={skill.id}>{skill.skill}</li>
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      <section>
        <h2>Professional Experience</h2>

        {data.allContentfulResumeProfessionalExperienceCompany.edges.map((company) => {
          return (
            <div key={company.node.id} className={resumeStyles.item}>
              <h3 className={resumeStyles.company}>{company.node.companyName}</h3>

              {company.node.position.map((pos) => {
                return (
                  <div key={pos.id} className={resumeStyles.sub}>
                    <h4 className={resumeStyles.position}>{pos.position}</h4>
                    <h6 className={resumeStyles.empDates}>{pos.startDate} &mdash; {pos.endDate}</h6>
                    
                    <ul>
                      {pos.responsibilities.json.content[0].content.map((resp, index) => {
                        return <li key={index}>{resp.content[0].content[0].value}</li>
                      })}
                    </ul>
                    
                    <div className={resumeStyles.keySpecs}>
                      <h6>Key Specs:</h6>
                      <ul className="specs">
                        {pos.keySpecs.json.content[0].content.map((spec, index) => {
                          return <li key={index}>{spec.content[0].content[0].value}</li>
                        })}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        }).reverse()}
      </section>
      
      <section>
        <h2>Education</h2>

        {data.allContentfulResumeEducationUniversity.edges.map((univ) => {
          return (
            <div key={univ.node.id} className={resumeStyles.item}>
              <h3 className={resumeStyles.company}>{univ.node.universityName}</h3>

              {univ.node.school.map((sch) => {
                return (
                  <div key={sch.id} className={resumeStyles.sub}>
                    <h4 className={resumeStyles.position}>{sch.school}</h4>
                    <h6 className={resumeStyles.empDates}>{sch.startDate} &mdash; {sch.endDate}</h6>

                    <ul>
                      {sch.responsibilities.json.content[0].content.map((resp, index) => {
                        return <li key={index}>{resp.content[0].content[0].value}</li>
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export default Resume
