import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { Link, useLocation } from 'react-router-dom'
import EditProfile from '../components/EditProfile'
import ChangePassword from '../components/ChangePassword'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'

const StyledBody = styled.div`
  background-color: #FAFAFA;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;

  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 20px;
`

const StyledSettingsContainer = styled.div`
  display: flex;
  background-color: #fff;
  width: 75%;
  border: 1px solid #DBDBDB;
`

const StyledLeft = styled.div`
  width: 30%;
  height: 100%;
  border-right: 1px solid #DBDBDB;
`

const StyledRight = styled.div`
  width: 70%;
  padding: 25px;
`

interface StyledOptionProps {
  settingsType: boolean;
}

const StyledOption = styled(Link) <StyledOptionProps>`
  display: block;
  color: black;
  text-decoration: none;
  padding: 16px;
  cursor: pointer;
  font-weight: ${props => props.settingsType ? 'bold' : 'normal'};
  border-left: ${props => {
    console.log(props.settingsType)
    return props.settingsType ? '1px solid black' : 'none'
  }};

  &:hover {
    background-color: #EFEFEF;
  }
`

const Settings = () => {
  const user = useSelector(selectUser)
  const location = useLocation()
  const [settingsType, setSettingsType] = useState(location.pathname.includes('/edit') ? 'Edit Profile' : 'Change Password')

  useEffect(() => {
    setSettingsType(location.pathname.includes('/edit') ? 'Edit Profile' : 'Change Password')
  }, [location.pathname])

  console.log(user)

  return (
    <div>
      <Navbar />
      <StyledBody>
        <StyledSettingsContainer>
          <StyledLeft>
            <StyledOption to={`/settings/edit`} settingsType={settingsType === 'Edit Profile'}>Edit Profile</StyledOption>
            <StyledOption to={`/settings/password/change`} settingsType={settingsType === 'Change Password'}>Change Password</StyledOption>
          </StyledLeft>

          <StyledRight>
            {settingsType === 'Edit Profile' ? (
              <EditProfile user={user} />
            ) : (
              <ChangePassword user={user} />
            )}
          </StyledRight>
        </StyledSettingsContainer>
      </StyledBody>
    </div>
  )
}

export default Settings
