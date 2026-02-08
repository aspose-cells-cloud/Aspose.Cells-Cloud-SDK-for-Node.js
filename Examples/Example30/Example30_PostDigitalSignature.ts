var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

var remoteFolder = "TestData/In"
  
var localName = "Book1.xlsx"
var roywangPFX = "roywang.pfx"
var remoteName = "Book1.xlsx"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
var roywangPFXRequest = new  model.UploadFileRequest();
roywangPFXRequest.uploadFiles ={roywangPFX:fs.createReadStream(localPath  + roywangPFX)};
roywangPFXRequest.path = remoteFolder + "/roywang.pfx" ;
roywangPFXRequest.storageName ="";
cellsApi.uploadFile(roywangPFXRequest );
 

var request = new model.PostDigitalSignatureRequest();
request.name =  remoteName;
request.digitalsignaturefile =  remoteFolder + "/roywang.pfx";
request.password =  "123456";
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postDigitalSignature(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});