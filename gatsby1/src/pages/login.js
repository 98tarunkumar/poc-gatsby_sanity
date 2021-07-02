import * as React from "react"
import Seo from "../components/seo"
import "../components/layout.css"
import { Link } from "gatsby"
import Img from "../components/mask.png"
const Login = ({ data }) => (
  <>
    <Seo title="Login" />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        border: "1px solid black",
        height: "100vh",
        width: "100%",
      }}
    >
      <img
        style={{
          width: "440px",
          height: "300px",
        }}
        src={Img}
      />
      <div
        style={{
          width: "600px",
          height: "338px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "-3rem",
        }}
      >
        <div
          style={{
            color: "#47525E",
            fontSize: "2rem",
            fontFamily: "Lato",
            fontweight: "bold",
          }}
        >
          Sign Up
        </div>
        <div
          style={{
            color: "#8190A5",
            fontFamily: "Lato",
            fontSize: "18px",
            lineHeight: "28px",
            width: "369px",
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          Authenticate with Metamask
        </div>
        <div style={{ display: "flex", marginTop: "50px" }}>
          <div
            style={{
              backgroundColor: "#8190A5",
              width: "159px",
              height: "8px",
            }}
          />
          <div
            style={{
              backgroundColor: "#E5E9F2",
              width: "407px",
              height: "8px",
            }}
          />
        </div>
        <Link to="/">
          <div
            style={{
              marginTop: "60px",
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
            }}
          >
            Back to Marketplace
          </div>
        </Link>
        <div
          style={{
            marginTop: "45px",
            color: "#8190A5",
            fontFamily: "Lato",
            fontSize: "14px",
            lineHeight: "22px",
            width: "600px",
            textAlign: "center",
          }}
        >
          By authenticating you agree to our <br />
          Terms & Conditions
        </div>
      </div>
    </div>
  </>
)

export default Login
