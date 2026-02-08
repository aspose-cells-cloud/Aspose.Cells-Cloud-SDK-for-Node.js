var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var bookFormulaXlsx = "BookFormula.xlsx"

 

var request = new model.SearchSpreadsheetBrokenLinksRequest();
request.spreadsheet =  "TestData/" + bookFormulaXlsx;
return cellsApi.searchSpreadsheetBrokenLinks(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});