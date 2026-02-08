var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var dataSourceXlsx = "datasource.xlsx"

 
var mapFiles = {};           

 mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

var request = new model.PostReplaceRequest();
request.file =  mapFiles;
request.text =  "12";
request.newtext =  "newtext";
return cellsApi.postReplace(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});