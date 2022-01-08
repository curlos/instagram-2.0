import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HouseDoorFill } from '@styled-icons/bootstrap/HouseDoorFill'
import { Compass } from '@styled-icons/bootstrap/Compass'
import { Heart } from '@styled-icons/bootstrap/Heart'
import { Chat } from '@styled-icons/bootstrap/Chat'
import { PlusSquare } from '@styled-icons/bootstrap/PlusSquare'
import AvatarDropdown from './AvatarDropdown'
import NewPostModal from './NewPostModal'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'

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
  margin-top: 10px;
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

const StyledHome = styled(HouseDoorFill)`
  height: 24px;
  width: 24px;
  color: black;
  cursor: pointer;
`

const StyledChat = styled(Chat)`
  height: 24px;
  width: 24px;
  color: black;
  cursor: pointer;
`

const StyledPlus = styled(PlusSquare)`
  height: 24px;
  width: 24px;
  color: black;
  cursor: pointer;
`

const StyledCompass = styled(Compass)`
  height: 24px;
  width: 24px;
  color: black;
  cursor: pointer;
`

const StyledHeart = styled(Heart)`
  height: 24px;
  width: 24px;
  color: black;
  cursor: pointer;
`

const StyledInnerDiv = styled.div`
  flex: 1;
`

const StyledRight = styled(StyledInnerDiv)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  margin-left: 10px;
`


const Navbar = () => {
  const user = useSelector(selectUser)
  const [searchQuery, setSearchQuery] = useState('')
  const [open, setOpen] = useState(false)

  console.log(user)

  return (
    <StyledBody>
      <StyledInnerBody>
        <StyledInnerDiv>
          <Link to="/">
            <StyledLogo src="/assets/logo.png" />
          </Link>
        </StyledInnerDiv>

        <StyledInnerDiv>
          <StyledInput placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </StyledInnerDiv>

        <StyledRight>
          <StyledHome />
          <StyledChat />
          <StyledPlus onClick={() => setOpen(true)} />
          <StyledCompass />
          <StyledHeart />
          <AvatarDropdown />
        </StyledRight>
      </StyledInnerBody>

      <NewPostModal open={open} setOpen={setOpen} />
    </StyledBody>
  )
}

export default Navbar
