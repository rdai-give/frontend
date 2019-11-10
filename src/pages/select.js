import React, { useContext, useState } from "react"

import styled from "styled-components"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import ProjectEntity from "../components/ProjectEntity/ProjectEntity"
import { Context } from "../components/context"

import PROJECTS from "../components/constants"

import "../components/fonts.css"

const Container = styled.section`
  text-align: center;
`
const StyledLink = styled(Link)`
  font-family: "Inter";
  font-size: 20px;
  font-weight: 600;
  color: #0e0544;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    transition: border 0.2s ease;
  }

  &:active {
    transform: scale(0.97);
    transition: transform 0.2s ease;
  }
`

const ProjectList = ({ selectedCards, onClick }) => {
  const list = PROJECTS.map(project => {
    let isSelected = false
    if (selectedCards.indexOf(project.name) > -1) {
      isSelected = true
    }
    return (
      <ProjectEntity
        key={`${project.name}`}
        project={project}
        isSelected={isSelected}
        onClick={onClick}
      />
    )
  })
  return list
}

const Select = () => {
  const [state, setState] = useState({
    selectedCards: [],
  })

  const onToggleSelect = name => {
    const cardsArray = state.selectedCards
    if (cardsArray.indexOf(name)) {
      console.log("remove card")
      setState({ selectedCards: cardsArray })
      return
    }
    setState({
      selectedCards: cardsArray.push(name),
    })
  }

  return (
    <Layout>
      <Container>
        <SEO title="Select" />
        <ProjectList
          selectedCards={state.selectedCards}
          onClick={onToggleSelect()}
        />
        <StyledLink to="/altar">Approach Altar of rDAI</StyledLink>
      </Container>
    </Layout>
  )
}

export default Select
