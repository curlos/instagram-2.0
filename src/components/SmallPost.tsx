import React from 'react'
import styled from 'styled-components'
import { HeartFill, ChatFill } from 'styled-icons/bootstrap'

const StyledIcons = styled.div`
  display: none;
  align-items: center;
  gap: 15px;
`

const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledHeart = styled(HeartFill)`
  height: 25px;
  width: 25px;
  margin-top: 3px;
  margin-right: 5px;
`

const StyledChat = styled(ChatFill)`
  height: 25px;
  width: 25px;
  margin-right: 5px;
`

const StyledBody = styled.div`
  background-image: url('/assets/posts/02.jpeg');
  background-size: cover;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  &:hover {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/assets/posts/02.jpeg');
  }

  &:hover ${StyledIcons} {
    display: flex;
  }
`

const SmallPost = () => {
  return (
    <StyledBody>
      <StyledIcons>
        <StyledIconContainer>
          <StyledHeart />
          <span>9.2M</span>
        </StyledIconContainer>

        <StyledIconContainer>
          <StyledChat />
          <span>62.4K</span>
        </StyledIconContainer>
      </StyledIcons>

    </StyledBody>
  )
}

export default SmallPost
