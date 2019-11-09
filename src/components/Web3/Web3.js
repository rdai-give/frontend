import React, { useContext, useEffect } from "react"
import { ethers } from "ethers"
import Tribute from "tribute-utils"
import Notify from "bnc-notify"
import Subspace from "@status-im/subspace"
import Web3 from "web3"

import { Context } from "../context"

import CONTRACTS from "./constants"
import DAIabi from "./contracts/dai"
import rDAIabi from "./contracts/rdai"

const Web3Wrapper = () => {
  const [context, setContext] = useContext(Context)
  const { address } = context

  const isBrowser = typeof window !== "undefined"

  const load = async () => {
    // Load Wallet
    let walletAddress = ""
    try {
      walletAddress = await window.ethereum.enable()
      // eslint-disable-next-line no-console
      console.log(`Loaded address ${walletAddress}`)
    } catch (error) {
      const errorMsg = `Failed to load wallet:  ${error.message}`
      // eslint-disable-next-line no-console
      console.log(errorMsg)
      setContext({
        ...context,
        isWeb3Present: true,
        error: errorMsg,
      })
    }
    localStorage.setItem("walletAddress", walletAddress)
    setContext({
      ...context,
      isWeb3Present: true,
      address: walletAddress,
      error: "",
    })

    // Load Contracts
    try {
      const walletProvider = new ethers.providers.Web3Provider(
        window.web3.currentProvider
      )

      const network = await walletProvider.getNetwork()
      // eslint-disable-next-line no-console
      console.log(`On Network: ${network.name}`)

      const DAIContract = new ethers.Contract(
        CONTRACTS.dai[network.name],
        DAIabi,
        walletProvider.getSigner()
      )
      // Sanity Check (WORKS ONLY ON KOVAN at the moment)
      const decimals = await DAIContract.decimals()
      // eslint-disable-next-line no-console
      console.log(
        `(sanity check) DAI contract decimals: ${decimals.toNumber()}`
      )

      const rDAIContract = new ethers.Contract(
        CONTRACTS.rtoken.kovan,
        rDAIabi,
        walletProvider.getSigner()
      )

      setContext({
        ...context,
        address: walletAddress,
        contracts: [DAIContract, rDAIContract],
        provider: walletProvider,
      })

      // Load Tools
      try {
        // TRIBUTE
        const tribute = new Tribute(DAIContract, rDAIContract, walletAddress[0])
        const userDetails = await tribute.getInfo(walletAddress[0])

        // Block Native
        const bncOptions = {
          dappId: process.env.BNCKey,
          darkMode: true,
          mobilePosition: "top",
          desktopPosition: "bottomRight",
          networkId: 42,
          transactionEvents: event => {
            // eslint-disable-next-line no-console
            console.log("Transaction Event:", event.transaction)
          },
        }
        const notify = Notify(bncOptions)

        // SUBSPACE

        const web3 = new Web3(
          `wss://kovan.infura.io/ws/v3/${process.env.INFURA_ENDPOINT_KEY}`
        )
        // Option to use MetaMask provider
        // const subspace = new Subspace(window.web3.currentProvider)
        const subspace = new Subspace(web3.currentProvider)
        await subspace.init()

        setContext({
          ...context,
          userDetails,
          notify,
          tribute,
          subspace,
          address: walletAddress,
          contracts: {
            rDAIContract,
            DAIContract,
          },
        })
      } catch (error) {
        const errorMsg = `Failed to load Web3 Tools:  ${error.message}`
        // eslint-disable-next-line no-console
        console.log(errorMsg)
        setContext({
          ...context,
          error: errorMsg,
        })
      }
    } catch (error) {
      const errorMsg = `Failed to load contracts:  ${error.message}`
      // eslint-disable-next-line no-console
      console.log(errorMsg)
      setContext({
        ...context,
        error: errorMsg,
      })
    }
  }

  useEffect(() => {
    if (isBrowser && typeof window.ethereum !== "undefined") {
      // Prevent MetaMask from page reloads on network change
      window.ethereum.autoRefreshOnNetworkChange = false
      load()
    } else {
      // Browser doesn't have Web3
      const errorMsg = `Failed to load wallet: no window.ethereum, or SSR`
      // eslint-disable-next-line no-console
      console.log(errorMsg)
      setContext({
        ...context,
        error: errorMsg,
      })
    }
  }, [])

  // Handle change events
  if (isBrowser && typeof window.ethereum !== "undefined") {
    // Detect when user changes their wallet address
    window.ethereum.on("accountsChanged", accounts => {
      // should update context when user change is detected
      if (address && address !== accounts[0]) {
        setContext({ ...context, address: accounts[0] })
        // eslint-disable-next-line no-console
        console.log(`Address was changed ${accounts[0]}`)
      }
    })
    // Detect when user changes the network
    window.ethereum.on("networkChanged", () => {
      // TODO add appropriate action
    })
  }

  return <></>
}

export default Web3Wrapper
