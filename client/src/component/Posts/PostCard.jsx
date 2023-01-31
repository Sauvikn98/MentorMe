import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function PostCard({post}) {
  
  return (
    <Card sx={{ width: '35vw', marginBottom:'2rem' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "primary.main" }} aria-label="recipe">
            
          </Avatar>
        }
        title={post.author.authorName}
        subheader={`Posted on: ${new Date(post.createdAt).toDateString()}`}
      />
      
      <CardContent>
        <Typography variant="h5" sx={{marginBottom: '0.5rem'}}>
          {post.title}
        </Typography>
        <Typography variant="body1" >
          {post.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="save">
          <BookmarkAddOutlinedIcon />
        </IconButton>
        
      </CardActions>
      
    </Card>
  );
}