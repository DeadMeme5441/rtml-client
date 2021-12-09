import React from 'react';


import SubtagObject from './SubtagObject'

const TagObject = ({ tag_object }) => {

  const [minimize, setMinimize] = React.useState(false)

  return (
    <div className="flex flex-col bg-indigo-300">
      <div onClick={() => setMinimize(!minimize)}>
        <p className="flex-grow text-xl p-2 pl-6">
          {tag_object.tag_name}
        </p>
      </div>
      {
        minimize ?
          <div className="container p-2">
            {
              tag_object.subtags_list.map(
                subtag => {
                  return (<SubtagObject subtag_object={subtag} />
                  )
                }
              )
            }
          </div> :
          <></>
      }
    </div>
  )
};

export default TagObject;
