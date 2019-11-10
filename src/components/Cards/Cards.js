import React from "react"
import card1 from "./cards/1.png"
import card2 from "./cards/2.png"
import card3 from "./cards/3.png"
import card4 from "./cards/4.png"
import cardback from "./cards/cardb.png"

const Card = () => {
  return (
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
  )
}

export default Card
