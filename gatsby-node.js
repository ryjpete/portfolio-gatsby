// const path = require('path')
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `contentfulWorkCategory`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })

//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//       allContentfulWorkCategory {
//         edges {
//           node {
//             workCategorySlug
//           }
//         }
//       }
//     }
//   `)

//   result.data.allContentfulWorkCategory.edges.forEach(({ node }) => {
//     createPage({
//       path: node.workCategorySlug,
//       component: path.resolve(`./src/templates/workCategory.js`),
//       context: {
//         slug: node.workCategorySlug
//       }
//     })
//   })
// }
const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.typ === 'ContentfulProjectModel') {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulProjectModel {
        edges {
          node {
            client
            projectTitle
            contentful_id
          }
        }
      }
    }
  `)

  result.data.allContentfulProjectModel.edges.forEach(({ node }) => {
    const clientStr = node.client.toLowerCase().replace(' ', '-')
    const projectStr = node.projectTitle.toLowerCase().replace(' ', '-')
    const url = `/work/${clientStr}-${projectStr}`

    createPage({
      path: url,
      component: path.resolve(`./src/templates/ProjectTemplate/ProjectTemplate.js`),
      context: {
        slug: url,
        id: node.contentful_id,
      },
    })
  })
}