import React from "react"
import { Link } from "gatsby"
import "./styles.scss"
function ItemOwned() {
  return (
    <div>
      <div className="profile_wrapper">
        <div className="profile_img">Profile Image</div>
        <div className="profile_right">
          <p style={{ marginBottom: "40px" }}>
            Name John Andrewson <br />
          </p>
          <p style={{ marginBottom: "40px" }}>
            Eth Address 0x68C8938f1331c64A1cEF177fbB72f8931aBd5df8 <br />
          </p>
          <p>Email ID john@andrews.com</p>
        </div>
      </div>

      <div className="profile_heading_wrapper">
        <div className="profile_heading">Item Owned</div>
      </div>
      <div className="cardwrappper">
        <div className="card_container">
          <div className="productCard_img" />
          <div style={{ display: "flex", height: "70%" }}>
            <div className="productCard_txtarea">
              <p className="productCard_name">ITEM 07</p>
              <p className="productCard_price">Price 120.15$</p>
            </div>
            <div className="productCard_btn">
              <Link to="/-7c81d3d9-3a1d-54bb-83d4-04810e9cfc2a">
                <div className="productCard_btn_link">View</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="card_container">
          <div className="productCard_img" />
          <div style={{ display: "flex", height: "70%" }}>
            <div className="productCard_txtarea">
              <p className="productCard_name">ITEM 08</p>
              <p className="productCard_price">Price 120.15$</p>
            </div>
            <div className="productCard_btn">
              <Link to="/-f56158a2-e1be-5c28-bde5-606b6ad87448">
                <div className="productCard_btn_link">View</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="card_container">
          <div className="productCard_img" />
          <div style={{ display: "flex", height: "70%" }}>
            <div className="productCard_txtarea">
              <p className="productCard_name">ITEM 09</p>
              <p className="productCard_price">Price 120.15$</p>
            </div>
            <div className="productCard_btn">
              <Link to="/-4b3f7b9d-66e2-55ae-99e0-41f9bc15d050">
                <div className="productCard_btn_link">View</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemOwned
