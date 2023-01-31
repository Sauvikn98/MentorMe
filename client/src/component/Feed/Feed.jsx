import React from 'react'
import PostCard from '../Posts/PostCard'
import {TextField, Typography} from '@mui/material'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PostSomethingCard from './PostSomethingCard';

function Feed() {
    const { posts } = useSelector((state) => state.posts);
    const { user } = useSelector((state) => state.auth);
  
    if(!posts?.length){
        return (
            <>
            {user.account_type == "mentor" && (<PostSomethingCard user={user}/>)}
            <Typography sx={{ maxWidth:'40vw', margin:'2rem auto'}}>No post yet! Connect with {user.account_type == "mentor" ? <span>mentees</span> : <span>mentors</span>} to view their posts. </Typography>
            </>
        )
    }
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    }}>
         {user.account_type == "mentor" && (<PostSomethingCard user={user}/>)}
    {
        posts?.map(post=> {
            return <PostCard key={post._id} post={post}/>
        })
    }
    </div>
  )
}

export default Feed