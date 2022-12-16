import {
  Card,
  CardMedia,
  Avatar,
  CardActionArea,
  CardContent,
  Typography,
  Box
} from "@mui/material";

function ProfileCard() {
  return (
    <Card sx={{ maxWidth: '20vw'}}>
      
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
            Software Developer at Google Lorem ips dolor, sit amet consectetur adipisicing elit.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            My Mentees: 250 
          </Typography>
        </CardContent>
      
    </Card>
  );
}

export default ProfileCard;
