import React from 'react'
import PostCard from '../Posts/PostCard'
import {TextField} from '@mui/material'
import AskQuestionCard from './AskQuestionCard'

function Feed() {
    const arr = [1, 2, 3, 4, 5]
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    }}>
        <AskQuestionCard/>
    {
        arr.map(item=> {
            return <PostCard key={item}/>
        })
    }
    </div>
  )
}

export default Feed