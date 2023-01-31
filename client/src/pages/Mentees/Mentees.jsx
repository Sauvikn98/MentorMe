import React, {useState} from 'react'
import {Box, Typography, Tabs, Tab} from '@mui/material'
import Layout from '../../layout/Layout'
import MyMentees from './MyMentees';
import PendingMenteeRequest from './PendingMenteeRequest';

function TabPanel(props) {
    const { children, value, index } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

function Mentees() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Box sx={{
        width: "80vw",
        margin: '0 auto'
      }}>

        <Tabs
        value={value}
        onChange={handleChange}
      >
        <Tab label="Pending Requests" />
        <Tab label="My Mentees" />
      </Tabs>
      
      <TabPanel value={value} index={0}>
        <PendingMenteeRequest/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MyMentees/>
      </TabPanel>
      </Box>
    </Layout>
  )
}

export default Mentees