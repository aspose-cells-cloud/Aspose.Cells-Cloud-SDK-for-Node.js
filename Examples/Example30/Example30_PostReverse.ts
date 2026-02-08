var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var book1Xlsx = "Book1.xlsx"

 
var rotateType = "rows"
var format = "pdf"

var mapFiles = {};           

 mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

var request = new model.PostReverseRequest();
request.file =  mapFiles;
request.rotateType =  rotateType;
request.outFormat =  format;
return cellsApi.postReverse(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});