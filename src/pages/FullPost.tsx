import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import LargePost from '../components/LargePost'

const StyledBody = styled.div`
  padding: 30px 100px;
  background-color: #FAFAFA;
`

const FullPost = () => {

  return (
    <div>
      <Navbar />

      <StyledBody>
        <LargePost />
      </StyledBody>
    </div>
  )
}

export default FullPost
