import React, { useState } from 'react'
import styled from 'styled-components'
import { XLg } from '@styled-icons/bootstrap/XLg'
import TextareaAutosize from 'react-textarea-autosize';
import { Picker } from 'emoji-mart';
import { EmojiSmile } from 'styled-icons/bootstrap';
import { ChevronDown } from '@styled-icons/bootstrap/ChevronDown'
import { Location } from '@styled-icons/evil/Location'
import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft'

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
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.7);
  color: #262626;
`

const StyledModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  border-radius: 12px;
  width: 80%;
  height: 90%;
  overflow: auto;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #DBDBDB;
  padding: 10px;
`

const StyledMiddle = styled.div`
  display: flex;
  width: 100%;
  height: 89.8%;
`

const StyledMiddleLeft = styled.div`
  aspect-ratio: 1 / 1;
  display: flex;
  height: 100%;
  justify-content: center;
  background-image: url('/assets/posts/harley_post.jpeg');
  background-size: cover;
  border-bottom-left-radius: 12px;
`

const StyledMiddleRight = styled.div`
  flex: 1;
`

const StyledUser = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  color: #262626;
`

const StyledBold = styled.span`
  font-weight: bold;
`

const StyledAvatar = styled.img`
  height: 50px;
  width: 50px;
  object-contain: cover;
  border-radius: 50%;
`

const StyledTextarea = styled(TextareaAutosize)`
  border: none;
  resize: none;
  width: 100%;
  font-size: 16px;
  color: #262626;
  max-height: 120px;
  padding: 10px;
  
  &:focus {
    outline: none;
  }
`

const StyledExtraInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px;
  border-bottom: 1px solid #DBDBDB;
`

const StyledEmojiButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const StyledEmoji = styled(EmojiSmile)`
  height: 24px;
  width: 24px;
  color: #8E8E8E;
`

const StyledChracterLimit = styled.div`
  color: #8E8E8E;
`

const StyledLocation = styled(Location)`
  height: 20px;
  width: 20px;
  color: black;
`

const StyledChevronDown = styled(ChevronDown)`
  height: 20px;
  width: 20px;
  color: black;
`

const StyledArrowLeft = styled(ArrowLeft)`
  height: 24px;
  width: 24px;
  color: black;
`

const StyledPostButton = styled.button`
  color: #0897F6;
  font-weight: bold;
  background-color: transparent;
  border: none;
  font-weight: 16px;
`

const StyledFooter = styled.div`
  border-top: 1px solid #DBDBDB;
  background-color: #fff;
  padding: 10px;
`

interface Props {
  open: boolean;
  setOpen: any;
}

const NewPostModal = ({ open, setOpen }: Props) => {

  const [input, setInput] = useState('')
  const [showEmojis, setShowEmojis] = useState(false)

  const addEmoji = (e: any) => {
    let sym = e.unified.split('-')
    let codesArray: any = []
    sym.forEach((el: any) => codesArray.push('0x' + el))
    let emoji = String.fromCodePoint(...codesArray)
    setInput(input + emoji)
  }

  return (
    open ? (
      <StyledModal>
        <StyledCloseButton onClick={() => setOpen(false)} />
        <StyledModalContent>
          <StyledTop>
            <div>
              <StyledArrowLeft />
            </div>
            <StyledBold>Create new post</StyledBold>
            <StyledPostButton>Share</StyledPostButton>
          </StyledTop>

          <StyledMiddle>
            <StyledMiddleLeft />

            <StyledMiddleRight>
              <StyledUser>
                <StyledAvatar src="/assets/avatars/black_cat.jpeg" />
                <StyledBold>curlosmart</StyledBold>
              </StyledUser>

              <StyledTextarea placeholder="Add a comment..." value={input} onChange={(e) => setInput(e.target.value)} />

              <StyledExtraInfoContainer>
                <StyledEmojiButton onClick={() => setShowEmojis(!showEmojis)}>
                  <StyledEmoji />
                </StyledEmojiButton>

                <StyledChracterLimit>
                  {input.length}/2,200
                </StyledChracterLimit>
              </StyledExtraInfoContainer>

              <StyledExtraInfoContainer>
                Add location
                <StyledLocation />
              </StyledExtraInfoContainer>

              <StyledExtraInfoContainer>
                Accessibility
                <StyledChevronDown />
              </StyledExtraInfoContainer>

              <StyledExtraInfoContainer>
                Advanced Settings

                <StyledChevronDown />
              </StyledExtraInfoContainer>

              {showEmojis && (
                <Picker
                  onSelect={addEmoji}
                  style={{
                    position: "absolute",
                    maxWidth: "320px",
                    borderRadius: "20px"
                  }}
                />
              )}
            </StyledMiddleRight>


          </StyledMiddle>
        </StyledModalContent>
      </StyledModal>
    ) : null
  )
}

export default NewPostModal