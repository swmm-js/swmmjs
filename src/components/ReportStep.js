import React from 'react';

function ReportStep({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor={'ReportStep'} style={{display: "block"}}>Report Step: 
        <input 
          type="text"
          pattern="^\d{2}:\d{2}:\d{2}$"
          title="Format is HH:MM:SS (example: 01:30:00)"
          style={{margin: '5px'}}
          name="ReportStep"
          value={(data.OPTIONS.REPORT_STEP)}
          onChange={e=>onUpdate({...data}, data.OPTIONS.REPORT_STEP = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default ReportStep;