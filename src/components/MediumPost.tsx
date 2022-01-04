import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Heart } from '@styled-icons/bootstrap/Heart'
import { HeartFill } from '@styled-icons/bootstrap/HeartFill'
import { DotsHorizontalRounded } from '@styled-icons/boxicons-regular/DotsHorizontalRounded'
import { Chat } from '@styled-icons/bootstrap/Chat'
import { Bookmark } from '@styled-icons/bootstrap/Bookmark'
import NewCommentInput from './NewCommentInput'

const StyledBody = styled.div`
  margin: 15px auto;
  font-size: 14px;
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

const StyledViewComments = styled.button`
  display: block;
  color: #A5A5A5;
  background-color: transparent;
  border: none;
  padding: 0;
  margin-top: 5px;
  margin-bottom: 5px;
`

const StyledComment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledCommentDesc = styled.span`
  margin-left: 4px;
`

const StyledThinHeart = styled(Heart)`
  height: 15px;
`

const StyledMoreButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  color: #A5A5A5;
  margin-left: 4px;
  cursor: pointer;
`


const MediumPost = () => {
  return (
    <StyledBody>
      <StyledTop>
        <StyledTopLeft>
          <StyledLink to="/profile/cristiano">
            <StyledSmallAvatar src="/assets/avatars/harley_avatar.jpeg" />
          </StyledLink>
          <StyledLink to="/profile/cristiano">brkicks</StyledLink>
        </StyledTopLeft>

        <StyledDots />
      </StyledTop>

      <StyledImg imgSrc={`/assets/posts/wonder_woman.jpeg`} />

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
            <StyledBold>brkicks</StyledBold>
            <StyledDesc>一番くじ ワンピース WT100記念 尾田栄一郎描き下ろし 大海賊百景
              明日1/5（水）より順次発売！

              尾田っち描きおろしの「大海賊百景」が一番くじのアイテムに✨

              A賞は、約100㎝のビッグサイズ「 大海賊百景」見開きボード！
              そのほか、ルフィをはじめ7人の猛者達のフィギュアや記念プレートなど、見逃せないグッズがめじろおし👀✨

              お見逃しなく！

              ※1枚目の写真は「ジャンプフェスタ2022 幕張メッセ」で撮影したものです。

              #ONEPIECE #ワンピース #漫画 #manga #尾田栄一郎 #eiichirooda #フィギュア #figure #一番くじ #1bankuji #ichibanKUJI #BANDAISPIRITS #バンダイスピリッツ
              <StyledMoreButton>more</StyledMoreButton>
            </StyledDesc>
            <StyledViewComments>View all 20 comments</StyledViewComments>

            <StyledComment>
              <div>
                <StyledBold>05alissa</StyledBold>
                <StyledCommentDesc>
                  I think Im not the only one to be sad about the fact that all women from One Piece look absolutely the same. Same face,...
                  <StyledMoreButton>more</StyledMoreButton>
                </StyledCommentDesc>
              </div>

              <StyledIconButton>
                <StyledThinHeart />
              </StyledIconButton>
            </StyledComment>
          </div>
        </StyledDetailedInfo>
      </StyledInfoContainer>

      <NewCommentInput />
    </StyledBody>
  )
}

export default MediumPost