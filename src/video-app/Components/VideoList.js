import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const list = videos.map(video => <VideoItem key={video.id.videoId || video.id.channelId} video={video} onVideoSelect={onVideoSelect}/> );
    return <div className="ui divided relaxed list">{list}</div>
}

export default VideoList;