import React from 'react';

import TagObject from './TagObject'

const ResultView = ({ results_object }) => {

  console.log(results_object)

  return (
    <div className="container">
      {
        results_object[1].Tag_Results.length !== 0 ?
          <div className="container bg-indigo-300">
            <p className="p-3 text-xl text-center font-bold">
              Tag Results
            </p>
            <div className="container overflow-auto">
              {
                results_object[1]
                  .Tag_Results
                  .map(
                    tag => {
                      return (
                        <TagObject tag_object={tag} />
                      )
                    }
                  )
              }
            </div>
          </div> :
          <></>
      }
      {
        results_object[2].Subtag_Results.length !== 0 ?
          <div className="container bg-indigo-300">
            <p className="p-3 text-xl text-center font-bold">
              Subtag Results
            </p>
            <div className="container overflow-auto">
              {
                results_object[2]
                  .Subtag_Results
                  .map(
                    tag => {
                      return (
                        <TagObject tag_object={tag} />
                      )
                    }
                  )
              }
            </div>
          </div> :
          <></>
      }
    </div >
  )
};

export default ResultView;
