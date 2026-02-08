var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var needlockXlsx = "needlock.xlsx"

 
var mapFiles = {};           

 mapFiles[needlockXlsx]= fs.createReadStream(localPath  +needlockXlsx) ;

var request = new model.PostLockRequest();
request.file =  mapFiles;
request.password =  "123456";
return cellsApi.postLock(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});