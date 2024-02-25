import { Box, styled } from '@mui/material'
import React from 'react'
import Post from './Post'

export default function Feed() {
  const PostsContainer = styled(Box)(({theme})=>({
    margin:theme.spacing(1,1.5),
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    gap:theme.spacing(2),
  }))
  return (
    <>
      <PostsContainer width={'100%'}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </PostsContainer>
    </>
  )
}
