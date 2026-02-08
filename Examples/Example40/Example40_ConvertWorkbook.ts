var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var localName = "Book1.xlsx"

 
var format = "png"


var request = new model.ConvertSpreadsheetRequest();
request.spreadsheet =  "TestData/" + localName;
request.format =  format;
return cellsApi.convertSpreadsheet(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});