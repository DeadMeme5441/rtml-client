import React from 'react';

import FileContext from '../FileContext'

const SubtagObject = ({ subtag_object }) => {

  const myContext = React.useContext(FileContext)

  const setSearchObj = () => {
    myContext.setSearchObj(subtag_object)
    console.log(subtag_object)
  }

  return (
    <div onClick={setSearchObj}>
      <p className="text-center p-2 border-l-2 border-Navy bg-Vintage">
        {subtag_object.subtag_name} : {subtag_object.subtag_value}
      </p>
    </div>
  )
};

export default SubtagObject;
