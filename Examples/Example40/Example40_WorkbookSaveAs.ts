var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var localName = "Book1.xlsx"
var remoteName = "Book1.xlsx"
var remoteFolder = "TestData/In"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
 
var format = "csv"
var newfilename = "OutResult/PostExcelSaveAs.csv"

var saveOptionsData = new model.SaveOptionsData();
 saveOptionsData.filename = newfilename  ;

var request = new model.SaveSpreadsheetAsRequest();
request.name =  remoteName;
request.format =  format;
request.saveOptionsData =  saveOptionsData;
request.folder =  remoteFolder;
return cellsApi.saveSpreadsheetAs(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});