var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var book1Xlsx = "Book1.xlsx"

 
var format = "xlsx"

var mapFiles = {};           

 mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

var request = new model.PostRepairRequest();
request.file =  mapFiles;
request.outFormat =  format;
return cellsApi.postRepair(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});