import React from 'react';

function TitleNotes({data = {}, onUpdate, style = {}}) {
  return (
    <>
      <label htmlFor={'TitleNotes'} style={{display: "block", verticalAlign:"middle"}}>Title/Notes: 
        <textarea 
          type="text"
          name="TitleNotes"
          style={{margin: '5px', verticalAlign: "middle"}}
          defaultValue={data.TITLE}
          rows="1"
          onChange={e => 
          {
            onUpdate({...data}, data.TITLE = e.target.value);
            onUpdate({...data}, data.TITLE = e.target.value);
          }}
        >
        </textarea>
      </label>
    </>
  )
}

export default TitleNotes;