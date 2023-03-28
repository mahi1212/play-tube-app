import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const Feed = () => {
  return (
    <Stack sx={{
      flexDirection: { xs: 'column', md: 'row' }
    }}>
      <Box sx={{
        height: { xs: 'auto', md: '92vh' },
        borderRight: '1px solid #3d3d3d',
        px: {sx: 0, md: 2}
      }}>
        Sidebar
        <Typography variant='body2' className='copyright' sx={{mt:2, color: '#fff'}}>
          &copy; Copyright 2023
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed