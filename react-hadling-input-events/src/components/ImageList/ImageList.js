import React from "react";
import ImageCard from "./ImageCard/ImageCard";
import "./ImageList.css";
const ImageList = (props) => {
  return props.images.map((image) => {
    return (
      <div className="image-list">
        <ImageCard key={image.id} image={image} />
      </div>
    );
  });
};

export default ImageList;
