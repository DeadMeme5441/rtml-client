import React from 'react';

import FileContext from "../FileContext";

const FileView = ({ file_text, search_obj, tag_vis }) => {

  const [text, setText] = React.useState(file_text)
  const [condition, setCondition] = React.useState('')
  const [fileText, setFileText] = React.useState(null)

  const myContext = React.useContext(FileContext)

  React.useEffect(() => {
    if (tag_vis) {
      setCondition('')
    }
    else {
      setCondition(/<.*>/g)
    }
    if (search_obj) {
      setFileText([text.substring(0, search_obj.subtag_start),
      text.substring(search_obj.subtag_start, search_obj.subtag_end),
      text.substring(search_obj.subtag_end)])
    }
    else {
      setFileText([text])
    }

  }, [file_text, tag_vis, search_obj, text, myContext.currentFile])

  if (!fileText) return (
    <div className="container py-20 px-40">
      <div className="container text-center text-xl leading-relaxed bg-white p-24">
        No file loaded yet.
      </div>
    </div>
  )

  return (
    <div className="container py-20 px-40 max-w-auto rounded-xl">
      <div className="container border border-black text-center text-xl leading-relaxed bg-white p-24 break-words">
        {
          fileText
            .map(
              (text, index) => {
                return (
                  text.replace(condition, '').split('\n')
                    .map(
                      line => {
                        return (
                          <p className="has-text-centered is-size-4" style={{ backgroundColor: index === 1 ? '#396EB0' : 'white' }}>
                            {line}
                          </p>
                        )
                      }
                    )
                )
              }
            )
        }
      </div>
    </div>
  )
};

export default FileView;
