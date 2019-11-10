import React, { Component } from "react"
import styled from "styled-components"

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
        <img src="bigg.png" alt="" className="original" />
        <img src="redeyes.png" alt="" className="eyes" />
      </Container>
    )
  }
}

export default Temple
