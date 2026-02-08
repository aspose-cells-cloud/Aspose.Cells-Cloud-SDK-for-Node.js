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
 
var ole = new model.OleObject();
 ole.left = 10  ;
 ole.right = 10  ;
 ole.height = 90  ;
 ole.width = 78  ;

var request = new model.PostUpdateWorksheetOleObjectRequest();
request.name =  remoteName;
request.sheetName =  "Sheet6";
request.oleObjectIndex =  0;
request.ole =  ole;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postUpdateWorksheetOleObject(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});