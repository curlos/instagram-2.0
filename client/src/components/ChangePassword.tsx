import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'

const StyledBody = styled.div`
  
`

const StyledTop = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`

const StyledAvatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`

const StyledInput = styled.input`
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  padding: 12px;
  width: 100%;
  background-color: #FAFAFA;
  font-size: 15px;

  &:focus {
    outline: 1px solid black;
  }
`

const StyledLabel = styled.label`
  font-weight: bold;
  width: 25%;
`

const StyledButtonContainer = styled.div`
  width: 100%;
`

const StyledButton = styled.button`
  background-color: #0095F6;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
`

interface Props {
  user: any
}

const ChangePassword = ({ user }: Props) => {

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  const handleChangePassword = async () => {
    const response = await axios.put(``)
    console.log(response.data)
  }

  return (
    <StyledBody>
      <StyledTop>
        <StyledAvatar src="/assets/avatars/black_cat.jpeg" alt="" />
        <h2>{user.username}</h2>
      </StyledTop>

      <StyledInputContainer>
        <StyledLabel>Old Password</StyledLabel>
        <StyledInput value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
      </StyledInputContainer>

      <StyledInputContainer>
        <StyledLabel>New Password</StyledLabel>
        <StyledInput value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </StyledInputContainer>

      <StyledInputContainer>
        <StyledLabel>Confirm New Password</StyledLabel>
        <StyledInput value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
      </StyledInputContainer>

      <StyledInputContainer>
        <StyledLabel />
        <StyledButtonContainer>
          <StyledButton>Change Password</StyledButton>
        </StyledButtonContainer>
      </StyledInputContainer>

    </StyledBody>
  )
}

export default ChangePassword
