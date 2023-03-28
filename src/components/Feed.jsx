import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'

const Feed = () => {
  return (
    <Stack sx={{
      flexDirection: { xs: 'column', md: 'row',}
    }}>
      <Box sx={{
        height: { xs: 'auto', md: '93vh' },
        borderRight: '1px solid #3d3d3d',
        px: {sx: 0, md: 2}
      }}>
        <Sidebar />
        <Typography variant='body2' className='copyright' sx={{mt:2, color: '#fff'}}>
          &copy; Copyright 2023
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 1}}>
        <Typography sx={{ml: 2, color: 'white'}} variant='h4'>
          New <span style={{textTransform: 'uppercase', color: '#F31503'}}>videos</span>
        </Typography>
        <Videos videos={[]}/>
      </Box>
    </Stack>
  )
}

export default Feed