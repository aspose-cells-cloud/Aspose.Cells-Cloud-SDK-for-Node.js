var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

var remoteFolder = "TestData/In"
  
var localName = "Book1.xlsx"
var waterMarkPNG = "WaterMark.png"
var remoteName = "Book1.xlsx"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
var waterMarkPNGRequest = new  model.UploadFileRequest();
waterMarkPNGRequest.uploadFiles ={waterMarkPNG:fs.createReadStream(localPath  + waterMarkPNG)};
waterMarkPNGRequest.path = remoteFolder + "/WaterMark.png" ;
waterMarkPNGRequest.storageName ="";
cellsApi.uploadFile(waterMarkPNGRequest );
 

var request = new model.PutWorksheetAddPictureRequest();
request.name =  remoteName;
request.sheetName =  "Sheet6";
request.upperLeftRow =  1;
request.upperLeftColumn =  1;
request.lowerRightRow =  10;
request.lowerRightColumn =  10;
request.picturePath =  remoteFolder + "/WaterMark.png";
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.putWorksheetAddPicture(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});