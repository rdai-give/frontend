import React from "react"

import PageRouter from "../components/PageRouter/PageRouter"
import Web3 from "../components/Web3/Web3"
import BackgroundScene from "../components/BackgroundScene/BackgroundScene"
import { Provider } from "../components/context"

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
