var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var remoteFolder = "TestData/In"
var book1Xlsx = "Book1.xlsx"
var outFormat = "PDF"

 

var request = new model.SplitRemoteSpreadsheetRequest();
request.name =  book1Xlsx;
request.folder =  remoteFolder;
request.outFormat =  outFormat;
request.outPath =  "TestData/Out";
return cellsApi.splitRemoteSpreadsheet(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});