import React from "react";
import "./SearchBar.css";
class SearchBar extends React.Component {
  state = { textInput: "" };

  onInputChange=(event) =>{
    this.setState({textInput:event.target.value});
  }

  onFormSubmit=(e)=>{
    e.preventDefault();
    this.props.submit(this.state.textInput);
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input className="searchBox" value={this.state.textInput} 
            type="text" onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
