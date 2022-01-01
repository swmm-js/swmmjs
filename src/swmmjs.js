
// Parses a text .inp file into a JSON object.
function parseInput(text) {
  var regex = {
    section: /^\s*\[\s*([^\]]*)\s*\].*$/,
    value: /\s*([^\s]+)([^;]*).*$/,
    description: /^\s*;.*$/,
    comment: /^\s*;;.*$/
  },
  parser = {
    // TITLE Title/Notes needs to consume all of the lines until the next section.
    TITLE: function(model, section, line) {
      model[section] = (model[section]?model[section]+'\n':'') + line;
    },
    OPTIONS: function(model, section, line) {
      line = line.trim();
      let m = line.split(/\s+/);

      if (m && m.length)
          model[section][m[0]] = m[1];

      return;
    },
    RAINGAGES: function(model, section, line) {
      line = line.trim();
      let m = line.split(/\s+/);

      if (m && m.length){
        model[section][m[0]] = {
          Format: m[1], 
          Interval: m[2], 
          SCF: m[3], 
          Source: m[4], 
          SeriesName: m[5], 
          Description: curDesc
        };
      }
    },
    CONDUITS: function(model, section, line) {
      line = line.trim();
      
      let m = line.split(/\b\s+/);
      if (m && m.length && (8 === m.length || 9 === m.length)) {
        model[section][m[0]] = {
          FromNode: m[1], 
          ToNode: m[2], 
          Length: parseFloat(m[3]),   
          Roughness: parseFloat(m[4]),
          InOffset: parseFloat(m[5]), 
          OutOffset: parseFloat(m[6]), 
          InitFlow: m[7], 
          MaxFlow: m[8], 
          Description: curDesc
        };
      }
    },
    TIMESERIES: function(model, section, line) {
      line = (line).trim();
      let m = line.split(/\b\s+/);
      if (m && m.length === 4){
        model[section][Object.keys(model[section]).length] = {
                        TimeSeries: m[0].trim(),
                        Date: m[1].trim(), 
                        Time: m[2].trim(),
                        Value: parseFloat(m[3])};
      } else {
        model[section][Object.keys(model[section]).length] = {
                        TimeSeries: m[0].trim(),
                        Date: '', 
                        Time: m[1].trim(),
                        Value: parseFloat(m[2])};
      }
    },  
  },

  // Since this file is unlikely to be much like any previous file, simply
  // build a new object rather than diff. This allows the object to be rebuilt
  // without affecting the components on each CUD.
  model = {   // Input file model variables. Related to a header in .inp file.
    TITLE: "",              OPTIONS: {},            RAINGAGES: {},
    CONDUITS: {},           TIMESERIES: {}
  },
  lines = text.split(/\r\n|\r|\n/),
  section = null;

  let curDesc = '';
  // change this to a map function.
  lines.forEach(function(line) {
    // If the entry is a comment, then attempt to assign it as the description for the current
    // object, or return nothing.
    if (regex.comment.test(line)) {
      curDesc = '';
      return;
    }
    else if (regex.description.test(line)) {
      // Get the comment without the semicolon
      curDesc = line.slice(1, line.length);

    } else if (regex.section.test(line)) {
      var s = line.match(regex.section);
      // If the section has not yet been created, create one.
      if ('undefined' === typeof model[s[1].trim()])
        model[s[1].trim()] = {};
      section = s[1].trim();
    } else if (regex.value.test(line)) {
      // Remove everything after the first semicolon:
      line = line.split(';')[0];
      if (parser[section])
        parser[section](model,section, line, curDesc);
      else{
        let xCount = Object.keys(model[section]).length;
        model[section] = {...model[section], [xCount]: line};
      }
      curDesc = '';
    };
  });

  return model;
};

