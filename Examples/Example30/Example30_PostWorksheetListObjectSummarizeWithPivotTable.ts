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
 
var createPivotTableRequestPivotFieldColumns = new Array<number>();createPivotTableRequestPivotFieldColumns.push(2);
var createPivotTableRequestPivotFieldData = new Array<number>();createPivotTableRequestPivotFieldData.push(1);
var createPivotTableRequestPivotFieldRows = new Array<number>();createPivotTableRequestPivotFieldRows.push(0);
var createPivotTableRequest = new model.CreatePivotTableRequest();
 createPivotTableRequest.destCellName = "C1"  ;
 createPivotTableRequest.name = "testp"  ;
 createPivotTableRequest.sourceData = "=Sheet2!A1:E8"  ;
 createPivotTableRequest.useSameSource = true  ;
 createPivotTableRequest.pivotFieldColumns = createPivotTableRequestPivotFieldColumns  ;
 createPivotTableRequest.pivotFieldData = createPivotTableRequestPivotFieldData  ;
 createPivotTableRequest.pivotFieldRows = createPivotTableRequestPivotFieldRows  ;

var request = new model.PostWorksheetListObjectSummarizeWithPivotTableRequest();
request.name =  remoteName;
request.sheetName =  "Sheet7";
request.listObjectIndex =  0;
request.destsheetName =  "Sheet2";
request.createPivotTableRequest =  createPivotTableRequest;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postWorksheetListObjectSummarizeWithPivotTable(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});