import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SmallPost from './SmallPost'
import { Grid3x3 } from '@styled-icons/bootstrap/Grid3x3'
import { Bookmark } from '@styled-icons/bootstrap/Bookmark'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

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

const StyledTypeContainer = styled(Link) <StyledTypeContainerProps>`
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
  text-decoration: none;
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

interface Props {
  profileInfo: any,
  profilePosts: any
}

const ProfilePosts = ({ profileInfo, profilePosts }: Props) => {
  const location = useLocation()
  const [postsType, setPostsType] = useState(location.pathname.includes('/saved') ? 'SAVED' : 'POSTS')
  const [bookmarks, setBookmarks] = useState<any>([])

  useEffect(() => {
    const getAllBookmarks = async () => {
      const currBookmarks = []
      for (let bookmark of profileInfo.Bookmarks) {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts/${bookmark.PostId}`)
        currBookmarks.push(response.data)
      }
      setBookmarks(currBookmarks)
    }
    getAllBookmarks()
  }, [])

  useEffect(() => {
    setPostsType(location.pathname.includes('/saved') ? 'SAVED' : 'POSTS')
  }, [location.pathname])

  console.log(profileInfo)
  console.log(bookmarks)

  return (
    <StyledBody>
      <StyledPostTypesContainer>
        <StyledTypeContainer to={`/profile/cristiano`} postsType={postsType === 'POSTS'}>
          <StyledGrid3x3 />
          POSTS
        </StyledTypeContainer>

        <StyledTypeContainer to={`/profile/cristiano/saved`} postsType={postsType === 'SAVED'}>
          <StyledBookmark />
          SAVED
        </StyledTypeContainer>
      </StyledPostTypesContainer>

      <StyledPosts>
        {postsType === 'SAVED' ? (
          bookmarks.map((post: any) => {
            return (
              <SmallPost post={post} />
            )
          })
        ) : (
          profilePosts.map((post: any) => {
            return (
              <SmallPost post={post} />
            )
          })
        )}
      </StyledPosts>
    </StyledBody>
  )
}

export default ProfilePosts
