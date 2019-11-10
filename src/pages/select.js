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

  const { tribute } = context

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
    tribute.generateNew(
      "100",
      ["0x607EBb69D568DBe1d2283668120036A892E88e89"],
      [1]
    )
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
