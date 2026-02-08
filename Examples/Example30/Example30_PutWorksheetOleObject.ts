var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

var remoteFolder = "TestData/In"
  
var localName = "Book1.xlsx"
var oLEDoc = "OLEDoc.docx"
var wordJPG = "word.jpg"
var remoteName = "Book1.xlsx"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
var oLEDocRequest = new  model.UploadFileRequest();
oLEDocRequest.uploadFiles ={oLEDoc:fs.createReadStream(localPath  + oLEDoc)};
oLEDocRequest.path = "OLEDoc.docx" ;
oLEDocRequest.storageName ="";
cellsApi.uploadFile(oLEDocRequest );
var wordJPGRequest = new  model.UploadFileRequest();
wordJPGRequest.uploadFiles ={wordJPG:fs.createReadStream(localPath  + wordJPG)};
wordJPGRequest.path = "word.jpg" ;
wordJPGRequest.storageName ="";
cellsApi.uploadFile(wordJPGRequest );
 

var request = new model.PutWorksheetOleObjectRequest();
request.name =  remoteName;
request.sheetName =  "Sheet6";
request.upperLeftRow =  1;
request.upperLeftColumn =  1;
request.height =  100;
request.width =  80;
request.oleFile =  "OLEDoc.docx";
request.imageFile =  "word.jpg";
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.putWorksheetOleObject(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});