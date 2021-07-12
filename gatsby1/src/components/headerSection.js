import React from "react"

import "./styles.scss"
function HeaderSection() {
  return (
    <div className="hero-wrapper">
      <div className="hero-h1">Lorem ipsum dolor sit amet, consectetur.</div>
      <div className="hero-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec nibh
        vitae erat efficitur faucibus. Duis tincidunt, ex in mattis viverra.
      </div>
      <div style={{ marginTop: "1.5rem",display: "flex" }}>
        <input
          className="hero-inp"
          type="text"
          placeholder="Search favorites"
        />
        <div className="hero-search-btn">SEARCH</div>
      </div>
    </div>
  )
}

export default HeaderSection
