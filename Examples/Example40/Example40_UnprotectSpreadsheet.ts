var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
 

var request = new model.UnprotectSpreadsheetRequest();
request.spreadsheet =  "TestData/EmployeeSalesSummary_Locked.xlsx";
request.password =  "123456";
request.modifyPassword =  "123456";
return cellsApi.unprotectSpreadsheet(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});