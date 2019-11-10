import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  margin-top: ${props => {
    if (props.isLow) return "300px"
  }};
`

const Card = ({ image, isLow }) => {
  return (
    <Container isLow={isLow}>
      <div className="card__container">
        <div className="card card__1">
          <div className="card__back">
            <img src={image} alt="" className="card card1" />
          </div>
        </div>
      </div>
    </Container>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  isLow: PropTypes.bool.isRequired,
}

export default Card
