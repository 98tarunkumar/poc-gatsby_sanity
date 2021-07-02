// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './documents/category'
import post from './documents/post'
import author from './documents/author'
import projects from './documents/projects'
import header from './documents/header'
import footer from './documents/footer'
import products from './documents/products'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    category,
    projects,
    header,
    footer,
    products,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
})



// ,
//     {
//       "name":"part:@sanity/desk-tool/structure",
//       "path": "./deskStructure.js"
//     }