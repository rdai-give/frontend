import React, { useContext } from "react"

import styled from "styled-components"

import { Context } from "../components/context"
// import ProjectCard from "../components/ProjectCard/ProjectCard"

import PROJECTS from "../components/constants"
import Card from "../components/Card/Card"

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
  display: flex;
  top: -450px;
  position: relative;
  height: 0;
  margin-left: 60px;
`
const H1 = styled.h1`
  font-family: monospace;
  font-weight: 300;
  font-size: 36px;
  width: 100%;
  padding: 30px 50px 0 50px;
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
  let count = 0
  const cards = PROJECTS.map(project => {
    if (selectedArray.includes(project.name)) {
      count += 1
      console.log(count > 1 && count < 4)
      return (
        <Card
          isLow={count > 1 && count < 4}
          image={IMAGES[`${project.image}Card`]}
        />
      )
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
      <Container>
        <img src={big} alt="" className="original" />
        <img src={redeyes} alt="" className="eyes" />
      </Container>
      <CardContainer>{cards}</CardContainer>
    </MainContainer>
  )
}

export default Altar
