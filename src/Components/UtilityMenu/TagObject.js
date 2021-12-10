import React from "react";

import SubtagObject from "./SubtagObject";

const TagObject = ({ tag_object }) => {
  const [minimize, setMinimize] = React.useState(false);

  return (
    <div className="flex flex-col bg-Vintage border border-1 border-Vintage rounded-xl m-2">
      <div className="flex flex-row" onClick={() => setMinimize(!minimize)}>
        <p className="flex-grow text-xl p-2 pl-6">{tag_object.tag_name}</p>
        {minimize === false ? (
          <div className="flex py-2.5 px-3 text-Navy">
            {" "}
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        ) : (
          <div className="flex py-2.5 px-3 text-Navy">
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
                d="M5 15l7-7 7 7"
              />
            </svg>
          </div>
        )}
      </div>
      {minimize ? (
        <div className="container p-2">
          {tag_object.subtags_list.map((subtag) => {
            return <SubtagObject subtag_object={subtag} />;
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TagObject;
