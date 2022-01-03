import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

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
          profile
        </StyledInnerBody>
      </StyledBody>
    </div>
  )
}

export default Profile
