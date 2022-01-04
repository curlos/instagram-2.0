import React from 'react'
import styled from 'styled-components'
import SmallPost from './SmallPost'

const StyledBody = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 20px;
  max-width: 100%;
  margin-bottom: 40px;
`

const ProfilePosts = () => {

  return (
    <StyledBody>
      <SmallPost />
      <SmallPost />
      <SmallPost />
      <SmallPost />
      <SmallPost />
      <SmallPost />
      <SmallPost />
    </StyledBody>
  )
}

export default ProfilePosts
