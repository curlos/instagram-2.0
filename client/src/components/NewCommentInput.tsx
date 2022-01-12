import React, { useState } from 'react'
import styled from 'styled-components'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import { EmojiSmile } from '@styled-icons/bootstrap/EmojiSmile'
import TextareaAutosize from 'react-textarea-autosize';
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'

const StyledBody = styled.div`
  background-color: #fff;
  border: 1px solid #DBDBDB;
  padding: 12px;
  font-size: 16px;
  display: flex;
  align-items: center;
`

const StyledTextarea = styled(TextareaAutosize)`
  border: none;
  padding-left: 6px;
  resize: none;
  width: 100%;
  
  &:focus {
    outline: none;
  }
`

const StyledEmojiButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const StyledEmoji = styled(EmojiSmile)`
  height: 24px;
  width: 24px;
  color: black;
`

interface StyledPostButtonProps {
  validInput: boolean;
}

const StyledPostButton = styled.button<StyledPostButtonProps>`
  color: #0095F6;
  border: none;
  background: none;
  font-weight: bold;
  opacity: ${props => props.validInput ? '100%' : '50%'};
`

interface Props {
  handleComment?: any,
}

const NewCommentInput = ({ handleComment }: Props) => {

  const user = useSelector(selectUser)
  const [input, setInput] = useState('')
  const [showEmojis, setShowEmojis] = useState(false)

  const addEmoji = (e: any) => {
    let sym = e.unified.split('-')
    let codesArray: any = []
    sym.forEach((el: any) => codesArray.push('0x' + el))
    let emoji = String.fromCodePoint(...codesArray)
    setInput(input + emoji)
  }

  // const handlePostComment = async () => {
  //   const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/comments`, {
  //     text: input,
  //     username: user.username
  //   })
  //   console.log(response.data)
  // }

  return (
    <StyledBody>
      <StyledEmojiButton onClick={() => setShowEmojis(!showEmojis)}>
        <StyledEmoji />
      </StyledEmojiButton>

      {showEmojis && (
        <Picker
          onSelect={addEmoji}
          style={{
            position: "absolute",
            marginTop: "40px",
            marginLeft: "40px",
            maxWidth: "320px",
            borderRadius: "20px"
          }}
        />
      )}
      <StyledTextarea placeholder="Add a comment..." value={input} onChange={(e) => setInput(e.target.value)} />

      <StyledPostButton validInput={input !== ''} onClick={() => handleComment(input)}>Post</StyledPostButton>
    </StyledBody>
  )
}

export default NewCommentInput

