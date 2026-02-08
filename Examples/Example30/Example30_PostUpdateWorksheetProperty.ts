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
 
var sheet = new model.Worksheet();
 sheet.name = "sheet65"  ;
 sheet.isGridlinesVisible = true  ;

var request = new model.PostUpdateWorksheetPropertyRequest();
request.name =  remoteName;
request.sheetName =  "Sheet5";
request.sheet =  sheet;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postUpdateWorksheetProperty(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});