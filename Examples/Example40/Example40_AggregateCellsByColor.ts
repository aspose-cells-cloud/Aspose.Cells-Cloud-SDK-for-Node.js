var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
 

var request = new model.AggregateCellsByColorRequest();
request.spreadsheet =  "TestData/AggregateCellsByColor.xlsx";
request.worksheet =  "Sheet1";
return cellsApi.aggregateCellsByColor(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});