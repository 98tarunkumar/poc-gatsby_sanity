import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
// color:0340DD
// bg

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityHeader {
        edges {
          node {
            logoImage {
              asset {
                url
                gatsbyImageData
              }
            }

            navlinks
          }
        }
      }
    }
  `)
  var navv = ""
  return (
    <header
      style={{
        background: "white",
        height: "150px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          width: "100%",
          padding: `1.45rem 1.0875rem`,
          display: "flex",
          alignItems: "center",
        }}
      >
        {data.allSanityHeader.edges.map(({ node: head }) => (
          <>
            <div style={{ width: "20%" }}>
              <Link to="/">
                <GatsbyImage
                  style={{
                    width: "200px",
                    height: "200px",
                    marginLeft: "10%",
                    marginTop: "1.5rem",
                  }}
                  image={head.logoImage.asset.gatsbyImageData}
                />
              </Link>
            </div>
            <div style={{ width: "50%" }}></div>
            <div
              style={{
                width: "30%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              {head.navlinks.map(nav => (
                <div
                  style={{
                    color: "#47525E",
                    fontFamily: "Lato",
                    fontSize: "18px",
                    lineHeight: "62px",
                    width: "78px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ display: "none" }}>
                    {nav === "Home" ? (navv = "") : (navv = nav)}
                  </div>
                  <Link
                    style={{ color: "#47525E", textDecoration: "none" }}
                    to={`/${navv.toLowerCase()}`}
                  >
                    {nav}
                  </Link>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
