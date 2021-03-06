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
  min-height: 100vh;
  background-color: #FAFAFA;
`

const StyledInnerBody = styled.div`
  width: 80%;

  @media (max-width: 768px) {
    width: 95%;
  }
`

const Profile = () => {

  const { username } = useParams()
  const [profileInfo, setProfileInfo] = useState({})
  const [profilePosts, setProfilePosts] = useState([])
  const [loading, setLoading] = useState(true)

  console.log(username)

  useEffect(() => {
    getAllProfileData().then(() => {
      setLoading(false)
    })
  }, [username])

  const getAllProfileData = async () => {
    setProfileInfo(await getProfileInfo())
    setProfilePosts(await getProfilePosts())
  }

  const getProfileInfo = async () => {
    const response = await axios.get(`http://localhost:3001/users/${username}`)
    return response.data
  }

  const getProfilePosts = async () => {
    const response = await axios.get(`http://localhost:3001/posts/username/${username}`)
    return response.data
  }

  console.log(profileInfo)
  console.log(profilePosts)


  return (
    <div>
      <Navbar />
      <StyledBody>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <StyledInnerBody>
            <ProfileInfo profileInfo={profileInfo} profilePosts={profilePosts} />
            <ProfilePosts profileInfo={profileInfo} profilePosts={profilePosts} />
          </StyledInnerBody>
        )}
      </StyledBody>
    </div>
  )
}

export default Profile
