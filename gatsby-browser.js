import React from "react"
import PropTypes from "prop-types"

import Web3 from "./src/components/Web3/Web3"
import BackgroundScene from "./src/components/BackgroundScene/BackgroundScene"
import { Provider } from "./src/components/context"

export const wrapRootElement = ({ element }) => {
  return (
    <Provider>
      <Web3 />
      <BackgroundScene />
      {element}
    </Provider>
  )
}

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
}
