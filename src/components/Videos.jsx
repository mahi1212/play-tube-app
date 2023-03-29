import { Box, Grid } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import ChannelCard from './ChannelCard'
import Loader from './Loader'
import VideoCard from './VideoCard'

const Videos = ({ videos}) => {
  if(!videos?.length) return <Loader />;
  return (
    <Grid container spacing={{ xs: 2, sm: 1, md:4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      { videos ? 
        videos.map((item, index) => (
          <Grid item xs={2} sm={2} md={3} key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Grid>
        )) : 'Loading...'
      }
    </Grid>
  )
}



export default Videos