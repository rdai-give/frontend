import React, { useContext } from "react"

import styled from "styled-components"

import { Context } from "../components/context"
// import ProjectCard from "../components/ProjectCard/ProjectCard"

import PROJECTS from "../components/constants"

import "../components/fonts.css"

const Container = styled.section`
  text-align: center;
`

const Altar = () => {
  const [context] = useContext(Context)
  const { selectedCards } = context

  let selectedArray = ["EthHub", "One Click Dapp"]
  // let selectedCards =[]
  if (typeof selectedCards !== "undefined") selectedArray = selectedCards

  const cards = []
  PROJECTS.forEach(project => {
    if (selectedArray.includes(project.name)) {
      cards.push(`${project.image}-card.png`)
    }
    return null
  })
  console.log(cards)

  return <Container>{cards}</Container>
}

export default Altar
