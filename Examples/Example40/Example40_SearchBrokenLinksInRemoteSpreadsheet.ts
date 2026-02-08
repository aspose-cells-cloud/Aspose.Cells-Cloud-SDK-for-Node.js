var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var remoteFolder = "TestData/In"
var bookFormulaXlsx = "BookFormula.xlsx"

var bookFormulaXlsxRequest = new  model.UploadFileRequest();
bookFormulaXlsxRequest.uploadFiles ={bookFormulaXlsx:fs.createReadStream(localPath  + bookFormulaXlsx)};
bookFormulaXlsxRequest.path = remoteFolder + "/" + bookFormulaXlsx ;
bookFormulaXlsxRequest.storageName ="";
cellsApi.uploadFile(bookFormulaXlsxRequest );
 

var request = new model.SearchBrokenLinksInRemoteSpreadsheetRequest();
request.name =  bookFormulaXlsx;
request.folder =  remoteFolder;
return cellsApi.searchBrokenLinksInRemoteSpreadsheet(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});