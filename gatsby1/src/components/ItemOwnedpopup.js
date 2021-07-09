import React from "react"
import Img from "./mask.png"
import { Link } from "gatsby"

import "./styles.scss"
function ItemOwnedpopup({ name, setbuyy, settogg }) {
  return (
    <div className="pop_up_wrapper">
      <div className="pop_up_container">
        <img src={Img} style={{ width: "440px", height: "300px" }} />
        <div className="pop_up_heading">Purchase in-progress!</div>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <div className="pop_up_progrssbar_comp" />
          <div className="pop_up_progrssbar_incomp" />
        </div>
        <Link>
          <div
            onClick={() => {
              setbuyy(false)
              settogg(true)
            }}
            className="pop_up_btn"
          >
            Back to {name}
          </div>
        </Link>
        <div className="pop_up_lowertext">Purchase Completed!</div>
      </div>
    </div>
  )
}

export default ItemOwnedpopup
