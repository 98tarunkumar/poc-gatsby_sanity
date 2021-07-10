import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
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
    <footer className="footer_wrapper">
      <div className="footer_container">
        {data.allSanityFooter.edges.map(({ node: foot }) => (
          <>
            <div className="footer_leftimg" />
            <div className="footer_links">
              {foot.row1.map(nav => (
                <div style={{ color: "#F7F7F7", textAlign: "left" }}>{nav}</div>
              ))}
            </div>
            <div className="footer_links">
              {foot.row2.map(nav => (
                <div style={{ color: "#F7F7F7", textAlign: "left" }}>{nav}</div>
              ))}
            </div>
            <div className="footer_links_wrapper">
              <div className="footer_right">Get your newletter</div>
              <div style={{ display: "flex",width: "100%"}}>
                <div className="footer_input_container">
                  <input
                    className="footer_input"
                    placeholder="Enter your email"
                    type="text"
                  />
                </div>
                <div className="footer_button_subs">Subscribe</div>
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
