var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
 

var request = new model.SawpRangeRequest();
request.spreadsheet =  "TestData/AggregateCellsByColor.xlsx";
request.worksheet1 =  "Sheet1";
request.range1 =  "E1:E7";
request.worksheet2 =  "Sheet1";
request.range2 =  "F1:F7";
return cellsApi.sawpRange(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});