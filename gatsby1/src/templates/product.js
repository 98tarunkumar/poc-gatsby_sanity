import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
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
      <div
        style={{
          width: "100%",
          padding: "78px",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              backgroundColor: "#E5E9F2",
              width: "641px",
              height: "238px",
            }}
          ></div>
          <div
            style={{
              color: "#47525E",
              fontFamily: "Lato",
              fontSize: "28px",
              lineHeight: "33px",
              width: "643px",
              textAlign: "left",
              marginTop: "37px",
            }}
          >
            {data.sanityProduct.name}
          </div>
          <div
            style={{
              color: "#8190A5",
              fontFamily: "Lato",
              fontSize: "18px",
              lineHeight: "30px",
              width: "643px",
              textAlign: "left",
              marginTop: "19px",
            }}
          >
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
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: " #8190A5",
              fontFamily: "Lato",
              fontSize: "20px",
              lineHeight: "62px",
              width: "192px",
              textAlign: "left",
            }}
          >
            PRICE <br />$ {data.sanityProduct.price}
          </div>
          <br />
          {toggle ? (
            <>
              <Link to="/locker">
                <div
                  onClick={() => setBuy(true)}
                  style={{
                    backgroundColor: "#47525E",
                    borderRadius: "5px",
                    width: "192px",
                    height: "50px",
                    color: "#FFFFFF",
                    fontFamily: "Lato",
                    fontSize: "18px",
                    lineHeight: "62px",
                    width: "192px",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  MY LOCKER
                </div>
              </Link>
              <div
                style={{
                  color: "#47525E",
                  fontFamily: "Lato",
                  fontSize: "16px",
                  lineHeight: "20px",
                  textAlign: "left",
                  marginTop: "34px",
                }}
              >
                Congratulation, you owned it!
              </div>
            </>
          ) : (
            <>
              <div
                onClick={() => setBuy(true)}
                style={{
                  backgroundColor: "#47525E",
                  borderRadius: "5px",
                  width: "192px",
                  height: "50px",
                  color: "#FFFFFF",
                  fontFamily: "Lato",
                  fontSize: "18px",
                  lineHeight: "62px",
                  width: "192px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                BUY
              </div>
              <div
                style={{
                  color: "#47525E",
                  fontFamily: "Lato",
                  fontSize: "16px",
                  lineHeight: "20px",
                  textAlign: "left",
                  marginTop: "34px",
                }}
              >
                {data.sanityProduct.availability} out of 10 avaliable
              </div>
            </>
          )}
          {buy && (
            <ItemOwned
              name={data.sanityProduct.name}
              setbuyy={buyy => setBuy(buyy)}
              settogg={tog=>setToggle(tog)}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}
export default Product
