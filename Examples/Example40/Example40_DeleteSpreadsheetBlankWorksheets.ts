var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var localName = "EmployeeSalesSummary-BlankWorksheet.xlsx"

 

var request = new model.DeleteSpreadsheetBlankWorksheetsRequest();
request.spreadsheet =  "TestData/" + localName;
return cellsApi.deleteSpreadsheetBlankWorksheets(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});