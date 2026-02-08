var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var book1Xlsx = "Book1.xlsx"
var outFormat = "PDF"

 

var request = new model.SplitSpreadsheetRequest();
request.spreadsheet =  "TestData/" + book1Xlsx;
request.outFormat =  outFormat;
return cellsApi.splitSpreadsheet(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});