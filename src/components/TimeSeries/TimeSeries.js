import { useState, useEffect } from 'react'

// Cycling through TimeSeries entries is probably
// not the best way to go, but for simple interfaces
// and educational purposes, a little iterator is
// a good idea. For heavier purposes, it is a good idea
// to use TimeSeriesTable.

// Working with TimeSeries is difficult because under the
// current data structure, all of the TimeSeries data is stored
// in a flat set. This structure is not great because it requires
// at least one search algorithm to operate. Instead, the structure
// should be hierarchical: 
//  Series <string>: 
//  [ 
//    {
//      Date <string>: optional
//      Time <string>: optional?
//      Value <number>: required
//    },
//  ]
function TimSeries({style={}, data={}, onUpdate=f=>f}){
  const [linkID, setLinkID] = useState(Object.keys(data.CONDUITS)[0]);

  // This should probably be a useMemo, and not a
  // useEffect call. 

  useEffect(() => {
    setLinkID(Object.keys(data.CONDUITS)[0])
  }, [data.CONDUITS])

  
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
      <button onClick={prevID}>Prev</button>
      <button onClick={nextID}>Next</button>
    </>
  )
}

export default Conduits;