// Creates a string in the style of an .inp file. This is used for either running a model
// or saving a model. Once saving is more seamless, models should be autosaved before running.
// Right now, autosaving just adds more clicks.
function dataToInpString(model){
  let fullString = '';
  let secStr = '';

  var parser = {
    // TITLE Title/Notes needs to consume all of the lines until the next section.
    TITLE: function(model) {
      return '[TITLE]\n' + model['TITLE'];
    },
    OPTIONS: function(model) {
      let secStr = 'OPTIONS'
      let inpString ='[OPTIONS]\n;;Option             Value\n'
      for (let entry in model[secStr]) {
        inpString += entry.padEnd(21, ' ');
        inpString += model[secStr][entry];
        inpString += '\n';
      }

      return inpString;
    },
    CONDUITS: function(model) {
      let secStr = 'CONDUITS'
      let inpString ='[CONDUITS]\n;;Conduit        From Node        To Node          Length     Roughness  InOffset   OutOffset  InitFlow   MaxFlow   \n;;-------------- ---------------- ---------------- ---------- ---------- ---------- ---------- ---------- ----------\n'        
      for (let entry in model[secStr]) {
        // If there is a description, save it.
        if(typeof model[secStr][entry].Description !== 'undefined' && model[secStr][entry].Description.length > 0){
          inpString += ';' + model[secStr][entry].Description + '\n';
        }
        // It does seem like all of these functions should just be looping through all of the keys
        // of the object and printing the key and the value to inpString. That means
        // that I should probably be doing that.  Don't forget this should be 
        // multilingual as well.
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
      return inpString;
    },
    RAINGAGES: function(model) {
      let secStr = 'RAINGAGES';
      let inpString ='[RAINGAGES]\n;;Gage           Format    Interval SCF      Source\n;;-------------- --------- ------ ------ ----------\n'
      for (let entry in model[secStr]) {
        // If there is a description, save it.
        if(typeof model[secStr][entry].Description !== 'undefined' && model[secStr][entry].Description.length > 0){
            inpString += ';' + model[secStr][entry].Description + '\n';
        }
        inpString += entry.padEnd(17, ' ');
        inpString += model[secStr][entry].Format.padEnd(10, ' ');
        inpString += model[secStr][entry].Interval.padEnd(7, ' ');
        inpString += model[secStr][entry].SCF.toString().padEnd(7, ' ');
        inpString += model[secStr][entry].Source.padEnd(11, ' ');
        inpString += model[secStr][entry].SeriesName.padEnd(11, ' ');
        inpString += '\n';
      }
      inpString += '\n';

      return inpString;
    },
    TIMESERIES: function(model) {
      let secStr = 'TIMESERIES'
      let inpString ='[TIMESERIES]\n;;Time Series    Date       Time       Value     \n;;-------------- ---------- ---------- ----------\n'        
      for (let entry in model[secStr]) {
        inpString += model[secStr][entry].TimeSeries.padEnd(17, ' ') + ' ';
        inpString += model[secStr][entry].Date.padEnd(11, ' ') + ' ';
        inpString += model[secStr][entry].Time.padEnd(11, ' ') + ' ';
        inpString += model[secStr][entry].Value.toString().padEnd(11, ' ') + ' ';
        inpString += '\n';
      }
      inpString += '\n';

      return inpString;
    }
  }

  // For now, for each section that is not
  // taken care of by the parser should be simply
  // written out to the file.

  // This is a function that accepts a model section key and
  // returns a string that can be output into an .inp
  // file. This is a temporary function to take care of 
  // sections I haven't implemented yet.
  function secToStr(model, key){
    let thisString = '['+ key + ']\n'
    //model[key].map((line, i) => { inpString += line + '\n' })
    console.log(model)
    console.log(key)
    /*model[key].forEach(element =>
      thisString += element + '\n');*/
    if (model[key]){
      for (const [key2, value] of Object.entries(model[key])){
        thisString += value + '\n';
      }
    }

    return thisString
  }
  
  // Loop through each of the keys of the
  // contents of the model.
  // This should remain in place even after I've covered all
  // the sections to assist in
  // translation and future compatibility.
  let validSecArray = ['TITLE', 'OPTIONS', 'CONDUITS', 'RAINGAGES', 'TIMESERIES']

  // There should also be an array sorted in the order of the
  // sections as they need to be written to the file. For example,
  // if you load the conduits before you load nodes, the system 
  // will throw a fail.
  let knownSecArray = [   // Input file model variables. Related to a header in .inp file.
    "TITLE",              "OPTIONS",            "RAINGAGES",
    "TEMPERATURE",        "EVAPORATION",        
    "SUBCATCHMENTS",      "SUBAREAS",           "INFILTRATION",
    "AQUIFERS",           "GROUNDWATER",        
    "SNOWPACKS",          "JUNCTIONS",          "OUTFALLS",
    "STORAGE",            "DIVIDERS",           "CONDUITS",
    "PUMPS",              "ORIFICES",           "WEIRS",
    "OUTLETS",            "XSECTIONS",          "TRANSECTS",
    "LOSSES",             "POLLUTANTS",         "LANDUSES",
    "BUILDUP",            "WASHOFF",            "COVERAGES",
    "INFLOWS",            "DWF",                "PATTERNS",
    "RDII",               "HYDROGRAPHS",        "LOADINGS",
    "TREATMENT",          "CURVES",             "TIMESERIES",
    "CONTROLS",           "REPORT",             "MAP",
    "COORDINATES",        "VERTICES",           "Polygons",
    "SYMBOLS",            "LABELS",             "BACKDROP",
    "TAGS",               "PROFILE",            "FILE",
    "LID_CONTROLS",       "LID_USAGE",          "EVENT"
  ]

  // Now toss the array at the object. For each element of the array,
  // look for that element in the object. If there is an element of that 
  // kind associated with the model, write out the results to
  // the file.
  knownSecArray.forEach((element, index) => {
    if(validSecArray.includes(element)){
      fullString += parser[element](model) + '\n';
    } else {
      fullString += secToStr(model, element) + '\n';
    }
  })

  // For every key in the model,
  // If the key is not in validSec, use secToStr
  // to just copy the whole section in as a chunk of text.
  /*for (const [key, value] of Object.entries(model)) {
    console.log(`${key}: ${value}`);
    if ( !validSec.includes(key)){
      fullString += secToStr(model, key);
    }
  }*/
  //fullString += keys.map((key, i)=>{ ~validSec.includes(key)?secToStr(model, key):''})
  //keys.map((key, i)=>{ validSec.includes(key) === 'true' ? '':''})

  return fullString;
}

// saveInp is called when a save button is clicked.
function saveInp(model) {
  let inpString = dataToInpString(model);

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

export {
  parseInput,
  saveInp,
  dataToInpString
}