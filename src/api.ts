/*
* MIT License
* 
* Copyright (c) 2026 Aspose.Cells Cloud
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all 
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
* 
*/


import http = require("http");

import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/objectSerializer";
import { invokeApiMethod } from "./internal/requestHelper";
import * as model from "./model/model";

export * from "./model/model";


/**
 * Library for communicating with the Aspose.Cells Cloud API
 */
export class CellsApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    /**
     * @param clientId client Id.
     * @param clientSecret client Secret.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(clientId: string, clientSecret: string, apiVersion?:string, baseUrl?: string, debugMode?: boolean) {
        this.configuration = new Configuration(clientId, clientSecret,apiVersion, baseUrl, debugMode);
    }

    /// <summary>
    /// AI task decomposition: Convert user objectives to sequential action plans with formatted file export.
    /// </summary>
    /// <param name="request">Request. <see cref="DecomposeUserTaskRequest" /></param>
    public async decomposeUserTask(requestObj:model.DecomposeUserTaskRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling decomposeUserTask.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Translates the entire spreadsheet to the specified target language.
    /// </summary>
    /// <param name="request">Request. <see cref="TranslateSpreadsheetRequest" /></param>
    public async translateSpreadsheet(requestObj:model.TranslateSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling translateSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Translates text file content to the specified target language.
    /// </summary>
    /// <param name="request">Request. <see cref="TranslateTextFileRequest" /></param>
    public async translateTextFile(requestObj:model.TranslateTextFileRequest ): Promise<{response: http.ClientResponse, body: any}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling translateTextFile.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "any");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// The Aggregate by Color API provides a convenient way to perform calculations on cells that share the same fill or font color. This API supports a range of aggregate operations, including count, sum, maximum value, minimum value, and average value, enabling you to analyze and summarize data based on color distinctions.
    /// </summary>
    /// <param name="request">Request. <see cref="AggregateCellsByColorRequest" /></param>
    public async aggregateCellsByColor(requestObj:model.AggregateCellsByColorRequest ): Promise<{response: http.ClientResponse, body: model.AggregateResultByColorResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling aggregateCellsByColor.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AggregateResultByColorResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="MathCalculateRequest" /></param>
    public async mathCalculate(requestObj:model.MathCalculateRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling mathCalculate.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Get Access Token Result: The Cells Cloud Get Token API acts as a proxy service,
    /// forwarding user requests to the Aspose Cloud authentication server and returning the resulting access token to the client.
    /// </summary>
    /// <param name="request">Request. <see cref="PostAccessTokenRequest" /></param>
    public async postAccessToken(requestObj:model.PostAccessTokenRequest ): Promise<{response: http.ClientResponse, body: string}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postAccessToken.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "string");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Check the Health Status of Aspose.Cells Cloud Service.
    /// </summary>
    /// <param name="request">Request. <see cref="GetAsposeCellsCloudStatusRequest" /></param>
    public async getAsposeCellsCloudStatus(requestObj:model.GetAsposeCellsCloudStatusRequest ): Promise<{response: http.ClientResponse, body: string}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getAsposeCellsCloudStatus.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "string");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Check the Health Status of Aspose.Cells Cloud Service.
    /// </summary>
    /// <param name="request">Request. <see cref="CheckCloudServiceHealthRequest" /></param>
    public async checkCloudServiceHealth(requestObj:model.CheckCloudServiceHealthRequest ): Promise<{response: http.ClientResponse, body: string}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling checkCloudServiceHealth.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "string");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a spreadsheet in cloud storage to the specified format.
    /// </summary>
    /// <param name="request">Request. <see cref="ExportSpreadsheetAsFormatRequest" /></param>
    public async exportSpreadsheetAsFormat(requestObj:model.ExportSpreadsheetAsFormatRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling exportSpreadsheetAsFormat.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a worksheet of spreadsheet in cloud storage to the specified format.
    /// </summary>
    /// <param name="request">Request. <see cref="ExportWorksheetAsFormatRequest" /></param>
    public async exportWorksheetAsFormat(requestObj:model.ExportWorksheetAsFormatRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling exportWorksheetAsFormat.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a chart of spreadsheet in cloud storage to the specified format.
    /// </summary>
    /// <param name="request">Request. <see cref="ExportChartAsFormatRequest" /></param>
    public async exportChartAsFormat(requestObj:model.ExportChartAsFormatRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling exportChartAsFormat.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a table of spreadsheet in cloud storage to the specified format.
    /// </summary>
    /// <param name="request">Request. <see cref="ExportTableAsFormatRequest" /></param>
    public async exportTableAsFormat(requestObj:model.ExportTableAsFormatRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling exportTableAsFormat.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts the range of spreadsheet in cloud storage to the specified format.
    /// </summary>
    /// <param name="request">Request. <see cref="ExportRangeAsFormatRequest" /></param>
    public async exportRangeAsFormat(requestObj:model.ExportRangeAsFormatRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling exportRangeAsFormat.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a spreadsheet on a local drive to the specified format.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertSpreadsheetRequest" /></param>
    public async convertSpreadsheet(requestObj:model.ConvertSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a spreadsheet on a local drive to the pdf file.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertSpreadsheetToPdfRequest" /></param>
    public async convertSpreadsheetToPdf(requestObj:model.ConvertSpreadsheetToPdfRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertSpreadsheetToPdf.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a spreadsheet on a local drive to the JSON file.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertSpreadsheetToJsonRequest" /></param>
    public async convertSpreadsheetToJson(requestObj:model.ConvertSpreadsheetToJsonRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertSpreadsheetToJson.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a spreadsheet on a local drive to the csv file.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertSpreadsheetToCsvRequest" /></param>
    public async convertSpreadsheetToCsv(requestObj:model.ConvertSpreadsheetToCsvRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertSpreadsheetToCsv.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a worksheet of spreadsheet on a local drive to the image format.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertWorksheetToImageRequest" /></param>
    public async convertWorksheetToImage(requestObj:model.ConvertWorksheetToImageRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertWorksheetToImage.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a worksheet of spreadsheet on a local drive to the pdf file.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertWorksheetToPdfRequest" /></param>
    public async convertWorksheetToPdf(requestObj:model.ConvertWorksheetToPdfRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertWorksheetToPdf.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a worksheet of spreadsheet on a local drive to the JSON file.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertWorksheetToJsonRequest" /></param>
    public async convertWorksheetToJson(requestObj:model.ConvertWorksheetToJsonRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertWorksheetToJson.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a worksheet of spreadsheet on a local drive to the CSV file.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertWorksheetToCsvRequest" /></param>
    public async convertWorksheetToCsv(requestObj:model.ConvertWorksheetToCsvRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertWorksheetToCsv.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a worksheet of spreadsheet on a local drive to the html file.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertWorksheetToHtmlRequest" /></param>
    public async convertWorksheetToHtml(requestObj:model.ConvertWorksheetToHtmlRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertWorksheetToHtml.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a worksheet of spreadsheet on a local drive to the HTML table file.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertWorksheetToHtmlTableRequest" /></param>
    public async convertWorksheetToHtmlTable(requestObj:model.ConvertWorksheetToHtmlTableRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertWorksheetToHtmlTable.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a table of spreadsheet on a local drive to the image file.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertTableToImageRequest" /></param>
    public async convertTableToImage(requestObj:model.ConvertTableToImageRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertTableToImage.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a table of spreadsheet on a local drive to the pdf file.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertTableToPdfRequest" /></param>
    public async convertTableToPdf(requestObj:model.ConvertTableToPdfRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertTableToPdf.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a table of spreadsheet on a local drive to the csv file.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertTableToCsvRequest" /></param>
    public async convertTableToCsv(requestObj:model.ConvertTableToCsvRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertTableToCsv.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a table of spreadsheet on a local drive to the html file.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertTableToHtmlRequest" /></param>
    public async convertTableToHtml(requestObj:model.ConvertTableToHtmlRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertTableToHtml.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a table of spreadsheet on a local drive to the json file.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertTableToJsonRequest" /></param>
    public async convertTableToJson(requestObj:model.ConvertTableToJsonRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertTableToJson.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a range of spreadsheet on a local drive to the image file.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertRangeToImageRequest" /></param>
    public async convertRangeToImage(requestObj:model.ConvertRangeToImageRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertRangeToImage.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a range of spreadsheet on a local drive to the pdf file.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertRangeToPdfRequest" /></param>
    public async convertRangeToPdf(requestObj:model.ConvertRangeToPdfRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertRangeToPdf.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a range of spreadsheet on a local drive to the csv file.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertRangeToCsvRequest" /></param>
    public async convertRangeToCsv(requestObj:model.ConvertRangeToCsvRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertRangeToCsv.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a range of spreadsheet on a local drive to the html file.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertRangeToHtmlRequest" /></param>
    public async convertRangeToHtml(requestObj:model.ConvertRangeToHtmlRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertRangeToHtml.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a range of spreadsheet on a local drive to the json file.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertRangeToJsonRequest" /></param>
    public async convertRangeToJson(requestObj:model.ConvertRangeToJsonRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertRangeToJson.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a chart of spreadsheet on a local drive to image.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertChartToImageRequest" /></param>
    public async convertChartToImage(requestObj:model.ConvertChartToImageRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertChartToImage.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a chart of spreadsheet on a local drive to pdf.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertChartToPdfRequest" /></param>
    public async convertChartToPdf(requestObj:model.ConvertChartToPdfRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertChartToPdf.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Converts a spreadsheet in cloud storage to the specified format.
    /// </summary>
    /// <param name="request">Request. <see cref="SaveSpreadsheetAsRequest" /></param>
    public async saveSpreadsheetAs(requestObj:model.SaveSpreadsheetAsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling saveSpreadsheetAs.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Merge local spreadsheet files into a specified format file.
    /// </summary>
    /// <param name="request">Request. <see cref="MergeSpreadsheetsRequest" /></param>
    public async mergeSpreadsheets(requestObj:model.MergeSpreadsheetsRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling mergeSpreadsheets.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Merge spreadsheet files in folder of cloud storage into a specified format file.
    /// </summary>
    /// <param name="request">Request. <see cref="MergeSpreadsheetsInRemoteFolderRequest" /></param>
    public async mergeSpreadsheetsInRemoteFolder(requestObj:model.MergeSpreadsheetsInRemoteFolderRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling mergeSpreadsheetsInRemoteFolder.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Merge a spreadsheet file into other spreadsheet in cloud storage, and output a specified format file.
    /// </summary>
    /// <param name="request">Request. <see cref="MergeRemoteSpreadsheetRequest" /></param>
    public async mergeRemoteSpreadsheet(requestObj:model.MergeRemoteSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling mergeRemoteSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Split a local spreadsheet into the specified format, multi-file.
    /// </summary>
    /// <param name="request">Request. <see cref="SplitSpreadsheetRequest" /></param>
    public async splitSpreadsheet(requestObj:model.SplitSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling splitSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Split an Excel worksheet tale into multiple sheets by column value.
    /// </summary>
    /// <param name="request">Request. <see cref="SplitTableRequest" /></param>
    public async splitTable(requestObj:model.SplitTableRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling splitTable.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Split a spreadsheet in cloud storage into the specified format, multi-file.
    /// </summary>
    /// <param name="request">Request. <see cref="SplitRemoteSpreadsheetRequest" /></param>
    public async splitRemoteSpreadsheet(requestObj:model.SplitRemoteSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling splitRemoteSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Import data into a spreadsheet from a supported data file format.
    /// </summary>
    /// <param name="request">Request. <see cref="ImportDataIntoSpreadsheetRequest" /></param>
    public async importDataIntoSpreadsheet(requestObj:model.ImportDataIntoSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling importDataIntoSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Import JSON data file into the local spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="ImportJSONDataIntoSpreadsheetRequest" /></param>
    public async importJSONDataIntoSpreadsheet(requestObj:model.ImportJSONDataIntoSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling importJSONDataIntoSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Import XML data file into the local spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="ImportXMLDataIntoSpreadsheetRequest" /></param>
    public async importXMLDataIntoSpreadsheet(requestObj:model.ImportXMLDataIntoSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling importXMLDataIntoSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Import CSV data file into the local spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="ImportCSVDataIntoSpreadsheetRequest" /></param>
    public async importCSVDataIntoSpreadsheet(requestObj:model.ImportCSVDataIntoSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling importCSVDataIntoSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Get an asymmetric public key.
    /// </summary>
    /// <param name="request">Request. <see cref="GetPublicKeyRequest" /></param>
    public async getPublicKey(requestObj:model.GetPublicKeyRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudPublicKeyResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getPublicKey.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudPublicKeyResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// The Web API allows users to create a new spreadsheet with a specified name. Optionally, a template can be provided to initialize the spreadsheet with predefined content or formatting.
    /// </summary>
    /// <param name="request">Request. <see cref="CreateSpreadsheetRequest" /></param>
    public async createSpreadsheet(requestObj:model.CreateSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Fetches a complete list of worksheets from the currently active local spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetsWithLocalSpreadsheetRequest" /></param>
    public async getWorksheetsWithLocalSpreadsheet(requestObj:model.GetWorksheetsWithLocalSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: string}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetsWithLocalSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "string");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// The Web API enables users to add a new worksheet to a workbook, specifying the worksheet's type, position, and name. This function provides flexibility in managing workbook structure by allowing detailed control over worksheet addition.
    /// </summary>
    /// <param name="request">Request. <see cref="AddWorksheetToSpreadsheetRequest" /></param>
    public async addWorksheetToSpreadsheet(requestObj:model.AddWorksheetToSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling addWorksheetToSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// The Web API endpoint allows users to delete a specified worksheet from a workbook. This function provides a straightforward way to manage workbook structure by removing unnecessary or redundant worksheets.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetFromSpreadsheetRequest" /></param>
    public async deleteWorksheetFromSpreadsheet(requestObj:model.DeleteWorksheetFromSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetFromSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// The Web API endpoint allows users to rename a specified worksheet within a workbook. This function provides a straightforward way to update worksheet names, enhancing workbook organization and readability.
    /// </summary>
    /// <param name="request">Request. <see cref="RenameWorksheetInSpreadsheetRequest" /></param>
    public async renameWorksheetInSpreadsheet(requestObj:model.RenameWorksheetInSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renameWorksheetInSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// The Web API endpoint allows users to move a specified worksheet within a workbook. This function provides a straightforward way to move a worksheet, enhancing workbook organization.
    /// </summary>
    /// <param name="request">Request. <see cref="MoveWorksheetInSpreadsheetRequest" /></param>
    public async moveWorksheetInSpreadsheet(requestObj:model.MoveWorksheetInSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveWorksheetInSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// The Web API endpoint allows users to compress a spreadsheet to reduce its file size. This function provides a straightforward way to optimize the storage and performance of spreadsheets by applying a specified compression level.
    /// </summary>
    /// <param name="request">Request. <see cref="CompressSpreadsheetRequest" /></param>
    public async compressSpreadsheet(requestObj:model.CompressSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling compressSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// The Web API endpoint allows users to repair a spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="RepairSpreadsheetRequest" /></param>
    public async repairSpreadsheet(requestObj:model.RepairSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling repairSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Get all merged cell area form a remote spreadsheet worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetMergedCellsInRemotedWorksheetRequest" /></param>
    public async getMergedCellsInRemotedWorksheet(requestObj:model.GetMergedCellsInRemotedWorksheetRequest ): Promise<{response: http.ClientResponse, body: Array<model.CellArea>}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getMergedCellsInRemotedWorksheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Array<CellArea>");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Get all merged cell area form a local spreadsheet worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetMergedCellsInWorksheetRequest" /></param>
    public async getMergedCellsInWorksheet(requestObj:model.GetMergedCellsInWorksheetRequest ): Promise<{response: http.ClientResponse, body: Array<model.CellArea>}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getMergedCellsInWorksheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Array<CellArea>");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="AcceptAllRevisionsRequest" /></param>
    public async acceptAllRevisions(requestObj:model.AcceptAllRevisionsRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling acceptAllRevisions.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="AcceptAllRevisionsInRemoteSpreadsheetRequest" /></param>
    public async acceptAllRevisionsInRemoteSpreadsheet(requestObj:model.AcceptAllRevisionsInRemoteSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling acceptAllRevisionsInRemoteSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Applies dual-layer password protection to Excel spreadsheets, supporting both open and modify passwords with encryption.
    /// </summary>
    /// <param name="request">Request. <see cref="ProtectSpreadsheetRequest" /></param>
    public async protectSpreadsheet(requestObj:model.ProtectSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling protectSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Removes dual-layer password protection from Excel spreadsheets, supporting both open and modify passwords with encryption.
    /// </summary>
    /// <param name="request">Request. <see cref="UnprotectSpreadsheetRequest" /></param>
    public async unprotectSpreadsheet(requestObj:model.UnprotectSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling unprotectSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="SpreadsheetDigitalsignatureRequest" /></param>
    public async spreadsheetDigitalsignature(requestObj:model.SpreadsheetDigitalsignatureRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling spreadsheetDigitalsignature.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Get all text items in the remote spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="SearchAllTextItemsInRemoteSpreadsheetRequest" /></param>
    public async searchAllTextItemsInRemoteSpreadsheet(requestObj:model.SearchAllTextItemsInRemoteSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: model.SearchResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling searchAllTextItemsInRemoteSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SearchResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Get all text items in the remote spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="SearchSpreadsheetAllTextItemsRequest" /></param>
    public async searchSpreadsheetAllTextItems(requestObj:model.SearchSpreadsheetAllTextItemsRequest ): Promise<{response: http.ClientResponse, body: model.SearchResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling searchSpreadsheetAllTextItems.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SearchResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Search text in the local spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="SearchSpreadsheetContentRequest" /></param>
    public async searchSpreadsheetContent(requestObj:model.SearchSpreadsheetContentRequest ): Promise<{response: http.ClientResponse, body: model.SearchResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling searchSpreadsheetContent.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SearchResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Search text in the remoted spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="SearchContentInRemoteSpreadsheetRequest" /></param>
    public async searchContentInRemoteSpreadsheet(requestObj:model.SearchContentInRemoteSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: model.SearchResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling searchContentInRemoteSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SearchResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Search text in the worksheet of remoted spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="SearchContentInRemoteWorksheetRequest" /></param>
    public async searchContentInRemoteWorksheet(requestObj:model.SearchContentInRemoteWorksheetRequest ): Promise<{response: http.ClientResponse, body: model.SearchResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling searchContentInRemoteWorksheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SearchResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Search text in the range of remoted spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="SearchContentInRemoteRangeRequest" /></param>
    public async searchContentInRemoteRange(requestObj:model.SearchContentInRemoteRangeRequest ): Promise<{response: http.ClientResponse, body: model.SearchResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling searchContentInRemoteRange.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SearchResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Replace text in the local spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="ReplaceSpreadsheetContentRequest" /></param>
    public async replaceSpreadsheetContent(requestObj:model.ReplaceSpreadsheetContentRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling replaceSpreadsheetContent.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Replace text in the remoted spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="ReplaceContentInRemoteSpreadsheetRequest" /></param>
    public async replaceContentInRemoteSpreadsheet(requestObj:model.ReplaceContentInRemoteSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling replaceContentInRemoteSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Replace text in the worksheet of remoted spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="ReplaceContentInRemoteWorksheetRequest" /></param>
    public async replaceContentInRemoteWorksheet(requestObj:model.ReplaceContentInRemoteWorksheetRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling replaceContentInRemoteWorksheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Replace text in the range of remoted spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="ReplaceContentInRemoteRangeRequest" /></param>
    public async replaceContentInRemoteRange(requestObj:model.ReplaceContentInRemoteRangeRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling replaceContentInRemoteRange.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Search broken links in the local spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="SearchSpreadsheetBrokenLinksRequest" /></param>
    public async searchSpreadsheetBrokenLinks(requestObj:model.SearchSpreadsheetBrokenLinksRequest ): Promise<{response: http.ClientResponse, body: model.BrokenLinksResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling searchSpreadsheetBrokenLinks.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "BrokenLinksResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Search broken links in the remoted spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="SearchBrokenLinksInRemoteSpreadsheetRequest" /></param>
    public async searchBrokenLinksInRemoteSpreadsheet(requestObj:model.SearchBrokenLinksInRemoteSpreadsheetRequest ): Promise<{response: http.ClientResponse, body: model.BrokenLinksResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling searchBrokenLinksInRemoteSpreadsheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "BrokenLinksResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Search broken links in the worksheet of remoted spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="SearchBrokenLinksInRemoteWorksheetRequest" /></param>
    public async searchBrokenLinksInRemoteWorksheet(requestObj:model.SearchBrokenLinksInRemoteWorksheetRequest ): Promise<{response: http.ClientResponse, body: model.BrokenLinksResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling searchBrokenLinksInRemoteWorksheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "BrokenLinksResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Search broken links in the range of remoted spreadsheet.
    /// </summary>
    /// <param name="request">Request. <see cref="SearchBrokenLinksInRemoteRangeRequest" /></param>
    public async searchBrokenLinksInRemoteRange(requestObj:model.SearchBrokenLinksInRemoteRangeRequest ): Promise<{response: http.ClientResponse, body: model.BrokenLinksResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling searchBrokenLinksInRemoteRange.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "BrokenLinksResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Get the specifications
    /// </summary>
    /// <param name="request">Request. <see cref="SpecRequest" /></param>
    public async spec(requestObj:model.SpecRequest ): Promise<{response: http.ClientResponse, body: any}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling spec.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "any");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="CodegenSpecRequest" /></param>
    public async codegenSpec(requestObj:model.CodegenSpecRequest ): Promise<{response: http.ClientResponse, body: any}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling codegenSpec.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "any");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// The TrimSpreadsheetContent API is designed to process and trim content within a spreadsheet. This API allows users to remove extra spaces, line breaks, or other unnecessary characters from the content of selected cells. It is particularly useful for cleaning up data entries and ensuring consistency in spreadsheet formatting
    /// </summary>
    /// <param name="request">Request. <see cref="TrimCharacterRequest" /></param>
    public async trimCharacter(requestObj:model.TrimCharacterRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling trimCharacter.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Specify changing the text case in a spreadsheet to switch between uppercase, lowercase, capitalizing the first letter of each word, or capitalizing the first letter of a sentence, and adjust the text according to specific needs.
    /// </summary>
    /// <param name="request">Request. <see cref="UpdateWordCaseRequest" /></param>
    public async updateWordCase(requestObj:model.UpdateWordCaseRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateWordCase.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Deletes user-defined characters, predefined symbol sets, or any substring from every cell in the chosen range while preserving formulas, formatting and data-validation.
    /// </summary>
    /// <param name="request">Request. <see cref="RemoveCharactersRequest" /></param>
    public async removeCharacters(requestObj:model.RemoveCharactersRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling removeCharacters.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Deletes characters from every cell in the target range by position (first/last N, before/after a substring, or between two delimiters) while preserving formulas, formatting and data-validation.
    /// </summary>
    /// <param name="request">Request. <see cref="RemoveCharactersByPositionRequest" /></param>
    public async removeCharactersByPosition(requestObj:model.RemoveCharactersByPositionRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling removeCharactersByPosition.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Finds and removes repeated substrings inside every cell of the chosen range, using user-defined or preset delimiters, while preserving formulas, formatting and data-validation.
    /// </summary>
    /// <param name="request">Request. <see cref="RemoveDuplicateSubstringsRequest" /></param>
    public async removeDuplicateSubstrings(requestObj:model.RemoveDuplicateSubstringsRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling removeDuplicateSubstrings.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Specify appending text to multiple cells at once, allowing you to add prefixes, suffixes, labels, or any specific characters. You can choose the exact position of the text—in the beginning, at the end, or before or after certain characters in the cell.
    /// </summary>
    /// <param name="request">Request. <see cref="AddTextRequest" /></param>
    public async addText(requestObj:model.AddTextRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling addText.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Indicates converting the numbers stored as text into the correct number format, replacing unwanted characters and line breaks with the desired characters, and converting accented characters to their equivalent characters without accents.
    /// </summary>
    /// <param name="request">Request. <see cref="ConvertTextRequest" /></param>
    public async convertText(requestObj:model.ConvertTextRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertText.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Indicates extracting substrings, text characters, and numbers from a spreadsheet cell into another cell without having to use complex FIND, MIN, LEFT, or RIGHT formulas.
    /// </summary>
    /// <param name="request">Request. <see cref="ExtractTextRequest" /></param>
    public async extractText(requestObj:model.ExtractTextRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling extractText.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Indicates performing text segmentation on the specified area according to the segmentation method, and outputting to the designated interval.
    /// </summary>
    /// <param name="request">Request. <see cref="SplitTextRequest" /></param>
    public async splitText(requestObj:model.SplitTextRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling splitText.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete all blank rows that do not contain any data or other objects.
    /// </summary>
    /// <param name="request">Request. <see cref="RemoveSpreadsheetBlankRowsRequest" /></param>
    public async removeSpreadsheetBlankRows(requestObj:model.RemoveSpreadsheetBlankRowsRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling removeSpreadsheetBlankRows.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete all blank rows that do not contain any data or other objects.
    /// </summary>
    /// <param name="request">Request. <see cref="RemoveSpreadsheetBlankColumnsRequest" /></param>
    public async removeSpreadsheetBlankColumns(requestObj:model.RemoveSpreadsheetBlankColumnsRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling removeSpreadsheetBlankColumns.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete all blank rows that do not contain any data or other objects.
    /// </summary>
    /// <param name="request">Request. <see cref="RemoveSpreadsheetBlankWorksheetsRequest" /></param>
    public async removeSpreadsheetBlankWorksheets(requestObj:model.RemoveSpreadsheetBlankWorksheetsRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling removeSpreadsheetBlankWorksheets.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Removes duplicate values in the worksheet/range/table.
    /// </summary>
    /// <param name="request">Request. <see cref="RemoveDuplicatesRequest" /></param>
    public async removeDuplicates(requestObj:model.RemoveDuplicatesRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling removeDuplicates.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// The Swap Ranges for Excel API provides a powerful tool to move any two columns, rows, ranges, or individual cells within an Excel file. This API allows users to re-arrange their tables quickly and efficiently, ensuring that the original data formatting is preserved and all existing formulas continue to function correctly. By leveraging this API, users can streamline their data manipulation tasks and maintain the integrity of their spreadsheets.
    /// </summary>
    /// <param name="request">Request. <see cref="SwapRangeRequest" /></param>
    public async swapRange(requestObj:model.SwapRangeRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling swapRange.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Transposes a specified data range (rows become columns, columns become rows).
    /// </summary>
    /// <param name="request">Request. <see cref="FlipDataRequest" /></param>
    public async flipData(requestObj:model.FlipDataRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling flipData.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="DownloadFileRequest" /></param>
    public async downloadFile(requestObj:model.DownloadFileRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling downloadFile.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="UploadFileRequest" /></param>
    public async uploadFile(requestObj:model.UploadFileRequest ): Promise<{response: http.ClientResponse, body: model.FilesUploadResult}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling uploadFile.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesUploadResult");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="CopyFileRequest" /></param>
    public async copyFile(requestObj:model.CopyFileRequest ): Promise<{response: http.ClientResponse, body: any}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFile.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "any");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="MoveFileRequest" /></param>
    public async moveFile(requestObj:model.MoveFileRequest ): Promise<{response: http.ClientResponse, body: any}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFile.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "any");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteFileRequest" /></param>
    public async deleteFile(requestObj:model.DeleteFileRequest ): Promise<{response: http.ClientResponse, body: any}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFile.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "any");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="GetFilesListRequest" /></param>
    public async getFilesList(requestObj:model.GetFilesListRequest ): Promise<{response: http.ClientResponse, body: model.FilesList}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFilesList.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesList");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="CreateFolderRequest" /></param>
    public async createFolder(requestObj:model.CreateFolderRequest ): Promise<{response: http.ClientResponse, body: any}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createFolder.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "any");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="CopyFolderRequest" /></param>
    public async copyFolder(requestObj:model.CopyFolderRequest ): Promise<{response: http.ClientResponse, body: any}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFolder.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "any");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="MoveFolderRequest" /></param>
    public async moveFolder(requestObj:model.MoveFolderRequest ): Promise<{response: http.ClientResponse, body: any}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFolder.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "any");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteFolderRequest" /></param>
    public async deleteFolder(requestObj:model.DeleteFolderRequest ): Promise<{response: http.ClientResponse, body: any}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFolder.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "any");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="StorageExistsRequest" /></param>
    public async storageExists(requestObj:model.StorageExistsRequest ): Promise<{response: http.ClientResponse, body: model.StorageExist}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling storageExists.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "StorageExist");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="ObjectExistsRequest" /></param>
    public async objectExists(requestObj:model.ObjectExistsRequest ): Promise<{response: http.ClientResponse, body: model.ObjectExist}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling objectExists.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ObjectExist");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="GetDiscUsageRequest" /></param>
    public async getDiscUsage(requestObj:model.GetDiscUsageRequest ): Promise<{response: http.ClientResponse, body: model.DiscUsage}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDiscUsage.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DiscUsage");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="GetFileVersionsRequest" /></param>
    public async getFileVersions(requestObj:model.GetFileVersionsRequest ): Promise<{response: http.ClientResponse, body: model.FileVersions}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFileVersions.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileVersions");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Perform business analysis of data in Excel files.
    /// </summary>
    /// <param name="request">Request. <see cref="PostAnalyzeExcelRequest" /></param>
    public async postAnalyzeExcel(requestObj:model.PostAnalyzeExcelRequest ): Promise<{response: http.ClientResponse, body: Array<model.AnalyzedResult>}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postAnalyzeExcel.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Array<AnalyzedResult>");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve the description of auto filters from a worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetAutoFilterRequest" /></param>
    public async getWorksheetAutoFilter(requestObj:model.GetWorksheetAutoFilterRequest ): Promise<{response: http.ClientResponse, body: model.AutoFilterResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetAutoFilter.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AutoFilterResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Apply a date filter in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetDateFilterRequest" /></param>
    public async putWorksheetDateFilter(requestObj:model.PutWorksheetDateFilterRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetDateFilter.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add a filter for a column in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetFilterRequest" /></param>
    public async putWorksheetFilter(requestObj:model.PutWorksheetFilterRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetFilter.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add an icon filter in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetIconFilterRequest" /></param>
    public async putWorksheetIconFilter(requestObj:model.PutWorksheetIconFilterRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetIconFilter.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Filter a list with custom criteria in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetCustomFilterRequest" /></param>
    public async putWorksheetCustomFilter(requestObj:model.PutWorksheetCustomFilterRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetCustomFilter.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add a dynamic filter in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetDynamicFilterRequest" /></param>
    public async putWorksheetDynamicFilter(requestObj:model.PutWorksheetDynamicFilterRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetDynamicFilter.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Filter the top 10 items in the list in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetFilterTop10Request" /></param>
    public async putWorksheetFilterTop10(requestObj:model.PutWorksheetFilterTop10Request ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetFilterTop10.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add a color filter in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetColorFilterRequest" /></param>
    public async putWorksheetColorFilter(requestObj:model.PutWorksheetColorFilterRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetColorFilter.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Match all blank cells in the list.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetMatchBlanksRequest" /></param>
    public async postWorksheetMatchBlanks(requestObj:model.PostWorksheetMatchBlanksRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetMatchBlanks.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Match all not blank cells in the list.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetMatchNonBlanksRequest" /></param>
    public async postWorksheetMatchNonBlanks(requestObj:model.PostWorksheetMatchNonBlanksRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetMatchNonBlanks.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Refresh auto filters in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetAutoFilterRefreshRequest" /></param>
    public async postWorksheetAutoFilterRefresh(requestObj:model.PostWorksheetAutoFilterRefreshRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetAutoFilterRefresh.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Remove a date filter in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetDateFilterRequest" /></param>
    public async deleteWorksheetDateFilter(requestObj:model.DeleteWorksheetDateFilterRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetDateFilter.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete a filter for a column in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetFilterRequest" /></param>
    public async deleteWorksheetFilter(requestObj:model.DeleteWorksheetFilterRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetFilter.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Get autoshapes description in worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetAutoshapesRequest" /></param>
    public async getWorksheetAutoshapes(requestObj:model.GetWorksheetAutoshapesRequest ): Promise<{response: http.ClientResponse, body: model.AutoShapesResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetAutoshapes.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AutoShapesResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Get autoshape description in some format.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetAutoshapeWithFormatRequest" /></param>
    public async getWorksheetAutoshapeWithFormat(requestObj:model.GetWorksheetAutoshapeWithFormatRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetAutoshapeWithFormat.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Batch converting files that meet specific matching conditions.
    /// </summary>
    /// <param name="request">Request. <see cref="PostBatchConvertRequest" /></param>
    public async postBatchConvert(requestObj:model.PostBatchConvertRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postBatchConvert.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Batch protecting files that meet specific matching conditions.
    /// </summary>
    /// <param name="request">Request. <see cref="PostBatchProtectRequest" /></param>
    public async postBatchProtect(requestObj:model.PostBatchProtectRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postBatchProtect.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Batch locking files that meet specific matching conditions.
    /// </summary>
    /// <param name="request">Request. <see cref="PostBatchLockRequest" /></param>
    public async postBatchLock(requestObj:model.PostBatchLockRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postBatchLock.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Batch unlocking files that meet specific matching conditions.
    /// </summary>
    /// <param name="request">Request. <see cref="PostBatchUnlockRequest" /></param>
    public async postBatchUnlock(requestObj:model.PostBatchUnlockRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postBatchUnlock.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Batch splitting files that meet specific matching conditions.
    /// </summary>
    /// <param name="request">Request. <see cref="PostBatchSplitRequest" /></param>
    public async postBatchSplit(requestObj:model.PostBatchSplitRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postBatchSplit.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Clear cell area contents in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostClearContentsRequest" /></param>
    public async postClearContents(requestObj:model.PostClearContentsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postClearContents.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Clear cell formats in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostClearFormatsRequest" /></param>
    public async postClearFormats(requestObj:model.PostClearFormatsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postClearFormats.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update cell range styles in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostUpdateWorksheetRangeStyleRequest" /></param>
    public async postUpdateWorksheetRangeStyle(requestObj:model.PostUpdateWorksheetRangeStyleRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postUpdateWorksheetRangeStyle.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Merge cells in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetMergeRequest" /></param>
    public async postWorksheetMerge(requestObj:model.PostWorksheetMergeRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetMerge.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Unmerge cells in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetUnmergeRequest" /></param>
    public async postWorksheetUnmerge(requestObj:model.PostWorksheetUnmergeRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetUnmerge.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve cell descriptions in a specified format.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetCellsRequest" /></param>
    public async getWorksheetCells(requestObj:model.GetWorksheetCellsRequest ): Promise<{response: http.ClientResponse, body: model.CellsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetCells.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve cell data using either cell reference or method name in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetCellRequest" /></param>
    public async getWorksheetCell(requestObj:model.GetWorksheetCellRequest ): Promise<{response: http.ClientResponse, body: string}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetCell.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "string");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve cell style descriptions in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetCellStyleRequest" /></param>
    public async getWorksheetCellStyle(requestObj:model.GetWorksheetCellStyleRequest ): Promise<{response: http.ClientResponse, body: model.StyleResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetCellStyle.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "StyleResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Set cell value using cell name in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetCellSetValueRequest" /></param>
    public async postWorksheetCellSetValue(requestObj:model.PostWorksheetCellSetValueRequest ): Promise<{response: http.ClientResponse, body: model.CellResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetCellSetValue.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Set cell style using cell name in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostUpdateWorksheetCellStyleRequest" /></param>
    public async postUpdateWorksheetCellStyle(requestObj:model.PostUpdateWorksheetCellStyleRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postUpdateWorksheetCellStyle.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Set the value of the range in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostSetCellRangeValueRequest" /></param>
    public async postSetCellRangeValue(requestObj:model.PostSetCellRangeValueRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSetCellRangeValue.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Copy data from a source cell to a destination cell in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostCopyCellIntoCellRequest" /></param>
    public async postCopyCellIntoCell(requestObj:model.PostCopyCellIntoCellRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postCopyCellIntoCell.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve the HTML string containing data and specific formats in this cell.
    /// </summary>
    /// <param name="request">Request. <see cref="GetCellHtmlStringRequest" /></param>
    public async getCellHtmlString(requestObj:model.GetCellHtmlStringRequest ): Promise<{response: http.ClientResponse, body: string}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getCellHtmlString.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "string");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Set the HTML string containing data and specific formats in this cell.
    /// </summary>
    /// <param name="request">Request. <see cref="PostSetCellHtmlStringRequest" /></param>
    public async postSetCellHtmlString(requestObj:model.PostSetCellHtmlStringRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSetCellHtmlString.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Calculate cell formula in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostCellCalculateRequest" /></param>
    public async postCellCalculate(requestObj:model.PostCellCalculateRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postCellCalculate.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Set cell characters in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostCellCharactersRequest" /></param>
    public async postCellCharacters(requestObj:model.PostCellCharactersRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postCellCharacters.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of worksheet columns.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetColumnsRequest" /></param>
    public async getWorksheetColumns(requestObj:model.GetWorksheetColumnsRequest ): Promise<{response: http.ClientResponse, body: model.ColumnsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetColumns.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ColumnsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Set worksheet column width.
    /// </summary>
    /// <param name="request">Request. <see cref="PostSetWorksheetColumnWidthRequest" /></param>
    public async postSetWorksheetColumnWidth(requestObj:model.PostSetWorksheetColumnWidthRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSetWorksheetColumnWidth.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve worksheet column data by column index.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetColumnRequest" /></param>
    public async getWorksheetColumn(requestObj:model.GetWorksheetColumnRequest ): Promise<{response: http.ClientResponse, body: model.ColumnResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetColumn.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ColumnResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Insert worksheet columns in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutInsertWorksheetColumnsRequest" /></param>
    public async putInsertWorksheetColumns(requestObj:model.PutInsertWorksheetColumnsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putInsertWorksheetColumns.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete worksheet columns in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetColumnsRequest" /></param>
    public async deleteWorksheetColumns(requestObj:model.DeleteWorksheetColumnsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetColumns.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Hide worksheet columns in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostHideWorksheetColumnsRequest" /></param>
    public async postHideWorksheetColumns(requestObj:model.PostHideWorksheetColumnsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postHideWorksheetColumns.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Unhide worksheet columns in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostUnhideWorksheetColumnsRequest" /></param>
    public async postUnhideWorksheetColumns(requestObj:model.PostUnhideWorksheetColumnsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postUnhideWorksheetColumns.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Group worksheet columns in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostGroupWorksheetColumnsRequest" /></param>
    public async postGroupWorksheetColumns(requestObj:model.PostGroupWorksheetColumnsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postGroupWorksheetColumns.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Ungroup worksheet columns.
    /// </summary>
    /// <param name="request">Request. <see cref="PostUngroupWorksheetColumnsRequest" /></param>
    public async postUngroupWorksheetColumns(requestObj:model.PostUngroupWorksheetColumnsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postUngroupWorksheetColumns.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Copy data from source columns to destination columns in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostCopyWorksheetColumnsRequest" /></param>
    public async postCopyWorksheetColumns(requestObj:model.PostCopyWorksheetColumnsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postCopyWorksheetColumns.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Set column style in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostColumnStyleRequest" /></param>
    public async postColumnStyle(requestObj:model.PostColumnStyleRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postColumnStyle.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of rows in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetRowsRequest" /></param>
    public async getWorksheetRows(requestObj:model.GetWorksheetRowsRequest ): Promise<{response: http.ClientResponse, body: model.RowsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetRows.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RowsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve row data by the row's index in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetRowRequest" /></param>
    public async getWorksheetRow(requestObj:model.GetWorksheetRowRequest ): Promise<{response: http.ClientResponse, body: model.RowResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetRow.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RowResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete a row in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetRowRequest" /></param>
    public async deleteWorksheetRow(requestObj:model.DeleteWorksheetRowRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetRow.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete several rows in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetRowsRequest" /></param>
    public async deleteWorksheetRows(requestObj:model.DeleteWorksheetRowsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetRows.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Insert several new rows in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutInsertWorksheetRowsRequest" /></param>
    public async putInsertWorksheetRows(requestObj:model.PutInsertWorksheetRowsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putInsertWorksheetRows.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Insert a new row in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutInsertWorksheetRowRequest" /></param>
    public async putInsertWorksheetRow(requestObj:model.PutInsertWorksheetRowRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putInsertWorksheetRow.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update height of rows in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostUpdateWorksheetRowRequest" /></param>
    public async postUpdateWorksheetRow(requestObj:model.PostUpdateWorksheetRowRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postUpdateWorksheetRow.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Hide rows in worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostHideWorksheetRowsRequest" /></param>
    public async postHideWorksheetRows(requestObj:model.PostHideWorksheetRowsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postHideWorksheetRows.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Unhide rows in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostUnhideWorksheetRowsRequest" /></param>
    public async postUnhideWorksheetRows(requestObj:model.PostUnhideWorksheetRowsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postUnhideWorksheetRows.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Group rows in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostGroupWorksheetRowsRequest" /></param>
    public async postGroupWorksheetRows(requestObj:model.PostGroupWorksheetRowsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postGroupWorksheetRows.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Ungroup rows in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostUngroupWorksheetRowsRequest" /></param>
    public async postUngroupWorksheetRows(requestObj:model.PostUngroupWorksheetRowsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postUngroupWorksheetRows.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Copy data and formats from specific entire rows in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostCopyWorksheetRowsRequest" /></param>
    public async postCopyWorksheetRows(requestObj:model.PostCopyWorksheetRowsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postCopyWorksheetRows.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Apply formats to an entire row in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostRowStyleRequest" /></param>
    public async postRowStyle(requestObj:model.PostRowStyleRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postRowStyle.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve cell descriptions in a specified format.
    /// </summary>
    /// <param name="request">Request. <see cref="GetCellsCloudServicesHealthCheckRequest" /></param>
    public async getCellsCloudServicesHealthCheck(requestObj:model.GetCellsCloudServicesHealthCheckRequest ): Promise<{response: http.ClientResponse, body: string}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getCellsCloudServicesHealthCheck.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "string");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Aspose.Cells Cloud service health status check.
    /// </summary>
    /// <param name="request">Request. <see cref="GetCellsCloudServiceStatusRequest" /></param>
    public async getCellsCloudServiceStatus(requestObj:model.GetCellsCloudServiceStatusRequest ): Promise<{response: http.ClientResponse, body: string}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getCellsCloudServiceStatus.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "string");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve chart area description in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetChartAreaRequest" /></param>
    public async getChartArea(requestObj:model.GetChartAreaRequest ): Promise<{response: http.ClientResponse, body: model.ChartAreaResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getChartArea.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ChartAreaResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve chart area fill format description in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetChartAreaFillFormatRequest" /></param>
    public async getChartAreaFillFormat(requestObj:model.GetChartAreaFillFormatRequest ): Promise<{response: http.ClientResponse, body: model.FillFormatResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getChartAreaFillFormat.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FillFormatResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve chart area border description.
    /// </summary>
    /// <param name="request">Request. <see cref="GetChartAreaBorderRequest" /></param>
    public async getChartAreaBorder(requestObj:model.GetChartAreaBorderRequest ): Promise<{response: http.ClientResponse, body: model.LineResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getChartAreaBorder.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "LineResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of charts in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetChartsRequest" /></param>
    public async getWorksheetCharts(requestObj:model.GetWorksheetChartsRequest ): Promise<{response: http.ClientResponse, body: model.ChartsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetCharts.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ChartsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve the chart in a specified format.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetChartRequest" /></param>
    public async getWorksheetChart(requestObj:model.GetWorksheetChartRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetChart.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add a new chart in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetChartRequest" /></param>
    public async putWorksheetChart(requestObj:model.PutWorksheetChartRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetChart.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete a chart by index in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetChartRequest" /></param>
    public async deleteWorksheetChart(requestObj:model.DeleteWorksheetChartRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetChart.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update chart properties in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetChartRequest" /></param>
    public async postWorksheetChart(requestObj:model.PostWorksheetChartRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetChart.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve chart legend description in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetChartLegendRequest" /></param>
    public async getWorksheetChartLegend(requestObj:model.GetWorksheetChartLegendRequest ): Promise<{response: http.ClientResponse, body: model.LegendResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetChartLegend.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "LegendResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update chart legend in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetChartLegendRequest" /></param>
    public async postWorksheetChartLegend(requestObj:model.PostWorksheetChartLegendRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetChartLegend.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Show chart legend in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetChartLegendRequest" /></param>
    public async putWorksheetChartLegend(requestObj:model.PutWorksheetChartLegendRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetChartLegend.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Hides chart legend in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetChartLegendRequest" /></param>
    public async deleteWorksheetChartLegend(requestObj:model.DeleteWorksheetChartLegendRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetChartLegend.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Clear the charts in the worksheets.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetChartsRequest" /></param>
    public async deleteWorksheetCharts(requestObj:model.DeleteWorksheetChartsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetCharts.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve chart title description in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetChartTitleRequest" /></param>
    public async getWorksheetChartTitle(requestObj:model.GetWorksheetChartTitleRequest ): Promise<{response: http.ClientResponse, body: model.TitleResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetChartTitle.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TitleResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update chart title in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetChartTitleRequest" /></param>
    public async postWorksheetChartTitle(requestObj:model.PostWorksheetChartTitleRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetChartTitle.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Set chart title in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetChartTitleRequest" /></param>
    public async putWorksheetChartTitle(requestObj:model.PutWorksheetChartTitleRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetChartTitle.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Hide chart title in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetChartTitleRequest" /></param>
    public async deleteWorksheetChartTitle(requestObj:model.DeleteWorksheetChartTitleRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetChartTitle.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of chart seriesaxis in the chart.
    /// </summary>
    /// <param name="request">Request. <see cref="GetChartSeriesAxisRequest" /></param>
    public async getChartSeriesAxis(requestObj:model.GetChartSeriesAxisRequest ): Promise<{response: http.ClientResponse, body: model.AxisResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getChartSeriesAxis.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AxisResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of chart series axis in the chart.
    /// </summary>
    /// <param name="request">Request. <see cref="GetChartCategoryAxisRequest" /></param>
    public async getChartCategoryAxis(requestObj:model.GetChartCategoryAxisRequest ): Promise<{response: http.ClientResponse, body: model.AxisResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getChartCategoryAxis.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AxisResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve chart value axis in the chart.
    /// </summary>
    /// <param name="request">Request. <see cref="GetChartValueAxisRequest" /></param>
    public async getChartValueAxis(requestObj:model.GetChartValueAxisRequest ): Promise<{response: http.ClientResponse, body: model.AxisResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getChartValueAxis.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AxisResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve chart second category axis in the chart
    /// </summary>
    /// <param name="request">Request. <see cref="GetChartSecondCategoryAxisRequest" /></param>
    public async getChartSecondCategoryAxis(requestObj:model.GetChartSecondCategoryAxisRequest ): Promise<{response: http.ClientResponse, body: model.AxisResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getChartSecondCategoryAxis.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AxisResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve chart second value axis in the chart.
    /// </summary>
    /// <param name="request">Request. <see cref="GetChartSecondValueAxisRequest" /></param>
    public async getChartSecondValueAxis(requestObj:model.GetChartSecondValueAxisRequest ): Promise<{response: http.ClientResponse, body: model.AxisResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getChartSecondValueAxis.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AxisResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update chart series axis in the chart.
    /// </summary>
    /// <param name="request">Request. <see cref="PostChartSeriesAxisRequest" /></param>
    public async postChartSeriesAxis(requestObj:model.PostChartSeriesAxisRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postChartSeriesAxis.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update chart category axis in the chart.
    /// </summary>
    /// <param name="request">Request. <see cref="PostChartCategoryAxisRequest" /></param>
    public async postChartCategoryAxis(requestObj:model.PostChartCategoryAxisRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postChartCategoryAxis.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update chart value axis in the chart.
    /// </summary>
    /// <param name="request">Request. <see cref="PostChartValueAxisRequest" /></param>
    public async postChartValueAxis(requestObj:model.PostChartValueAxisRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postChartValueAxis.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update chart sencond category axis in the chart.
    /// </summary>
    /// <param name="request">Request. <see cref="PostChartSecondCategoryAxisRequest" /></param>
    public async postChartSecondCategoryAxis(requestObj:model.PostChartSecondCategoryAxisRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postChartSecondCategoryAxis.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update chart sencond value axis in the chart.
    /// </summary>
    /// <param name="request">Request. <see cref="PostChartSecondValueAxisRequest" /></param>
    public async postChartSecondValueAxis(requestObj:model.PostChartSecondValueAxisRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postChartSecondValueAxis.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of conditional formattings in a worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetConditionalFormattingsRequest" /></param>
    public async getWorksheetConditionalFormattings(requestObj:model.GetWorksheetConditionalFormattingsRequest ): Promise<{response: http.ClientResponse, body: model.ConditionalFormattingsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetConditionalFormattings.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ConditionalFormattingsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve conditional formatting descriptions in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetConditionalFormattingRequest" /></param>
    public async getWorksheetConditionalFormatting(requestObj:model.GetWorksheetConditionalFormattingRequest ): Promise<{response: http.ClientResponse, body: model.ConditionalFormattingResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetConditionalFormatting.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ConditionalFormattingResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add conditional formatting in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetConditionalFormattingRequest" /></param>
    public async putWorksheetConditionalFormatting(requestObj:model.PutWorksheetConditionalFormattingRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetConditionalFormatting.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add a format condition in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetFormatConditionRequest" /></param>
    public async putWorksheetFormatCondition(requestObj:model.PutWorksheetFormatConditionRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetFormatCondition.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add a cell area for the format condition in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetFormatConditionAreaRequest" /></param>
    public async putWorksheetFormatConditionArea(requestObj:model.PutWorksheetFormatConditionAreaRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetFormatConditionArea.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add a condition for the format condition in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetFormatConditionConditionRequest" /></param>
    public async putWorksheetFormatConditionCondition(requestObj:model.PutWorksheetFormatConditionConditionRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetFormatConditionCondition.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Clear all conditional formattings in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetConditionalFormattingsRequest" /></param>
    public async deleteWorksheetConditionalFormattings(requestObj:model.DeleteWorksheetConditionalFormattingsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetConditionalFormattings.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Remove a conditional formatting.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetConditionalFormattingRequest" /></param>
    public async deleteWorksheetConditionalFormatting(requestObj:model.DeleteWorksheetConditionalFormattingRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetConditionalFormatting.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Remove cell area from conditional formatting.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetConditionalFormattingAreaRequest" /></param>
    public async deleteWorksheetConditionalFormattingArea(requestObj:model.DeleteWorksheetConditionalFormattingAreaRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetConditionalFormattingArea.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve workbooks in various formats.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorkbookRequest" /></param>
    public async getWorkbook(requestObj:model.GetWorkbookRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorkbook.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Convert the workbook from the requested content into files in different formats.
    /// </summary>
    /// <param name="request">Request. <see cref="PutConvertWorkbookRequest" /></param>
    public async putConvertWorkbook(requestObj:model.PutConvertWorkbookRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putConvertWorkbook.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Save an Excel file in various formats.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorkbookSaveAsRequest" /></param>
    public async postWorkbookSaveAs(requestObj:model.PostWorkbookSaveAsRequest ): Promise<{response: http.ClientResponse, body: model.SaveResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorkbookSaveAs.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SaveResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Convert Excel file to PDF files.
    /// </summary>
    /// <param name="request">Request. <see cref="PostConvertWorkbookToPDFRequest" /></param>
    public async postConvertWorkbookToPDF(requestObj:model.PostConvertWorkbookToPDFRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postConvertWorkbookToPDF.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Convert Excel file to PNG files.
    /// </summary>
    /// <param name="request">Request. <see cref="PostConvertWorkbookToPNGRequest" /></param>
    public async postConvertWorkbookToPNG(requestObj:model.PostConvertWorkbookToPNGRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postConvertWorkbookToPNG.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Convert Excel file to Docx files.
    /// </summary>
    /// <param name="request">Request. <see cref="PostConvertWorkbookToDocxRequest" /></param>
    public async postConvertWorkbookToDocx(requestObj:model.PostConvertWorkbookToDocxRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postConvertWorkbookToDocx.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Convert Excel file to Pptx files.
    /// </summary>
    /// <param name="request">Request. <see cref="PostConvertWorkbookToPptxRequest" /></param>
    public async postConvertWorkbookToPptx(requestObj:model.PostConvertWorkbookToPptxRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postConvertWorkbookToPptx.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Convert Excel file to HTML files.
    /// </summary>
    /// <param name="request">Request. <see cref="PostConvertWorkbookToHtmlRequest" /></param>
    public async postConvertWorkbookToHtml(requestObj:model.PostConvertWorkbookToHtmlRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postConvertWorkbookToHtml.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Convert Excel file to Markdown files.
    /// </summary>
    /// <param name="request">Request. <see cref="PostConvertWorkbookToMarkdownRequest" /></param>
    public async postConvertWorkbookToMarkdown(requestObj:model.PostConvertWorkbookToMarkdownRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postConvertWorkbookToMarkdown.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Convert Excel file to Json files.
    /// </summary>
    /// <param name="request">Request. <see cref="PostConvertWorkbookToJsonRequest" /></param>
    public async postConvertWorkbookToJson(requestObj:model.PostConvertWorkbookToJsonRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postConvertWorkbookToJson.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Convert Excel file to SQL Script files.
    /// </summary>
    /// <param name="request">Request. <see cref="PostConvertWorkbookToSQLRequest" /></param>
    public async postConvertWorkbookToSQL(requestObj:model.PostConvertWorkbookToSQLRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postConvertWorkbookToSQL.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Convert Excel file to Csv files.
    /// </summary>
    /// <param name="request">Request. <see cref="PostConvertWorkbookToCSVRequest" /></param>
    public async postConvertWorkbookToCSV(requestObj:model.PostConvertWorkbookToCSVRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postConvertWorkbookToCSV.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="PostConvertWorksheetToImageRequest" /></param>
    public async postConvertWorksheetToImage(requestObj:model.PostConvertWorksheetToImageRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postConvertWorksheetToImage.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="PostConvertWorkbookRequest" /></param>
    public async postConvertWorkbook(requestObj:model.PostConvertWorkbookRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postConvertWorkbook.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Export Excel internal elements or the workbook itself to various format files.
    /// </summary>
    /// <param name="request">Request. <see cref="CheckWrokbookExternalReferenceRequest" /></param>
    public async checkWrokbookExternalReference(requestObj:model.CheckWrokbookExternalReferenceRequest ): Promise<{response: http.ClientResponse, body: model.CheckedExternalReferenceResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling checkWrokbookExternalReference.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CheckedExternalReferenceResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="CheckWorkbookFormulaErrorsRequest" /></param>
    public async checkWorkbookFormulaErrors(requestObj:model.CheckWorkbookFormulaErrorsRequest ): Promise<{response: http.ClientResponse, body: model.CheckedFormulaErrorsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling checkWorkbookFormulaErrors.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CheckedFormulaErrorsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Export Excel internal elements or the workbook itself to various format files.
    /// </summary>
    /// <param name="request">Request. <see cref="PostExportRequest" /></param>
    public async postExport(requestObj:model.PostExportRequest ): Promise<{response: http.ClientResponse, body: model.FilesResult}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postExport.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Export XML data from an Excel file.
    /// When there are XML Maps in an Excel file, export XML data. When there is no XML map in the Excel file, convert the Excel file to an XML file.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorkbookExportXMLRequest" /></param>
    public async postWorkbookExportXML(requestObj:model.PostWorkbookExportXMLRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorkbookExportXML.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Import a JSON data file into the workbook. The JSON data file can either be a cloud file or data from an HTTP URI.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorkbookImportJsonRequest" /></param>
    public async postWorkbookImportJson(requestObj:model.PostWorkbookImportJsonRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorkbookImportJson.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Import an XML data file into an Excel file. The XML data file can either be a cloud file or data from an HTTP URI.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorkbookImportXMLRequest" /></param>
    public async postWorkbookImportXML(requestObj:model.PostWorkbookImportXMLRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorkbookImportXML.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Import data into the Excel file.
    /// </summary>
    /// <param name="request">Request. <see cref="PostImportDataRequest" /></param>
    public async postImportData(requestObj:model.PostImportDataRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImportData.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Data cleaning of spreadsheet files is a data management process used to identify, correct, and remove errors, incompleteness, duplicates, or inaccuracies in tables and ranges.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorkbookDataCleansingRequest" /></param>
    public async postWorkbookDataCleansing(requestObj:model.PostWorkbookDataCleansingRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorkbookDataCleansing.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Data cleansing of spreadsheet files is a data management process used to identify, correct, and remove errors, incompleteness, duplicates, or inaccuracies in tables and ranges.
    /// </summary>
    /// <param name="request">Request. <see cref="PostDataCleansingRequest" /></param>
    public async postDataCleansing(requestObj:model.PostDataCleansingRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDataCleansing.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Data deduplication of spreadsheet files is mainly used to eliminate duplicate data in tables and ranges.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorkbookDataDeduplicationRequest" /></param>
    public async postWorkbookDataDeduplication(requestObj:model.PostWorkbookDataDeduplicationRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorkbookDataDeduplication.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Data deduplication of spreadsheet files is mainly used to eliminate duplicate data in tables and ranges.
    /// </summary>
    /// <param name="request">Request. <see cref="PostDataDeduplicationRequest" /></param>
    public async postDataDeduplication(requestObj:model.PostDataDeduplicationRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDataDeduplication.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Data filling for spreadsheet files is primarily used to fill empty data in tables and ranges.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorkbookDataFillRequest" /></param>
    public async postWorkbookDataFill(requestObj:model.PostWorkbookDataFillRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorkbookDataFill.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Data filling for spreadsheet files is primarily used to fill empty data in tables and ranges.
    /// </summary>
    /// <param name="request">Request. <see cref="PostDataFillRequest" /></param>
    public async postDataFill(requestObj:model.PostDataFillRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDataFill.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Deleting incomplete rows of spreadsheet files is mainly used to eliminate incomplete rows in tables and ranges.
    /// </summary>
    /// <param name="request">Request. <see cref="PostDeleteIncompleteRowsRequest" /></param>
    public async postDeleteIncompleteRows(requestObj:model.PostDeleteIncompleteRowsRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDeleteIncompleteRows.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Transform spreadsheet data is mainly used to pivot columns, unpivot columns.
    /// </summary>
    /// <param name="request">Request. <see cref="PostDataTransformationRequest" /></param>
    public async postDataTransformation(requestObj:model.PostDataTransformationRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDataTransformation.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of hyperlinks in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetHyperlinksRequest" /></param>
    public async getWorksheetHyperlinks(requestObj:model.GetWorksheetHyperlinksRequest ): Promise<{response: http.ClientResponse, body: model.HyperlinksResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetHyperlinks.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "HyperlinksResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve hyperlink description by index in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetHyperlinkRequest" /></param>
    public async getWorksheetHyperlink(requestObj:model.GetWorksheetHyperlinkRequest ): Promise<{response: http.ClientResponse, body: model.HyperlinkResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetHyperlink.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "HyperlinkResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete hyperlink by index in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetHyperlinkRequest" /></param>
    public async deleteWorksheetHyperlink(requestObj:model.DeleteWorksheetHyperlinkRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetHyperlink.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update hyperlink by index in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetHyperlinkRequest" /></param>
    public async postWorksheetHyperlink(requestObj:model.PostWorksheetHyperlinkRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetHyperlink.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add hyperlink in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetHyperlinkRequest" /></param>
    public async putWorksheetHyperlink(requestObj:model.PutWorksheetHyperlinkRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetHyperlink.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete all hyperlinks in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetHyperlinksRequest" /></param>
    public async deleteWorksheetHyperlinks(requestObj:model.DeleteWorksheetHyperlinksRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetHyperlinks.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Assemble data files with template files to generate files in various formats.
    /// </summary>
    /// <param name="request">Request. <see cref="PostAssembleRequest" /></param>
    public async postAssemble(requestObj:model.PostAssembleRequest ): Promise<{response: http.ClientResponse, body: model.FilesResult}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postAssemble.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Compress files and generate target files in various formats, supported file formats are include Xls, Xlsx, Xlsm, Xlsb, Ods and more.
    /// </summary>
    /// <param name="request">Request. <see cref="PostCompressRequest" /></param>
    public async postCompress(requestObj:model.PostCompressRequest ): Promise<{response: http.ClientResponse, body: model.FilesResult}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postCompress.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Merge cells in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostMergeRequest" /></param>
    public async postMerge(requestObj:model.PostMergeRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postMerge.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Split Excel spreadsheet files based on worksheets and create output files in various formats.
    /// </summary>
    /// <param name="request">Request. <see cref="PostSplitRequest" /></param>
    public async postSplit(requestObj:model.PostSplitRequest ): Promise<{response: http.ClientResponse, body: model.FilesResult}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSplit.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Search for specified text within Excel files.
    /// </summary>
    /// <param name="request">Request. <see cref="PostSearchRequest" /></param>
    public async postSearch(requestObj:model.PostSearchRequest ): Promise<{response: http.ClientResponse, body: Array<model.TextItem>}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSearch.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Array<TextItem>");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Replace specified text with new text in Excel files.
    /// </summary>
    /// <param name="request">Request. <see cref="PostReplaceRequest" /></param>
    public async postReplace(requestObj:model.PostReplaceRequest ): Promise<{response: http.ClientResponse, body: model.FilesResult}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postReplace.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Import data into an Excel file and generate output files in various formats.
    /// </summary>
    /// <param name="request">Request. <see cref="PostImportRequest" /></param>
    public async postImport(requestObj:model.PostImportRequest ): Promise<{response: http.ClientResponse, body: model.FilesResult}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImport.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add Text Watermark to Excel files and generate output files in various formats.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWatermarkRequest" /></param>
    public async postWatermark(requestObj:model.PostWatermarkRequest ): Promise<{response: http.ClientResponse, body: model.FilesResult}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWatermark.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Clear internal elements in Excel files and generate output files in various formats.
    /// </summary>
    /// <param name="request">Request. <see cref="PostClearObjectsRequest" /></param>
    public async postClearObjects(requestObj:model.PostClearObjectsRequest ): Promise<{response: http.ClientResponse, body: model.FilesResult}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postClearObjects.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Reverse rows or columns in Excel files and create output files in various formats.
    /// </summary>
    /// <param name="request">Request. <see cref="PostReverseRequest" /></param>
    public async postReverse(requestObj:model.PostReverseRequest ): Promise<{response: http.ClientResponse, body: model.FilesResult}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postReverse.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Repair abnormal files and generate files in various formats.
    /// </summary>
    /// <param name="request">Request. <see cref="PostRepairRequest" /></param>
    public async postRepair(requestObj:model.PostRepairRequest ): Promise<{response: http.ClientResponse, body: model.FilesResult}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postRepair.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Rotate rows, columns, or other objects in Excel files and save them in various formats.
    /// </summary>
    /// <param name="request">Request. <see cref="PostRotateRequest" /></param>
    public async postRotate(requestObj:model.PostRotateRequest ): Promise<{response: http.ClientResponse, body: model.FilesResult}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postRotate.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update document properties in Excel file, and save them is various formats.
    /// </summary>
    /// <param name="request">Request. <see cref="PostMetadataRequest" /></param>
    public async postMetadata(requestObj:model.PostMetadataRequest ): Promise<{response: http.ClientResponse, body: model.FilesResult}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postMetadata.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Get cells document properties.
    /// </summary>
    /// <param name="request">Request. <see cref="GetMetadataRequest" /></param>
    public async getMetadata(requestObj:model.GetMetadataRequest ): Promise<{response: http.ClientResponse, body: Array<model.CellsDocumentProperty>}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getMetadata.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Array<CellsDocumentProperty>");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete cells document properties in Excel file, and save them is various formats.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteMetadataRequest" /></param>
    public async deleteMetadata(requestObj:model.DeleteMetadataRequest ): Promise<{response: http.ClientResponse, body: model.FilesResult}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteMetadata.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of ListObjects in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetListObjectsRequest" /></param>
    public async getWorksheetListObjects(requestObj:model.GetWorksheetListObjectsRequest ): Promise<{response: http.ClientResponse, body: model.ListObjectsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetListObjects.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ListObjectsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve list object description by index in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetListObjectRequest" /></param>
    public async getWorksheetListObject(requestObj:model.GetWorksheetListObjectRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetListObject.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add a ListObject in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetListObjectRequest" /></param>
    public async putWorksheetListObject(requestObj:model.PutWorksheetListObjectRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetListObject.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete ListObjects in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetListObjectsRequest" /></param>
    public async deleteWorksheetListObjects(requestObj:model.DeleteWorksheetListObjectsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetListObjects.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete list object by index in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetListObjectRequest" /></param>
    public async deleteWorksheetListObject(requestObj:model.DeleteWorksheetListObjectRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetListObject.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update list object by index in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetListObjectRequest" /></param>
    public async postWorksheetListObject(requestObj:model.PostWorksheetListObjectRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetListObject.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Convert list object to range in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetListObjectConvertToRangeRequest" /></param>
    public async postWorksheetListObjectConvertToRange(requestObj:model.PostWorksheetListObjectConvertToRangeRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetListObjectConvertToRange.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Create a pivot table with a list object in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetListObjectSummarizeWithPivotTableRequest" /></param>
    public async postWorksheetListObjectSummarizeWithPivotTable(requestObj:model.PostWorksheetListObjectSummarizeWithPivotTableRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetListObjectSummarizeWithPivotTable.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Sort list object in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetListObjectSortTableRequest" /></param>
    public async postWorksheetListObjectSortTable(requestObj:model.PostWorksheetListObjectSortTableRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetListObjectSortTable.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Remove duplicates in list object.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetListObjectRemoveDuplicatesRequest" /></param>
    public async postWorksheetListObjectRemoveDuplicates(requestObj:model.PostWorksheetListObjectRemoveDuplicatesRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetListObjectRemoveDuplicates.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Insert slicer for list object.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetListObjectInsertSlicerRequest" /></param>
    public async postWorksheetListObjectInsertSlicer(requestObj:model.PostWorksheetListObjectInsertSlicerRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetListObjectInsertSlicer.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update list column in list object.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetListColumnRequest" /></param>
    public async postWorksheetListColumn(requestObj:model.PostWorksheetListColumnRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetListColumn.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update total of list columns in the table.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetListColumnsTotalRequest" /></param>
    public async postWorksheetListColumnsTotal(requestObj:model.PostWorksheetListColumnsTotalRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetListColumnsTotal.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of OLE objects in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetOleObjectsRequest" /></param>
    public async getWorksheetOleObjects(requestObj:model.GetWorksheetOleObjectsRequest ): Promise<{response: http.ClientResponse, body: model.OleObjectsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetOleObjects.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "OleObjectsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve the OLE object in a specified format in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetOleObjectRequest" /></param>
    public async getWorksheetOleObject(requestObj:model.GetWorksheetOleObjectRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetOleObject.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete all OLE objects in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetOleObjectsRequest" /></param>
    public async deleteWorksheetOleObjects(requestObj:model.DeleteWorksheetOleObjectsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetOleObjects.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete an OLE object in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetOleObjectRequest" /></param>
    public async deleteWorksheetOleObject(requestObj:model.DeleteWorksheetOleObjectRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetOleObject.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update an OLE object in worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostUpdateWorksheetOleObjectRequest" /></param>
    public async postUpdateWorksheetOleObject(requestObj:model.PostUpdateWorksheetOleObjectRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postUpdateWorksheetOleObject.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add an OLE object in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetOleObjectRequest" /></param>
    public async putWorksheetOleObject(requestObj:model.PutWorksheetOleObjectRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetOleObject.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of vertical page breaks in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetVerticalPageBreaksRequest" /></param>
    public async getVerticalPageBreaks(requestObj:model.GetVerticalPageBreaksRequest ): Promise<{response: http.ClientResponse, body: model.VerticalPageBreaksResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getVerticalPageBreaks.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "VerticalPageBreaksResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of horizontal page breaks in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetHorizontalPageBreaksRequest" /></param>
    public async getHorizontalPageBreaks(requestObj:model.GetHorizontalPageBreaksRequest ): Promise<{response: http.ClientResponse, body: model.HorizontalPageBreaksResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHorizontalPageBreaks.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "HorizontalPageBreaksResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve a vertical page break description in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetVerticalPageBreakRequest" /></param>
    public async getVerticalPageBreak(requestObj:model.GetVerticalPageBreakRequest ): Promise<{response: http.ClientResponse, body: model.VerticalPageBreakResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getVerticalPageBreak.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "VerticalPageBreakResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve a horizontal page break descripton in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetHorizontalPageBreakRequest" /></param>
    public async getHorizontalPageBreak(requestObj:model.GetHorizontalPageBreakRequest ): Promise<{response: http.ClientResponse, body: model.HorizontalPageBreakResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHorizontalPageBreak.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "HorizontalPageBreakResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add a vertical page break in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutVerticalPageBreakRequest" /></param>
    public async putVerticalPageBreak(requestObj:model.PutVerticalPageBreakRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putVerticalPageBreak.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add a horizontal page breaks in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutHorizontalPageBreakRequest" /></param>
    public async putHorizontalPageBreak(requestObj:model.PutHorizontalPageBreakRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putHorizontalPageBreak.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete vertical page breaks in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteVerticalPageBreaksRequest" /></param>
    public async deleteVerticalPageBreaks(requestObj:model.DeleteVerticalPageBreaksRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteVerticalPageBreaks.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete horizontal page breaks in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteHorizontalPageBreaksRequest" /></param>
    public async deleteHorizontalPageBreaks(requestObj:model.DeleteHorizontalPageBreaksRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteHorizontalPageBreaks.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete a vertical page break in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteVerticalPageBreakRequest" /></param>
    public async deleteVerticalPageBreak(requestObj:model.DeleteVerticalPageBreakRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteVerticalPageBreak.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete a horizontal page break in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteHorizontalPageBreakRequest" /></param>
    public async deleteHorizontalPageBreak(requestObj:model.DeleteHorizontalPageBreakRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteHorizontalPageBreak.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve page setup description in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetPageSetupRequest" /></param>
    public async getPageSetup(requestObj:model.GetPageSetupRequest ): Promise<{response: http.ClientResponse, body: model.PageSetupResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getPageSetup.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "PageSetupResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update page setup in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostPageSetupRequest" /></param>
    public async postPageSetup(requestObj:model.PostPageSetupRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postPageSetup.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Clear header and footer in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteHeaderFooterRequest" /></param>
    public async deleteHeaderFooter(requestObj:model.DeleteHeaderFooterRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteHeaderFooter.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve page header description in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetHeaderRequest" /></param>
    public async getHeader(requestObj:model.GetHeaderRequest ): Promise<{response: http.ClientResponse, body: model.PageSectionsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHeader.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "PageSectionsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update page header in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostHeaderRequest" /></param>
    public async postHeader(requestObj:model.PostHeaderRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postHeader.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve page footer description in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetFooterRequest" /></param>
    public async getFooter(requestObj:model.GetFooterRequest ): Promise<{response: http.ClientResponse, body: model.PageSectionsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFooter.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "PageSectionsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update page footer in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostFooterRequest" /></param>
    public async postFooter(requestObj:model.PostFooterRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postFooter.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Set the scale at which the page will fit wide when printed on the sheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostFitWideToPagesRequest" /></param>
    public async postFitWideToPages(requestObj:model.PostFitWideToPagesRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postFitWideToPages.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Set the scale at which the page will fit tall when printed on the sheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostFitTallToPagesRequest" /></param>
    public async postFitTallToPages(requestObj:model.PostFitTallToPagesRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postFitTallToPages.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of pictures in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetPicturesRequest" /></param>
    public async getWorksheetPictures(requestObj:model.GetWorksheetPicturesRequest ): Promise<{response: http.ClientResponse, body: model.PicturesResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetPictures.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "PicturesResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve a picture by number in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetPictureWithFormatRequest" /></param>
    public async getWorksheetPictureWithFormat(requestObj:model.GetWorksheetPictureWithFormatRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetPictureWithFormat.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add a new picture in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetAddPictureRequest" /></param>
    public async putWorksheetAddPicture(requestObj:model.PutWorksheetAddPictureRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetAddPicture.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// add new picture in the cells.
    /// </summary>
    /// <param name="request">Request. <see cref="AddPictureInCellRequest" /></param>
    public async addPictureInCell(requestObj:model.AddPictureInCellRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling addPictureInCell.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update a picture by index in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetPictureRequest" /></param>
    public async postWorksheetPicture(requestObj:model.PostWorksheetPictureRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetPicture.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete a picture object by index in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetPictureRequest" /></param>
    public async deleteWorksheetPicture(requestObj:model.DeleteWorksheetPictureRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetPicture.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete all pictures in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetPicturesRequest" /></param>
    public async deleteWorksheetPictures(requestObj:model.DeleteWorksheetPicturesRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetPictures.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of pivottables  in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetPivotTablesRequest" /></param>
    public async getWorksheetPivotTables(requestObj:model.GetWorksheetPivotTablesRequest ): Promise<{response: http.ClientResponse, body: model.PivotTablesResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetPivotTables.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "PivotTablesResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve PivotTable information by index in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetPivotTableRequest" /></param>
    public async getWorksheetPivotTable(requestObj:model.GetWorksheetPivotTableRequest ): Promise<{response: http.ClientResponse, body: model.PivotTableResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetPivotTable.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "PivotTableResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of pivot fields in the PivotTable.
    /// </summary>
    /// <param name="request">Request. <see cref="GetPivotTableFieldRequest" /></param>
    public async getPivotTableField(requestObj:model.GetPivotTableFieldRequest ): Promise<{response: http.ClientResponse, body: model.PivotFieldResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getPivotTableField.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "PivotFieldResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Gets PivotTable filters in worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetPivotTableFiltersRequest" /></param>
    public async getWorksheetPivotTableFilters(requestObj:model.GetWorksheetPivotTableFiltersRequest ): Promise<{response: http.ClientResponse, body: model.PivotFiltersResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetPivotTableFilters.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "PivotFiltersResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve PivotTable filters in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetPivotTableFilterRequest" /></param>
    public async getWorksheetPivotTableFilter(requestObj:model.GetWorksheetPivotTableFilterRequest ): Promise<{response: http.ClientResponse, body: model.PivotFilterResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetPivotTableFilter.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "PivotFilterResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add a PivotTable in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetPivotTableRequest" /></param>
    public async putWorksheetPivotTable(requestObj:model.PutWorksheetPivotTableRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetPivotTable.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add a pivot field in the PivotTable.
    /// </summary>
    /// <param name="request">Request. <see cref="PutPivotTableFieldRequest" /></param>
    public async putPivotTableField(requestObj:model.PutPivotTableFieldRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putPivotTableField.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add a pivot filter to the PivotTable.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetPivotTableFilterRequest" /></param>
    public async putWorksheetPivotTableFilter(requestObj:model.PutWorksheetPivotTableFilterRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetPivotTableFilter.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Hide a pivot field item in the PivotTable.
    /// </summary>
    /// <param name="request">Request. <see cref="PostPivotTableFieldHideItemRequest" /></param>
    public async postPivotTableFieldHideItem(requestObj:model.PostPivotTableFieldHideItemRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postPivotTableFieldHideItem.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Move a pivot field in the PivotTable.
    /// </summary>
    /// <param name="request">Request. <see cref="PostPivotTableFieldMoveToRequest" /></param>
    public async postPivotTableFieldMoveTo(requestObj:model.PostPivotTableFieldMoveToRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postPivotTableFieldMoveTo.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update cell style in the PivotTable.
    /// </summary>
    /// <param name="request">Request. <see cref="PostPivotTableCellStyleRequest" /></param>
    public async postPivotTableCellStyle(requestObj:model.PostPivotTableCellStyleRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postPivotTableCellStyle.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update style in the PivotTable.
    /// </summary>
    /// <param name="request">Request. <see cref="PostPivotTableStyleRequest" /></param>
    public async postPivotTableStyle(requestObj:model.PostPivotTableStyleRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postPivotTableStyle.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update pivot fields in the PivotTable.
    /// </summary>
    /// <param name="request">Request. <see cref="PostPivotTableUpdatePivotFieldsRequest" /></param>
    public async postPivotTableUpdatePivotFields(requestObj:model.PostPivotTableUpdatePivotFieldsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postPivotTableUpdatePivotFields.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update pivot field in the PivotTable.
    /// </summary>
    /// <param name="request">Request. <see cref="PostPivotTableUpdatePivotFieldRequest" /></param>
    public async postPivotTableUpdatePivotField(requestObj:model.PostPivotTableUpdatePivotFieldRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postPivotTableUpdatePivotField.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Calculate pivottable's data to cells.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetPivotTableCalculateRequest" /></param>
    public async postWorksheetPivotTableCalculate(requestObj:model.PostWorksheetPivotTableCalculateRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetPivotTableCalculate.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Move PivotTable in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetPivotTableMoveRequest" /></param>
    public async postWorksheetPivotTableMove(requestObj:model.PostWorksheetPivotTableMoveRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetPivotTableMove.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete PivotTables in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetPivotTablesRequest" /></param>
    public async deleteWorksheetPivotTables(requestObj:model.DeleteWorksheetPivotTablesRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetPivotTables.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete PivotTable by index in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetPivotTableRequest" /></param>
    public async deleteWorksheetPivotTable(requestObj:model.DeleteWorksheetPivotTableRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetPivotTable.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete a pivot field in the PivotTable.
    /// </summary>
    /// <param name="request">Request. <see cref="DeletePivotTableFieldRequest" /></param>
    public async deletePivotTableField(requestObj:model.DeletePivotTableFieldRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deletePivotTableField.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete all pivot filters in the PivotTable.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetPivotTableFiltersRequest" /></param>
    public async deleteWorksheetPivotTableFilters(requestObj:model.DeleteWorksheetPivotTableFiltersRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetPivotTableFilters.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete a pivot filter in the PivotTable.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetPivotTableFilterRequest" /></param>
    public async deleteWorksheetPivotTableFilter(requestObj:model.DeleteWorksheetPivotTableFilterRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetPivotTableFilter.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of Excel file properties.
    /// </summary>
    /// <param name="request">Request. <see cref="GetDocumentPropertiesRequest" /></param>
    public async getDocumentProperties(requestObj:model.GetDocumentPropertiesRequest ): Promise<{response: http.ClientResponse, body: model.CellsDocumentPropertiesResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentProperties.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsDocumentPropertiesResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Set or add an Excel property.
    /// </summary>
    /// <param name="request">Request. <see cref="PutDocumentPropertyRequest" /></param>
    public async putDocumentProperty(requestObj:model.PutDocumentPropertyRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDocumentProperty.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Get Excel property by name.
    /// </summary>
    /// <param name="request">Request. <see cref="GetDocumentPropertyRequest" /></param>
    public async getDocumentProperty(requestObj:model.GetDocumentPropertyRequest ): Promise<{response: http.ClientResponse, body: model.CellsDocumentPropertyResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentProperty.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsDocumentPropertyResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete an Excel property.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteDocumentPropertyRequest" /></param>
    public async deleteDocumentProperty(requestObj:model.DeleteDocumentPropertyRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDocumentProperty.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete all custom document properties and reset built-in ones.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteDocumentPropertiesRequest" /></param>
    public async deleteDocumentProperties(requestObj:model.DeleteDocumentPropertiesRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDocumentProperties.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Excel file digital signature.
    /// </summary>
    /// <param name="request">Request. <see cref="PostDigitalSignatureRequest" /></param>
    public async postDigitalSignature(requestObj:model.PostDigitalSignatureRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDigitalSignature.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Excel Encryption.
    /// </summary>
    /// <param name="request">Request. <see cref="PostEncryptWorkbookRequest" /></param>
    public async postEncryptWorkbook(requestObj:model.PostEncryptWorkbookRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postEncryptWorkbook.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Excel files decryption.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteDecryptWorkbookRequest" /></param>
    public async deleteDecryptWorkbook(requestObj:model.DeleteDecryptWorkbookRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDecryptWorkbook.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Excel protection.
    /// </summary>
    /// <param name="request">Request. <see cref="PostProtectWorkbookRequest" /></param>
    public async postProtectWorkbook(requestObj:model.PostProtectWorkbookRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postProtectWorkbook.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Excel unprotection.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteUnProtectWorkbookRequest" /></param>
    public async deleteUnProtectWorkbook(requestObj:model.DeleteUnProtectWorkbookRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteUnProtectWorkbook.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Excel file write protection.
    /// </summary>
    /// <param name="request">Request. <see cref="PutDocumentProtectFromChangesRequest" /></param>
    public async putDocumentProtectFromChanges(requestObj:model.PutDocumentProtectFromChangesRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDocumentProtectFromChanges.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Excel file cancel write protection.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteDocumentUnProtectFromChangesRequest" /></param>
    public async deleteDocumentUnProtectFromChanges(requestObj:model.DeleteDocumentUnProtectFromChangesRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDocumentUnProtectFromChanges.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Unlock Excel files.
    /// </summary>
    /// <param name="request">Request. <see cref="PostUnlockRequest" /></param>
    public async postUnlock(requestObj:model.PostUnlockRequest ): Promise<{response: http.ClientResponse, body: model.FilesResult}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postUnlock.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Lock Excel files.
    /// </summary>
    /// <param name="request">Request. <see cref="PostLockRequest" /></param>
    public async postLock(requestObj:model.PostLockRequest ): Promise<{response: http.ClientResponse, body: model.FilesResult}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postLock.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Excel files encryption.
    /// </summary>
    /// <param name="request">Request. <see cref="PostProtectRequest" /></param>
    public async postProtect(requestObj:model.PostProtectRequest ): Promise<{response: http.ClientResponse, body: model.FilesResult}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postProtect.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Copy content from the source range to the destination range in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetCellsRangesCopyRequest" /></param>
    public async postWorksheetCellsRangesCopy(requestObj:model.PostWorksheetCellsRangesCopyRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetCellsRangesCopy.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Merge a range of cells into a single cell.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetCellsRangeMergeRequest" /></param>
    public async postWorksheetCellsRangeMerge(requestObj:model.PostWorksheetCellsRangeMergeRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetCellsRangeMerge.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Unmerge merged cells within this range.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetCellsRangeUnMergeRequest" /></param>
    public async postWorksheetCellsRangeUnMerge(requestObj:model.PostWorksheetCellsRangeUnMergeRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetCellsRangeUnMerge.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Set the style for the specified range.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetCellsRangeStyleRequest" /></param>
    public async postWorksheetCellsRangeStyle(requestObj:model.PostWorksheetCellsRangeStyleRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetCellsRangeStyle.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve the values of cells within the specified range.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetCellsRangeValueRequest" /></param>
    public async getWorksheetCellsRangeValue(requestObj:model.GetWorksheetCellsRangeValueRequest ): Promise<{response: http.ClientResponse, body: model.RangeValueResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetCellsRangeValue.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RangeValueResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Assign a value to the range; if necessary, the value will be converted to another data type, and the cell's number format will be reset.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetCellsRangeValueRequest" /></param>
    public async postWorksheetCellsRangeValue(requestObj:model.PostWorksheetCellsRangeValueRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetCellsRangeValue.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Move the current range to the destination range.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetCellsRangeMoveToRequest" /></param>
    public async postWorksheetCellsRangeMoveTo(requestObj:model.PostWorksheetCellsRangeMoveToRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetCellsRangeMoveTo.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Perform data sorting around a range of cells.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetCellsRangeSortRequest" /></param>
    public async postWorksheetCellsRangeSort(requestObj:model.PostWorksheetCellsRangeSortRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetCellsRangeSort.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Apply an outline border around a range of cells.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetCellsRangeOutlineBorderRequest" /></param>
    public async postWorksheetCellsRangeOutlineBorder(requestObj:model.PostWorksheetCellsRangeOutlineBorderRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetCellsRangeOutlineBorder.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Set the column width of the specified range.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetCellsRangeColumnWidthRequest" /></param>
    public async postWorksheetCellsRangeColumnWidth(requestObj:model.PostWorksheetCellsRangeColumnWidthRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetCellsRangeColumnWidth.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Sets row height of range.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetCellsRangeRowHeightRequest" /></param>
    public async postWorksheetCellsRangeRowHeight(requestObj:model.PostWorksheetCellsRangeRowHeightRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetCellsRangeRowHeight.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetCellsRangeToImageRequest" /></param>
    public async postWorksheetCellsRangeToImage(requestObj:model.PostWorksheetCellsRangeToImageRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetCellsRangeToImage.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Insert a range of cells and shift existing cells based on the specified shift option.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetCellsRangeRequest" /></param>
    public async putWorksheetCellsRange(requestObj:model.PutWorksheetCellsRangeRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetCellsRange.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete a range of cells and shift existing cells based on the specified shift option.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetCellsRangeRequest" /></param>
    public async deleteWorksheetCellsRange(requestObj:model.DeleteWorksheetCellsRangeRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetCellsRange.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of shapes in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetShapesRequest" /></param>
    public async getWorksheetShapes(requestObj:model.GetWorksheetShapesRequest ): Promise<{response: http.ClientResponse, body: model.ShapesResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetShapes.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ShapesResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve description of shape in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetShapeRequest" /></param>
    public async getWorksheetShape(requestObj:model.GetWorksheetShapeRequest ): Promise<{response: http.ClientResponse, body: model.ShapeResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetShape.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ShapeResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add a shape in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetShapeRequest" /></param>
    public async putWorksheetShape(requestObj:model.PutWorksheetShapeRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetShape.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete all shapes in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetShapesRequest" /></param>
    public async deleteWorksheetShapes(requestObj:model.DeleteWorksheetShapesRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetShapes.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete a shape in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetShapeRequest" /></param>
    public async deleteWorksheetShape(requestObj:model.DeleteWorksheetShapeRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetShape.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update a shape in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetShapeRequest" /></param>
    public async postWorksheetShape(requestObj:model.PostWorksheetShapeRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetShape.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Group shapes in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetGroupShapeRequest" /></param>
    public async postWorksheetGroupShape(requestObj:model.PostWorksheetGroupShapeRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetGroupShape.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Ungroup shapes in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetUngroupShapeRequest" /></param>
    public async postWorksheetUngroupShape(requestObj:model.PostWorksheetUngroupShapeRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetUngroupShape.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of sparkline groups in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetSparklineGroupsRequest" /></param>
    public async getWorksheetSparklineGroups(requestObj:model.GetWorksheetSparklineGroupsRequest ): Promise<{response: http.ClientResponse, body: model.SparklineGroupsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetSparklineGroups.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SparklineGroupsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve description of a sparkline group in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetSparklineGroupRequest" /></param>
    public async getWorksheetSparklineGroup(requestObj:model.GetWorksheetSparklineGroupRequest ): Promise<{response: http.ClientResponse, body: model.SparklineGroupResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetSparklineGroup.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SparklineGroupResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete sparkline groups in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetSparklineGroupsRequest" /></param>
    public async deleteWorksheetSparklineGroups(requestObj:model.DeleteWorksheetSparklineGroupsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetSparklineGroups.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete a sparkline group in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetSparklineGroupRequest" /></param>
    public async deleteWorksheetSparklineGroup(requestObj:model.DeleteWorksheetSparklineGroupRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetSparklineGroup.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add a sparkline group in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetSparklineGroupRequest" /></param>
    public async putWorksheetSparklineGroup(requestObj:model.PutWorksheetSparklineGroupRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetSparklineGroup.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update a sparkline group in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetSparklineGroupRequest" /></param>
    public async postWorksheetSparklineGroup(requestObj:model.PostWorksheetSparklineGroupRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetSparklineGroup.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="PostCharacterCountRequest" /></param>
    public async postCharacterCount(requestObj:model.PostCharacterCountRequest ): Promise<{response: http.ClientResponse, body: string}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postCharacterCount.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "string");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="PostWordsCountRequest" /></param>
    public async postWordsCount(requestObj:model.PostWordsCountRequest ): Promise<{response: http.ClientResponse, body: string}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWordsCount.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "string");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// </summary>
    /// <param name="request">Request. <see cref="PostSpecifyWordsCountRequest" /></param>
    public async postSpecifyWordsCount(requestObj:model.PostSpecifyWordsCountRequest ): Promise<{response: http.ClientResponse, body: string}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSpecifyWordsCount.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "string");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Run tasks.
    /// </summary>
    /// <param name="request">Request. <see cref="PostRunTaskRequest" /></param>
    public async postRunTask(requestObj:model.PostRunTaskRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postRunTask.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Adds text content to a specified location within a document. It requires an object that defines the text to be added and the insertion location.
    /// </summary>
    /// <param name="request">Request. <see cref="PostAddTextContentRequest" /></param>
    public async postAddTextContent(requestObj:model.PostAddTextContentRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postAddTextContent.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// The PostTrimContent API is designed to process and trim content within a specified range in a spreadsheet. This API allows users to remove extra spaces, line breaks, or other unnecessary characters from the content of selected cells. It is particularly useful for cleaning up data entries and ensuring consistency in spreadsheet formatting
    /// </summary>
    /// <param name="request">Request. <see cref="PostTrimContentRequest" /></param>
    public async postTrimContent(requestObj:model.PostTrimContentRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postTrimContent.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Managing inconsistent text case in spreadsheets (Excel, Google Sheets, CSV) can be frustrating, especially with large datasets. The PostUpdateWordCase WEB API solves this by automating text case conversions, ensuring clean and standardized data.
    /// </summary>
    /// <param name="request">Request. <see cref="PostUpdateWordCaseRequest" /></param>
    public async postUpdateWordCase(requestObj:model.PostUpdateWordCaseRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postUpdateWordCase.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// A comprehensive set of tools for cleaning text content within selected cells. It allows users to remove specific characters, character sets, and substrings, ensuring that the text is standardized and free from unwanted symbols or sequences.
    /// </summary>
    /// <param name="request">Request. <see cref="PostRemoveCharactersRequest" /></param>
    public async postRemoveCharacters(requestObj:model.PostRemoveCharactersRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postRemoveCharacters.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Enhance Excel data through essential text conversions: convert text to numbers, replace characters and line breaks, and remove accents.
    /// </summary>
    /// <param name="request">Request. <see cref="PostConvertTextRequest" /></param>
    public async postConvertText(requestObj:model.PostConvertTextRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postConvertText.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Efficiently remove duplicate substrings from Excel cells. Select a range, specify delimiters, and apply options to eliminate repeated text segments.
    /// </summary>
    /// <param name="request">Request. <see cref="PostRemoveDuplicatesRequest" /></param>
    public async postRemoveDuplicates(requestObj:model.PostRemoveDuplicatesRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postRemoveDuplicates.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Effortlessly extract text and numbers from Excel cells with precise options. This API allows extraction of first/last characters, text between delimiters, and numbers from strings, with output as static values or formulas.
    /// </summary>
    /// <param name="request">Request. <see cref="PostExtractTextRequest" /></param>
    public async postExtractText(requestObj:model.PostExtractTextRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postExtractText.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Efficiently divides Excel cell content into columns or rows based on specified delimiters or patterns. Supports Character-based splitting, Custom string splitting, Mask and wildcard splitting for pattern-based division, Line break division, Column or row splitting, Delimiter removal or retention.
    /// </summary>
    /// <param name="request">Request. <see cref="PostSplitTextRequest" /></param>
    public async postSplitText(requestObj:model.PostSplitTextRequest ): Promise<{response: http.ClientResponse, body: model.FileInfo}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSplitText.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve the description of the default style for the workbook .
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorkbookDefaultStyleRequest" /></param>
    public async getWorkbookDefaultStyle(requestObj:model.GetWorkbookDefaultStyleRequest ): Promise<{response: http.ClientResponse, body: model.StyleResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorkbookDefaultStyle.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "StyleResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve text items in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorkbookTextItemsRequest" /></param>
    public async getWorkbookTextItems(requestObj:model.GetWorkbookTextItemsRequest ): Promise<{response: http.ClientResponse, body: model.TextItemsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorkbookTextItems.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TextItemsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve named ranges in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorkbookNamesRequest" /></param>
    public async getWorkbookNames(requestObj:model.GetWorkbookNamesRequest ): Promise<{response: http.ClientResponse, body: model.NamesResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorkbookNames.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "NamesResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Define a new name in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorkbookNameRequest" /></param>
    public async putWorkbookName(requestObj:model.PutWorkbookNameRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorkbookName.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve description of a named range in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorkbookNameRequest" /></param>
    public async getWorkbookName(requestObj:model.GetWorkbookNameRequest ): Promise<{response: http.ClientResponse, body: model.NameResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorkbookName.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "NameResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update a named range in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorkbookNameRequest" /></param>
    public async postWorkbookName(requestObj:model.PostWorkbookNameRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorkbookName.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve the value of a named range in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorkbookNameValueRequest" /></param>
    public async getWorkbookNameValue(requestObj:model.GetWorkbookNameValueRequest ): Promise<{response: http.ClientResponse, body: model.RangeValueResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorkbookNameValue.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RangeValueResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete all named ranges in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorkbookNamesRequest" /></param>
    public async deleteWorkbookNames(requestObj:model.DeleteWorkbookNamesRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorkbookNames.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete a named range in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorkbookNameRequest" /></param>
    public async deleteWorkbookName(requestObj:model.DeleteWorkbookNameRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorkbookName.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Merge a workbook into the existing workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorkbooksMergeRequest" /></param>
    public async postWorkbooksMerge(requestObj:model.PostWorkbooksMergeRequest ): Promise<{response: http.ClientResponse, body: model.WorkbookResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorkbooksMerge.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "WorkbookResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Search for text in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorkbooksTextSearchRequest" /></param>
    public async postWorkbooksTextSearch(requestObj:model.PostWorkbooksTextSearchRequest ): Promise<{response: http.ClientResponse, body: model.TextItemsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorkbooksTextSearch.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TextItemsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Replace text in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorkbookTextReplaceRequest" /></param>
    public async postWorkbookTextReplace(requestObj:model.PostWorkbookTextReplaceRequest ): Promise<{response: http.ClientResponse, body: model.WorkbookReplaceResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorkbookTextReplace.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "WorkbookReplaceResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Smart marker processing.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorkbookGetSmartMarkerResultRequest" /></param>
    public async postWorkbookGetSmartMarkerResult(requestObj:model.PostWorkbookGetSmartMarkerResultRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorkbookGetSmartMarkerResult.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Create a new workbook using different methods.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorkbookCreateRequest" /></param>
    public async putWorkbookCreate(requestObj:model.PutWorkbookCreateRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorkbookCreate.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Split the workbook with a specific format.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorkbookSplitRequest" /></param>
    public async postWorkbookSplit(requestObj:model.PostWorkbookSplitRequest ): Promise<{response: http.ClientResponse, body: model.SplitResultResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorkbookSplit.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SplitResultResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Calculate all formulas in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorkbookCalculateFormulaRequest" /></param>
    public async postWorkbookCalculateFormula(requestObj:model.PostWorkbookCalculateFormulaRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorkbookCalculateFormula.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Autofit rows in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="PostAutofitWorkbookRowsRequest" /></param>
    public async postAutofitWorkbookRows(requestObj:model.PostAutofitWorkbookRowsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postAutofitWorkbookRows.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Autofit columns in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="PostAutofitWorkbookColumnsRequest" /></param>
    public async postAutofitWorkbookColumns(requestObj:model.PostAutofitWorkbookColumnsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postAutofitWorkbookColumns.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of workbook settings.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorkbookSettingsRequest" /></param>
    public async getWorkbookSettings(requestObj:model.GetWorkbookSettingsRequest ): Promise<{response: http.ClientResponse, body: model.WorkbookSettingsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorkbookSettings.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "WorkbookSettingsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update setting in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorkbookSettingsRequest" /></param>
    public async postWorkbookSettings(requestObj:model.PostWorkbookSettingsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorkbookSettings.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Set background in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorkbookBackgroundRequest" /></param>
    public async putWorkbookBackground(requestObj:model.PutWorkbookBackgroundRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorkbookBackground.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete background in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorkbookBackgroundRequest" /></param>
    public async deleteWorkbookBackground(requestObj:model.DeleteWorkbookBackgroundRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorkbookBackground.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Set water marker in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorkbookWaterMarkerRequest" /></param>
    public async putWorkbookWaterMarker(requestObj:model.PutWorkbookWaterMarkerRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorkbookWaterMarker.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Get page count in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="GetPageCountRequest" /></param>
    public async getPageCount(requestObj:model.GetPageCountRequest ): Promise<{response: http.ClientResponse, body: number}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getPageCount.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "number");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Get all style in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="GetAllStylesRequest" /></param>
    public async getAllStyles(requestObj:model.GetAllStylesRequest ): Promise<{response: http.ClientResponse, body: model.StylesResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getAllStyles.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "StylesResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve the description of worksheets from a workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetsRequest" /></param>
    public async getWorksheets(requestObj:model.GetWorksheetsRequest ): Promise<{response: http.ClientResponse, body: model.WorksheetsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheets.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "WorksheetsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve the worksheet in a specified format from the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetWithFormatRequest" /></param>
    public async getWorksheetWithFormat(requestObj:model.GetWorksheetWithFormatRequest ): Promise<{response: http.ClientResponse, body: Buffer}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetWithFormat.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Change worksheet visibility in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="PutChangeVisibilityWorksheetRequest" /></param>
    public async putChangeVisibilityWorksheet(requestObj:model.PutChangeVisibilityWorksheetRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putChangeVisibilityWorksheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Set active worksheet index in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="PutActiveWorksheetRequest" /></param>
    public async putActiveWorksheet(requestObj:model.PutActiveWorksheetRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putActiveWorksheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Insert a new worksheet in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="PutInsertNewWorksheetRequest" /></param>
    public async putInsertNewWorksheet(requestObj:model.PutInsertNewWorksheetRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putInsertNewWorksheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add a new worksheet in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="PutAddNewWorksheetRequest" /></param>
    public async putAddNewWorksheet(requestObj:model.PutAddNewWorksheetRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putAddNewWorksheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete a worksheet in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetRequest" /></param>
    public async deleteWorksheet(requestObj:model.DeleteWorksheetRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete matched worksheets in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetsRequest" /></param>
    public async deleteWorksheets(requestObj:model.DeleteWorksheetsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheets.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Move worksheet in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="PostMoveWorksheetRequest" /></param>
    public async postMoveWorksheet(requestObj:model.PostMoveWorksheetRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postMoveWorksheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Protect worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutProtectWorksheetRequest" /></param>
    public async putProtectWorksheet(requestObj:model.PutProtectWorksheetRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putProtectWorksheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Unprotect worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteUnprotectWorksheetRequest" /></param>
    public async deleteUnprotectWorksheet(requestObj:model.DeleteUnprotectWorksheetRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteUnprotectWorksheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve text items in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetTextItemsRequest" /></param>
    public async getWorksheetTextItems(requestObj:model.GetWorksheetTextItemsRequest ): Promise<{response: http.ClientResponse, body: model.TextItemsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetTextItems.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TextItemsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve the description of comments in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetCommentsRequest" /></param>
    public async getWorksheetComments(requestObj:model.GetWorksheetCommentsRequest ): Promise<{response: http.ClientResponse, body: model.CommentsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetComments.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CommentsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve the description of comment in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetCommentRequest" /></param>
    public async getWorksheetComment(requestObj:model.GetWorksheetCommentRequest ): Promise<{response: http.ClientResponse, body: model.CommentResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetComment.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CommentResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add cell comment in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetCommentRequest" /></param>
    public async putWorksheetComment(requestObj:model.PutWorksheetCommentRequest ): Promise<{response: http.ClientResponse, body: model.CommentResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetComment.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CommentResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update cell comment in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetCommentRequest" /></param>
    public async postWorksheetComment(requestObj:model.PostWorksheetCommentRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetComment.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete cell comment in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetCommentRequest" /></param>
    public async deleteWorksheetComment(requestObj:model.DeleteWorksheetCommentRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetComment.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete all comments in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetCommentsRequest" /></param>
    public async deleteWorksheetComments(requestObj:model.DeleteWorksheetCommentsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetComments.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Get worksheet merged cells.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetMergedCellsRequest" /></param>
    public async getWorksheetMergedCells(requestObj:model.GetWorksheetMergedCellsRequest ): Promise<{response: http.ClientResponse, body: model.MergedCellsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetMergedCells.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "MergedCellsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve description of a merged cell by its index in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetMergedCellRequest" /></param>
    public async getWorksheetMergedCell(requestObj:model.GetWorksheetMergedCellRequest ): Promise<{response: http.ClientResponse, body: model.MergedCellResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetMergedCell.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "MergedCellResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Calculate formula in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetCalculateFormulaRequest" /></param>
    public async getWorksheetCalculateFormula(requestObj:model.GetWorksheetCalculateFormulaRequest ): Promise<{response: http.ClientResponse, body: model.SingleValueResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetCalculateFormula.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SingleValueResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Calculate formula in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetCalculateFormulaRequest" /></param>
    public async postWorksheetCalculateFormula(requestObj:model.PostWorksheetCalculateFormulaRequest ): Promise<{response: http.ClientResponse, body: model.SingleValueResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetCalculateFormula.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SingleValueResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Search for text in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetTextSearchRequest" /></param>
    public async postWorksheetTextSearch(requestObj:model.PostWorksheetTextSearchRequest ): Promise<{response: http.ClientResponse, body: model.TextItemsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetTextSearch.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TextItemsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Replace old text with new text in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetTextReplaceRequest" /></param>
    public async postWorksheetTextReplace(requestObj:model.PostWorksheetTextReplaceRequest ): Promise<{response: http.ClientResponse, body: model.WorksheetReplaceResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetTextReplace.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "WorksheetReplaceResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Sort a range in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetRangeSortRequest" /></param>
    public async postWorksheetRangeSort(requestObj:model.PostWorksheetRangeSortRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetRangeSort.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Autofit a row in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostAutofitWorksheetRowRequest" /></param>
    public async postAutofitWorksheetRow(requestObj:model.PostAutofitWorksheetRowRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postAutofitWorksheetRow.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Autofit rows in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostAutofitWorksheetRowsRequest" /></param>
    public async postAutofitWorksheetRows(requestObj:model.PostAutofitWorksheetRowsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postAutofitWorksheetRows.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Autofit columns in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostAutofitWorksheetColumnsRequest" /></param>
    public async postAutofitWorksheetColumns(requestObj:model.PostAutofitWorksheetColumnsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postAutofitWorksheetColumns.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Set background image in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetBackgroundRequest" /></param>
    public async putWorksheetBackground(requestObj:model.PutWorksheetBackgroundRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetBackground.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete background image in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetBackgroundRequest" /></param>
    public async deleteWorksheetBackground(requestObj:model.DeleteWorksheetBackgroundRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetBackground.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Set freeze panes in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetFreezePanesRequest" /></param>
    public async putWorksheetFreezePanes(requestObj:model.PutWorksheetFreezePanesRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetFreezePanes.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Unfreeze panes in worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetFreezePanesRequest" /></param>
    public async deleteWorksheetFreezePanes(requestObj:model.DeleteWorksheetFreezePanesRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetFreezePanes.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Copy contents and formats from another worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostCopyWorksheetRequest" /></param>
    public async postCopyWorksheet(requestObj:model.PostCopyWorksheetRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postCopyWorksheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Rename worksheet in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="PostRenameWorksheetRequest" /></param>
    public async postRenameWorksheet(requestObj:model.PostRenameWorksheetRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postRenameWorksheet.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update worksheet properties in the workbook.
    /// </summary>
    /// <param name="request">Request. <see cref="PostUpdateWorksheetPropertyRequest" /></param>
    public async postUpdateWorksheetProperty(requestObj:model.PostUpdateWorksheetPropertyRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postUpdateWorksheetProperty.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of ranges in the worksheets.
    /// </summary>
    /// <param name="request">Request. <see cref="GetNamedRangesRequest" /></param>
    public async getNamedRanges(requestObj:model.GetNamedRangesRequest ): Promise<{response: http.ClientResponse, body: model.RangesResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getNamedRanges.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RangesResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve values in range.
    /// </summary>
    /// <param name="request">Request. <see cref="GetNamedRangeValueRequest" /></param>
    public async getNamedRangeValue(requestObj:model.GetNamedRangeValueRequest ): Promise<{response: http.ClientResponse, body: model.RangeValueResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getNamedRangeValue.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RangeValueResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update the scaling percentage in the worksheet. It should be between 10 and 400.
    /// </summary>
    /// <param name="request">Request. <see cref="PostUpdateWorksheetZoomRequest" /></param>
    public async postUpdateWorksheetZoom(requestObj:model.PostUpdateWorksheetZoomRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postUpdateWorksheetZoom.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Get page count in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetPageCountRequest" /></param>
    public async getWorksheetPageCount(requestObj:model.GetWorksheetPageCountRequest ): Promise<{response: http.ClientResponse, body: number}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetPageCount.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "number");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve descriptions of validations in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetValidationsRequest" /></param>
    public async getWorksheetValidations(requestObj:model.GetWorksheetValidationsRequest ): Promise<{response: http.ClientResponse, body: model.ValidationsResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetValidations.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ValidationsResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Retrieve a validation by its index in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="GetWorksheetValidationRequest" /></param>
    public async getWorksheetValidation(requestObj:model.GetWorksheetValidationRequest ): Promise<{response: http.ClientResponse, body: model.ValidationResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getWorksheetValidation.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ValidationResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Add a validation at index in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PutWorksheetValidationRequest" /></param>
    public async putWorksheetValidation(requestObj:model.PutWorksheetValidationRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putWorksheetValidation.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Update a validation by index in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="PostWorksheetValidationRequest" /></param>
    public async postWorksheetValidation(requestObj:model.PostWorksheetValidationRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWorksheetValidation.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete a validation by index in worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetValidationRequest" /></param>
    public async deleteWorksheetValidation(requestObj:model.DeleteWorksheetValidationRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetValidation.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /// <summary>
    /// Delete all validations in the worksheet.
    /// </summary>
    /// <param name="request">Request. <see cref="DeleteWorksheetValidationsRequest" /></param>
    public async deleteWorksheetValidations(requestObj:model.DeleteWorksheetValidationsRequest ): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}>
    {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWorksheetValidations.');
        }

        const requestOptions = await requestObj.createRequestOptions(this.configuration);
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }
}