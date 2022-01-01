import React from 'react';
import Container from 'react-bootstrap/Container';
import OptionsMenu from './OptionsMenu';
import ButtonFile from './ButtonFile';
import ButtonSave from './ButtonSave';
import Conduits from './Conduits';
import funcx from "../ncrs_scs.js";
import data from '../data/nrcs_scs.json';
import {Button} from 'react-bootstrap'


function Model({model = {}, title='', onUpdate = f => f}) {

  return (
  <>
    <Container className='p-3'>
      <Container className='p-5 mb-4 bg-dark rounded-3'>
        <ButtonFile model={model} onUpdate={onUpdate}></ButtonFile>
        <ButtonSave model={model} onUpdate={onUpdate}></ButtonSave>
        <Button onClick={f=>{funcx(data, "I", 6, model, onUpdate); /*console.log(JSON.stringify(model, null, 2))*/}}>Calc</Button>
      </Container>
    </Container>
  </>
  );
}

export default Model;