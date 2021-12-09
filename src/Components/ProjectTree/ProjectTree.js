import React from 'react'
import axios from 'axios'

import FileContext from '../FileContext'

import Upload from './Upload'
import FileObject from './FileObject'

const ProjectTree = () => {

  const myContext = React.useContext(FileContext)
  const [uploaded, setUploaded] = React.useState(true)

  React.useEffect(() => {
    if (uploaded === true) {
      axios.get("http://localhost:8000/files").then(response => {
        myContext.setFiles(response.data.files)
      })
      setUploaded(false)
    }
  }, [uploaded, myContext])


  const reloadTree = () => {
    if (!uploaded) setUploaded(true)
  }

  return (
    <div className="relative container flex-none flex-col h-screen items-center border-r-2 border-black w-2/12">
      <div className="container p-5 border-b-2 border-black text-center text-bold text-2xl" onClick={reloadTree}>
        Files
      </div>
      {
        myContext.files ?
          myContext.files.map(file => {
            return (
              <FileObject fileName={file}/>
            )
          }) :
          <div className="items-center">No files loaded.</div>
      }
      <div className="container absolute bottom-0">
        <Upload />
      </div>
    </div>
  )
}

export default ProjectTree;

