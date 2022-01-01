import React, {useState} from "react";
import './App.css';
import Model from './components/Model';
import data from './data/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [model, updateModel] = useState(data);
  return (
    <>
    <Model 
      model={model} 
      onUpdate={updateModel}
      title="SWMM Model" 
    />
    </>
  )
}

export default App;
