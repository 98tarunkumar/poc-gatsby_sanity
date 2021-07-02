/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
exports.createPages= async ({actions,graphql})=>{
    const results = await graphql(`
    {
      allSanityProduct {
        edges {
          node {
            id
          }
        }
      }
      }
      
    `);
      console.log(Object.keys(results));

    const products=results.data.allSanityProduct.edges.map(({node})=>node);


    products.forEach(product=>{
        actions.createPage({
            path:product.id,
            component:path.resolve('./src/templates/product.js'),
            context:{
                id:product.id
            }
        })
    })

    
}

//soc 