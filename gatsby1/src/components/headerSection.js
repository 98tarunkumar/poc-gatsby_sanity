import React from "react"

function HeaderSection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "372px",
        padding: "4.5rem",
      }}
    >
      <div
        style={{
          color: "#47525E",
          fontFamily: "Lato",
          fontSize: "48px",
          lineHeight: "62px",
          width: "732px",
          textAlign: "left",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur.
      </div>
      <div
        style={{
          color: " #8190A5",
          fontFamily: "Lato",
          fontSize: "18px",
          lineHeight: "28px",
          width: "620px",
          textAlign: "left",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec nibh
        vitae erat efficitur faucibus. Duis tincidunt, ex in mattis viverra.
      </div>
      <div style={{ marginTop: "1.5rem", display: "flex" }}>
        <input
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #8492A6",
            borderRadius: "5px",
            width: "440px",
            height: "50px",
          }}
          type="text"
          placeholder="Search favorites"
        />
        <div
          style={{
            backgroundColor: "#47525E",
            borderRadius: "5px",
            width: "192px",
            height: "50px",
            color: "#FFFFFF",
            fontFamily: "Lato",
            fontSize: "18px",
            lineHeight: "62px",
            textAlign: "center",
            marginLeft: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          SEARCH
        </div>
      </div>
    </div>
  )
}

export default HeaderSection
