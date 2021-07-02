import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import "../components/layout.css"
import HeaderSection from "../components/headerSection"
import "./layout.css"

const ProductList = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityProduct(sort: { fields: name }) {
        edges {
          node {
            id
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
  `)
  const [buy,setBuy]=React.useState(false);
  return (
    <div className="cardwrappper">
      {data.allSanityProduct.edges.map(({ node: product }) => (
        <div style={{ width: "377px", height: "436px" }}>
          <div
            style={{
              backgroundColor: "#E5E9F2",
              width: "376px",
              height: "238px",
            }}
          />
          <div style={{ display: "flex", height: "100%" }}>
            <div
              style={{
                width: "50%",
                display: "flex",
                height: "50%",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "#47525E",
                  fontFamily: "Lato",
                  fontSize: "28px",
                  lineHeight: "33px",
                  textAlign: "left",
                }}
              >
                {product.name}
              </p>
              <p
                style={{
                  color: "#8190A5",
                  fontFamily: "Lato",
                  fontSize: "18px",
                  lineHeight: "30px",
                  textAlign: "left",
                }}
              >
                Price {product.price}$
              </p>
            </div>
            <div
              style={{
                width: "50%",
                height: "50%",
                display: "flex",
              }}
            >
              <Link to={product.id} >
                <div 
                  style={{
                    marginTop: "85px",
                    marginLeft: "4.4rem",
                    backgroundColor: "#47525E",
                    borderRadius: "5px",
                    width: "108px",
                    height: "35px",
                    color: "#FFFFFF",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    lineHeight: "62px",
                    width: "108px",
                    texAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  {/* style={{ textDecoration: "none", color: "#FFFFFF" }} */}
                  BUY
                </div>
              </Link>
            </div>
          </div>
          {/* {product.name}<br/>
          {product.price}<br/> */}
        </div>
      ))}
    </div>
  )
}

export default ProductList
