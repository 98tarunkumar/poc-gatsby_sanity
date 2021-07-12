import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./styles.scss"
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
    <footer className="footer-wrapper">
      <div className="footer-container">
        {data.allSanityFooter.edges.map(({ node: foot }) => (
          <>
            <div className="footer-leftimg" />
            <div className="footer-links">
              {foot.row1.map(nav => (
                <div style={{ color: "#F7F7F7", textAlign: "left" }}>{nav}</div>
              ))}
            </div>
            <div className="footer-links">
              {foot.row2.map(nav => (
                <div style={{ color: "#F7F7F7", textAlign: "left" }}>{nav}</div>
              ))}
            </div>
            <div className="footer-links-wrapper">
              <div className="footer-right">Get your newletter</div>
              <div style={{ display: "flex",width: "100%"}}>
                <div className="footer-input-container">
                  <input
                    className="footer-input"
                    placeholder="Enter your email"
                    type="text"
                  />
                </div>
                <div className="footer-button-subs">Subscribe</div>
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
