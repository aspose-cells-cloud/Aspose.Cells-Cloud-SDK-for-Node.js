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
 
var shapeDTO = new model.Shape();


var request = new model.PutWorksheetShapeRequest();
request.name =  remoteName;
request.sheetName =  "Sheet1";
request.shapeDTO =  shapeDTO;
request.drawingType =  "arc";
request.upperLeftRow =  1;
request.upperLeftColumn =  1;
request.top =  10;
request.left =  10;
request.width =  100;
request.height =  100;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.putWorksheetShape(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});