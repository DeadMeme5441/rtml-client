import axios from "axios";
import React from "react";

const Upload = () => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    uploadHandler(fileUploaded);
  };

  function uploadHandler(upfile) {
    const url = "http://0.0.0.0:8000/file/upload";
    const formData = new FormData();

    formData.append("file", upfile);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="ml-7 mb-6 p-3 bg-Orange text-center text-lg w-4/5 rounded-lg shadow-md"
      >
        Upload File
      </button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Upload;
