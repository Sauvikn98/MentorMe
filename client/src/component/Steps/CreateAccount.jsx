import { styled } from '@mui/material/styles';
import { Grid, Divider, Typography, Box } from '@mui/material';
import { renderButton, renderText } from '../common/displayComponent';



export default function CreateAccount({ handleNext }) {
    const content1 = (
        <div>
            {renderButton({ label: 'Create Account as Mentor', onClick: handleNext })}
        </div>
    );

    const content2 = (
        <div>
            {renderButton({ label: 'Create Account as Student', onClick: handleNext })}
        </div>
    );


    return (
        <Grid>
            <Box pt={6}>
        {renderText({
          label: "REGISTRATION FORM",
          type: "h5",
          color: "textPrimary",
          align: "center",
        })}
       
      </Box>
            <Grid item container style={{ height: "60vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Grid item xs={5}>
                    <Typography variant="body2" align="center">
                        {content1}
                    </Typography>
                </Grid>

                <Divider orientation="vertical" style={{ height: "60%" }}>
                    OR
                </Divider>
                <Grid item xs={5}>
                    <Typography variant="body2" align="center">
                        {content2}
                    </Typography>
                </Grid>
            </Grid>
            <Box pb={6}>
                {renderText({
                    label: "Already have an Account? Login",

                    align: "center",
                })}

            </Box>
        </Grid>

    );
}