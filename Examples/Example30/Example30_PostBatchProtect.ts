var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

var remoteFolder = "TestData/In"
  
var localBook1 = "Book1.xlsx"
var remoteBook1 = "Book1.xlsx"
var localMyDoc = "myDocument.xlsx"
var remoteMyDoc = "myDocument.xlsx"

var localBook1Request = new  model.UploadFileRequest();
localBook1Request.uploadFiles ={localBook1:fs.createReadStream(localPath  + localBook1)};
localBook1Request.path = remoteFolder + "/" + remoteBook1 ;
localBook1Request.storageName ="";
cellsApi.uploadFile(localBook1Request );
var localMyDocRequest = new  model.UploadFileRequest();
localMyDocRequest.uploadFiles ={localMyDoc:fs.createReadStream(localPath  + localMyDoc)};
localMyDocRequest.path = remoteFolder + "/" + remoteMyDoc ;
localMyDocRequest.storageName ="";
cellsApi.uploadFile(localMyDocRequest );
 
var batchProtectRequestMatchCondition = new model.MatchConditionRequest();
 batchProtectRequestMatchCondition.regexPattern = "(^Book)(.+)(xlsx$)"  ;
var batchProtectRequest = new model.BatchProtectRequest();
 batchProtectRequest.sourceFolder = remoteFolder  ;
 batchProtectRequest.protectionType = "All"  ;
 batchProtectRequest.password = "123456"  ;
 batchProtectRequest.outFolder = "OutResult"  ;
 batchProtectRequest.matchCondition = batchProtectRequestMatchCondition  ;

var request = new model.PostBatchProtectRequest();
request.batchProtectRequest =  batchProtectRequest;
return cellsApi.postBatchProtect(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});