import React from "react"
// import React, { useContext } from "react"

import styled from "styled-components"
import Layout from "../components/Layout/Layout"

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
    <Layout>
      <Container>
        <CardList />
      </Container>
    </Layout>
  )
}

export default Altar
