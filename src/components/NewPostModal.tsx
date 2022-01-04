import React from 'react'
import styled from 'styled-components'
import { XLg } from '@styled-icons/bootstrap/XLg'

const StyledModal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  padding-top: 20px;
  padding-right: 20px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.7);
  overflow-y: noscroll;
`

const StyledModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  margin-top: 100px;
  border: 1px solid #888;
  border-radius: 12px;
  width: 80%;
`

const StyledCloseButton = styled(XLg)`
  color: #fff;
  height: 30px;
  width: 30px;
  float: right;

  &:hover, &:focus {
    cursor: pointer;
  }
`

const StyledTop = styled.div`
  border-bottom: 1px solid #DBDBDB;
  padding: 10px;
`

const StyledMiddle = styled.div`
  width: 100%;
`

const StyledMiddleLeft = styled.div`
  max-width: 60%;
`

const StyledImage = styled.img`
  width: 100%;
  border-bottom-left-radius: 10px;
`

const StyledMiddleRight = styled.div`
  flex: 1;
`


const NewPostModal = () => {


  return (
    <StyledModal>
      <StyledCloseButton />
      <StyledModalContent>
        <StyledTop>
          <div>Create new post</div>
        </StyledTop>

        <StyledMiddle>
          <StyledMiddleLeft>
            <StyledImage src="/assets/posts/harley_post.jpeg" />
          </StyledMiddleLeft>

          <StyledMiddleRight>

          </StyledMiddleRight>


        </StyledMiddle>
      </StyledModalContent>
    </StyledModal>
  )
}

export default NewPostModal
