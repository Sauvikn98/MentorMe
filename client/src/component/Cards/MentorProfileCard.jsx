import React from 'react'
import {Card,
    CardMedia,
    Avatar,
    CardActionArea,
    CardContent,
    Typography,
    Box,
    Button} from '@mui/material'

function MentorProfileCard() {
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
          D
        </Avatar>
        </Box>
        <CardContent sx={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <Typography variant="h5">
            Dhanmoni Nath
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Software Developer at Google
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Mentees: 250 
          </Typography>
          <Button>Send Request</Button>
        </CardContent>
      
    </Card>
  )
}

export default MentorProfileCard