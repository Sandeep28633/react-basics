import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import {fetchStream,deleteStream} from '../../actions';
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onDelete=()=>{
    this.props.deleteStream(this.props.match.params.id);
  }

  renderActions = () => {
    return (
      <React.Fragment>
        <button className="ui button negative" onClick={this.onDelete}>Delete</button>
        <Link className="ui button" to="/">Cancel</Link>
      </React.Fragment>
    );
  };

  renderContent=()=>{
    if(!this.props.streamtoDelete)
      return "Are you sure you want to delete this stream ?";
    return `Are you sure you want to delete this stream with title ${this.props.streamtoDelete.title}`
  }
  render() {
    return (
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  return { streamtoDelete: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete);
