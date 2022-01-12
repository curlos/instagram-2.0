import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Heart } from '@styled-icons/bootstrap/Heart'
import { HeartFill } from '@styled-icons/bootstrap/HeartFill'
import { DotsHorizontalRounded } from '@styled-icons/boxicons-regular/DotsHorizontalRounded'
import { Chat } from '@styled-icons/bootstrap/Chat'
import { Bookmark } from '@styled-icons/bootstrap/Bookmark'
import NewCommentInput from './NewCommentInput'
import LargeComment from './LargeComment'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import { BookmarkFill } from 'styled-icons/bootstrap'

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

const StyledHeartFill = styled(HeartFill)`
  height: 24px;
  color: red;
`

const StyledChat = styled(Chat)`
  height: 24px;
  margin-bottom: 2px;
`

const StyledBookmark = styled(Bookmark)`
  height: 24px;
`

const StyledBookmarkFill = styled(BookmarkFill)`
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

interface StyledLeftProps {
  imageFile: any,
}

const StyledLeft = styled.div<StyledLeftProps>`
  width: 60%;
  background-image: url(${props => props.imageFile || '/assets/posts/harley.jpeg'});
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
  author: any
}

const LargePost = ({ post, author }: Props) => {

  console.log(post)

  const user = useSelector(selectUser)
  const [currPost, setCurrPost] = useState(post)
  const [likes, setLikes] = useState(currPost.Likes || [])
  const [bookmarks, setBookmarks] = useState(currPost.Bookmarks || [])
  const [comments, setComments] = useState(currPost.Comments || [])
  const liked = likes.find((obj: any) => obj.UserId === user.id)
  const bookmarked = bookmarks.find((obj: any) => obj.UserId === user.id)

  console.log(currPost)
  console.log(author)

  const handleLike = async () => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/likes`, {
      PostId: currPost.id,
      UserId: user.id
    }).then((response) => {
      console.log(response.data)
      setLikes(response.data)
    })
  }

  const handleBookmark = async () => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/bookmarks`, {
      PostId: currPost.id,
      UserId: user.id
    }).then((response) => {
      console.log(response.data)
      setBookmarks(response.data)
    })
  }

  const handleComment = async (text: any) => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/comments`, {
      PostId: currPost.id,
      text: text,
      username: user.username
    }).then((response) => {
      console.log(response.data)
      setComments(response.data)
    })
  }

  return (
    <StyledBody>


      <StyledLeft imageFile={process.env.REACT_APP_SERVER_URL + post.images} />

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
              <StyledIconButton onClick={handleLike}>
                {liked ? <StyledHeartFill /> : <StyledHeart />}
              </StyledIconButton>

              <StyledIconButton>
                <StyledChat />
              </StyledIconButton>

            </StyledIconsLeft>

            <StyledIconButton onClick={handleBookmark}>
              {bookmarked ? <StyledBookmarkFill /> : <StyledBookmark />}
            </StyledIconButton>
          </StyledIcons>

          <StyledDetailedInfo>
            <div>
              <StyledBold>{likes.length} {likes.length === 1 ? 'like' : 'likes'}</StyledBold>
            </div>

            <div>

            </div>
          </StyledDetailedInfo>
        </StyledInfoContainer>

        <NewCommentInput handleComment={handleComment} />
      </StyledRight>
    </StyledBody>
  )
}

export default LargePost