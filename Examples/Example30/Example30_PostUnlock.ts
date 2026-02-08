var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var needUnlockXlsx = "needUnlock.xlsx"

 
var mapFiles = {};           

 mapFiles[needUnlockXlsx]= fs.createReadStream(localPath  +needUnlockXlsx) ;

var request = new model.PostUnlockRequest();
request.file =  mapFiles;
request.password =  "123456";
return cellsApi.postUnlock(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});