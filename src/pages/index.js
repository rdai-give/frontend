import React from "react"

import { Provider } from "../components/context"
import PageRouter from "../components/PageRouter/PageRouter"
import Web3 from "../components/Web3/Web3"
import BackgroundScene from "../components/BackgroundScene/BackgroundScene"

const IndexPage = () => {
  return (
    <Provider>
      <Web3 />
      <BackgroundScene />
      <PageRouter />
    </Provider>
  )
}

export default IndexPage
