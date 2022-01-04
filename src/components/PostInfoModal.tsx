import React, { useState } from 'react'
import styled from 'styled-components'
import { XLg } from '@styled-icons/bootstrap/XLg'

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  padding-top: 20px;
  padding-right: 20px;
  width: 100%;
  height: 100%;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.7);
  color: #262626;
`

const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  border-radius: 12px;
  width: 40%;
  height: 70%;
  overflow: auto;
`

const StyledCloseButton = styled(XLg)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
  color: #fff;
  height: 30px;
  width: 30px;
  float: right;

  &:hover, &:focus {
    cursor: pointer;
  }
`

interface StyledOptionProps {
  color?: string;
  lastOption?: boolean;
}

const StyledOption = styled.div<StyledOptionProps>`
  color: ${props => props.color || 'black'};
  font-weight ${props => props.color ? 'bold' : 'normal'};
  border-bottom: 1px solid #DBDBDB;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #FAFAFA; 
  }
`

interface Props {
  open: boolean;
  setOpen: any;
}

const PostInfoModal = ({ open, setOpen }: Props) => {


  return (
    open ? (
      <StyledModal>
        <StyledCloseButton onClick={() => setOpen(false)} />
        <StyledModalContent>
          <StyledOption color={'red'}>Report</StyledOption>
          <StyledOption color={'red'}>Unfollow</StyledOption>
          <StyledOption>Go to post</StyledOption>
          <StyledOption>Share to...</StyledOption>
          <StyledOption>Copy Link</StyledOption>
          <StyledOption lastOption={true} onClick={() => setOpen(false)}>Cancel</StyledOption>
        </StyledModalContent>
      </StyledModal>
    ) : null
  )
}

export default PostInfoModal