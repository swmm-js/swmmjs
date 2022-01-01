import React from 'react';
import { saveInp } from '../swmmjs.js'

function MenuSave({model = {}, onUpdate, style = {}}) {
  return (
    <>
      <button 
        id="fileSave"
        onClick={()=>{saveInp(model); onUpdate(model)}}
      >Save</button>
    </>
  )
}

  
export default MenuSave;