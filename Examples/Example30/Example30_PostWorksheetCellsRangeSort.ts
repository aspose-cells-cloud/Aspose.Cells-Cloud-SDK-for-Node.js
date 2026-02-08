var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

var remoteFolder = "TestData/In"
  
var localName = "Group.xlsx"
var remoteName = "Group.xlsx"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
 
var rangeSortRequestDataSorter = new model.DataSorter();
 rangeSortRequestDataSorter.caseSensitive = true  ;
var rangeSortRequestCellArea = new model.Range();
 rangeSortRequestCellArea.columnCount = 3  ;
 rangeSortRequestCellArea.firstColumn = 0  ;
 rangeSortRequestCellArea.firstRow = 0  ;
 rangeSortRequestCellArea.rowCount = 15  ;
var rangeSortRequest = new model.RangeSortRequest();
 rangeSortRequest.dataSorter = rangeSortRequestDataSorter  ;
 rangeSortRequest.cellArea = rangeSortRequestCellArea  ;

var request = new model.PostWorksheetCellsRangeSortRequest();
request.name =  remoteName;
request.sheetName =  "book1";
request.rangeSortRequest =  rangeSortRequest;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postWorksheetCellsRangeSort(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});