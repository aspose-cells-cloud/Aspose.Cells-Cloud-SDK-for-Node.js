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
 
var dataCleansingDataFillDataFillDefaultValue = new model.DataFillValue();
 dataCleansingDataFillDataFillDefaultValue.defaultDate = "2024-01-01"  ;
 dataCleansingDataFillDataFillDefaultValue.defaultNumber = 0  ;
 dataCleansingDataFillDataFillDefaultValue.defaultBoolean = false  ;
var dataCleansingDataFill = new model.DataFill();
 dataCleansingDataFill.dataFillDefaultValue = dataCleansingDataFillDataFillDefaultValue  ;
var dataCleansing = new model.DataCleansing();
 dataCleansing.needFillData = true  ;
 dataCleansing.dataFill = dataCleansingDataFill  ;

var request = new model.PostWorkbookDataCleansingRequest();
request.name =  remoteName;
request.dataCleansing =  dataCleansing;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postWorkbookDataCleansing(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});