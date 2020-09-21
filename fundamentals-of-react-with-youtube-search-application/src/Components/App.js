import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Youtube from "./Api/Youtube";
import VideoList from "./VideoList/VideoList";
import VideoDetail from "./VideoDetail/VideoDetail";

class App extends React.Component {
  state = { videoData: [], selectedVideo: null };

  componentDidMount() {
      this.onSearchClick('Children Stories');
  }
  
  onSearchClick = async (term) => {
    const searchData = await Youtube.get(`/search?q=${term}/`);
    this.setState({ videoData: searchData.data.items, selectedVideo:  searchData.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <h1>APp</h1>
        <SearchBar onSearchSubmit={this.onSearchClick} />
        <div className="ui grid">
          <div className="ui row">
            <div className="nine wide column">
              {this.state.selectedVideo ? (
                <VideoDetail video={this.state.selectedVideo} />
              ) : (
                ""
              )}
            </div>
            <div className="seven wide column">
              {this.state.videoData.length > 0 ? (
                <VideoList
                  videos={this.state.videoData}
                  onVideoSelect={this.onVideoSelect}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
