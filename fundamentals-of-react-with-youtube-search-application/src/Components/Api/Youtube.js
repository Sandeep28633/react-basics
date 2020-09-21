import axios from "axios";
const KEY = "AIzaSyBfIyulDsXn7fxr9TYHenybuqoQrjts1v0";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params:{
    part: 'snippet',
    maxResults:5,
    type: 'video',
    key:KEY
  }
});
