import React from 'react'
import {Card,
    CardMedia,
    Avatar,
    CardActionArea,
    CardContent,
    Typography,
    Box,
    Button} from '@mui/material'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";


function MentorProfileCard({mentee}) {
  //const [mentorData, setMentorData] = useState(null)
  const { jwt_token } = useSelector((state) => state.auth);

//   useEffect(()=> {
//     fetch(`http://127.0.0.1:5000/user/${mentor.id}`, {
//       headers: {
//           'x-auth-token': jwt_token
//         },
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log({ data });
//         setMentorData(data)
//       });
//   }, [])
//   if(!mentorData){
//     return <div>Loading...</div>
//   }
  return (
    <Card>
      
        <Box sx={{display:'flex',
            justifyContent:'center',
            alignItems:'center',marginTop:'2rem'}}>

        
        <Avatar
          sx={{
            height: "100px",
            width: "100px",
            bgcolor: "primary.main",
            fontSize: 48,
          }}
        >
          
        </Avatar>
        </Box>
        <CardContent sx={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <Typography variant="h5">
            {mentee?.id}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Software Developer at Google
          </Typography>
          {/* <Typography variant="body1" color="text.secondary">
            Mentees: {men?.approvedMentees?.length} 
          </Typography> */}
          {/* <Button>Send Request</Button> */}
        </CardContent>
      
    </Card>
  )
}

export default MentorProfileCard