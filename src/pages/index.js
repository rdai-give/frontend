// import React, { useContext } from "react"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// import { ethers } from "ethers"
// import DAIabi from "../Web3/contracts/dai"
// import rDAIabi from "../Web3/contracts/rdai"

// import { Context } from "../components/context"
import "../components/fonts.css"

// const { bigNumberify } = ethers.utils

const H1 = styled.h1`
  font-family: monospace;
  font-weight: 900;
  letter-spacing: -0.2px;
  font-size: 64px;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  color: #c80303;
`

const H2 = styled.h2`
  font-family: monospace;
  font-weight: 200;
  letter-spacing: -0.2px;
  font-size: 36px;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  color: #c80303;
`

const P = styled.p`
  font-family: monospace;
  font-size: 24px;
  max-width: 550px;
  margin: 15px auto 15px;
  line-height: 1.3;
  color: #c80303;
`

const StyledLink = styled(Link)`
  font-family: monospace;
  font-size: 50px;
  font-weight: 600;
  color: #e3e3e3;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    transition: border 0.2s ease;
  }

  &:active {
    transform: scale(0.97);
    transition: transform 0.2s ease;
  }
`

const Container = styled.section`
  text-align: center;
`

const MainPage = () => {
  // const [context] = useContext(Context)
  //
  // const { txStatus, contracts } = context
  // let DAIContract
  // if (typeof contracts !== "undefined") {
  //   DAIContract = contracts.DAIContract
  // }
  // console.log(DAIContract)

  // const startGrowing = async level => {
  //   const levelAmountDai = [10, 100, 500]
  //
  //   if (typeof DAIContract !== "undefined") {
  //     DAIContract.approve(
  //       "0xea718e4602125407fafcb721b7d760ad9652dfe7",
  //       bigNumberify(levelAmountDai[level])
  //     )
  //     //   if (isBrowser) {
  //     //     const { emitter } = notify.hash(tx.hash)
  //     //
  //     //     // listen to transaction events
  //     //     emitter.on("txSent", () => {
  //     //       console.log("txSent")
  //     //       setContext({ ...context, txStatus: "txSent" })
  //     //     })
  //     //     emitter.on("txPool", console.log)
  //     //     emitter.on("txConfirmed", console.log)
  //     //     emitter.on("txSpeedUp", console.log)
  //     //     emitter.on("txCancel", console.log)
  //     //     emitter.on("txFailed", console.log)
  //     //     emitter.on("all", console.log)
  //     //   }
  //   }
  // }

  return (
    <>
      <Container>
        <H1>The Altar of rDAI</H1>
        <br />

        <H2>The Altar presses your idle DAI into serving a greater purpose</H2>
        <br />
        <P>
          More rDAI info at <a href="https://rdai.money">rdai.money</a>
        </P>
        <br />
        <StyledLink to="/select">Proceed</StyledLink>
      </Container>
    </>
  )
}

export default MainPage
