var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var dataSourceXlsx = "datasource.xlsx"

 
var compressLevel = 50

var mapFiles = {};           

 mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

var request = new model.PostCompressRequest();
request.file =  mapFiles;
request.compressLevel =  compressLevel;
return cellsApi.postCompress(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});