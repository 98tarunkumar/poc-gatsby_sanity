import * as React from "react"
import Seo from "../components/seo"
import "../components/layout.css"
import { Link } from "gatsby"
import Img from "../components/mask.png"
import "./styles.scss"
const Login = ({ data }) => (
  <>
    <Seo title="Login" />
    <div className="login-wrapper">
      <img className="login-img" alt="login-img" src={Img} />
      <div className="login-container">
        <div className="login-heading">Sign Up</div>
        <div className="login-p">Authenticate with Metamask</div>
        <div className="progress-bar-container">
          <div className="proggressbar-comp" />
          <div className="proggressbar-incomp" />
        </div>
        <Link to="/">
          <div className="login-btn">Back to Marketplace</div>
        </Link>
        <div className="logo-desc">
          By authenticating you agree to our <br />
          Terms & Conditions
        </div>
      </div>
    </div>
  </>
)

export default Login
