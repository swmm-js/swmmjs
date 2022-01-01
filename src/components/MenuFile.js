import React from 'react';
import { parseInput } from '../swmmjs.js'

function MenuFile({data = {}, onUpdate, style = {}}) {
  function showFile (e) {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result);
      console.log(text);
      const theModel = parseInput(text);

      console.log(theModel);
      onUpdate(theModel)
    };
    reader.readAsText(e.target.files[0])
  }

  return (<div>
      <label htmlFor="fileUpload"><p>File...</p>
      <input 
        type="file" 
        id="fileUpload" 
        onChange={e=>showFile(e)}
        style={{display:"none"}} 
      />
      </label>
  </div>
  )
}

  
export default MenuFile;