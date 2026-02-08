const fs = require('fs');
const path = require('path');

import * as model from "../../src/model/model";
import * as api from "../../src/api";

const clientId = process.env.CellsCloudClientId;
const clientSecret = process.env.CellsCloudClientSecret;

const cellsApi = new api.CellsApi(clientId, clientSecret);
const inputFileName = './EmployeeSalesSummary.xlsx';
const outputFileName = 'EmployeeSalesSummary_zh.xlsx';

async function main() {
    try {
        var request = new model.TranslationSpreadsheetRequest();
        request.spreadsheet = inputFileName;
        request.targetLanguage = "zh";

        const result = await cellsApi.translationSpreadsheet(request);
        fs.writeFileSync(outputFileName, result.body);


    } catch (error: any) {
        console.error(error.message);
        process.exit(1);
    }
}

main();