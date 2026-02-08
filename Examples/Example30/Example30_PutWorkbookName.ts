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
 
var newName = new model.Name();
 newName.text = "name_1804"  ;
 newName.comment = "KeepSourceFormatting"  ;
 newName.refersTo = "=Sheet1!$I$4"  ;

var request = new model.PutWorkbookNameRequest();
request.name =  remoteName;
request.newName =  newName;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.putWorkbookName(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});