import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import ItemOwned from "../components/ItemOwnedpopup"

export const query = graphql`
  query($id: String) {
    sanityProduct(id: { eq: $id }) {
      id
      name
      price
      image {
        asset {
          url
        }
      }
      availability
    }
  }
`
const Product = ({ data }) => {
  const [toggle, setToggle] = useState(false)
  const [buy, setBuy] = useState(false)
  console.log(buy)
  return (
    <Layout>
      <div className="productItem-wrapper">
        <div className="product-item-container">
          <div className="product-item-img" />
          <div className="product-item-heading">{data.sanityProduct.name}</div>
          <div className="product-item-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vestibulum mauris ut diam vulputate, nec scelerisque magna maximus.
            Suspendisse sit amet ex semper nunc quis, consequat arcu.
            Pellentesque feugiat molestie enim a aliquam. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam
            vulputate, nec scelerisque magna maximus. Suspendisse sit amet ex
            semper nunc quis, consequat arcu. Pellentesque feugiat molestie enim
            a aliquam.{" "}
          </div>
        </div>
        <div className="product-item-rightcontainer">
          <div className="product-item-rightcontainerbtn-price">
            PRICE <br />$ {data.sanityProduct.price}
          </div>
          <br />
          {toggle ? (
            <>
              <Link to="/locker">
                <div
                  className="product-item-rightcontainerbtn"
                  onClick={() => setBuy(true)}
                >
                  MY LOCKER
                </div>
              </Link>
              <div className="product-item-rightcontainer-desc">
                Congratulation, you owned it!
              </div>
            </>
          ) : (
            <>
              <div
                onClick={() => setBuy(true)}
                className="product-item-rightcontainerbtn"
              >
                BUY
              </div>
              <div className="product-item-rightcontainer-desc">
                {data.sanityProduct.availability} out of 10 avaliable
              </div>
            </>
          )}
          {buy && (
            <ItemOwned
              name={data.sanityProduct.name}
              setbuyy={buyy => setBuy(buyy)}
              settogg={tog => setToggle(tog)}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}
export default Product
