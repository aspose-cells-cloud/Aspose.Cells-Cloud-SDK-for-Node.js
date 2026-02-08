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
 
var rangeOperateSource = new model.Range();
 rangeOperateSource.columnCount = 3  ;
 rangeOperateSource.firstColumn = 8  ;
 rangeOperateSource.firstRow = 3  ;
 rangeOperateSource.rowCount = 2  ;
var rangeOperateTarget = new model.Range();
 rangeOperateTarget.columnCount = 3  ;
 rangeOperateTarget.firstColumn = 8  ;
 rangeOperateTarget.firstRow = 13  ;
 rangeOperateTarget.rowCount = 2  ;
var rangeOperate = new model.RangeCopyRequest();
 rangeOperate.operate = "copydata"  ;
 rangeOperate.source = rangeOperateSource  ;
 rangeOperate.target = rangeOperateTarget  ;

var request = new model.PostWorksheetCellsRangesCopyRequest();
request.name =  remoteName;
request.sheetName =  "Sheet1";
request.rangeOperate =  rangeOperate;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postWorksheetCellsRangesCopy(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});