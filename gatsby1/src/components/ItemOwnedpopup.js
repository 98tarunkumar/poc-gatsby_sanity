import React from "react"
import Img from "./mask.png"
import { Link } from "gatsby"

function ItemOwnedpopup({ name, setbuyy,settogg }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#E5E9F2",
        zIndex: "10000",
        position: "absolute",
        top: "0",
        left: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "600px",
          height: "526px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={Img} style={{ width: "440px", height: "300px" }} />
        <div
          style={{
            color: "#8190A5",
            fontFamily: "Lato",
            fontSize: "18px",
            lineHeight: "28px",
            width: "369px",
            textAlign: "center",
            marginTop: "-4rem",
          }}
        >
          Purchase in-progress!
        </div>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <div
            style={{
              backgroundColor: "#8190A5",
              width: "129px",
              height: "8px",
            }}
          />
          <div
            style={{
              backgroundColor: "#E5E9F2",
              width: "337px",
              height: "8px",
            }}
          />
        </div>
        <Link>
          <div
            onClick={()=>{setbuyy(false);settogg(true)}}
            style={{
              backgroundColor: "#47525E",
              borderRadius: "5px",
              width: "288px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontFamily: "Lato",
              fontSize: "18px",
              lineHeight: "62px",
              textAlign: "center",
              marginTop: "53px",
              cursor: "pointer",
            }}
          >
            Back to {name}
          </div>
        </Link>
        <div
          style={{
            color: "#8190A5",
            fontFamily: "Lato",
            fontSize: "14px",
            lineHeight: "22px",
            width: "600px",
            textAlign: "center",
            marginTop: "35px",
          }}
        >
          Purchase Completed!
        </div>
      </div>
    </div>
  )
}

export default ItemOwnedpopup
