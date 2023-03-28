import React from 'react';
import { CheckCircle } from '@mui/icons-material';
import { demoChannelUrl, demoChannelTitle, demoThumbnailUrl, demoVideoUrl, demoVideoTitle, } from '../utils/constants';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    console.log(videoId, snippet);
    return (
        <Card
            key={videoId} // add a unique key based on videoId
            sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 }}
        >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title}
                    sx={{ width: 'inherit', height: 180 }}
                />
            </Link>
            <CardContent sx={{ background: '#1e1e1e', height: '110px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='60' color='#fff'>
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 70)}
                    </Typography>
                </Link>
                {/* for channels */}
                <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight='60' color='gray'>
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
};

export default VideoCard