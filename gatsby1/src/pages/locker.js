import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Seemore from "../components/Seemore"
import Profile from "../components/Profile"


const Locker = ({ data }) => (
  <Layout>
    <Seo title="Locker" />
    <Profile />
    <Seemore />
  </Layout>
)

export default Locker
