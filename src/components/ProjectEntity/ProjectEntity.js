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
      <aside className="torch__container">
        <img className="torch torch__1" src="temple/torch.png" alt="" />
        <img className="torch torch__2" src="temple/torch.png" alt="" />
      </aside>
      <div className="card__container">
        <div className="card card__1">
          <div className="card__back">
            <img src="temple/1.png" alt="" className="card card1" />
          </div>
          <div className="card__front">
            <img src="temple/card__back.jpeg" alt="" />
          </div>
        </div>
        <div className="card card__2">
          <div className="card__back">
            <img src="temple/2.png" alt="" className="card card1" />
          </div>
          <div className="card__front">
            <img src="temple/card__back.jpeg" alt="" />
          </div>
        </div>
        <div className="card card__3">
          <div className="card__back">
            <img src="temple/3.png" alt="" className="card card1" />
          </div>
          <div className="card__front">
            <img src="temple/card__back.jpeg" alt="" />
          </div>
        </div>
        <div className="card card__4">
          <div className="card__back">
            <img src="temple/4.png" alt="" className="card card1" />
          </div>
          <div className="card__front">
            <img src="temple/card__back.jpeg" alt="" />
          </div>
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
