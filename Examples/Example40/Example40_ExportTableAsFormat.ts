var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var localName = "TestTables.xlsx"
var remoteName = "TestTables.xlsx"
var remoteFolder = "TestData/In"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
 
var format = "svg"


var request = new model.ExportTableAsFormatRequest();
request.name =  localName;
request.worksheet =  "Sheet2";
request.tableName =  "Table13";
request.format =  format;
request.folder =  remoteFolder;
return cellsApi.exportTableAsFormat(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});