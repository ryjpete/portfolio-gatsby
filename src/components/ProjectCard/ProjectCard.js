import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import { graphql } from 'gatsby'
import { myContext } from '../../../provider'
import { motion } from 'framer-motion'

import styles from './ProjectCard.module.less'

const getContrast = (hexcolor) => {
  // remove #
  if (hexcolor.slice(0,1) === '#') {
    hexcolor = hexcolor.slice(1)
  }

  // make 6 character hexcolor
  if (hexcolor.length === 3) {
    hexcolor = hexcolor.split('').map((hex) => {
      return hex + hex
    })
      .join('')
  }

  // convert to rgb
  const r = parseInt(hexcolor.substr(0,2),16)
  const g = parseInt(hexcolor.substr(2,2),16)
  const b = parseInt(hexcolor.substr(4,2),16)

  // get YIQ ratio
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000

  // check contrast
  return (yiq >= 128) ? '#202020' : '#ffffff'
}

const circleMotion = {
  rest: {
    backgroundColor: '#ffffff',
  },
  hover: (custom) => ({
    borderColor: custom,
    borderRadius: ['50%','45%','5%'],
    rotate: [0,180,-360],
    scale: [1,0.75,1.2],
    transition: {
      duration: 0.8,
      ease: 'backOut',
    },
  }),
}

const clientMotion = {
  rest: {
    top: '50%',
    y: '-50%',
  },
  hover: {
    color: '#202020',
    left: ['0%','0%','-80%'],
    rotate: [0,-90,-90],
    transition: {
      delay: 0.4,
      duration: 0.6,
      ease: 'backOut',
    },
  },
}

const backdropMotion = {
  rest: {
    top: '1%',
    right: '1%',
    bottom: '1%',
    left: '100%',
    visibility: 'hidden',
  },
  hover: {
    left: ['100%','20%'],
    visibility: 'visible',
    transition: {
      delay: 0.7,
      duration: 0.4,
      ease: 'backOut',
    },
  },
}

const projectMotion = {
  rest: {
    bottom: '5%',
    left: '0%',
  },
  hover: (custom) => ({
    color: custom,
    left: ['0%','0%','0%','0%','0%','0%','36%'],
    bottom: ['5%','5%','5%','5%','5%','51%','51%'],
    transition: {
      duration: 1.2,
      ease: 'backOut',
    },
  })
}

const dateMotion = {
  rest: {
    display: 'none',
    opacity: 0,
  },
  hover: (custom) => ({
    color: custom,
    display: 'block',
    opacity: [0,1],
    bottom: ['2%','90%'],
    transition: {
      delay: 1,
      duration: 0.3,
      ease: 'backInOut',
    },
  }),
}

const shortDescMotion = {
  rest: {
    top: '100%',
  },
  hover: {
    top: '54%',
    transition: {
      delay: 1,
      duration: 0.2,
      ease: 'backOut',
    },
  },
}

const handleCardClick = id => {
  // alert(id)
  alert('This is coming soon')
}

const ProjectCard = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allContentfulProjectModel {
        edges {
          node {
            projectTitle
            projectDate(formatString: "YYYY")
            client
            contentful_id
            primaryColor
            shortDescription
          }
        }
      }
    }
  `)
  // console.log(data)
  
  return (
    <myContext.Consumer>
      {context => {
        return (
          <div className={styles.workBlock}>
            {data.allContentfulProjectModel.edges.map((item) => {
              return (
                <motion.div
                  key={item.node.contentful_id}
                  className={styles.item}
                  initial='rest'
                  whileHover='hover'
                  animate='rest'
                >
                  <motion.div
                    className={styles.itemLink}
                    style={{
                      borderColor: `${context.pageTitleColor}`
                    }}
                    custom={item.node.primaryColor}
                    variants={circleMotion}
                    onClick={() => { handleCardClick(item.node.contentful_id) }}
                  >

                    <motion.h2
                      className={styles.itemClient}
                      style={{
                        color: `${context.pageTitleColor}`
                      }}
                      variants={clientMotion}
                    >
                      {item.node.client}
                    </motion.h2>

                    <motion.div
                      className={styles.itemBackdrop}
                      style={{
                        backgroundColor: `${item.node.primaryColor}`
                      }}
                      variants={backdropMotion}
                    >
                      <motion.div
                        className={styles.itemShortDesc}
                        style={{
                          color: `${getContrast(item.node.primaryColor)}`
                        }}
                        variants={shortDescMotion}
                      >
                        <p
                          className={styles.shortDesc}
                          style={{
                            color: `${getContrast(item.node.primaryColor)}`
                          }}
                        >
                          {item.node.shortDescription}
                        </p>
                      </motion.div>
                    </motion.div>
                    
                    <motion.h4
                      className={styles.itemProject}
                      style={{
                        color: `${context.pageTitleColor}`
                      }}
                      custom={getContrast(item.node.primaryColor)}
                      variants={projectMotion}
                    >
                      {item.node.projectTitle}
                    
                    </motion.h4>
                    
                    <motion.h4
                      className={styles.itemDate}
                      custom={getContrast(item.node.primaryColor)}
                      variants={dateMotion}
                    >
                      {item.node.projectDate}
                    </motion.h4>

                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        )
      }}
    </myContext.Consumer>
  )
}

export default ProjectCard
