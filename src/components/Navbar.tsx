import React, { useState } from 'react'
import styled from 'styled-components'
import { HomeAlt, Compass, Heart, Chat, PlusCircle } from 'styled-icons/boxicons-regular'

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  width: 100vw;
  max-width: 100%;
  border-bottom: 1px solid #DBDBDB;
`

const StyledInnerBody = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`

const StyledLogo = styled.img`
  width: 103px;
`

const StyledInput = styled.input`
  border: 1px solid #DBDBDB;
  width: 270px;
  padding: 10px;
  border-radius: 5px;
  outline: none;

  &:focus {
    outline: none;
  }
`

const StyledHome = styled(HomeAlt)`
  height: 25px;
  width: 25px;
  color: black;
`

const StyledChat = styled(Chat)`
  height: 25px;
  width: 25px;
  color: black;
`

const StyledPlus = styled(PlusCircle)`
  height: 25px;
  width: 25px;
  color: black;
`

const StyledCompass = styled(Compass)`
  height: 25px;
  width: 25px;
  color: black;
`

const StyledHeart = styled(Heart)`
  height: 25px;
  width: 25px;
  color: black;
`

const StyledInnerDiv = styled.div`
  flex: 1;
`

const StyledRight = styled(StyledInnerDiv)`
  display: flex;
  align-items: center;
  gap: 20px;
`

const StyledAvatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <StyledBody>
      <StyledInnerBody>
        <StyledInnerDiv>
          <StyledLogo src="/assets/logo.png" />
        </StyledInnerDiv>

        <StyledInnerDiv>
          <StyledInput placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </StyledInnerDiv>

        <StyledRight>
          <StyledHome />
          <StyledChat />
          <StyledPlus />
          <StyledCompass />
          <StyledHeart />
          <StyledAvatar src="/assets/avatars/harley_avatar.jpeg" alt="" />
        </StyledRight>
      </StyledInnerBody>
    </StyledBody>
  )
}

export default Navbar
