import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import ProfileInfo from '../components/ProfileInfo'
import ProfilePosts from '../components/ProfilePosts'

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
  background-color: #FAFAFA;
`

const StyledInnerBody = styled.div`
  width: 80%;

  @media (max-width: 768px) {
    width: 95%;
  }
`

const Profile = () => {



  return (
    <div>
      <Navbar />
      <StyledBody>
        <StyledInnerBody>
          <ProfileInfo />
          <ProfilePosts />
        </StyledInnerBody>
      </StyledBody>
    </div>
  )
}

export default Profile
