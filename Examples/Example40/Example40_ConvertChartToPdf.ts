var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var localName = "EmployeeSalesSummary.xlsx"

 

var request = new model.ConvertChartToPdfRequest();
request.spreadsheet =  "TestData/" + localName;
request.worksheet =  "Sales";
request.chartIndex =  0;
return cellsApi.convertChartToPdf(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});