import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { CheckmarkStarburst } from 'styled-icons/fluentui-system-filled'
import { ChevronDown, DotsHorizontalRounded } from 'styled-icons/boxicons-regular'
import ProfileOptionsModal from './ProfileOptionsModal'

const StyledBody = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  padding-left: 40px;
  padding-right: 40px;

  @media (max-width: 768px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`

const StyledInnerBody = styled.div`

`

const StyledName = styled.div`
  font-size: 28px;
  font-weight: 100;
`

const StyledAvatar = styled.img`
  height: 150px;
  border-radius: 50%;
  margin-right: 60px;

  @media (max-width: 768px) {
    height: 100px;
  }
`

const StyledButton = styled.button`
  display: block;
  height: 100%;
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  padding: 10px;
  background-color: transparent;
`

const StyledCheckmark = styled(CheckmarkStarburst)`
  color: #3897F0;
  height: 20px;
  width: 20px;
`

const StyledDown = styled(ChevronDown)`
  height: 20px;
  width: 20px;
`

const StyledLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const StyledRight = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const StyledRightTop = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;

  @media (max-width: 768px) {
    display: block;
  }
`

const StyledDots = styled(DotsHorizontalRounded)`
  height: 20px;
  width: 20px;
  cursor: pointer;
`

const StyledBold = styled.span`
  font-weight: bold;
`

const StyledStats = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`

const StyledStat = styled.span`
  margin-right: 20px;
`

const StyledLinkContainer = styled.div`
  margin-top: 5px;
`

const StyledLink = styled.a`
  color: #0D4173;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const StyledBlack = styled.span`
  color: black;
`

const StyledFollowedBy = styled.div`
  font-size: 12px;
  margin-top: 10px;
  color: gray;
`

interface Props {
  profileInfo: any,
  profilePosts: any
}

const ProfileInfo = ({ profileInfo, profilePosts }: Props) => {

  const [open, setOpen] = useState(false)

  console.log(profileInfo)

  return (
    <StyledBody>
      <StyledLeft>
        <StyledAvatar src="/assets/avatars/harley_avatar.jpeg" alt="" />
      </StyledLeft>

      <StyledRight>
        <StyledRightTop>
          <StyledName>
            {profileInfo.username}
            <StyledCheckmark />
          </StyledName>

          <StyledButton>
            <StyledBold>Message</StyledBold>
          </StyledButton>
          <StyledButton>
            <StyledBold>Follow</StyledBold>
          </StyledButton>
          <StyledButton>
            {/* <StyledDown /> */}
            S
          </StyledButton>

          <StyledDots onClick={() => setOpen(true)} />
        </StyledRightTop>

        <StyledStats>
          <StyledStat>
            <StyledBold>{profilePosts.length}</StyledBold> posts
          </StyledStat>

          <StyledStat>
            <StyledBold>385m</StyledBold> followers
          </StyledStat>

          <StyledStat>
            <StyledBold>491</StyledBold> following
          </StyledStat>
        </StyledStats>

        <div>
          <StyledBold>{profileInfo.fullName}</StyledBold>
        </div>

        {profileInfo.website ? (
          <StyledLinkContainer>
            <StyledLink>{profileInfo.website}</StyledLink>
          </StyledLinkContainer>
        ) : null}

        <StyledFollowedBy>
          Followed by <StyledBlack>kingjames</StyledBlack> and <StyledBlack>brkicks</StyledBlack>
        </StyledFollowedBy>
      </StyledRight>

      {open ? <ProfileOptionsModal open={open} setOpen={setOpen} /> : null}


    </StyledBody>
  )
}

export default ProfileInfo
