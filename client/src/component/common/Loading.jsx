import React from 'react'
import { Grid, Typography} from '@mui/material'
import Layout from '../../layout/Layout'

function Loading() {
  return (
    <Layout>
      <Grid
        container
        style={{
          display: "flex",
          flexFlow: "row Wrap",
          justifyContent: "center",
          minHeight: "100vh"
        }}
      >
        <Typography>Loading...</Typography>
      </Grid>

    </Layout>
  )
}

export default Loading