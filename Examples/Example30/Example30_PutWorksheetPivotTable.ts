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
 

var request = new model.PutWorksheetPivotTableRequest();
request.name =  remoteName;
request.sheetName =  "Sheet4";
request.folder =  remoteFolder;
request.sourceData =  "=Sheet1!C6:E13";
request.destCellName =  "C1";
request.tableName =  "TestPivot";
request.useSameSource =  true;
request.storageName =  "";
return cellsApi.putWorksheetPivotTable(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});