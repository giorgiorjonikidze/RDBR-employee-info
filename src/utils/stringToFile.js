 const dataURLToImage = (key) => {
    const dataURL = localStorage.getItem(key);
    const parts = dataURL.split(",");
    const contentType = parts[0].split(":")[1].split(";")[0];
    const data = parts[1];
    const byteArray = Uint8Array.from(atob(data), (c) => c.charCodeAt(0));

    return new File([byteArray], "image.png", { type: contentType });
  };


  export default dataURLToImage