import React from 'react';
import {Chart as ChartJS} from 'chart.js/auto'
import {Chart} from 'react-chartjs-2'
import {Line} from 'react-chartjs-2'
import { useState, useEffect } from 'react'


function ChartLineBasic({model={}, onTypeChange = () => {}, style = {}}) {
  const [dataArray, setDataArray] = 
    useState(model.TIMESERIES.filter(el => el.TimeSeries === "swmmjsTS"));

  useEffect(() => {
    console.log(model.TIMESERIES[0].TimeSeries)
    console.log(model.TIMESERIES)
    let vals = model.TIMESERIES.filter(el => el.TimeSeries === "swmmjsTS")
    console.log(vals)
    setDataArray(vals)
    setDataArray(vals)
    console.log(dataArray)
  }, [model])

  let state = {
    labels: dataArray.Time,
    datasets: [
      {
        label: 'SCS Curve',
        fill: false,
        lineTension: 0.35,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: dataArray.Value
      }
    ]
  }

  return (
    <div>
      <Line
        data={state}
        options={{
          title:{
            display:true,
            text:'SCS Curve',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </div>
  );
}

export default ChartLineBasic