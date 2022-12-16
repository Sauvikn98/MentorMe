import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';

function AskQuestionCard() {
  return (
    <Card sx={{ width: '35vw', marginBottom:'2rem' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "primary.main" }} aria-label="recipe">
            D
          </Avatar>
        }
        title="Dhanmoni Nath"
      />
      <CardContent>
      <TextField id="outlined-basic"  fullWidth label="Ask a question..." variant="outlined" />
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" sx={{marginLeft: 'auto'}}>
            Post
        </Button>
        
      </CardActions>
      
    </Card>
  )
}

export default AskQuestionCard