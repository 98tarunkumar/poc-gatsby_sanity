import React from "react"

import "./styles.scss"
function HeaderSection() {
  return (
    <div className="hero_wrapper">
      <div className="hero_h1">Lorem ipsum dolor sit amet, consectetur.</div>
      <div className="hero_p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec nibh
        vitae erat efficitur faucibus. Duis tincidunt, ex in mattis viverra.
      </div>
      <div style={{ marginTop: "1.5rem",display: "flex" }}>
        <input
          className="hero_inp"
          type="text"
          placeholder="Search favorites"
        />
        <div className="hero_search_btn">SEARCH</div>
      </div>
    </div>
  )
}

export default HeaderSection
