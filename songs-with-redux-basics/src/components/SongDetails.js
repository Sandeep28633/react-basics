import React from "react";
import { connect } from "react-redux";
const SongDetails = ({ selectedSong }) => {
  if (!selectedSong) {
    return (
      <div className="ui segment">
        <h3>Select a song</h3>
      </div>
    );
  }
  return (
    <div className="ui segment">
      <h4 className="ui header">{selectedSong.title}</h4>
      <h4 className="ui header">{selectedSong.duration}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
