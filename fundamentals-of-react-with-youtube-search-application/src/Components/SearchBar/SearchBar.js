import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="Search-Bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>video Search</label>
            <input
              className="searchBox"
              value={this.state.term}
              type="text"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
