import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Heart } from '@styled-icons/bootstrap/Heart'
import { HeartFill } from '@styled-icons/bootstrap/HeartFill'
import { DotsHorizontalRounded } from '@styled-icons/boxicons-regular/DotsHorizontalRounded'
import { Chat } from '@styled-icons/bootstrap/Chat'
import { Bookmark } from '@styled-icons/bootstrap/Bookmark'
import NewCommentInput from './NewCommentInput'
import LargeComment from './LargeComment'

const StyledBody = styled.div`
  display: flex;
  margin: 15px auto;
  font-size: 14px;
  width: 100%;
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const StyledTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #fff;
  border: 1px solid #DBDBDB;
  padding: 10px;
`

const StyledTopLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const StyledSmallAvatar = styled.img`
  height: 40px;
  border-radius: 50%;
  border: 2px solid #DD569A;
`

const StyledDots = styled(DotsHorizontalRounded)`
  height: 25px;
`

interface StyledImgProps {
  imgSrc: string
}

const StyledImg = styled.div<StyledImgProps>`
  background-image: ${props => `url('${props.imgSrc}')`};
  background-size: cover;
  aspect-ratio: 1 / 1;
`

const StyledIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledIconsLeft = styled.div`
  display: flex;
  gap: 15px;
`

const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`

const StyledHeart = styled(Heart)`
  height: 24px;
`

const StyledChat = styled(Chat)`
  height: 24px;
  margin-bottom: 2px;
`

const StyledBookmark = styled(Bookmark)`
  height: 24px;
`

const StyledInfoContainer = styled.div`
  background-color: #fff;
  border: 1px solid #DBDBDB;
  border-top: none;
  border-bottom: none;
  padding: 12px;
`

const StyledDetailedInfo = styled.div`
  margin: 12px auto;
`

const StyledBold = styled.span`
  font-weight: bold;
`

const StyledDesc = styled.span`
  margin: auto 5px;
`

const StyledMoreButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  color: #A5A5A5;
  margin-left: 4px;
  cursor: pointer;
`

const StyledLeft = styled.div`
  width: 60%;
  background-image: url('/assets/posts/wonder_woman.jpeg');
  background-size: cover;
  aspect-ratio: 1/1;
`

const StyledRight = styled.div`
  width: 40%;
`

const StyledComments = styled.div`
  background-color: white;
  border: 1px solid #DBDBDB;
  border-top: none;
  padding: 10px;
`

interface Props {
  post: any,
  author: any,
  comments: any
}

const LargePost = ({ post, author, comments }: Props) => {

  console.log(post)
  console.log(author)

  return (
    <StyledBody>


      <StyledLeft />

      <StyledRight>
        <StyledTop>
          <StyledTopLeft>
            <StyledLink to={`/profile/${author.username}`}>
              <StyledSmallAvatar src="/assets/avatars/harley_avatar.jpeg" />
            </StyledLink>
            <StyledLink to={`/profile/${author.username}`}>{author.username}</StyledLink>
          </StyledTopLeft>

          <StyledDots />
        </StyledTop>

        <StyledComments>
          <StyledBold>{author.username}</StyledBold>
          <StyledDesc>
            <span>
              {post.caption}
            </span>
            <StyledMoreButton>more</StyledMoreButton>
          </StyledDesc>

          {comments.map((comment: any) => {
            return (
              <LargeComment comment={comment} />
            )
          })}
        </StyledComments>

        <StyledInfoContainer>
          <StyledIcons>
            <StyledIconsLeft>
              <StyledIconButton>
                <StyledHeart />
              </StyledIconButton>

              <StyledIconButton>
                <StyledChat />
              </StyledIconButton>

            </StyledIconsLeft>

            <StyledIconButton>
              <StyledBookmark />
            </StyledIconButton>
          </StyledIcons>

          <StyledDetailedInfo>
            <div>
              <StyledBold>7,985 likes</StyledBold>
            </div>

            <div>

            </div>
          </StyledDetailedInfo>
        </StyledInfoContainer>

        <NewCommentInput />
      </StyledRight>
    </StyledBody>
  )
}

export default LargePost