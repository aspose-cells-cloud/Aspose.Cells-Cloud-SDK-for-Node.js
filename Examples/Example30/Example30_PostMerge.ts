var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var assemblyTestXlsx = "assemblytest.xlsx"
var dataSourceXlsx = "datasource.xlsx"

 
var format = "html"
var mergeToOneSheet = true

var mapFiles = {};           

 mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
 mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

var request = new model.PostMergeRequest();
request.file =  mapFiles;
request.outFormat =  format;
request.mergeToOneSheet =  mergeToOneSheet;
return cellsApi.postMerge(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});