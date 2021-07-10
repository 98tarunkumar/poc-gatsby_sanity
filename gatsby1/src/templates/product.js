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
      <div className="productItem_wrapper">
        <div className="productItem_container">
          <div className="productItem_img" />
          <div className="productItem_heading">{data.sanityProduct.name}</div>
          <div className="productItem_desc">
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
        <div className="productItem_rightcontainer">
          <div className="productItem_rightcontainerbtn_price">
            PRICE <br />$ {data.sanityProduct.price}
          </div>
          <br />
          {toggle ? (
            <>
              <Link to="/locker">
                <div
                  className="productItem_rightcontainerbtn"
                  onClick={() => setBuy(true)}
                >
                  MY LOCKER
                </div>
              </Link>
              <div className="productItem_rightcontainer_desc">
                Congratulation, you owned it!
              </div>
            </>
          ) : (
            <>
              <div
                onClick={() => setBuy(true)}
                className="productItem_rightcontainerbtn"
              >
                BUY
              </div>
              <div className="productItem_rightcontainer_desc">
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
