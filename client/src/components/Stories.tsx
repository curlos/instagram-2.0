import React from 'react'
import styled from 'styled-components'

const StyledBody = styled.div`
  border: 1px solid #DBDBDB;
  background-color: #fff;
  padding: 25px;
  display: flex;
  align-items: center;
  gap: 15px;
`

const StyledName = styled.div`
  font-size: 14px;
  font-weight: light;
`

const StyledUser = styled.div`
  text-align: center;
  cursor: pointer;
`

const StyledAvatar = styled.img`
  height: 70px;
  border-radius: 50%;
  border: 3px solid #DD569A;
`

const Stories = () => {
  return (
    <StyledBody>
      <StyledUser>
        <StyledAvatar src="/assets/avatars/02_avatar.jpeg" alt="" />
        <StyledName>cristiano</StyledName>
      </StyledUser>

      <StyledUser>
        <StyledAvatar src="/assets/avatars/02_avatar.jpeg" alt="" />
        <StyledName>cristiano</StyledName>
      </StyledUser>

      <StyledUser>
        <StyledAvatar src="/assets/avatars/02_avatar.jpeg" alt="" />
        <StyledName>cristiano</StyledName>
      </StyledUser>

      <StyledUser>
        <StyledAvatar src="/assets/avatars/02_avatar.jpeg" alt="" />
        <StyledName>cristiano</StyledName>
      </StyledUser>

      <StyledUser>
        <StyledAvatar src="/assets/avatars/02_avatar.jpeg" alt="" />
        <StyledName>cristiano</StyledName>
      </StyledUser>
    </StyledBody>
  )
}

export default Stories
