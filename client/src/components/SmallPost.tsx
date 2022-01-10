import React from 'react'
import { Link } from 'react-router-dom'
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

const StyledBody = styled(Link)`
  background-image: url('/assets/posts/harley.jpeg');
  background-size: cover;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;

  &:hover {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/assets/posts/harley.jpeg');
  }

  &:hover ${StyledIcons} {
    display: flex;
  }
`

interface Props {
  post: any
}

const SmallPost = ({ post }: Props) => {

  console.log(post)

  return (
    <StyledBody to={`/post/${post.id}`}>
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
