import React, { useState } from 'react'
import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize';

const StyledBody = styled.div`
  font-size: 15px;
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
  gap: 10px;
  margin-bottom: 15px;
`

const StyledInput = styled.input`
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  padding: 12px;
  width: 100%;
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

const StyledTextarea = styled(TextareaAutosize)`
  border: 1px solid #DBDBDB;
  padding: 10px;
  border-radius: 5px;
  resize: none;
  width: 100%;
  min-height: 100px;
  font-size: 15px;
  
  &:focus {
    outline: none;
  }
`

const StyledButtonNoBG = styled.button`
  background: none;
  border: none;
  color: #0095F6;
  margin: 0;
  padding: 0;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

const EditProfile = () => {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [website, setWebsite] = useState('')
  const [bio, setBio] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [gender, setGender] = useState('')

  return (
    <StyledBody>
      <StyledTop>
        <StyledAvatar src="/assets/avatars/black_cat.jpeg" alt="" />
        <div>
          <h2>curlosmart</h2>
          <StyledButtonNoBG>Change Profile Photo</StyledButtonNoBG>
        </div>
      </StyledTop>

      <StyledInputContainer>
        <StyledLabel>Name</StyledLabel>
        <StyledInput placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </StyledInputContainer>

      <StyledInputContainer>
        <StyledLabel>Username</StyledLabel>
        <StyledInput placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </StyledInputContainer>

      <StyledInputContainer>
        <StyledLabel>Website</StyledLabel>
        <StyledInput placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </StyledInputContainer>

      <StyledInputContainer>
        <StyledLabel>Bio</StyledLabel>
        <StyledTextarea value={bio} onChange={(e) => setBio(e.target.value)} />
      </StyledInputContainer>


      <StyledInputContainer>
        <StyledLabel>Email</StyledLabel>
        <StyledInput placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </StyledInputContainer>

      <StyledInputContainer>
        <StyledLabel>Phone Number</StyledLabel>
        <StyledInput placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </StyledInputContainer>

      <StyledInputContainer>
        <StyledLabel>Gender</StyledLabel>
        <StyledInput placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
      </StyledInputContainer>

      <StyledInputContainer>
        <StyledLabel />
        <StyledButtonContainer>
          <StyledButton>Submit</StyledButton>
        </StyledButtonContainer>
      </StyledInputContainer>

    </StyledBody>
  )
}

export default EditProfile