var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var book1Xlsx = "Book1.xlsx"

 
var format = "csv"
var objectType = "workbook"

var mapFiles = {};           

 mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

var request = new model.PostExportRequest();
request.file =  mapFiles;
request.objectType =  objectType;
request.format =  format;
return cellsApi.postExport(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});