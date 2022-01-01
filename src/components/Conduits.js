import { useState, useEffect } from 'react'
import ConduitsInletNode from './ConduitsInletNode';
import ConduitsOutletNode from './ConduitsOutletNode';
import ConduitsDescription from './ConduitsDescription';
import ConduitsName from './ConduitsName';
import ConduitsLength from './ConduitsLength';
import ConduitsInletOffset from './ConduitsInletOffset';
import ConduitsOutletOffset from './ConduitsOutletOffset';
import ConduitsInitFlow from './ConduitsInitFlow';
import ConduitsMaxFlow from './ConduitsMaxFlow';

// The problem with using only one component for both
// iteratible links and single links is that a single
// link will eventually update on new model call. That makes
// it more advanced (more risky) than an iterable link set.
// So make this not a 'thisLink' value, but simply one that 
// initially pulls from the 0 position of the conduits
// object, if there is any such thing. Try to accomodate for 
// the situation where there is no conduit in the CONDUITS object.
function Conduits({style={}, data={}, onUpdate=f=>f}){
  const [linkID, setLinkID] = useState(Object.keys(data.CONDUITS)[0]);

  // This should probably be a useMemo, and not a
  // useEffect call. 
  useEffect(() => {setLinkID(Object.keys(data.CONDUITS)[0])}, [Object.keys(data.CONDUITS)[0]])

  // This shouldnt be linkIDs as in integers, this should
  // be linkIDs as in text strings.
  function nextID(){
    let keys = Object.keys(data.CONDUITS);
    if(keys.indexOf(linkID) < keys.length - 1){
      let nextIndex = keys.indexOf(linkID) + 1;
      setLinkID(keys[nextIndex]);
    }
  }

  // Same here.
  function prevID(){
    let keys = Object.keys(data.CONDUITS);
    if(keys.indexOf(linkID) > 0){
      let nextIndex = keys.indexOf(linkID) - 1;
      setLinkID(keys[nextIndex]);
    }
  }

  return(
    <>
      <div>------------CONDUITS-------------</div>
      <div>{linkID}</div>
      <ConduitsName data={data} onUpdate={onUpdate} style={style} conduitName={linkID} />
      <ConduitsInletNode data={data} onUpdate={onUpdate} style={style} conduitName={linkID} />
      <ConduitsOutletNode data={data} onUpdate={onUpdate} style={style} conduitName={linkID} />
      <ConduitsDescription data={data} onUpdate={onUpdate} style={style} conduitName={linkID} />
      <ConduitsLength data={data} onUpdate={onUpdate} style={style} conduitName={linkID} />
      <ConduitsInletOffset data={data} onUpdate={onUpdate} style={style} conduitName={linkID} />
      <ConduitsOutletOffset data={data} onUpdate={onUpdate} style={style} conduitName={linkID} />
      <ConduitsInitFlow data={data} onUpdate={onUpdate} style={style} conduitName={linkID} />
      <ConduitsMaxFlow data={data} onUpdate={onUpdate} style={style} conduitName={linkID} />
      <button onClick={prevID}>Prev</button>
      <button onClick={nextID}>Next</button>
    </>
  )
  // Dont forget to safeguard all these components for null linkID values (don't just send a default).
  // Try and see if that doesn't mess stuff up in cases where there is a model with no links?
  // Would I even care about that?
  /*
  return(
    <>
      <div>------------CONDUITS-------------</div>
      <ConduitsInitFlow data={data} onUpdate={onUpdate} style={style} conduitName={linkID} />
      <ConduitsMaxFlow data={data} onUpdate={onUpdate} style={style} conduitName={linkID} />
      <button onClick={nextID}>Next</button>
      <button onClick={prevID}>Prev</button>
    </>
  )*/
}

export default Conduits;