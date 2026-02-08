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
 
var styleFont = new model.Font();
 styleFont.size = 16  ;
var style = new model.Style();
 style.font = styleFont  ;

var request = new model.PostRowStyleRequest();
request.name =  remoteName;
request.sheetName =  "Sheet1";
request.rowIndex =  1;
request.style =  style;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postRowStyle(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});