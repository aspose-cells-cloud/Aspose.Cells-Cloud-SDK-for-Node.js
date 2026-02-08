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
 
var colorFilterForegroundColorColor = new model.Color();
 colorFilterForegroundColorColor.r = 48  ;
 colorFilterForegroundColorColor.g = 48  ;
 colorFilterForegroundColorColor.b = 48  ;
var colorFilterForegroundColor = new model.CellsColor();
 colorFilterForegroundColor.type = "Automatic"  ;
 colorFilterForegroundColor.color = colorFilterForegroundColorColor  ;
var colorFilter = new model.ColorFilterRequest();
 colorFilter.pattern = "Solid"  ;
 colorFilter.foregroundColor = colorFilterForegroundColor  ;

var request = new model.PutWorksheetColorFilterRequest();
request.name =  remoteName;
request.sheetName =  "Sheet1";
request.range =  "A1:B1";
request.fieldIndex =  0;
request.colorFilter =  colorFilter;
request.matchBlanks =  true;
request.refresh =  true;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.putWorksheetColorFilter(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});