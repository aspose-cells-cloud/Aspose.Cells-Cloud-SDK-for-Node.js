var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var book1Xlsx = "Book1.xlsx"

 
var objecttype = "chart"

var mapFiles = {};           

 mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

var request = new model.PostClearObjectsRequest();
request.file =  mapFiles;
request.objecttype =  objecttype;
return cellsApi.postClearObjects(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});