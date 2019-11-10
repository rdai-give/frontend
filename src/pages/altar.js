import React, { useContext } from "react"

import styled from "styled-components"

import { Context } from "../components/context"
// import ProjectCard from "../components/ProjectCard/ProjectCard"

import PROJECTS from "../components/constants"
import Cards from "../components/Cards/Cards"

import "../components/fonts.css"
import "./temple.css"

import IMAGES from "../images/images"

import big from "../images/bigg.png"
import redeyes from "../images/redeyes.png"

const Container = styled.section``
const Image = styled.img`
width: auto
margin: 0 auto;
height:600px
`
const CardContainer = styled.section`
  position: absolute;
  top: 593px;
  margin: 0 auto;
  width: 100%;
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
      cards.push(IMAGES[`${project.image}-card`])
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
      <CardContainer>
        <Cards cards={cards} />
      </CardContainer>
      <Container>
        <Image src={big} alt="" className="original" />
        <img src={redeyes} alt="" className="eyes" />
      </Container>
    </>
  )
}

export default Altar
