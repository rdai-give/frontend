import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.section`
  text-align: center;
`

const ProjectEntity = ({ project }) => {
  const { name, description, image, category, twitter } = project
  return (
    <Container>
      {name}
      {description}
      {image}
      {category}
      {twitter}
    </Container>
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
}

export default ProjectEntity
