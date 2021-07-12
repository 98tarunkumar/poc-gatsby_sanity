import React from "react"
import Img from "./mask.png"
import { Link } from "gatsby"

import "./styles.scss"
function ItemOwnedpopup({ name, setbuyy, settogg }) {
  return (
    <div className="pop-up-wrapper">
      <div className="pop-up-container">
        <img
          src={Img}
          alt="image_item"
          style={{ width: "440px", height: "300px" }}
        />
        <div className="pop-up-heading">Purchase in-progress!</div>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <div className="pop-up-progrssbar-comp" />
          <div className="pop-up-progrssbar-incomp" />
        </div>
        <Link>
          <div
            onClick={() => {
              setbuyy(false)
              settogg(true)
            }}
            className="pop-up-btn"
          >
            Back to {name}
          </div>
        </Link>
        <div className="pop-up-lowertext">Purchase Completed!</div>
      </div>
    </div>
  )
}

export default ItemOwnedpopup
