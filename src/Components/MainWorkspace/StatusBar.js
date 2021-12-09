import React from 'react';

const StatusBar = ({ errors }) => {

  return(
    <div className="flex flex-row p-3 bg-indigo-300 font-bold">
    {
      errors.value === false ?
        <div className="flex container"> No Errors.</div> :
      <div className="flex container">There are errors.</div>
    }
      <div className="flex container flex-row">
      <div className="flex container text-right"> Tag Errors : {errors.tag_errors.length}</div>
      <div className="flex container text-right"> Subtag Errors : {errors.subtag_errors.length}</div>
      </div>
    </div>
  )

};

export default StatusBar;
