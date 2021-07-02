import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import "../components/layout.css"
import HeaderSection from "../components/headerSection"
import ProductList from "../components/productCard"
import Seemore from "../components/Seemore"
import "../components/layout.css"
export const query = graphql`
  {
    allSanityProduct(sort: { fields: name }) {
      edges {
        node {
          name
          price
          availability
          image {
            asset {
              url
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeaderSection />
    <ProductList />
    <Seemore/>
  </Layout>
)

export default IndexPage
