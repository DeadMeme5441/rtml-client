import axios from 'axios';
import React from 'react';

const Upload = () => {

  const hiddenFileInput = React.useRef(null)

  const handleClick = () => {
    hiddenFileInput.current.click()
  }

  const handleChange = event => {
    const fileUploaded = event.target.files[0]
    uploadHandler(fileUploaded)
  }

  function uploadHandler(upfile) {

    const url = 'http://13.233.94.116:8000/file/upload'
    const formData = new FormData();

    formData.append('file', upfile)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    axios.post(url, formData, config)
  }

  return (
    <div>
      <button onClick={handleClick} className="container p-5  border-t-2  border-black bg-gray-500 text-center text-2xl text-extrabold">
        Upload File
      </button>
      <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{ display: 'none' }} />
    </div>
  )

};

export default Upload;
