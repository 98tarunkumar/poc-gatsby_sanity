import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import "./styles.scss"
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
    <header className="header-wrapper">
      <div className="header-div">
        {data.allSanityHeader.edges.map(({ node: head }) => (
          <>
            <div style={{ width: "20%" }}>
              <Link to="/">
                <GatsbyImage
                  className="header-img"
                  image={head.logoImage.asset.gatsbyImageData}
                />
              </Link>
            </div>
            
            <div className="header-container">
              {head.navlinks.map(nav => (
                <div className="header_linktext">
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
