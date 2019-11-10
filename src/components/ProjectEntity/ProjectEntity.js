import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.section`
  text-align: center;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  font-family: monospace;
  font-size: 20px;
  font-weight: 600;
  color: #E10707;
  text-decoration: none;
  
`

const ProjectEntity = ({ project, isSelected, onClick, amount }) => {
  const { name, description, image, category, twitter } = project
  return (
    <button
      type="button"
      onClick={() => {
        onClick(name)
      }}
    >
      <Container>
        {isSelected}
        {name}
        {description}
        {image}
        {category}
        {twitter}
        {isSelected && amount}
      </Container>
    </button>
  )
}

ProjectEntity.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  amount: PropTypes.string.isRequired,
}

export default ProjectEntity
