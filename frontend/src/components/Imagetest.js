import React, { useState } from "react";
import axios from "axios";

function Imagetest() {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post("http://localhost:8081/upload", formData)
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log("Succeeded");
        } else {
          console.log("Failed");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <input type="file" onChange={handleFile} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default Imagetest;
