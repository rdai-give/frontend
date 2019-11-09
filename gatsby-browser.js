import React from "react"
import PropTypes from "prop-types"

export const wrapRootElement = ({ element }) => <>{element}</>

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
}
