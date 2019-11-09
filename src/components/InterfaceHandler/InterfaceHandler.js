import React, { useContext } from "react"
import { Context } from "../context"

import Layout from "../Layout/Layout"
import MainPage from "../MainPage/MainPage"
import Garden from "../Garden/Garden"
import SEO from "../seo"

const InterfaceHandler = () => {
  const [context] = useContext(Context)
  const { showGarden } = context

  let showInterface = <MainPage />

  if (showGarden) {
    showInterface = <Garden />
  }
  return (
    <Layout>
      {" "}
      <SEO title="Home" />
      {showInterface}
    </Layout>
  )
}

export default InterfaceHandler
