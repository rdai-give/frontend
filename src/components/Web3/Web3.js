import React, { useContext, useEffect } from "react"
import { ethers } from "ethers"
import Tribute from "tribute-utils"
import axios from "axios"
// import Notify from "bnc-notify"
// import Subspace from "@status-im/subspace"

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
      const walletProvider = new ethers.providers.Web3Provider(
        window.web3.currentProvider
      )
      const network = await walletProvider.getNetwork()

      // eslint-disable-next-line no-console
      console.log(`Loaded address ${walletAddress}`)
      localStorage.setItem("walletAddress", walletAddress)

      const DAIContract = new ethers.Contract(
        CONTRACTS.dai[network.name],
        DAIabi,
        walletProvider.getSigner()
      )

      const rDAIContract = new ethers.Contract(
        CONTRACTS.rtoken[network.name],
        rDAIabi,
        walletProvider.getSigner()
      )

      // Sanity Check (WORKS ONLY ON KOVAN at the moment)
      const decimals = await DAIContract.decimals()
      // eslint-disable-next-line no-console
      console.log(
        `(sanity check) DAI contract decimals: ${decimals.toNumber()}`
      )

      // Load tools
      const tribute = new Tribute(DAIContract, rDAIContract, walletAddress[0])
      const userDetails = await tribute.getInfo(walletAddress[0])
      console.log(userDetails)

      // Load compound
      const res = await axios.get(
        "https://api.compound.finance/api/v2/ctoken?addresses[]=0xf5dce57282a584d2746faf1593d3121fcac444dc"
      )
      const compoundRate =
        Math.round(res.data.cToken[0].supply_rate.value * 10000) / 100
      console.log(`Compound Rate: ${compoundRate}%`)
      localStorage.setItem("compoundRate", compoundRate)

      setContext({
        ...context,
        isWeb3Present: true,
        address: walletAddress,
        userDetails,
        walletProvider,
        tribute,
        compoundRate,
        error: "",
      })
      // } catch (error) {
      //   const errorMsg = `Failed to load wallet:  ${error.message}`
      //   // eslint-disable-next-line no-console
      //   console.log(errorMsg)
      //   setContext({
      //     ...context,
      //     isWeb3Present: true,
      //     error: errorMsg,
      //   })
      // }

      // Load Contracts
      // try {
      //
      //
      //
      //   // eslint-disable-next-line no-console
      //   console.log(`On Network: ${network.name}`)
      //

      //

      //
      //   setContext({
      //     ...context,
      //     address: walletAddress,
      //     contracts: { DAIContract, rDAIContract },
      //     walletProvider,
      //   })

      // Load Tools
      // try {
      // TRIBUTE

      // Block Native
      // const bncOptions = {
      //   dappId: process.env.BNCKey,
      //   darkMode: true,
      //   mobilePosition: "top",
      //   desktopPosition: "bottomRight",
      //   networkId: 42,
      //   transactionEvents: event => {
      //     // eslint-disable-next-line no-console
      //     console.log("Transaction Event:", event.transaction)
      //   },
      // }
      // let notify
      // if (isBrowser) {
      //   notify = Notify(bncOptions)
      // }
      // SUBSPACE
      // const dataProvider = ethers.providers.JsonRpcProvider(
      //   `wss://kovan.infura.io/ws/v3/${process.env.INFURA_ENDPOINT_KEY}`
      // )
      // const web3 = new Web3(
      //   `wss://kovan.infura.io/ws/v3/${process.env.INFURA_ENDPOINT_KEY}`
      // )
      // Option to use MetaMask provider
      // const subspace = new Subspace(window.web3.currentProvider)
      // const subspace = new Subspace(dataProvider.currentProvider)
      // await subspace.init()

      //   setContext({
      //     ...context,
      //     userDetails,
      //     // notify,
      //     tribute,
      //     // subspace,
      //     address: walletAddress,
      //     isWeb3Present: true,
      //     error: "",
      //     contracts: {
      //       rDAIContract,
      //       DAIContract,
      //     },
      //   })
      // } catch (error) {
      //   const errorMsg = `Failed to load Web3 Tools:  ${error.message}`
      //   // eslint-disable-next-line no-console
      //   console.log(errorMsg)
      //   setContext({
      //     ...context,
      //     error: errorMsg,
      //   })
      // }
    } catch (error) {
      const errorMsg = `Failed to load web3:  ${error.message}`
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
