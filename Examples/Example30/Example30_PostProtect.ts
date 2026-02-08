var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var assemblyTestXlsx = "assemblytest.xlsx"

 
var mapFiles = {};           

var protectWorkbookRequest = new model.ProtectWorkbookRequest();
 protectWorkbookRequest.awaysOpenReadOnly = true  ;
 protectWorkbookRequest.encryptWithPassword = "123456"  ;
 mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;

var request = new model.PostProtectRequest();
request.file =  mapFiles;
request.protectWorkbookRequest =  protectWorkbookRequest;
request.password =  "123456";
return cellsApi.postProtect(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});