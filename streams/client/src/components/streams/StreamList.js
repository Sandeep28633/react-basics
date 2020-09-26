import React from "react";
import { fetchStreams } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = (item) => {
    if (item.userId === this.props.currentUserId)
      return (
        <div className="right floated content">
          <Link to={`/stream/edit/${item.id}`} className="ui button primary">Edit</Link>
          <Link to={`/stream/delete/${item.id}`} className="ui button negative">Delete</Link>
        </div>
      );
  };

  
  renderStream = () => {
    return this.props.streams.map((item) => {
      return (
        <div className="item" key={item.id}>
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            <Link to={`/stream/${item.id}`} className="header">{item.title}</Link>
            <div className="description">{item.description}</div>
          </div>
          {this.renderAdmin(item)}
        </div>
      );
    });
  };

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{textAlign:"right"}}>
          <Link to="/stream/new" className="ui button primary" >Create Stream</Link>
        </div>
      );
    }
  };

  render() {
    if (!this.props.streams) return null;
    return (
      <div>
        <h2>Stream</h2>
        <div className="ui celled list">{this.renderStream()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
