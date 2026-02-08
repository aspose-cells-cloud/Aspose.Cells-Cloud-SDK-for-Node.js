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
 
var batchLockRequestMatchCondition = new model.MatchConditionRequest();
 batchLockRequestMatchCondition.regexPattern = "(^Book)(.+)(xlsx$)"  ;
var batchLockRequest = new model.BatchLockRequest();
 batchLockRequest.sourceFolder = remoteFolder  ;
 batchLockRequest.password = "123456"  ;
 batchLockRequest.outFolder = "OutResult"  ;
 batchLockRequest.matchCondition = batchLockRequestMatchCondition  ;

var request = new model.PostBatchUnlockRequest();
request.batchLockRequest =  batchLockRequest;
return cellsApi.postBatchUnlock(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});