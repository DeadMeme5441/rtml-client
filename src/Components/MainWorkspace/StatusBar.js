import React from 'react';

import FileContext from '../FileContext'

const StatusBar = ({ errors }) => {

  const myContext = React.useContext(FileContext)
  console.log(errors)

  return(
    <div className="p-3 border-t-2 border-black bg-white">
    {
      errors.value === false ?
        <div> No Errors.</div> :
      <div>There are errors.</div>
    }
    </div>

  )

};

export default StatusBar;
