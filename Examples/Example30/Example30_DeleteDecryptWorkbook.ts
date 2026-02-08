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
 
var encryption = new model.WorkbookEncryptionRequest();
 encryption.password = "123456"  ;
 encryption.encryptionType = "XOR"  ;
 encryption.keyLength = 128  ;

var request = new model.DeleteDecryptWorkbookRequest();
request.name =  remoteName;
request.encryption =  encryption;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.deleteDecryptWorkbook(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});