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
 
var tableTotalRequeststableTotalRequest0 = new model.TableTotalRequest();
 tableTotalRequeststableTotalRequest0.listColumnIndex = 1  ;
 tableTotalRequeststableTotalRequest0.totalsCalculation = "Average"  ;
var tableTotalRequests = new Array<model.TableTotalRequest>();tableTotalRequests.push(tableTotalRequeststableTotalRequest0);

var request = new model.PostWorksheetListColumnsTotalRequest();
request.name =  remoteName;
request.sheetName =  "Sheet7";
request.listObjectIndex =  0;
request.tableTotalRequests =  tableTotalRequests;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postWorksheetListColumnsTotal(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});