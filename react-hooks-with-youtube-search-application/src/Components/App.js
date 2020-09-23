import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import VideoList from "./VideoList/VideoList";
import VideoDetail from "./VideoDetail/VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos,search] = useVideos('children stories');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);


  return (
    <div className="ui container">
      <SearchBar
       onSearchSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="nine wide column">
            {selectedVideo ? 
            <VideoDetail 
            video={selectedVideo} /> : ""}
          </div>
          <div className="seven wide column">
            {videos.length > 0 ? (
              <VideoList
               videos={videos} 
              onVideoSelect={setSelectedVideo} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
