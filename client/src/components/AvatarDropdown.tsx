import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Person } from '@styled-icons/bootstrap/Person'
import { Bookmark } from '@styled-icons/bootstrap/Bookmark'
import { Gear } from '@styled-icons/bootstrap/Gear'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, logout } from '../redux/userSlice'

const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
`

interface StyledDropdownContentProps {
  open: boolean;
}

const StyledDropdownContent = styled.div<StyledDropdownContentProps>`
  display: ${props => props.open ? 'block' : 'none'};
  position: absolute;
  background-color: #fff;
  min-width: 200px;
  box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.1);
  z-index: 1;
  left: calc(-200px + 45px);
  border-radius: 10px;
  margin-top: 8px;

  &:before {
    position: absolute;
    top: -9px;
    right: 20px;
    display: inline-block;
    border-right: 9px solid transparent;
    border-bottom: 9px solid #fff;
    border-left: 9px solid transparent;
    content: '';
  }
`

const StyledAvatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
`

const StyledOption = styled.div`
  border-radius: 10px;
  color: #383838;
  font-size: 14px;
`

const StyledLink = styled(Link)`
  display: flex;
  gap: 8px;
  padding: 12px;
  width: 100%;
  color: #383838;
  text-decoration: none;

  &:hover {
    background-color: #FAFAFA;
  }
`

const StyledLogout = styled.div`
  border-top: 1px solid #DBDBDB;
  padding: 12px;
  cursor: pointer;

  &:hover {
    background-color: #FAFAFA;
  }
`

const StyledPerson = styled(Person)`
  height: 16px;
  width: 16px;
  color: #383838;
`

const StyledBookmark = styled(Bookmark)`
  height: 16px;
  width: 16px;
  color: #383838;
`

const StyledGear = styled(Gear)`
  height: 16px;
  width: 16px;
  color: #383838;
`


const AvatarDropdown = () => {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleLogout = () => {
    console.log('logout')
    dispatch(logout())
    setOpen(false)
  }


  return (
    <StyledDropdown>
      <StyledAvatar src="/assets/avatars/harley_avatar.jpeg" alt="" onClick={() => setOpen(!open)} />
      <StyledDropdownContent open={open}>
        <StyledOption>
          <StyledLink to={`/profile/${user.username}`} onClick={handleClose}>
            <StyledPerson />
            <span>Profile</span>
          </StyledLink>

          <StyledLink to="/profile/cristiano/saved" onClick={handleClose}>
            <StyledBookmark />
            <span>Saved</span>
          </StyledLink>

          <StyledLink to="/settings" onClick={handleClose}>
            <StyledGear />
            <span>Settings</span>
          </StyledLink>

          <StyledLogout onClick={handleLogout}>
            Log Out
          </StyledLogout>
        </StyledOption>
      </StyledDropdownContent>
    </StyledDropdown>
  )
}

export default AvatarDropdown