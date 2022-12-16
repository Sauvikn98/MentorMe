import { Typography, Box } from '@mui/material'
import React from 'react'
import Feed from '../../component/Feed/Feed'
import NotificationCard from '../../component/Notification/NotificationCard'
import PostCard from '../../component/Posts/PostCard'
import ProfileCard from '../../component/Profile/ProfileCard'
import Layout from '../../layout/Layout'


function Home() {
  return (
    <Layout>
      <Box sx={{
        display:'flex',
        flexDirection:'row',
        alignItems:'start',
        justifyContent: 'space-around',
        width: "80vw",
        margin: '2rem auto'
      }}>

      <ProfileCard/>
      <Feed/>
      <NotificationCard/>
      </Box>
    </Layout>
  )
}

export default Home