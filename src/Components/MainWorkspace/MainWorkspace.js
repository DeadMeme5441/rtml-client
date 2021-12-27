import React from "react";
import axios from "axios";

import FileContext from "../FileContext";

import FileView from "./FileView";
import StatusBar from "./StatusBar";
import UtilityMenu from "../UtilityMenu/UtilityMenu";

const MainWorkspace = () => {
  const myContext = React.useContext(FileContext);

  const [fileData, setFileData] = React.useState();
  const [tagVisibility, setTagVisibility] = React.useState(false);

  React.useEffect(() => {
    if (myContext.currentFile !== null) {
      const url = "http://13.233.94.116:8000/api/" + myContext.currentFile;
      axios.get(url).then((response) => {
        setFileData(response.data);
        myContext.setFileObj(response.data);
      });
    }
  }, [myContext.currentFile]);

  if (!fileData)
    return (
      <div className="flex flex-col container max-w-9/12 h-screen relative">
        {" "}
        <div className="flex flex-row p-5 bg-Navy">
          {" "}
          <div className="text-left text-bold text-2xl"> Navbar. </div>
        </div>
        <div className="container pt-80 bg-Vintage h-screen">
          <p className="text-gray-500 text-center font-bold text-3xl bg-Vintage">
            Choose a file from the sidebar to your left.
          </p>
        </div>
      </div>
    );

  return (
    <div className="flex flex-row">
      <div className="flex flex-col container bg-Vintage h-screen">
        <div className="flex flex-row p-5 bg-Navy relative">
          <div className="flex p-4">
            <label class="absolute items-center m-6 inset-y-0 left-0 ml-10">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 bg-white"
                onChange={() => setTagVisibility(!tagVisibility)}
              />
              <span class="ml-2 text-Vintage">Show tags.</span>
            </label>
          </div>
        </div>
        <div className="overflow-auto">
          <FileView
            file_text={fileData.file_data}
            search_obj={myContext.searchObj}
            tag_vis={tagVisibility}
          />
        </div>
        <div>
          <StatusBar errors={fileData.errors} />
        </div>
      </div>
      <div className="w-3/12 h-screen">
        <UtilityMenu />
      </div>
    </div>
  );
};

export default MainWorkspace;
