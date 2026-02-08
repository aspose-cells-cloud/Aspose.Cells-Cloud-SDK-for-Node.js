var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var localName = "EmployeeSalesSummary.xlsx"

 

var request = new model.CompressSpreadsheetRequest();
request.spreadsheet =  "TestData/" + localName;
request.level =  9;
return cellsApi.compressSpreadsheet(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});