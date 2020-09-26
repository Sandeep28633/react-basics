import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.streamToShow) return <div>Loading ...</div>
    const {title,description} = this.props.streamToShow;
    return (
        <div>
            <h1>{title}</h1>
            <h5>{description}</h5>
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { streamToShow: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);