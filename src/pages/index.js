import React from "react"

import PageRouter from "../components/PageRouter/PageRouter"
import Web3 from "../components/Web3/Web3"
import BackgroundScene from "../components/BackgroundScene/BackgroundScene"

const IndexPage = () => {
  return (
    <>
      <Web3 />
      <BackgroundScene />
      <PageRouter />
    </>
  )
}

export default IndexPage
