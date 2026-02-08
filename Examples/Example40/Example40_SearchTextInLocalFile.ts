var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var bookTextXlsx = "BookText.xlsx"

 

var request = new model.SearchSpreadsheetContentRequest();
request.spreadsheet =  "TestData/" + bookTextXlsx;
request.searchText =  "Bike";
request.ignoringCase =  false;
return cellsApi.searchSpreadsheetContent(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});