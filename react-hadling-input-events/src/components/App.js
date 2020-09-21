import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import unsplash from './Api/Unsplash';
import ImageList from './ImageList/ImageList';

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get(`/search/photos`, {
      params: {
        query: term,
      }     
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar submit={this.onSearchSubmit} />
        {this.state.images.length > 0 ?<ImageList images={this.state.images}/>: (
          ""
        )}
      </div>
    );
  }
}

export default App;
