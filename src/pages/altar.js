import React from "react"
// import React, { useContext } from "react"

import styled from "styled-components"

// import { Context } from "../components/context"
// import ProjectCard from "../components/ProjectCard/ProjectCard"

import "../components/fonts.css"

const Container = styled.section`
  text-align: center;
`

const Altar = () => {
  // const [context] = useContext(Context)
  // const { selectedCards } = context

  const CardList = () => {
    const list = []
    // if (typeof selectedCards !== "undefined") {
    //   list = selectedCards.map(project => {
    //     return <ProjectCard key={`${project.name}`} project={project} />
    //   })
    // }
    return list
  }

  return (
    <>
      <Container>
        <CardList />
      </Container>
    </>
  )
}

export default Altar
