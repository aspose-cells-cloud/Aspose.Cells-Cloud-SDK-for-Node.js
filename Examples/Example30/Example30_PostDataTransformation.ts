var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

var remoteFolder = "TestData/In"
  
var localName = "BookTableL2W.xlsx"
var remoteName = "BookTableL2W.xlsx"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
 
var dataTransformationRequestLoadDataLoadTo = new model.LoadTo();
 dataTransformationRequestLoadDataLoadTo.beginColumnIndex = 2  ;
 dataTransformationRequestLoadDataLoadTo.beginRowIndex = 3  ;
 dataTransformationRequestLoadDataLoadTo.worksheet = "L2W"  ;
var dataTransformationRequestLoadDataDataQueryDataItem = new model.DataItem();
 dataTransformationRequestLoadDataDataQueryDataItem.dataItemType = "Table"  ;
 dataTransformationRequestLoadDataDataQueryDataItem.value = "Table1"  ;
var dataTransformationRequestLoadDataDataQueryDataSource = new model.DataSource();
 dataTransformationRequestLoadDataDataQueryDataSource.dataSourceType = "CloudFileSystem"  ;
 dataTransformationRequestLoadDataDataQueryDataSource.dataPath = "TestData/In/BookTableL2W.xlsx"  ;
var dataTransformationRequestLoadDataDataQuery = new model.DataQuery();
 dataTransformationRequestLoadDataDataQuery.name = "DataQuery"  ;
 dataTransformationRequestLoadDataDataQuery.dataItem = dataTransformationRequestLoadDataDataQueryDataItem  ;
 dataTransformationRequestLoadDataDataQuery.dataSource = dataTransformationRequestLoadDataDataQueryDataSource  ;
 dataTransformationRequestLoadDataDataQuery.dataSourceDataType = "ListObject"  ;
var dataTransformationRequestLoadData = new model.LoadData();
 dataTransformationRequestLoadData.loadTo = dataTransformationRequestLoadDataLoadTo  ;
 dataTransformationRequestLoadData.dataQuery = dataTransformationRequestLoadDataDataQuery  ;
var dataTransformationRequestAppliedStepsAppliedStep0AppliedOperateUnpivotColumnNames = new Array<string>();dataTransformationRequestAppliedStepsAppliedStep0AppliedOperateUnpivotColumnNames.push("2017");
dataTransformationRequestAppliedStepsAppliedStep0AppliedOperateUnpivotColumnNames.push("2018");
dataTransformationRequestAppliedStepsAppliedStep0AppliedOperateUnpivotColumnNames.push("2019");
var dataTransformationRequestAppliedStepsAppliedStep0AppliedOperate = new model.UnpivotColumn();
 dataTransformationRequestAppliedStepsAppliedStep0AppliedOperate.appliedOperateType = "UnpivotColumn"  ;
 dataTransformationRequestAppliedStepsAppliedStep0AppliedOperate.valueMapName = "Count"  ;
 dataTransformationRequestAppliedStepsAppliedStep0AppliedOperate.columnMapName = "Date"  ;
 dataTransformationRequestAppliedStepsAppliedStep0AppliedOperate.unpivotColumnNames = dataTransformationRequestAppliedStepsAppliedStep0AppliedOperateUnpivotColumnNames  ;
var dataTransformationRequestAppliedStepsAppliedStep0 = new model.AppliedStep();
 dataTransformationRequestAppliedStepsAppliedStep0.stepName = "UnpivotColumn"  ;
 dataTransformationRequestAppliedStepsAppliedStep0.appliedOperate = dataTransformationRequestAppliedStepsAppliedStep0AppliedOperate  ;
var dataTransformationRequestAppliedSteps = new Array<model.AppliedStep>();dataTransformationRequestAppliedSteps.push(dataTransformationRequestAppliedStepsAppliedStep0);
var dataTransformationRequest = new model.DataTransformationRequest();
 dataTransformationRequest.loadData = dataTransformationRequestLoadData  ;
 dataTransformationRequest.appliedSteps = dataTransformationRequestAppliedSteps  ;

var request = new model.PostDataTransformationRequest();
request.dataTransformationRequest =  dataTransformationRequest;
return cellsApi.postDataTransformation(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});