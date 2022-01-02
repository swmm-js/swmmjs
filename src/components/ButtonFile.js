import React from 'react';
import {Button} from 'react-bootstrap';
import { parseInput } from '../swmmjs.js'
import funcx from "../ncrs_scs.js"

function ButtonFile({data = {}, selectedType, selectedDuration, selectedVolume, onUpdate=onUpdate, fileTextUpdate = () => {}, style = {}}) {
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
      
      console.log(selectedType + ' ' + selectedDuration + ' ' + selectedVolume)
      fileTextUpdate(e.target.result)
      console.log(data.TIMESERIES)
    };
    reader.readAsText(e.target.files[0])
  }

  return (
    <>
      <Button onClick={handleClick} style={{width:'100%'}}>
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