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
 
var optionsvalue0Font = new model.Font();
 optionsvalue0Font.isBold = true  ;
 optionsvalue0Font.size = 16  ;
var optionsvalue0 = new model.FontSetting();
 optionsvalue0.length = 5  ;
 optionsvalue0.startIndex = 0  ;
 optionsvalue0.font = optionsvalue0Font  ;
var options = new Array<model.FontSetting>();options.push(optionsvalue0);

var request = new model.PostCellCharactersRequest();
request.name =  remoteName;
request.sheetName =  "Sheet1";
request.cellName =  "E36";
request.options =  options;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postCellCharacters(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});