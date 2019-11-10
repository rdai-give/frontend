import React, { useState, useContext } from "react"

import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import ProjectEntity from "../components/ProjectEntity/ProjectEntity"
import { Context } from "../components/context"

import PROJECTS from "../components/constants"

import "../components/fonts.css"

const Container = styled.section`
  text-align: center;
`

const Select = () => {
  const [context, setContext] = useContext(Context)

  const { tribute, userDetails } = context
  let daiBalance = 0
  if (typeof userDetails !== "undefined") {
    daiBalance = userDetails.daiBalance
  }

  const [state, setState] = useState({
    selectedCards: [],
  })

  const onToggleSelect = () => name => {
    const cardsArray = state.selectedCards
    console.log(cardsArray.includes(name))
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

  const submitTribute = () => () => {
    // setContext
    setContext({
      ...context,
      selectedCards: state.selectedCards,
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
    tribute.generateNew(`${daiBalance}`, recipients, proportions)
    // send user to /altar
  }

  const ProjectList = () => {
    const selectedArray = state.selectedCards
    const list = PROJECTS.map(project => {
      let isSelected = false
      if (selectedArray.includes(project.name)) {
        isSelected = true
      }
      return (
        <ProjectEntity
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
    <Layout>
      <Container>
        <SEO title="Select" />
        <ProjectList />
        <button type="button" onClick={submitTribute()}>
          Approach the Altar of rDAI
        </button>
      </Container>
    </Layout>
  )
}

export default Select
