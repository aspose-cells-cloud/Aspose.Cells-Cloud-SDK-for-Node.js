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
 
var hyperlink = new model.Hyperlink();
 hyperlink.address = "https://products.aspose.cloud/cells/"  ;

var request = new model.PostWorksheetHyperlinkRequest();
request.name =  remoteName;
request.sheetName =  "Sheet1";
request.hyperlinkIndex =  0;
request.hyperlink =  hyperlink;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postWorksheetHyperlink(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});