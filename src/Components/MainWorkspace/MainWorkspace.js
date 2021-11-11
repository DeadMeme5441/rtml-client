import React from 'react';
import axios from 'axios'

import FileContext from '../FileContext'

import FileView from './FileView'
import UtilityMenu from "../UtilityMenu/UtilityMenu"

const MainWorkspace = () => {

  const myContext = React.useContext(FileContext)

  const [fileData, setFileData] = React.useState()
  const [tagVisibility, setTagVisibility] = React.useState(false)

  React.useEffect(() => {
    const url = "http://0.0.0.0:8000/api/" + myContext.currentFile
    axios.get(url).then(response => {
      setFileData(response.data)
      myContext.setFileObj(response.data)
    })
  }, [myContext.currentFile])

  if (!fileData) return (
    <div className="flex flex-col container max-w-9/12 bg-gray-200 h-screen border-r-2 border-black relative">
      <div className="flex flex-row p-5 border-b-2 border-black bg-white">
        <div className="text-left text-bold text-2xl">
          Navbar.
        </div>
      </div>
      <div className="container pt-80">
        <p className="text-gray-500 text-center font-bold text-3xl">
          Choose a file from the sidebar to your left.
        </p>
      </div>
    </div>
  )

  return (
    <div className="flex flex-row">
      <div className="flex flex-col container bg-gray-200 h-screen border-r-2 border-black">
        <div className="flex flex-row p-5 border-b-2 border-black bg-white relative">
          <div className="text-left text-bold text-2xl">
            Currently Viewing : {fileData.file_name}
          </div>
          <label class="absolute items-center m-6 inset-y-0 right-0">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" onChange={() => setTagVisibility(!tagVisibility)} /><span class="ml-2 text-gray-700">Show tags.</span>
          </label>
        </div>
        <div className="overflow-auto">
          <FileView file_text={fileData.file_data} search_obj={myContext.searchObj} tag_vis={tagVisibility} />
        </div>
      </div >
      <div className="w-3/12 h-screen">
        <UtilityMenu />
      </div>
    </div>
  )
};

export default MainWorkspace;
