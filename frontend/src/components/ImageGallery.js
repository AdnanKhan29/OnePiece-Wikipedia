import React, { useState, useEffect } from "react";
import axios from "axios";

function ImageGallery(props) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Replace 'image-name.jpg' with the actual image name
    axios
      .get(`http://localhost:8081/image/${props.imagename}`, {
        responseType: "arraybuffer",
      })
      .then((response) => {
        const imageBlob = new Blob([response.data], { type: "image/jpeg" });
        const imageUrl = URL.createObjectURL(imageBlob);
        setImage(imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, [props.imagename]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {image ? (
        <img src={image} className="w-full" alt="Image" />
      ) : (
        "Loading image..."
      )}
    </div>
  );
}

export default ImageGallery;
