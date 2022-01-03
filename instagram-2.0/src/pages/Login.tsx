import React, { useState } from 'react'
import styled from 'styled-components'

const StyledBody = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FAFAFA;
`

const StyledInnerBody = styled.div`
  height: 75%;
  display: flex;
`

const StyledLeft = styled.div``

const StyledRight = styled.div``

const StyledLargeImage = styled.img`
  height: 100%;
`

const StyledForm = styled.form`
  background-color: #fff;
  border: 1px solid #DBDBDB;
  padding: 30px;
  margin-top: 30px;
  width: 350px;
  text-align: center;
`

const StyledLogo = styled.img`
  margin-bottom: 20px;
`

const StyledInput = styled.input`
  display: block;
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;

  &:focus {
    outline: none;
  }
`

const StyledPasswordInput = styled(StyledInput)`
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: none;
`

const StyledButton = styled.button`
  background-color: #0095F6;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  font-weight: bold;
`

const StyledPasswordContainer = styled.div`
  display: flex;
`

const StyledShowButton = styled.button`
  font-weight: bold;
  border: 1px solid #DBDBDB;
  border-left: none;
  background-color: #FAFAFA;
  margin-bottom: 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #DBDBDB;
  }
`

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.stopPropagation()
  }

  return (
    <StyledBody>
      <StyledInnerBody>
        <StyledLeft>
          <StyledLargeImage src="/assets/iphone-with-profile.jpg" />
        </StyledLeft>

        <StyledRight>
          <StyledForm onSubmit={handleSubmit}>
            <StyledLogo src="/assets/logo.png" />

            <StyledInput type="text" placeholder="Phone number, username, or email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <StyledPasswordContainer>
              <StyledPasswordInput type={`${showPassword ? 'text' : 'password'}`} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <StyledShowButton type="button" onClick={(e) => {
                e.stopPropagation()
                setShowPassword(!showPassword)
              }}>Show</StyledShowButton>
            </StyledPasswordContainer>

            <StyledButton>Log In</StyledButton>
          </StyledForm>
        </StyledRight>
      </StyledInnerBody>
    </StyledBody>
  )
}

export default Login
