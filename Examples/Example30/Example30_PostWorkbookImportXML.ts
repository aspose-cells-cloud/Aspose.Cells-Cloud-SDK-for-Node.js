var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

var remoteFolder = "TestData/In"
  
var localName = "Template.xlsx"
var dataXML = "data.xml"
var remoteName = "Template.xlsx"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
var dataXMLRequest = new  model.UploadFileRequest();
dataXMLRequest.uploadFiles ={dataXML:fs.createReadStream(localPath  + dataXML)};
dataXMLRequest.path = remoteFolder + "/data.xml" ;
dataXMLRequest.storageName ="";
cellsApi.uploadFile(dataXMLRequest );
 
var importXMLRequestXMLFileSource = new model.DataSource();
 importXMLRequestXMLFileSource.dataSourceType = "CloudFileSystem"  ;
 importXMLRequestXMLFileSource.dataPath = remoteFolder + "/data.xml"  ;
var importXMLRequestImportPosition = new model.ImportPosition();
 importXMLRequestImportPosition.sheetName = "Sheet1"  ;
 importXMLRequestImportPosition.rowIndex = 3  ;
 importXMLRequestImportPosition.columnIndex = 4  ;
var importXMLRequest = new model.ImportXMLRequest();
 importXMLRequest.xMLFileSource = importXMLRequestXMLFileSource  ;
 importXMLRequest.importPosition = importXMLRequestImportPosition  ;

var request = new model.PostWorkbookImportXMLRequest();
request.name =  remoteName;
request.importXMLRequest =  importXMLRequest;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postWorkbookImportXML(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});