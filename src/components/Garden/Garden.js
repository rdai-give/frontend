import React from "react"
import styled from "styled-components"

const Garden = () => (
  <>
    <PowerUpsList />
    {growingTreeData.map(item => (
      <CounterContainer
        style={{
          color: item.primaryColor,
          backgroundColor: item.backgroundColor,
        }}
      >
        <h5>Current tree</h5>
        <h1>{item.currentGrowth}</h1>
        <h5>+{item.perWeekGrowth} per week</h5>
      </CounterContainer>
    ))}
  </>
)

export default Garden
