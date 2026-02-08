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
 
var listColumn = new model.ListColumn();
 listColumn.name = "test cloumn"  ;

var request = new model.PostWorksheetListColumnRequest();
request.name =  remoteName;
request.sheetName =  "Sheet7";
request.listObjectIndex =  0;
request.columnIndex =  0;
request.listColumn =  listColumn;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postWorksheetListColumn(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});