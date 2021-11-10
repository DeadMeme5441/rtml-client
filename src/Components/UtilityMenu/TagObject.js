import React from 'react';


import SubtagObject from './SubtagObject'

const TagObject = ({ tag_object }) => {

  const [minimize, setMinimize] = React.useState(false)

  return (
    <div className="flex flex-col border border-gray-400">
      <div onClick={() => setMinimize(!minimize)}>
        <p className="flex-grow text-xl p-2 pl-6 border-b-2 border-gray-300">
          {tag_object.tag_name}
        </p>
      </div>
      {
        minimize ?
          <div className="container">
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
