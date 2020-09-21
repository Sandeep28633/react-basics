import React from "react";
import './VideoItem.css';


const VideoItem = ({ item,onVideoSelect }) => {
  return (
    <div className="VideoItem item" onClick={()=>onVideoSelect(item)}>
      <img className="ui image" src={item.snippet.thumbnails.medium.url} alt={item.snippet.title}/>
      <div className="content">
        <div className="header">{item.snippet.title} </div>
      </div>
    </div>
  );
};

export default VideoItem;
