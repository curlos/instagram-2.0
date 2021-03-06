import React, { useState } from 'react'
import styled from 'styled-components'
import { FacebookSquare } from 'styled-icons/boxicons-logos'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const StyledBody = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
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
  background-color: #FAFAFA;

  &:focus {
    outline: none;
  }
`

const StyledPasswordInput = styled(StyledInput)`
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: none;
`

interface PropsStyledButton {
  allValidInputs: boolean;
}

const StyledButton = styled.button<PropsStyledButton>`
  background-color: #0095F6;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  font-weight: bold;
  opacity: ${props => props.allValidInputs ? '100%' : '50%'};
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
  margin: 20px auto;
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
  color: #fff;
  background-color: #0095F6;
  border-radius: 5px;
  padding: 3px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`

const StyledFacebookSquare = styled(FacebookSquare)`
  height: 25px;
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

const StyledHeader = styled.h3`
  color: #AAAAAA;
  font-weight: normal;
  margin-bottom: 20px;
`

const SignUp = () => {

  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const checkAllValidInputs = () => {
    return email !== ''
  }

  const handleSignUp = async (e: any) => {
    e.preventDefault()
    console.log('signing up')
    console.log({
      email,
      fullName,
      username,
      password
    })

    const response = await axios.post('http://localhost:3001/auth/signup', {
      email,
      fullName,
      username,
      password
    })

    if (!response.data.error) {
      navigate('/login')
    }
    console.log(response.data)
  }

  return (
    <StyledBody>
      <StyledInnerBody>
        <StyledLeft>
          <StyledLargeImage src="/assets/iphone-with-profile.jpg" />
        </StyledLeft>

        <StyledRight>
          <StyledForm onSubmit={handleSignUp}>
            <StyledLogo src="/assets/logo.png" />

            <StyledHeader>Sign up to see photos and videos from your friends.</StyledHeader>

            <StyledFacebookLoginButton>
              <StyledFacebookSquare />
              Log in with Facebook
            </StyledFacebookLoginButton>

            <StyledSeparator>OR</StyledSeparator>

            <StyledInput type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <StyledInput type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />

            <StyledInput type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />



            <StyledPasswordContainer>
              <StyledPasswordInput type={`${showPassword ? 'text' : 'password'}`} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <StyledShowButton type="button" onClick={(e) => {
                e.preventDefault()
                setShowPassword(!showPassword)
              }}>Show</StyledShowButton>
            </StyledPasswordContainer>

            <StyledButton allValidInputs={checkAllValidInputs()} onClick={handleSignUp}>Sign Up</StyledButton>
          </StyledForm>

          <StyledBottomContainer>
            Have an account? <StyledLink to="/login">Log in</StyledLink>
          </StyledBottomContainer>
        </StyledRight>
      </StyledInnerBody>
    </StyledBody>
  )
}

export default SignUp