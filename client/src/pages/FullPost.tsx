import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import LargePost from '../components/LargePost'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const StyledBody = styled.div`
  padding: 30px 100px;
  background-color: #FAFAFA;
  height: 100vh;
`

const FullPost = () => {

  const { id } = useParams()
  const [post, setPost] = useState()
  const [author, setAuthor] = useState()
  const [comments, setComments] = useState()
  const [loading, setLoading] = useState(true)

  console.log(id)

  useEffect(() => {
    getAllDataFromAPI()
  }, [])

  const getAllDataFromAPI = async () => {
    const postInfo = await getPost()
    setPost(postInfo)
    setAuthor(await getAuthor(postInfo))
    setLoading(false)
  }

  const getPost = async () => {
    const response = await axios.get(`http://localhost:3001/posts/${id}`)
    return response.data
  }

  const getAuthor = async (postInfo: any) => {
    const response = await axios.get(`http://localhost:3001/users/${postInfo.username}`)
    return response.data
  }

  console.log(post)

  return (
    <div>
      <Navbar />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <StyledBody>
          <LargePost post={post} author={author} />
        </StyledBody>
      )}
    </div>
  )
}

export default FullPost
