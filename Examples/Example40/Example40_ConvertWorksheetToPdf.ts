var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var localName = "TestTables.xlsx"

 

var request = new model.ConvertWorksheetToPdfRequest();
request.spreadsheet =  "TestData/" + localName;
request.worksheet =  "Sheet2";
return cellsApi.convertWorksheetToPdf(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});