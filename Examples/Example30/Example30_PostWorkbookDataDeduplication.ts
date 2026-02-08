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
 
var deduplicationRegionRanges = new Array<model.Range>();
var deduplicationRegion = new model.DeduplicationRegion();
 deduplicationRegion.ranges = deduplicationRegionRanges  ;

var request = new model.PostWorkbookDataDeduplicationRequest();
request.name =  remoteName;
request.deduplicationRegion =  deduplicationRegion;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postWorkbookDataDeduplication(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});