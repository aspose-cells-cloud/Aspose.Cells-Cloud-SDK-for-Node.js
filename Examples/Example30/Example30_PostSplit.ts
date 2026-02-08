var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var book1Xlsx = "Book1.xlsx"

 
var outFormat = "csv"

var mapFiles = {};           

 mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

var request = new model.PostSplitRequest();
request.file =  mapFiles;
request.outFormat =  outFormat;
return cellsApi.postSplit(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});