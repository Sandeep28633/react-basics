import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, errorMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) =>
        this.setState({
          errorMsg: "Something went wrong ! unable to get current location",
        })
    );
  }

  renderContent(){

    if(this.state.errorMsg && !this.state.lat){
      return <div>Error :{this.state.errorMsg}</div>
    }
     if(!this.state.errorMsg && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <Spinner message="hey, please allow us to get your location"/>
  }

  render() {
    return (
      <div className="border_red">
       {this.renderContent()}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
