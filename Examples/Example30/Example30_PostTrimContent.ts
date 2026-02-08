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
 
var trimContentOptionsDataSource = new model.DataSource();
 trimContentOptionsDataSource.dataSourceType = "CloudFileSystem"  ;
 trimContentOptionsDataSource.dataPath = "TestData/In/BookText.xlsx"  ;
var trimContentOptionsScopeOptions = new model.ScopeOptions();
 trimContentOptionsScopeOptions.scope = "EntireWorkbook"  ;
var trimContentOptions = new model.TrimContentOptions();
 trimContentOptions.dataSource = trimContentOptionsDataSource  ;
 trimContentOptions.trimLeading = true  ;
 trimContentOptions.trimTrailing = true  ;
 trimContentOptions.trimSpaceBetweenWordTo1 = true  ;
 trimContentOptions.removeAllLineBreaks = true  ;
 trimContentOptions.scopeOptions = trimContentOptionsScopeOptions  ;

var request = new model.PostTrimContentRequest();
request.trimContentOptions =  trimContentOptions;
return cellsApi.postTrimContent(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});