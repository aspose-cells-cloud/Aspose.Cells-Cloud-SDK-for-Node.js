var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var book1Xlsx = "Book1.xlsx"

 
var mapFiles = {};           

var cellsDocumentscellsDocument0 = new model.CellsDocumentProperty();
 cellsDocumentscellsDocument0.name = "Author"  ;
 cellsDocumentscellsDocument0.value = "roy.wang"  ;
var cellsDocuments = new Array<model.CellsDocumentProperty>();cellsDocuments.push(cellsDocumentscellsDocument0);
 mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

var request = new model.PostMetadataRequest();
request.file =  mapFiles;
request.cellsDocuments =  cellsDocuments;
return cellsApi.postMetadata(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});