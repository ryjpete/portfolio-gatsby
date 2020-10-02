import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { myContext } from '../../../provider'
import { motion } from 'framer-motion'

import styles from './ProjectCard.module.less'

// const getContrast = (hexcolor) => {
//   // remove #
//   if (hexcolor.slice(0,1) === '#') {
//     hexcolor = hexcolor.slice(1)
//   }

//   // make 6 character hexcolor
//   if (hexcolor.length === 3) {
//     hexcolor = hexcolor.split('').map((hex) => {
//       return hex + hex
//     })
//       .join('')
//   }

//   // convert to rgb
//   const r = parseInt(hexcolor.substr(0,2),16)
//   const g = parseInt(hexcolor.substr(2,2),16)
//   const b = parseInt(hexcolor.substr(4,2),16)

//   // get YIQ ratio
//   const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000

//   // check contrast
//   return (yiq >= 128) ? '#202020' : '#ffffff'
// }

const circleMotion = {
  rest: {
    borderColor: '#06d6a0',
  },
  hover: {
    borderColor: '#202020',
    borderRadius: ['50%','50%','20%'],
    rotate: [0,0,270],
    scale: [1,1.2,1.2],
    transition: {
      duration: 0.6,
      ease: 'backOut',
    },
  },
}
const h2Motion = {
  rest: {
    color: '#06d6a0',
    top: '50%',
  },
  hover: {
    color: '#202020',
    top: ['50%','50%','13%'],
    transition: {
      delay: 0.4,
      duration: 0.6,
      ease: 'backOut',
    },
  },
}

const ProjectCard = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allContentfulProjectModel {
        edges {
          node {
            projectTitle
            slug
            projectDate(formatString: "MM'YY")
            client
            contentful_id
            mainImage {
              file {
                url
              }
            }
            primaryColor
          }
        }
      }
    }
  `)
  console.log(data)
  
  return (
    <myContext.Consumer>
      {context => {
        return (
          <div className={styles.workBlock}>
            {data.allContentfulProjectModel.edges.map((item) => {
              return (
                <div
                  key={item.node.contentful_id}
                  className={styles.item}
                >
                  <motion.a
                    variants={circleMotion}
                    initial='rest'
                    whileHover='hover'
                    animate='rest'
                    className={styles.itemLink}
                    onClick={() => {
                      alert('This is on the way.')
                    }}
                  >
                    <motion.h2
                      className={styles.itemClient}
                      variants={h2Motion}
                    >
                      {item.node.client}
                    </motion.h2>
                  </motion.a>
                  {/* <h3
                    className={styles.itemTitle}
                    style={{
                      color: getContrast(`${item.node.primaryColor}`)
                    }}
                  >
                    {item.node.projectTitle}
                  </h3>
                  <h2
                    className={styles.itemClient}
                    style={{
                      color: getContrast(`${item.node.primaryColor}`)
                    }}
                  >
                    {item.node.client}
                  </h2>
                  <h4
                    className={styles.itemDate}
                    style={{
                      color: getContrast(`${item.node.primaryColor}`)
                    }}
                  >
                    {item.node.projectDate}
                  </h4> */}
                </div>
              )
            })}
          </div>
        )
      }}
    </myContext.Consumer>
  )
}

export default ProjectCard
