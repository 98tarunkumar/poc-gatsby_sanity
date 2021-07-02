import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
// color:0340DD
// bg

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityFooter {
        edges {
          node {
            row1
            row2
            name
            sideImage {
              asset {
                url
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  return (
    <footer
      style={{
        background: "#47525E",
        padding: "2rem",
        height: "337px",
        display: "flex",
        width: "100%",
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
        {data.allSanityFooter.edges.map(({ node: foot }) => (
          <>
            <div style={{ width: "20%" }}>
              {/* <GatsbyImage
                style={{
                  width: "200px",
                  height: "200px",
                }}
                image={foot.sideImage.asset.gatsbyImageData}
              /> */}
              <div
                style={{
                  width: "142px",
                  height: "186px",
                  backgroundColor: "#8190A5",
                  borderRadius: "5px",
                }}
              ></div>
            </div>
            <div
              style={{
                width: "18%",
                height: "100%",
                display: "flex",
                alignItems: "left",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              {foot.row1.map(nav => (
                <div style={{ color: "#F7F7F7",textAlign: "left" }}>{nav}</div>
              ))}
            </div>
            <div
              style={{
                width: "18%",
                height: "100%",
                display: "flex",
                alignItems: "left",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              {foot.row2.map(nav => (
                <div style={{ color: "#F7F7F7",textAlign: "left" }}>{nav}</div>
              ))}
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "-1rem",
                flexDirection: "column",
                padding: "5rem",
                color: "white",
              }}
            >
              <div
                style={{
                  color: "#F7F7F7",
                  fontFamily: "Lato",
                  fontSize: "18px",
                  lineHeight: "28px",
                  lineHeight: "28px",
                  width: "215px",
                  textAlign: "left",
                  marginBottom: "10px",
                }}
              >
                Get your newletter
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "5px",
                    width: "235px",
                    height: "50px",
                  }}
                >
                  <input
                    style={{
                      background: "white",
                      width: "235px",
                      border: "none",
                      height: "100%",
                      borderRadius: "5px",
                      textAlign: "left",
                      fontSize: "18px",
                    }}
                    placeholder="Enter your email"
                    type="text"
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "5px",
                    width: "155px",
                    height: "50px",
                    color: "#47525E",
                    fontFamily: "Lato",
                    fontSize: "18px",
                    lineHeight: "62px",
                    textAlign: "center",
                    marginLeft: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Subscribe
                </div>
              </div>
              <div>ICONS</div>
            </div>
          </>
        ))}
      </div>
    </footer>
  )
}

export default Footer
