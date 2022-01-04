import React from 'react'
import styled from 'styled-components'
import SmallUser from './SmallUser'

const StyledBody = styled.div`
  margin-top: 10px;
`

const StyledTopbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`

const StyledTitle = styled.div`
  color: #8E8E8E;
  font-size: 15px;
`

const StyledButton = styled.button`
  color: black;
  border: none;
  background-color: transparent;
  font-weight: bold;
`

const Suggestions = () => {
  return (
    <StyledBody>
      <StyledTopbar>
        <StyledTitle>Suggestions For You</StyledTitle>
        <StyledButton>See All</StyledButton>
      </StyledTopbar>

      <SmallUser />
      <SmallUser />
      <SmallUser />
      <SmallUser />
      <SmallUser />
    </StyledBody>
  )
}

export default Suggestions
