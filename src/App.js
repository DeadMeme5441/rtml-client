import React from 'react'

import FileContext from "./Components/FileContext"

import ProjectTree from './Components/ProjectTree/ProjectTree'
import MainWorkspace from './Components/MainWorkspace/MainWorkspace'

function App() {

  const [currentFile, setCurrentFile] = React.useState(null)
  const [fileObj, setFileObj] = React.useState(null)
  const [searchObj, setSearchObj] = React.useState(null)
  const [files, setFiles] = React.useState(null)

  const globalVars = {
    currentFile: currentFile,
    fileObj: fileObj,
    files: files,
    searchObj: searchObj,
    setCurrentFile: setCurrentFile,
    setFileObj: setFileObj,
    setFiles: setFiles,
    setSearchObj: setSearchObj,
  }

  return (
    <FileContext.Provider value={globalVars}>
      {
        <div className="flex flex-row">
          <ProjectTree />
          <MainWorkspace />
        </div>
      }
    </FileContext.Provider>
  );
}

export default App;
