import React, { useContext } from "react"
import { Context } from "../context"

const BackgroundScene = () => {
  const [context] = useContext(Context)
  const { showGarden } = context

  if (showGarden) {
    // Do something
    // Move camera
  }
  return <>BackgroundScene</>
}

export default BackgroundScene
