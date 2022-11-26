import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Component } from 'react'
import { renderText } from '../../components/displayComponent'

export default class CreateProfile extends Component {
  render() {
    return (
      <Grid container style={{
        display: "flex",
        flexFlow: "row Wrap",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `var(--gradient-bg)`
      }}>
        <Grid item xs={12} sm={7}>

          <Box p={2} mb={2} component={Paper}>
            <form style={{
              padding: "10px",
              minHeight: "350px",
              height: "auto",
            }}>
              {renderText({ label: "Stepper component" })}
              <Box style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
                p={5}
              >
                {renderText({ label: "Form Component" })}
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    )
  }
}

