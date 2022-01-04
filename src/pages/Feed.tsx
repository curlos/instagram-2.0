import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Stories from '../components/Stories'
import SmallUser from '../components/SmallUser'
import Suggestions from '../components/Suggestions'

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
  return (
    <div>
      <Navbar />

      <StyledBody>
        <StyledLeft>
          <Stories />
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
