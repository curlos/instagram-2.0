import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Stories from '../components/Stories'
import SmallUser from '../components/SmallUser'
import Suggestions from '../components/Suggestions'
import MediumPost from '../components/MediumPost'
import NewPostModal from '../components/NewPostModal'
import axios from 'axios'

const StyledBody = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  background-color: #FAFAFA;
  padding: 35px;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
`

const StyledLeft = styled.div`
  flex: 2;
`

const StyledRight = styled.div`
  flex: 1;
  margin-left: 25px;
`

const Feed = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/posts').then((response) => {
      setPosts(response.data)
    })
  }, [])

  return (
    <div>
      <Navbar />

      <StyledBody>
        <StyledLeft>
          <Stories />

          <div>
            {posts.map((post) => <MediumPost post={post}/>)}
          </div>
        </StyledLeft>

        <StyledRight>
          <SmallUser />

          <Suggestions />
        </StyledRight>
      </StyledBody>

    </div>
  )
}

export default Feed
