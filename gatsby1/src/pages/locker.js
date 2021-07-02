import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Seemore from "../components/seemore"
import Profile from "../components/Profile"
import "../components/layout.css"

const Locker = ({ data }) => (
  <Layout>
    <Seo title="Locker" />
    <Profile />
    <Seemore />
  </Layout>
)

export default Locker
