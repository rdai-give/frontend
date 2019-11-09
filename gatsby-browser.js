import React from "react"
import PropTypes from "prop-types"
import { Provider } from "./src/components/context"

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
}
