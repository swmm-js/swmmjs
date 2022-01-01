import React from 'react';

function ReportStartDate({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor={'ReportStartDate'} style={{display: "block"}}>Report Start Date: 
        <input 
          type="datetime"
          style={{margin: '5px'}}
          name="ReportStartDate"
          value={(data.OPTIONS.REPORT_START_DATE)}
          onChange={e=>onUpdate({...data}, data.OPTIONS.REPORT_START_DATE = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default ReportStartDate;