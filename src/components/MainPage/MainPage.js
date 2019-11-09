import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { ethers } from "ethers"
import DAIabi from "../Web3/contracts/dai"
import rDAIabi from "../Web3/contracts/rdai"

import { Context } from "../context"
import "../fonts.css"

import Supporter from "../../images/supporter.png"
import Gamekeeper from "../../images/gamekeeper.png"
import Ent from "../../images/ent.png"

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

const H5 = styled.h5`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 13px;
  text-align: center;
  margin: 0 auto 15px;
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

const Columns = styled.div`
  display: flex;
  margin: 40px auto 0;
  max-width: 700px;
`

const Column = styled.div`
  padding: 0.75rem;
  display: block;
  width: 33.333%;
`

const OptionSupporter = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0 auto;
  background-color: #f6ba75;
  border-radius: 20px;
  box-shadow: 0 17px 40px -20px rgba(0, 0, 0, 0.25);
  color: #623400;
  padding: 10px;
  height: 325px;

  img {
    height: 140px;
    margin: 20px auto -40px;
  }

  h3 {
    font-family: "Inter", sans-serif;
    font-weight: 300;
    font-size: 32px;
    text-align: center;
    margin: 0 auto 15px;
  }

  p {
    margin-top: -15px;
    font-family: "Inter", sans-serif;
    font-size: 14px;
  }

  div {
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    margin-top: -15px;

    span {
      font-family: "Inter", sans-serif;
      margin-left: 10px;
      margin-bottom: 10px;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 20px;
      display: block;
      width: 80px;
      height: 24px;
      font-size: 14px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-left: 0;
      }
    }
  }

  button {
    position: absolute;
    bottom: 10px;
    left: 10px;
    align-self: flex-end;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    color: #623400;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.15);
    font-weight: 600;
    letter-spacing: -0.2;
    padding: 8px 0 7px 0;
    width: calc(100% - 20px);
    border-radius: 30px;
    transition: all 0.2s ease;

    &:hover {
      outline: none;
      cursor: pointer;
      transition: all 0.2s ease;
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
`

const OptionGamekeeper = styled(OptionSupporter)`
  background-color: #00cf80;
  color: #004229;

  img {
    height: 150px;
    margin-top: 5px;
  }

  div {
    span {
      &:first-child {
        margin-right: 10px;
      }
    }
  }

  button {
    color: #004229;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(168, 255, 222, 1) 100%
    );
    border: 0;
    box-shadow: 0 17px 20px -5px rgba(9, 124, 86, 0.25);

    &:hover {
      outline: none;
      cursor: pointer;
      transform: translateY(-2px);
      border: 0;
      box-shadow: 0 17px 20px -5px rgba(9, 124, 86, 0.45);
    }
  }
`

const OptionEnt = styled(OptionSupporter)`
  background-color: #f0eba2;
  color: #5d5809;

  img {
    height: 150px;
    margin-top: 5px;
  }

  button {
    color: #5d5809;
  }
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
  const [state] = useState({
    myEventObservable$: null,
  })
  const { tribute, notify, subspace, address } = context

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
    if (context.txStatus === "txSent") {
      return <p>Transactions pending</p>
    }
    return null
  }

  return (
    <Container>
      <H1>Make your DAI work to plant trees</H1>
      <P>
        Generate interest to continuously grow trees. Spend and transfer your
        investment at will.
      </P>
      <TxStatusComponent />
      <StyledLink to="/">Check how it works</StyledLink>
      <Columns>
        <Column>
          <H5>Supporter</H5>
          <OptionSupporter>
            <img src={Supporter} />
            <h3>
              10 <span style={{ fontSize: "28px" }}>DAI</span>
            </h3>
            <p>1 tree per year</p>
            <div>
              <span>Seed</span>
            </div>
            <button type="button" onClick={() => startGrowing(0)}>
              Start growing
            </button>
          </OptionSupporter>
        </Column>

        <Column>
          <H5>Gamekeeper</H5>
          <OptionGamekeeper>
            <img src={Gamekeeper} />
            <h3>
              10 <span style={{ fontSize: "28px" }}>DAI</span>
            </h3>
            <p>1 tree per year</p>
            <div>
              <span>Seed</span>
              <span>Water</span>
            </div>
            <button>Start growing</button>
          </OptionGamekeeper>
        </Column>

        <Column>
          <H5>Ent</H5>
          <OptionEnt>
            <img src={Ent} />
            <h3>
              10 <span style={{ fontSize: "28px" }}>DAI</span>
            </h3>
            <p>1 tree per year</p>
            <div>
              <span>Seed</span>
              <span>Water</span>
              <span>Fertilizer</span>
            </div>
            <button>Start growing</button>
          </OptionEnt>
        </Column>
      </Columns>
    </Container>
  )
}

export default MainPage
