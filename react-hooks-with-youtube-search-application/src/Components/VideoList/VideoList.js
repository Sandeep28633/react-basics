import React from 'react';
import VideoItem from './VideoItem/VideoItem';
const VideoList = ({videos,onVideoSelect})=>{
    const renderedList = videos.map(video=>{
        return <VideoItem item={video} onVideoSelect={onVideoSelect} key={video.id.videoId}/>
    });
    return(
        <div className="ui divided relaxed list">
            {renderedList}
        </div>
    )
}
export default VideoList