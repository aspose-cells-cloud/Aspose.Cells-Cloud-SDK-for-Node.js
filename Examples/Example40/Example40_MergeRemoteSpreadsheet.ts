var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

var remoteFolder = "TestData/In"
var book1Xlsx = "Book1.xlsx"
var bookTextXlsx = "BookText.xlsx"
  
var bookTextXlsxRequest = new  model.UploadFileRequest();
bookTextXlsxRequest.uploadFiles ={bookTextXlsx:fs.createReadStream(localPath  + bookTextXlsx)};
bookTextXlsxRequest.path = remoteFolder + "/" + bookTextXlsx ;
bookTextXlsxRequest.storageName ="";
cellsApi.uploadFile(bookTextXlsxRequest );
var book1XlsxRequest = new  model.UploadFileRequest();
book1XlsxRequest.uploadFiles ={book1Xlsx:fs.createReadStream(localPath  + book1Xlsx)};
book1XlsxRequest.path = remoteFolder + "/" + book1Xlsx ;
book1XlsxRequest.storageName ="";
cellsApi.uploadFile(book1XlsxRequest );
 

var request = new model.MergeRemoteSpreadsheetRequest();
request.name =  bookTextXlsx;
request.mergedSpreadsheet =  remoteFolder + "/" + book1Xlsx;
request.folder =  remoteFolder;
return cellsApi.mergeRemoteSpreadsheet(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});