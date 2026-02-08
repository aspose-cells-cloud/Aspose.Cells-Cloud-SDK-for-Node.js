var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

var remoteFolder = "TestData/In"
  
var localName = "Book1.xlsx"
var reportDataXML = "ReportData.xml"
var remoteName = "Book1.xlsx"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
var reportDataXMLRequest = new  model.UploadFileRequest();
reportDataXMLRequest.uploadFiles ={reportDataXML:fs.createReadStream(localPath  + reportDataXML)};
reportDataXMLRequest.path = remoteFolder + "/ReportData.xml" ;
reportDataXMLRequest.storageName ="";
cellsApi.uploadFile(reportDataXMLRequest );
 

var request = new model.PostWorkbookGetSmartMarkerResultRequest();
request.name =  remoteName;
request.xmlFile =  remoteFolder + "/ReportData.xml";
request.folder =  remoteFolder;
request.outPath =  "OutResult/SmartMarkerResult.xlsx";
request.storageName =  "";
request.outStorageName =  "";
return cellsApi.postWorkbookGetSmartMarkerResult(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});