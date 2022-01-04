import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import ProfileInfo from '../components/ProfileInfo'
import Posts from '../components/Posts'

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
`

const StyledInnerBody = styled.div`
  width: 80%;
`

const Profile = () => {

  return (
    <div>
      <Navbar />
      <StyledBody>
        <StyledInnerBody>
          <ProfileInfo />
          <Posts />
        </StyledInnerBody>
      </StyledBody>
    </div>
  )
}

export default Profile
