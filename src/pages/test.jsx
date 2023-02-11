import React, { useState } from "react";

const Test = () => {
  const [image, setImage] = useState(null);

  const handleImageRetrieval = () => {
    const dataURL = localStorage.getItem("image result");
    const image = dataURLToImage(dataURL);
    setImage(image);
  };

  const dataURLToImage = (dataURL) => {
    const parts = dataURL.split(",");
    const contentType = parts[0].split(":")[1].split(";")[0];
    const data = parts[1];
    const byteArray = Uint8Array.from(atob(data), (c) => c.charCodeAt(0));

    return new File([byteArray], "image.png", { type: contentType });
  };

  return (
    <div>
      <button onClick={handleImageRetrieval}>Retrieve Image</button>
      {image && <img src={URL.createObjectURL(image)} alt="image" />}
    </div>
  );
};

export default Test;