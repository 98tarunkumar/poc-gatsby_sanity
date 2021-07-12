import React from "react"
import { Link } from "gatsby"
import "./styles.scss"
function ItemOwned() {
  return (
    <div>
      <div className="profile-wrapper">
        <div className="profile-img">Profile Image</div>
        <div className="profile-right">
          <p style={{ marginBottom: "40px" }}>
            Name John Andrewson <br />
          </p>
          <p style={{ marginBottom: "40px" }}>
            Eth Address 0x68C8938f1331c64A1cEF177fbB72f8931aBd5df8 <br />
          </p>
          <p>Email ID john@andrews.com</p>
        </div>
      </div>

      <div className="profile-heading-wrapper">
        <div className="profile-heading">Item Owned</div>
      </div>
      <div className="cardwrappper">
        <div className="card-container">
          <div className="product-card-img" />
          <div style={{ display: "flex", height: "70%" }}>
            <div className="product-card-txtarea">
              <p className="product-card-name">ITEM 07</p>
              <p className="product-card-price">Price 120.15$</p>
            </div>
            <div className="product-card-btn">
              <Link to="/-7c81d3d9-3a1d-54bb-83d4-04810e9cfc2a">
                <div className="product-card-btn-link">View</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="product-card-img" />
          <div style={{ display: "flex", height: "70%" }}>
            <div className="product-card-txtarea">
              <p className="product-card-name">ITEM 08</p>
              <p className="product-card-price">Price 120.15$</p>
            </div>
            <div className="product-card-btn">
              <Link to="/-f56158a2-e1be-5c28-bde5-606b6ad87448">
                <div className="product-card-btn-link">View</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="product-card-img" />
          <div style={{ display: "flex", height: "70%" }}>
            <div className="product-card-txtarea">
              <p className="product-card-name">ITEM 09</p>
              <p className="product-card-price">Price 120.15$</p>
            </div>
            <div className="product-card-btn">
              <Link to="/-4b3f7b9d-66e2-55ae-99e0-41f9bc15d050">
                <div className="product-card-btn-link">View</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemOwned
