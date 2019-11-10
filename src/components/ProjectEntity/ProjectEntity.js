import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import "./ProjectEntity.css"

const Container = styled.section`
  text-align: center;
`

const ProjectEntity = ({ project }) => {
  const { name, description, image, category } = project
  return (
    <Container>
      <div className="menu__container">
        <div className="menu">
          <ol>
            <li className="menu__item">
              <img className="menu__img" src={image} alt="" />
            </li>
            <li className="menu__item">{name}</li>
            <li className="menu__item">{category}</li>
            <li className="menu__item">{description}</li>
          </ol>
        </div>
      </div>
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
