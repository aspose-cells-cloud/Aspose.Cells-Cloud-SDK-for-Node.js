var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var localName = "EmployeeSalesSummary.xlsx"

 
var format = "svg"


var request = new model.ConvertChartToImageRequest();
request.spreadsheet =  "TestData/" + localName;
request.worksheet =  "Sales";
request.chartIndex =  0;
request.format =  format;
return cellsApi.convertChartToImage(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});