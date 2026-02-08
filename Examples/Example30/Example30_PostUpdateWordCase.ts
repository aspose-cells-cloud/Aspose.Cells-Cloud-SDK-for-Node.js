var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

var remoteFolder = "TestData/In"
  
var localName = "BookText.xlsx"
var remoteName = "BookText.xlsx"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
 
var wordCaseOptionsDataSource = new model.DataSource();
 wordCaseOptionsDataSource.dataSourceType = "CloudFileSystem"  ;
 wordCaseOptionsDataSource.dataPath = "TestData/In/BookText.xlsx"  ;
var wordCaseOptionsScopeOptions = new model.ScopeOptions();
 wordCaseOptionsScopeOptions.scope = "EntireWorkbook"  ;
var wordCaseOptions = new model.WordCaseOptions();
 wordCaseOptions.dataSource = wordCaseOptionsDataSource  ;
 wordCaseOptions.wordCaseType = "None"  ;
 wordCaseOptions.scopeOptions = wordCaseOptionsScopeOptions  ;

var request = new model.PostUpdateWordCaseRequest();
request.wordCaseOptions =  wordCaseOptions;
return cellsApi.postUpdateWordCase(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});