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
 
var chart = new model.Chart();
 chart.showLegend = true  ;
 chart.showDataTable = true  ;

var request = new model.PostWorksheetChartRequest();
request.name =  remoteName;
request.sheetName =  "Sheet4";
request.chartIndex =  0;
request.chart =  chart;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postWorksheetChart(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});