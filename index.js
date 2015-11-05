//this is the main transformer

//require fs and assign to var
var fs = require('fs');
var importColors = []
var exportColors = []
var exportFile = []
var exportBuffer;
var imageStart;
//import in the file
fs.readFile('./fileA.bmp', function(err, data){
  if (err) throw err;
  imageStart = data.readUIntLE(10, 4)
  //console.log('start of image data: ' + imageStart)
  //console.log('length of file: ' + data.length)
//add bytes that contain color info into an array
  for(i=imageStart; i<data.length; i++) {
    importColors = importColors.concat(data[i])
    //console.log(data[i])
  }

//invert the colors
  for (i=0;i<importColors.length;i++) {
    exportColors[i] = 255-importColors[i]
  }

//copy header from original data to  export file
  for (i=0; i<imageStart; i++) {
    exportFile = exportFile.concat(data[i])
  }
//add exportColors
  //for each value between in exportColors, concat it to exportFile

  for (i=0; i<exportColors.length; i++) {
    exportFile = exportFile.concat(exportColors[i])
  }
  //console.log('exportColors: ' + exportColors)

//make a new buffer to export
  exportBuffer = new Buffer(exportFile)
  //console.log(exportBuffer);

//write to filesystem
  fs.writeFile( './fileB.bmp', exportBuffer, function(err) {
    if (err) throw err;
    console.log('file written');
  })


  //console.log('exportFile: ' + exportFile)
  //console.log(typeof exportFile)
  //console.log('exportFile length: ' + exportFile.length)
  //fs.writeFile the exportFile to fileB.bmp



})

