import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromApi } from '../utils/FetchFromAPI'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {setVideos(data.items)})
    
  }, [selectedCategory])

  return (
    <Stack sx={{
      flexDirection: { xs: 'column', md: 'row',}
    }}>
      <Box sx={{
        height: { xs: 'auto', md: '93vh' },
        borderRight: '1px solid #3d3d3d',
        px: {sx: 0, md: 2}
      }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography variant='body2' className='copyright' sx={{mt:2, color: '#fff'}}>
          &copy; Copyright 2023
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 1}}>
        <Typography sx={{ml: 2, color: 'white'}} variant='h4'>
           <span style={{textTransform: 'uppercase', color: '#F31503'}}>{selectedCategory}</span> VIDEOS
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed