import {
  Card,
  CardMedia,
  Avatar,
  CardActionArea,
  CardContent,
  Typography,
  Box
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";


function ProfileCard() {
  const { user } = useSelector((state) => state.auth);

  if(!user) {
    return <div>Loading...</div>
  }
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
          {/* {user?.name[0]} */}
        </Avatar>
        </Box>
        <CardContent sx={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <Typography variant="h5">
            {user?.name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {user?.bio}
          </Typography>
          {user.account_type == 'mentee' ? (
            <>
            <Typography variant="body1" color="text.secondary">
            My Mentors: {user?.approvedMentors?.length}
          </Typography>
          <Typography variant="body1" color="text.secondary">Role: Mentee</Typography>
            </>
          ) : (
            <>
            <Typography variant="body1" color="text.secondary">
            My Mentees: {user?.approvedMentees?.length}
          </Typography>
          <Typography variant="body1" color="text.secondary">Role: Mentor</Typography>
            </>
          )}
        </CardContent>
      
    </Card>
  );
}

export default ProfileCard;
