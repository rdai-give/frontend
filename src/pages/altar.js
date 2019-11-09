import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"

import "../components/fonts.css"

const Container = styled.section`
  text-align: center;
`

const Altar = () => {
  return (
    <Layout>
      <Container>
        <SEO title="Altar" />
      </Container>
    </Layout>
  )
}

export default Altar
