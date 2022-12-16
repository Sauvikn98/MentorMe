import React, {useState} from 'react'
import {Box, Typography, Tabs, Tab} from '@mui/material'
import Layout from '../../layout/Layout'
import MyMentors from './MyMentors';
import FindMentors from './FindMentors';

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

function Mentors() {
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
        <Tab label="My Mentors" />
        <Tab label="Find Mentors" />
      </Tabs>
      
      <TabPanel value={value} index={0}>
        <MyMentors/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FindMentors/>
      </TabPanel>
      </Box>
    </Layout>
  )
}

export default Mentors