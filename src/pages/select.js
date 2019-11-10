import React, { useState, useContext } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import ProjectEntity from "../components/ProjectEntity/ProjectEntity"
import { Context } from "../components/context"

import PROJECTS from "../components/constants"

import "../components/fonts.css"

const Container = styled.section`
  text-align: center;
  color: white;
  align-content: center;
  margin: 20px 30px 50px 30px;
`
const ProjectContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`
const H2 = styled.h1`
  font-family: monospace;
  font-weight: 300;
  letter-spacing: -0.2px;
  font-size: 40px;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 10px 0 10px 0;
  text-shadow: 1px 1px grey;
  color: #c80303;
`
const H3 = styled.h2`
  font-family: monospace;
  font-weight: 300;
  letter-spacing: -0.2px;
  font-size: 36px;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 10px 0 10px 0;
  color: #c80303;
`

const StyledButton = styled.button`
  font-family: monospace;
  font-size: 40px;
  font-weight: 600;
  color: #e10707;
  text-decoration: none;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  transition: all 0.2s ease;
  border-radius: 11px;
  background-color: white;
  &:hover {
    transition: border 0.2s ease;
  }

  &:active {
    transform: scale(0.97);
    transition: transform 0.2s ease;
  }
`

const Select = () => {
  const [state, setState] = useState({
    selectedCards: [],
  })
  const [context, setContext] = useContext(Context)
  const { tribute, userDetails, compoundRate } = context
  console.log(context)
  const isBrowser = typeof window !== "undefined"
  let cRate = 0
  if (isBrowser) cRate = localStorage.getItem("compoundRate")
  if (typeof compoundRate !== "undefined") cRate = compoundRate

  let daiBalance = 0
  if (typeof userDetails !== "undefined") {
    daiBalance = userDetails.daiBalance
  }
  console.log(context)
  const buyingPower = Math.round(daiBalance * cRate) / 100
  let cardOffering = ""
  if (state.selectedCards.length > 0)
    cardOffering = `${Math.round(
      (buyingPower / state.selectedCards.length) * 100
    ) / 100}`

  const onToggleSelect = () => name => {
    const cardsArray = state.selectedCards
    if (cardsArray.includes(name)) {
      cardsArray.splice(cardsArray.indexOf(name), 1)
      setState({ selectedCards: cardsArray })
      return
    }
    cardsArray.push(name)
    setState({
      selectedCards: cardsArray,
    })
  }

  const submitTribute = () => async () => {
    // setContext
    setContext({
      ...context,
      selectedCards: state.selectedCards,
      cardOffering,
    })
    console.log("setting to context:", state.selectedCards)
    // trigger tx
    const recipients = []
    const proportions = []
    PROJECTS.forEach(project => {
      if (state.selectedCards.includes(project.name)) {
        recipients.push(project.address)
        proportions.push(1)
      }
    })
    console.log(recipients)
    const { tx2 } = await tribute.generateNew(
      `${daiBalance}`,
      recipients,
      proportions
    )
    setState({ ...state, isPendingTx: true })
    await tx2.wait(1)

    // send user to /altar
    navigate("/altar")
  }

  const ApproachButton = () => {
    let buttonText = "Approach the Altar of rDAI"
    if (state.isPendingTx)
      buttonText = "The Altar is reviewing your offering..."
    return (
      <StyledButton type="button" onClick={submitTribute()}>
        {buttonText}
      </StyledButton>
    )
  }

  const ProjectList = () => {
    const selectedArray = state.selectedCards
    let list = []
    list = PROJECTS.map(project => {
      let isSelected = false
      if (selectedArray.includes(project.name)) {
        isSelected = true
      }
      return (
        <ProjectEntity
          amount={cardOffering}
          key={`${project.name}`}
          project={project}
          isSelected={isSelected}
          onClick={onToggleSelect()}
        />
      )
    })
    return list
  }

  return (
    <>
      <Container>
        <SEO title="Select" />
        <H3>The Altar of rDAI can conjure an estimated additional</H3>
        <H2>{buyingPower} DAI / year</H2>
        <H3>
          that you may distribute to four projects below... choose wisely.
        </H3>
        <ProjectContainer>
          <ProjectList />
        </ProjectContainer>
        <ApproachButton />
      </Container>
    </>
  )
}

export default Select
