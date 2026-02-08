var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
 

var request = new model.MathCalculateRequest();
request.spreadsheet =  "TestData/EmployeeSalesSummary-BlankWorksheet.xlsx";
request.operation =  "add";
request.value =  "12.3";
return cellsApi.mathCalculate(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});