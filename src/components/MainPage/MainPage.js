import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { ethers } from "ethers"
import DAIabi from "../Web3/contracts/dai"
import rDAIabi from "../Web3/contracts/rdai"

import { Context } from "../context"
import "../fonts.css"

const { bigNumberify } = ethers.utils

const H1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 900;
  letter-spacing: -0.2px;
  font-size: 64px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  color: #0e0544;
`

const P = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  max-width: 550px;
  margin: 15px auto 15px;
  line-height: 1.3;
  color: #5a6561;
`

const StyledLink = styled(Link)`
  font-family: "Inter";
  font-size: 20px;
  font-weight: 600;
  color: #0e0544;
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
  const [context, setContext] = useContext(Context)

  const { notify, subspace, address, txStatus } = context

  const walletProvider = new ethers.providers.Web3Provider(
    window.web3.currentProvider
  )

  const DAIContract = new ethers.Contract(
    "0xbf7a7169562078c96f0ec1a8afd6ae50f12e5a99",
    DAIabi,
    walletProvider.getSigner()
  )
  console.log(context)
  // SUBSPACE
  if (subspace && address && address[0]) {
    const daiContract = subspace.contract({
      abi: DAIabi,
      address: "0xbf7a7169562078c96f0ec1a8afd6ae50f12e5a99",
    })
    const rdaiContract = subspace.contract({
      abi: rDAIabi,
      address: "0xea718e4602125407fafcb721b7d760ad9652dfe7",
    })
    daiContract.methods
      .balanceOf(address[0])
      .track()
      .subscribe(balance => {
        console.log(`DAI balance: ${balance}`)
      })
    rdaiContract.methods
      .balanceOf(address[0])
      .track()
      .subscribe(balance => {
        console.log(`rDAI balance: ${balance}`)
      })

    subspace
      .trackBalance("0x9492510BbCB93B6992d8b7Bb67888558E12DCac4")
      .subscribe(balance => {
        console.log("ETH balance is ", balance)
      })
  }

  const startGrowing = async level => {
    const levelAmountDai = [10, 100, 500]

    const tx = await DAIContract.approve(
      "0xea718e4602125407fafcb721b7d760ad9652dfe7",
      bigNumberify(levelAmountDai[level])
    )
    const { emitter } = notify.hash(tx.hash)

    // listen to transaction events
    emitter.on("txSent", () => {
      console.log("txSent")
      setContext({ ...context, txStatus: "txSent" })
    })
    emitter.on("txPool", console.log)
    emitter.on("txConfirmed", console.log)
    emitter.on("txSpeedUp", console.log)
    emitter.on("txCancel", console.log)
    emitter.on("txFailed", console.log)
    emitter.on("all", console.log)
  }

  const TxStatusComponent = () => {
    if (txStatus === "txSent") {
      return <p>Transactions pending</p>
    }
    return null
  }

  return (
    <Container>
      <H1>Earn and donate interest to Open Source projects</H1>
      <P>Sub-header text</P>
      <TxStatusComponent />
      <StyledLink to="/">Check how it works</StyledLink>
      <button type="button" onClick={startGrowing()}>
        Go
      </button>
    </Container>
  )
}

export default MainPage
