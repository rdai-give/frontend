import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import "./ProjectEntity.css"

import IMAGES from "../../images/images"

const Container = styled.section`
  padding: 10px;
  margin: 10px 10px 10px 10px;
  width: 300px;
  height: 400px;
  font-family: monospace;
  font-size: 20px;
  font-weight: 600;
  color: #e10707;
  text-decoration: none;
  background-color: ${props => props.isSelected && "red"};
`
const Button = styled.button`
  height: 100%;
  width: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  border-radius: 11px;
`

const H1 = styled.h1`
  font-family: monospace;
  font-weight: 200;
  letter-spacing: -0.2px;
  font-size: 30px;
  padding-top: 10px;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  height: 78px;
`

const ImageContainer = styled.img`
  height: 150px;
  margin: 0 auto;
  maxheight: 150px;
  width: auto;
  overflow: clip;
  border-radius: 11px;
`

const Description = styled.p`
  height: 100px;
  font-family: monospace;
  font-weight: 200;
  padding: 10px 0 0 0;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
`
const Category = styled.div`
  text-align: center;
  width: 100%;
`

const ProjectEntity = ({ project, isSelected, onClick }) => {
  const { name, description, image, category } = project
  return (
    <Container isSelected={isSelected}>
      <Button
        type="button"
        onClick={() => {
          onClick(name)
        }}
      >
        <ImageContainer alt={name} src={IMAGES[image]} />
        <H1>{name}</H1>
        <Description>{description}</Description>
        <Category>{category}</Category>
      </Button>
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
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ProjectEntity
