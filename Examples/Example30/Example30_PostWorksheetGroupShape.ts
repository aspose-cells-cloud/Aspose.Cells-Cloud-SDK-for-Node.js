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
 
var listShape = new Array<number>();listShape.push(0);
listShape.push(1);

var request = new model.PostWorksheetGroupShapeRequest();
request.name =  remoteName;
request.sheetName =  "Sheet6";
request.listShape =  listShape;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postWorksheetGroupShape(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});