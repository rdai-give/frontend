import React, { Component } from "react"
import styled from "styled-components"
import "./temple.css"
import torch from "./temple/torch.png"
import Card from "../Cards/Cards"

const Container = styled.section`
  text-align: center;
`

class Temple extends Component {
  componentDidMount() {
    console.log("Component mounted")
  }

  render() {
    return (
      <Container>
        <aside className="torch__container">
          <img className="torch torch__1" src={torch} alt="" />
          <img className="torch torch__2" src={torch} alt="" />
        </aside>
        <Card />
        <a href="/" className="share__link">
          Place Your Offering
        </a>
        <img src="bigg.png" alt="" className="original" />
        <img src="redeyes.png" alt="" className="eyes" />
      </Container>
    )
  }
}

export default Temple
