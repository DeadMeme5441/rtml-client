import React from "react";
import axios from "axios";

import FileContext from "../FileContext";

const FileObject = ({ fileName }) => {
  const myContext = React.useContext(FileContext);

  const fileHandler = (e) => {
    myContext.setCurrentFile(fileName);
    const url = "http://localhost:8000/setfile/" + fileName;
    axios.post(url).then((response) => {
    });
  };

  const deleteFile = () => {
    const url = "http://localhost:8000/api/delete/" + myContext.currentFile;
    axios.get(url).then((response) => {
      console.log(response.data);
    });
  };

  return fileName === myContext.currentFile ? (
    <div className="container inline-flex flex-row relative bg-white border rounded-tl-2xl rounded-bl-2xl">
      <div
        className="container flex p-5 text-center text-xl "
        onClick={fileHandler}
      >
        {fileName}
      </div>
      <div
        className="absolute flex inset-y-0 right-0 w-16 p-5"
        onClick={deleteFile}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
    </div>
  ) : (
    <div className="container inline-flex flex-row relative bg-indigo-300">
      <div className="container p-5 self-center text-xl" onClick={fileHandler}>
        {fileName}
      </div>
    </div>
  );
};

export default FileObject;
