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
 
var comment = new model.Comment();
 comment.author = "aspose cells developer"  ;
 comment.note = "aspose cells cloud api add comment."  ;

var request = new model.PutWorksheetCommentRequest();
request.name =  remoteName;
request.sheetName =  "Sheet1";
request.cellName =  "C1";
request.comment =  comment;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.putWorksheetComment(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});