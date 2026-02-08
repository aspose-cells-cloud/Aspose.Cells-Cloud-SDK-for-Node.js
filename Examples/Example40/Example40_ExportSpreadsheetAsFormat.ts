var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var localName = "Book1.xlsx"
var remoteName = "Book1.xlsx"
var remoteFolder = "TestData/In"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
 
var format = "pdf"


var request = new model.ExportSpreadsheetAsFormatRequest();
request.name =  remoteName;
request.format =  format;
request.folder =  remoteFolder;
return cellsApi.exportSpreadsheetAsFormat(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});