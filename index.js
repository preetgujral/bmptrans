'use strict';

//this is the main transformer

//require fs and assign to var
var transform = () => {
  var fs = require('fs');
  var importColors = [];
  var exportColors = [];
  var exportFile = [];
  var exportBuffer;
  var imageStart;

  fs.readFile('./fileA.bmp', function(err, data) {
    if (err) {throw err;}
    imageStart = data.readUIntLE(10, 4);
    for (var i = imageStart; i < data.length; i++) {
      importColors = importColors.concat(data[i]);
    }

    for (i = 0; i < importColors.length; i++) {
      exportColors[i] = 255 - importColors[i];
    }

    for (i = 0; i < imageStart; i++) {
      exportFile = exportFile.concat(data[i]);
    }

    for (i = 0; i < exportColors.length; i++) {
      exportFile = exportFile.concat(exportColors[i]);
    }

    exportBuffer = new Buffer(exportFile);

    fs.writeFile('./fileB.bmp', exportBuffer, function(err) {
      if (err) {throw err;}
      return 'file written';
    });
  });
};

transform();
