import {combineReducers} from 'redux';

 const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "3:05" },
    { title: "All Star", duration: "2:35" },
    { title: "I want it that way", duration: "4:15" },
  ];
};

 const selectedReducer=(selectedSong=null,action)=>{
    if(action.type == "SONG_SELECTED"){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedReducer
});