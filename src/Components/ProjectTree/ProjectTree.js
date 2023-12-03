import React from "react";
import axios from "axios";

import FileContext from "../FileContext";

import Upload from "./Upload";
import FileObject from "./FileObject";

const ProjectTree = () => {
  const myContext = React.useContext(FileContext);
  const [uploaded, setUploaded] = React.useState(true);

  React.useEffect(() => {
    if (uploaded === true) {
      axios.get("http://localhost:8000/files").then((response) => {
        myContext.setFiles(response.data.files);
      });
      setUploaded(false);
    }
  }, [uploaded, myContext]);

  const reloadTree = () => {
    if (!uploaded) setUploaded(true);
  };

  return (
    <div className="relative container flex-none flex-col h-screen items-center  w-2/12 bg-Navy">
      <div className="flex flex-row">
        <div className="container p-5 text-left text-bold text-2xl ml-5 text-Vintage">
          Files
        </div>
        <div className="flex p-5 mt-1 text-Vintage" onClick={reloadTree}>
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
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </div>
      </div>
      {myContext.files ? (
        myContext.files.map((file) => {
          return <FileObject fileName={file} />;
        })
      ) : (
        <div className="text-center pt-5">No files loaded.</div>
      )}
      <div className="container absolute bottom-0 pb-6">
        <Upload />
      </div>
    </div>
  );
};

export default ProjectTree;
