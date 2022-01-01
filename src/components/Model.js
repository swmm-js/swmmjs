import React from 'react';
import Container from 'react-bootstrap/Container';
import OptionsMenu from './OptionsMenu';
import MenuFile from './MenuFile';
import MenuSave from './MenuSave';
import Conduits from './Conduits';
import funcx from "../ncrs_scs.js";
import data from '../data/nrcs_scs.json';


function Model({model = {}, title='', onUpdate = f => f}) {
  let thisLink=Object.keys(model.CONDUITS)[0];

  return (
  <>
    <MenuFile model={model} onUpdate={onUpdate}></MenuFile>
    <MenuSave model={model} onUpdate={onUpdate}></MenuSave>
    <div>{title}</div>
    <div>{model.TITLE}</div>
    <button onClick={f=>{funcx(data, "I", 6, model, onUpdate); /*console.log(JSON.stringify(model, null, 2))*/}}>Calc</button>
    <div>-----------------------------</div>
    <Container className='p-3'>
      <Container className='p-5 mb-4 bg-light rounded-3'>
        <OptionsMenu style={{ backgroundColor: 'blue' }} model={model} onUpdate={onUpdate} />
        <Conduits data={model} onUpdate={onUpdate} />
      </Container>
    </Container>
    <pre>{JSON.stringify(model, null, 2)}</pre>
    <div>{model.TITLE}</div>
  </>
  );
}

export default Model;