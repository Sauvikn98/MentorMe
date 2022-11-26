import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import { Component } from 'react'

export default class CreateProfile extends Component {
  render(){
    return (
      <Grid container style={{
        display: "flex",
        flexFlow: "row Wrap",
        justifyContent: "center",
        alignItems: "center",
        height: "98vh",
      }}>
        <Grid item xs={12} sm={7}>
          <form>
            <Box p={2} mb={2} component={Paper}>
               Stepper works here
            </Box>
          </form>
        </Grid>
      </Grid>
    )
  }
}

