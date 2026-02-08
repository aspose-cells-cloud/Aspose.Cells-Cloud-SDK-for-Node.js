var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

var remoteFolder = "TestData/In"
  
var localName = "Book1.xlsx"
var remoteName = "Book1.xlsx"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
 

var request = new model.PostAutofitWorksheetColumnsRequest();
request.name =  remoteName;
request.sheetName =  "Sheet1";
request.startColumn =  1;
request.endColumn =  9;
request.onlyAuto =  true;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postAutofitWorksheetColumns(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});