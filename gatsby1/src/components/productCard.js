import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import "../components/layout.css"
import "./layout.css"
import "./styles.scss"

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
  return (
    <div className="cardwrappper">
      {data.allSanityProduct.edges.map(({ node: product }) => (
        <div className="card_container">
          <div className="productCard_img" />
          <div style={{display: 'flex',height: '70%'}}>
            <div className="productCard_txtarea">
              <p className="productCard_name">{product.name}</p>
              <p className="productCard_price">Price {product.price}$</p>
            </div>
            <div className="productCard_btn">
              <Link to={product.id}>
                <div className="productCard_btn_link">BUY</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList
