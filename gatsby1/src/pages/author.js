import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
export const query = graphql`
  {
    allSanityAuthor {
      edges {
        node {
          name
          slug {
            current
          }
          bio {
            children {
              text
            }
            _rawChildren
          }
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

const Author = ({ data }) => {
  return (
    <Layout>
      <Seo title="Author" />
      <h1 style={{ margin: "0 auto", marginTop: "1rem", textAlign: "center" }}>
        Author
      </h1>
      <article
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {data.allSanityAuthor.edges.map(({ node: author }) => (
          <article
            key={author.slug.current}
            style={{ flex: " 2 45%", maxWidth: "45%", margin: "1rem" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <GatsbyImage
                style={{ width: "100px", height: "100px" }}
                image={author.image.asset.gatsbyImageData}
              />
              <Link to={author.slug.current}>
                {" "}
                <h2 style={{ marginLeft: "1rem" }}>{author.name}</h2>
              </Link>
            </div>
          </article>
        ))}
      </article>
    </Layout>
  )
}

export default Author
