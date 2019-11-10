import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import "./temple.css"

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
      <aside class="torch__container">
        <img class="torch torch__1" src="temple/torch.png" alt="" />
        <img class="torch torch__2" src="temple/torch.png" alt="" />
      </aside>
      <div class="card__container">
        <div class="card card__1">
          <div class="card__back">
            <img src="temple/1.png" alt="" class="card card1" />
          </div>
          <div class="card__front">
            <img src="temple/card__back.jpeg" alt="" />
          </div>
        </div>
        <div class="card card__2">
          <div class="card__back">
            <img src="temple/2.png" alt="" class="card card1" />
          </div>
          <div class="card__front">
            <img src="temple/card__back.jpeg" alt="" />
          </div>
        </div>
        <div class="card card__3">
          <div class="card__back">
            <img src="temple/3.png" alt="" class="card card1" />
          </div>
          <div class="card__front">
            <img src="temple/card__back.jpeg" alt="" />
          </div>
        </div>
        <div class="card card__4">
          <div class="card__back">
            <img src="temple/4.png" alt="" class="card card1" />
          </div>
          <div class="card__front">
            <img src="temple/card__back.jpeg" alt="" />
          </div>
        </div>
      </div>

    </Container >
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
