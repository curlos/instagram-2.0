import React from 'react'
import styled from 'styled-components'

const StyledBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`

const StyledAvatar = styled.img`
  height: 60px;
  border-radius: 50%;
`

const StyledLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const StyledBold = styled.div`
  font-weight: bold;
`

const StyledGray = styled.div`
  color: #979797;
`

const StyledButton = styled.button`
  color: #0095F6;
  background-color: transparent;
  border: none;
  font-weight: bold;
`

const StyledRight = styled.div`

`

const SmallUser = () => {


  return (
    <StyledBody>
      <StyledLeft>
        <StyledAvatar src="/assets/avatars/harley_avatar.jpeg" alt="" />
        <div>
          <StyledBold>Cristiano Ronaldo</StyledBold>
          <StyledGray>cristiano</StyledGray>
        </div>
      </StyledLeft>

      <StyledRight>
        <StyledButton>Follow</StyledButton>
      </StyledRight>

    </StyledBody>
  )
}

export default SmallUser
