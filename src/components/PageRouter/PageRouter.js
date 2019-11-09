import React, { useContext } from "react"
import { Context } from "../context"

import InterfaceHandler from "../InterfaceHandler/InterfaceHandler"

import PAGES from "../constants"

const PageRouter = () => {
  const [context, setContext] = useContext(Context)
  const { showGarden } = context

  const route = window.location.pathname
  const showGardenPage = route.toLowerCase().indexOf(PAGES.GARDEN) > -1
  if (showGardenPage && !showGarden) {
    setContext({ ...context, showGarden: true })
  } else if (!showGardenPage && showGarden) {
    setContext({ ...context, showGarden: false })
  }
  return <InterfaceHandler />
}

export default PageRouter
