import React, { useState } from 'react'
import styled from 'styled-components'
import { FacebookSquare } from 'styled-icons/boxicons-logos'
import { Link } from 'react-router-dom'

const StyledBody = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FAFAFA;
  box-sizing: border-box;
`

const StyledInnerBody = styled.div`
  height: 100%;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
`

const StyledLeft = styled.div``

const StyledRight = styled.div``

const StyledLargeImage = styled.img`
  height: 600px;
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

const StyledSeparator = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #9B9B9B;
  margin: 15px auto;
  font-size: 14px;

  &:before, &:after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #DBDBDB;;
  }

  &:not(:empty):before {
    margin-right: .75em;
  }

  &:not(:empty):after {
    margin-left: .75em;
  }
`

const StyledFacebookLoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
  border: none;
  background-color: transparent;
  color: #385185;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`

const StyledFacebookSquare = styled(FacebookSquare)`
  height: 25px;
`

const StyledSmallAlert = styled.div`
  color: #385185;
  font-size: 12px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const StyledBottomContainer = styled.div`
  background-color: #fff;
  border: 1px solid #DBDBDB;
  padding: 30px;
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
`

const StyledLink = styled(Link)`
  color: #0095F6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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

            <StyledSeparator>OR</StyledSeparator>

            <StyledFacebookLoginButton>
              <StyledFacebookSquare />
              Log in with Facebook
            </StyledFacebookLoginButton>

            <StyledSmallAlert>
              Forgot password?
            </StyledSmallAlert>
          </StyledForm>

          <StyledBottomContainer>
            Don't have an account? <StyledLink to="/signup">Sign up</StyledLink>
          </StyledBottomContainer>
        </StyledRight>
      </StyledInnerBody>
    </StyledBody>
  )
}

export default Login