
    // Creates a string in the style of an .inp file. This is used for either running a model
    // or saving a model. Once saving is more seamless, models should be autosaved before running.
    // Right now, autosaving just adds more clicks.
    svg.dataToInpString = function(){
      let model = swmmjs.model;
      let inpString = '';
      let secStr = '';
      
      secStr = 'TITLE';
      inpString += '[TITLE]\n'
      for (let entry in model[secStr]) {
          inpString += model[secStr][entry].TitleNotes;
          inpString += '\n';
      }
      
      secStr = 'OPTIONS';
      inpString +='[OPTIONS]\n;;Option             Value\n'
      for (let entry in model[secStr]) {
          inpString += entry.padEnd(21, ' ');
          inpString += model[secStr][entry].Value;
          inpString += '\n';
      }
      inpString += '\n';

      secStr = 'CONDUITS';
      inpString +='[CONDUITS]\n;;Conduit        From Node        To Node          Length     Roughness  InOffset   OutOffset  InitFlow   MaxFlow   \n;;-------------- ---------------- ---------------- ---------- ---------- ---------- ---------- ---------- ----------\n'        
      for (let entry in model[secStr]) {
          // If there is a description, save it.
          if(typeof model[secStr][entry].DescSription !== 'undefined' && model[secStr][entry].Description.length > 0){
              inpString += ';' + model[secStr][entry].Description + '\n';
          }
          inpString += entry.padEnd(17, ' ') + ' ';
          inpString += model[secStr][entry].FromNode.toString().padEnd(17, ' ') + ' ';
          inpString += model[secStr][entry].ToNode.toString().padEnd(17, ' ') + ' ';
          inpString += model[secStr][entry].Length.toString().padEnd(11, ' ') + ' ';
          inpString += model[secStr][entry].Roughness.toString().padEnd(11, ' ') + ' ';
          inpString += model[secStr][entry].InOffset.toString().padEnd(11, ' ') + ' ';
          inpString += model[secStr][entry].OutOffset.toString().padEnd(11, ' ') + ' ';
          inpString += model[secStr][entry].InitFlow.toString().padEnd(11, ' ') + ' ';
          if(model[secStr][entry].MaxFlow){
              inpString += model[secStr][entry].MaxFlow.toString().padEnd(11, ' ');
          }
          inpString += '\n';
      }
      inpString += '\n';

      // For now, for each section that is not
      // taken care of by the parser should be simply
      // written out to the file.

      // This is a function that accepts a model section key and
      // returns a string that can be output into an .inp
      // file. This is a temporary function to take care of 
      // sections I haven't implemented yet.
      function secToStr(model, key){
        inpString += '['+ key + ']\n'
        model[key].map((line, i) => { inpString += line + '\n' })

        return inpString;
      }
      
      // Loop through each of the keys of the
      // contents of the model.
      let validSec = ['TITLE', 'OPTIONS', 'RAINGAGES', 'CONDUITS']
      let keys = Object.keys(data)
      keys.map((key, i)=>{ ~validSec.includes(key)?inpString+=secToStr(model, key):null })

      return inpString;
  }

  // svg.save is called when a save button is clicked.
  svg.save = function() {
      inpString = svg.dataToInpString();

      let fileOut = 'AutoInp.inp';
      let blob = new Blob([inpString], {type: 'text/csv'});
      if(window.navigator.msSaveOrOpenBlob){
          window.navigator.msSaveBlob(blob, fileOut);
      } else {
          let elem = window.document.createElement('a');
          elem.href = window.URL.createObjectURL(blob);
          elem.download = fileOut;
          document.body.appendChild(elem);
          elem.click();
          document.body.removeChild(elem);

          //window.URL.revokeObjectURL(elem.href);
      }
  }