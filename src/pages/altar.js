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

const MainContainer = styled.div`
  text-align: center;
`
const CardContainer = styled.section`
  position: absolute;
  top: 546px;
  margin: 0 auto;
  width: 100%;
`
const H1 = styled.h1`
  font-family: monospace;
  font-weight: 300;
  font-size: 32px;
  width: 100%;
  padding: 30px 30px 0 30px;
  text-shadow: 1px 1px black;
  color: #c80303;
  position: absolute;
`

const HeaderBackground = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(76, 76, 76, 1) 18%,
    rgba(31, 31, 31, 1) 65%,
    rgba(0, 0, 0, 0.1) 98%,
    rgba(0, 0, 0, 0.05) 100%
  );
  opacity: 0.55;
  height: 250px;
  width: 100%;
  position: absolute;
  filter: grayscale(100%);
`
const Altar = () => {
  const [context] = useContext(Context)
  const { selectedCards, cardOffering } = context
  let offering = 1
  if (typeof cardOffering !== "undefined") offering = cardOffering

  let selectedArray = ["EthHub", "rDAO", "threadpool", "BountyUp"]
  if (typeof selectedCards !== "undefined") selectedArray = selectedCards

  const cards = []
  PROJECTS.forEach(project => {
    if (selectedArray.includes(project.name)) {
      cards.push(IMAGES[`${project.image}Card`])
    }
    return null
  })

  return (
    <MainContainer>
      <HeaderBackground />
      <H1>
        The Altar of rDAI has awoken the latent power of your DAI. An estimated{" "}
        {offering} DAI will flow to each project over the coming year. Well
        done, puny human.
      </H1>
      <CardContainer>
        <Cards cards={cards} />
      </CardContainer>
      <Container>
        <img src={big} alt="" className="original" />
        <img src={redeyes} alt="" className="eyes" />
      </Container>
    </MainContainer>
  )
}

export default Altar
