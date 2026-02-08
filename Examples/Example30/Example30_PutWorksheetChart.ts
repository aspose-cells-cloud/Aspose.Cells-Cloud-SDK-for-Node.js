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
 

var request = new model.PutWorksheetChartRequest();
request.name =  remoteName;
request.sheetName =  "Sheet4";
request.chartType =  "Pie";
request.upperLeftRow =  5;
request.upperLeftColumn =  5;
request.lowerRightRow =  10;
request.lowerRightColumn =  10;
request.area =  "C7:D11";
request.isVertical =  true;
request.title =  "Aspose Chart";
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.putWorksheetChart(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});