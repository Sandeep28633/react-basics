import React from "react";
import {connect} from 'react-redux';
import { fetchStream,editStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
      this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit=(formValues)=>{
    this.props.editStream(this.props.match.params.id,formValues);
  }

  render() {
      if(!this.props.streamDetails) return <div>Loading....</div>
      const {title,description} = this.props.streamDetails;
    return (
        <div>
            <h3>Edit a Stream</h3>
            <StreamForm initialValues={{title,description}} onSubmit={this.onSubmit}/>
        </div>
    );
  }
}

const mapStateToProps=(state,ownProps)=>{
    return {streamDetails:state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit);
