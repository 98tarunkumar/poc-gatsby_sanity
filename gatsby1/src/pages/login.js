import * as React from "react"
import Seo from "../components/seo"
import "../components/layout.css"
import { Link } from "gatsby"
import Img from "../components/mask.png"
import "./styles.scss"
const Login = ({ data }) => (
  <>
    <Seo title="Login" />
    <div className="login_wrapper">
      <img className="login_img" alt="login_img" src={Img} />
      <div className="login_container">
        <div className="login_heading">Sign Up</div>
        <div className="login_p">Authenticate with Metamask</div>
        <div className="progress_bar_container">
          <div className="proggressbar_comp" />
          <div className="proggressbar_incomp" />
        </div>
        <Link to="/">
          <div className="login_btn">Back to Marketplace</div>
        </Link>
        <div className="logo_desc">
          By authenticating you agree to our <br />
          Terms & Conditions
        </div>
      </div>
    </div>
  </>
)

export default Login
