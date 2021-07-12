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
        <div className="card-container">
          <div className="product-card-img" />
          <div style={{display: 'flex',height: '70%'}}>
            <div className="product-card-txtarea">
              <p className="product-card-name">{product.name}</p>
              <p className="product-card-price">Price {product.price}$</p>
            </div>
            <div className="product-card-btn">
              <Link to={product.id}>
                <div className="product-card-btn-link">BUY</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList
