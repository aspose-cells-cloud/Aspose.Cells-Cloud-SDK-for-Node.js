var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var localName = "EmployeeSalesSummary.xlsx"
var remoteName = "EmployeeSalesSummary.xlsx"
var remoteFolder = "TestData/In"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
 

var request = new model.ExportWorksheetAsFormatRequest();
request.name =  localName;
request.worksheet =  "Sales";
request.format =  "svg";
request.folder =  remoteFolder;
return cellsApi.exportWorksheetAsFormat(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});