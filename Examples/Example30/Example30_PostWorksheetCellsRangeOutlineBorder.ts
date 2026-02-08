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
 
var rangeOperateborderColor = new model.Color();
 rangeOperateborderColor.r = 48  ;
 rangeOperateborderColor.g = 48  ;
 rangeOperateborderColor.b = 48  ;
var rangeOperateRange = new model.Range();
 rangeOperateRange.columnCount = 1  ;
 rangeOperateRange.columnWidth = 10.0  ;
 rangeOperateRange.firstRow = 1  ;
 rangeOperateRange.rowCount = 10  ;
var rangeOperate = new model.RangeSetOutlineBorderRequest();
 rangeOperate.borderEdge = "LeftBorder"  ;
 rangeOperate.borderStyle = "Dotted"  ;
 rangeOperate.borderColor = rangeOperateborderColor  ;
 rangeOperate.range = rangeOperateRange  ;

var request = new model.PostWorksheetCellsRangeOutlineBorderRequest();
request.name =  remoteName;
request.sheetName =  "Sheet1";
request.rangeOperate =  rangeOperate;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postWorksheetCellsRangeOutlineBorder(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});