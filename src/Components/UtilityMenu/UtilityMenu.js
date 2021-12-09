import React from "react";
import axios from "axios";

import FileContext from "../FileContext";

import ResultView from "./ResultView";

const UtilityMenu = () => {
  const myContext = React.useContext(FileContext);

  const [searchTerm, setSearchTerm] = React.useState(null);
  const [searchResult, setSearchResult] = React.useState(null);
  const textInput = React.createRef();

  const searchHandler = () => {
    setSearchTerm(textInput.current.value);
    axios
      .get("http://localhost:8000/api/search/" + textInput.current.value)
      .then((response) => {
        setSearchResult(response.data.results);
      });
  };

  return (
    <div className="flex-none flex-col h-screen max-h-screen bg-indigo-300">
      <div className="flex p-4 bg-indigo-300">
        <input
          class="w-full p-2 bg-indigo-200 rounded-l-lg"
          type="text"
          placeholder="Search..."
          ref={textInput}
        />
        <button
          class="w-auto flex justify-end items-center text-gray-500 p-2 hover:text-black bg-indigo-200 rounded-r-lg"
          onClick={searchHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="container overflow-auto h-3/6">
        {searchResult ? (
          <ResultView results_object={searchResult} />
        ) : (
          <div></div>
        )}
      </div>
      <div className="container bottom-0 h-2/6 overflow-auto">
        <div>

          {myContext.searchObj ? (
            <div>
          <p className="p-3 text-xl text-center font-bold">
            Search Preview
          </p>
            <div className="text-center p-3 pt-5">
              {myContext.fileObj.file_data
                .substring(
                  myContext.searchObj.subtag_start,
                  myContext.searchObj.subtag_end
                )
                .split("\n")
                .map((line) => {
                  return <p className="leading-relaxed">{line}</p>;
                })}
            </div>
</div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default UtilityMenu;
