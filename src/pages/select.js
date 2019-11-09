import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"

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

const Select = () => {
  return (
    <Layout>
      <Container>
        <SEO title="Home" />
        <StyledLink to="/altar">Approach Altar of rDAI</StyledLink>
      </Container>
    </Layout>
  )
}

export default Select
