var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

var remoteFolder = "TestData/In"
  
var localName = "Book1.xlsx"
var myDocumentXLSX = "myDocument.xlsx"
var remoteName = "Book1.xlsx"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
var myDocumentXLSXRequest = new  model.UploadFileRequest();
myDocumentXLSXRequest.uploadFiles ={myDocumentXLSX:fs.createReadStream(localPath  + myDocumentXLSX)};
myDocumentXLSXRequest.path = remoteFolder + "/myDocument.xlsx" ;
myDocumentXLSXRequest.storageName ="";
cellsApi.uploadFile(myDocumentXLSXRequest );
 

var request = new model.PostWorkbooksMergeRequest();
request.name =  remoteName;
request.mergeWith =  remoteFolder + "/myDocument.xlsx";
request.folder =  remoteFolder;
request.storageName =  "";
request.mergedStorageName =  "";
return cellsApi.postWorkbooksMerge(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});