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
 

var request = new model.PutWorksheetSparklineGroupRequest();
request.name =  remoteName;
request.sheetName =  "Sheet1";
request.type =  "Line";
request.dataRange =  "C6:E13";
request.isVertical =  false;
request.locationRange =  "G6:G13";
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.putWorksheetSparklineGroup(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});