import React, { useState } from 'react'
import styled from 'styled-components'
import SmallPost from './SmallPost'
import { Grid3x3 } from '@styled-icons/bootstrap/Grid3x3'
import { Bookmark } from '@styled-icons/bootstrap/Bookmark'

const StyledBody = styled.div`
  max-width: 100%;
  margin-bottom: 40px;
`

const StyledPostTypesContainer = styled.div`
  border-top: 1px solid #DBDBDB;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

interface StyledTypeContainerProps {
  postsType: boolean;
}

const StyledTypeContainer = styled.div<StyledTypeContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: ${props => props.postsType ? 'bold' : 'normal'};
  color: ${props => props.postsType ? 'black' : 'gray'};
  cursor: pointer;
  border-top: ${props => props.postsType ? '1px solid black' : '1px solid #DBDBDB;'};
  padding: 15px;
  margin-top: -1px;
`

const StyledPosts = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 20px;
`

const StyledGrid3x3 = styled(Grid3x3)`
  height: 10px;
  width: 10px;
  color: black;
`

const StyledBookmark = styled(Bookmark)`
  height: 10px;
  width: 10px;
  color: black;
`

const ProfilePosts = () => {

  const [postsType, setPostsType] = useState('POSTS')

  return (
    <StyledBody>
      <StyledPostTypesContainer>
        <StyledTypeContainer postsType={postsType === 'POSTS'} onClick={() => setPostsType('POSTS')}>
          <StyledGrid3x3 />
          POSTS
        </StyledTypeContainer>

        <StyledTypeContainer postsType={postsType === 'SAVED'} onClick={() => setPostsType('SAVED')}>
          <StyledBookmark />
          SAVED
        </StyledTypeContainer>
      </StyledPostTypesContainer>

      <StyledPosts>
        <SmallPost />
        <SmallPost />
        <SmallPost />
        <SmallPost />
        <SmallPost />
        <SmallPost />
        <SmallPost />
        <SmallPost />
      </StyledPosts>
    </StyledBody>
  )
}

export default ProfilePosts
