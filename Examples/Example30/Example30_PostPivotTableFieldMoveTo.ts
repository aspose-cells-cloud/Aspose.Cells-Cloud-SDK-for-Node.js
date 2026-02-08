var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

var remoteFolder = "TestData/In"
  
var localName = "TestCase.xlsx"
var remoteName = "TestCase.xlsx"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
 

var request = new model.PostPivotTableFieldMoveToRequest();
request.name =  remoteName;
request.sheetName =  "Sheet4";
request.pivotTableIndex =  0;
request.fieldIndex =  0;
request.from =  "Row";
request.to =  "Column";
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postPivotTableFieldMoveTo(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});