import React from 'react';
import {Button} from 'react-bootstrap';
import { parseInput } from '../swmmjs.js'

function ButtonFile({data = {}, onUpdate, style = {}}) {
  const hiddenFileInput = React.useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();
  }
  const handleChange = e => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result);
      const theModel = parseInput(text);

      onUpdate(theModel)
    };
    reader.readAsText(e.target.files[0])
  }

  return (
    <>
      <Button onClick={handleClick}>
        File...
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}}
      />
    </>
  )
  /*
  function showFile (e) {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result);
      const theModel = parseInput(text);

      onUpdate(theModel)
    };
    reader.readAsText(e.target.files[0])
  }*/
/*
  return (
    <div className="col-md-12 mb-12">
      <label htmlFor="fileUpload"><p>File...</p>
      <input 
        type="file" 
        id="fileUpload" 
        onChange={e=>showFile(e)}
        style={{display:"none"}} 
      />
      </label>
    </div>
  )*/
}

export default ButtonFile;


<div class="col-md-12 mb-12">
  <button type="button" id="save-modal-inflows ripplebutton btn-block" class="btn btn-primary">Save changes</button>
</div>