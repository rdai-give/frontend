import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "../../../images/logo.svg"

const StyledButton = styled(Link)`
  font-family: "Inter";
  font-size: 16px;
  font-weight: 600;
  color: #232927;
  text-decoration: none;
  border: 1px solid #bbd9ce;
  border-radius: 50px;
  padding: 12px 30px;
  transition: all 0.2s ease;

  &:hover {
    border: 1px solid #232927;
    transition: border 0.2s ease;
  }

  &:active {
    transform: scale(0.97);
    transition: transform 0.2s ease;
  }
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
      padding: `30px`,
      display: `flex`,
      justifyContent: `space-between`,
      marginBottom: `60px`,
    }}
  >
    <Link to="/">
      <img
        src={Logo}
        style={{
          margin: "0",
        }}
      />
    </Link>

    <StyledButton to="/garden/">Log in to your to garden</StyledButton>
  </header>
)

export default Header
