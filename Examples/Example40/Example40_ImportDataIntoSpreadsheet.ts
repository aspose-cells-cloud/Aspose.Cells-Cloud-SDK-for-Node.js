var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var book1Xlsx = "Book1.xlsx"
var csVDataFile = "BookCsvDuplicateData.csv"

 

var request = new model.ImportDataIntoSpreadsheetRequest();
request.datafile =  "TestData/" + csVDataFile;
request.spreadsheet =  "TestData/" + book1Xlsx;
request.worksheet =  "Sheet1";
request.startcell =  "E3";
return cellsApi.importDataIntoSpreadsheet(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});