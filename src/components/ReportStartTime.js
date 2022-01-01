import React from 'react';

function ReportStartTime({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor={'ReportStartTime'} style={{display: "block"}}>Report Start Time: 
        <input 
          type="time"
          style={{margin: '5px'}}
          name="ReportStartTime"
          value={(data.OPTIONS.REPORT_START_TIME)}
          onChange={e=>onUpdate({...data}, data.OPTIONS.REPORT_START_TIME = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default ReportStartTime;