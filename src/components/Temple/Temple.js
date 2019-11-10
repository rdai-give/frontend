import React from "react"
import styled from "styled-components"
import "./temple.css"
import card1 from "./temple/1.png"
import card2 from "./temple/2.png"
import card3 from "./temple/3.png"
import card4 from "./temple/4.png"
import torch from "./temple/torch.png"
import cardback from "./temple/cardb.png"

const Container = styled.section`
  text-align: center;
`
const Temple = () => {
  return (
    <Container>
      <aside className="torch__container">
        <img className="torch torch__1" src={torch} alt="" />
        <img className="torch torch__2" src={torch} alt="" />
      </aside>
      <div className="card__container">
        <div className="card card__1">
          <div className="card__back">
            <img src={card1} alt="" className="card card1" />
          </div>
          <div className="card__front">
            <img src={cardback} alt="" />
          </div>
        </div>
        <div className="card card__2">
          <div className="card__back">
            <img src={card2} alt="" className="card card1" />
          </div>
          <div className="card__front">
            <img src={cardback} alt="" />
          </div>
        </div>
        <div className="card card__3">
          <div className="card__back">
            <img src={card3} alt="" className="card card1" />
          </div>
          <div className="card__front">
            <img src={cardback} alt="" />
          </div>
        </div>
        <div className="card card__4">
          <div className="card__back">
            <img src={card4} alt="" className="card card1" />
          </div>
          <div className="card__front">
            <img src={cardback} alt="" />
          </div>
        </div>
      </div>
      <div>
        <a href="/" className="share__link">
          Place Your Offering
        </a>
        <a href="/" className="back__link">
          back
        </a>
      </div>
    </Container>
  )
}

export default Temple
