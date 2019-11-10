import React from "react"
import styled from "styled-components"
import "./temple.css"

const Container = styled.section`
  text-align: center;
`
const Temple = () => {
  return (
    <Container>
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

export default Temple
