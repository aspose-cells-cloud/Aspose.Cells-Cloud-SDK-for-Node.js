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
 
var matchCondition = new model.MatchConditionRequest();
 matchCondition.regexPattern = "{*}"  ;

var request = new model.DeleteWorksheetsRequest();
request.name =  remoteName;
request.matchCondition =  matchCondition;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.deleteWorksheets(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});