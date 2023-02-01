import React from 'react'
import { Grid, Typography} from '@mui/material'
import Layout from '../../layout/Layout'

function Jobs() {
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
        <Typography>Coming Soon!</Typography>
      </Grid>

    </Layout>
  )
}

export default Jobs