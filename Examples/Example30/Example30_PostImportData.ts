var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

var remoteFolder = "TestData/In"
  
var localName = "Book1.xlsx"
var remoteName = "Book1.xlsx"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
 
var importOptionData = new Array<number>();importOptionData.push(1);
importOptionData.push(2);
importOptionData.push(3);
importOptionData.push(4);
var importOption = new model.ImportIntArrayOption();
 importOption.destinationWorksheet = "Sheet1"  ;
 importOption.firstColumn = 1  ;
 importOption.firstRow = 3  ;
 importOption.importDataType = "IntArray"  ;
 importOption.isInsert = true  ;
 importOption.isVertical = true  ;
 importOption.data = importOptionData  ;

var request = new model.PostImportDataRequest();
request.name =  remoteName;
request.importOption =  importOption;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postImportData(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});