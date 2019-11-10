import React, { useContext } from "react"

import styled from "styled-components"

import { Context } from "../components/context"
// import ProjectCard from "../components/ProjectCard/ProjectCard"

import PROJECTS from "../components/constants"

import "../components/fonts.css"
import "../components/Temple/temple.css"
import big from "../images/bigg.png"
import redeyes from "../images/redeyes.png"

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

  // const [context] = useContext(Context)
  // const { selectedCards } = context

  // const CardList = () => {
  //   const list = []
  //   // if (typeof selectedCards !== "undefined") {
  //   //   list = selectedCards.map(project => {
  //   //     return <ProjectCard key={`${project.name}`} project={project} />
  //   //   })
  //   // }
  //   return list
  // }

  return (
    <>
      <Container>
        <img src={big} alt="" className="original" />
        <img src={redeyes} alt="" className="eyes" />
      </Container>
    </>
  )
}

export default Altar
