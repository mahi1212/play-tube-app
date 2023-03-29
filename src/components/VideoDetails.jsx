import { CheckCircle } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/FetchFromAPI'
import Videos from './Videos'


const VideoDetails = () => {
  const { id } = useParams()

  // load details of the video
  const [videoDetail, setVideoDetail] = React.useState(null)
  const [relatedVideos, setRelatedVideos] = React.useState(null)
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    // related videos
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setRelatedVideos(data.items))


  }, [])

  if (!videoDetail?.snippet) return <div>Loading...</div>
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '110px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" sx={{ m: 2 }}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff', py: 1, px: 2 }}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color="#fff" fontWeight="bold">
                  Channel: {channelTitle}
                </Typography>
              </Link>
              <Stack direction="row" sx={{ mt: 1 }}>
                <Typography variant="body1" color="#fff">
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" color="#fff" sx={{ ml: 2 }} >
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
      {/* related videos */}
      <Box sx={{ mt: 2 }}>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={relatedVideos} direction="column" />
        </Box>
      </Box>
    </Box>
  )
}

export default VideoDetails