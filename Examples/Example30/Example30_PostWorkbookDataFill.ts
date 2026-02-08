var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

var remoteFolder = "TestData/In"
  
var localName = "BookCsvDuplicateData.csv"
var remoteName = "BookCsvDuplicateData.csv"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
 
var dataFillDataFillDefaultValue = new model.DataFillValue();
 dataFillDataFillDefaultValue.defaultDate = "2024-01-01"  ;
 dataFillDataFillDefaultValue.defaultNumber = 0  ;
 dataFillDataFillDefaultValue.defaultBoolean = false  ;
var dataFill = new model.DataFill();
 dataFill.dataFillDefaultValue = dataFillDataFillDefaultValue  ;

var request = new model.PostWorkbookDataFillRequest();
request.name =  remoteName;
request.dataFill =  dataFill;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postWorkbookDataFill(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});