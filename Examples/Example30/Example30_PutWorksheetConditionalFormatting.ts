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
 
var formatcondition = new model.FormatCondition();
 formatcondition.type = "CellValue"  ;
 formatcondition.operator = "Between"  ;
 formatcondition.formula1 = "v1"  ;
 formatcondition.formula2 = "v2"  ;

var request = new model.PutWorksheetConditionalFormattingRequest();
request.name =  remoteName;
request.sheetName =  "Sheet1";
request.formatcondition =  formatcondition;
request.cellArea =  "A1:C10";
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.putWorksheetConditionalFormatting(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});