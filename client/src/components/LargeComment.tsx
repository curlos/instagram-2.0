import React from 'react'
import styled from 'styled-components'
import { Heart } from 'styled-icons/bootstrap'

const StyledBold = styled.span`
  font-weight: bold;
`

const StyledMoreButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  color: #A5A5A5;
  margin-left: 4px;
  cursor: pointer;
`

const StyledComment = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  margin: 20px auto;
`

const StyledCommentDesc = styled.span`
  margin-left: 4px;
`

const StyledThinHeart = styled(Heart)`
  height: 15px;
`

const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`

const StyledAvatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
`

const StyledCommentUser = styled.div`
  display: flex;
  gap: 5px;
`

const StyledExtraDetails = styled.div`
  display: flex;
  gap: 10px;
  color: #919191;
  margin-top: 7px;
`

const StyledLightGray = styled.div`
  color: #A9A9A9;
`

const LargeComment = () => {
  return (
    <div>
      <StyledComment>
        <StyledCommentUser>
          <StyledAvatar src="/assets/avatars/black_cat.jpeg" alt="" />
          <div>
            <StyledBold>05alissa</StyledBold>
            <StyledCommentDesc>
              I think Im not the only one to be sad about the fact that all women from One Piece look absolutely the same. Same face,...
              <StyledMoreButton>more</StyledMoreButton>
            </StyledCommentDesc>
            <StyledExtraDetails>
              <StyledLightGray>5h</StyledLightGray>
              <div>72 likes</div>
              <div>Reply</div>
            </StyledExtraDetails>
          </div>
        </StyledCommentUser>

        <StyledIconButton>
          <StyledThinHeart />
        </StyledIconButton>
      </StyledComment>
    </div>
  )
}

export default LargeComment
