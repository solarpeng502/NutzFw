/* Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FLOWABLE = FLOWABLE || {};

/*
 * Contains methods to retrieve the (mostly) base urls of the different end points.
 * Two of the methods #getImageUrl and #getModelThumbnailUrl are exposed in the $rootScope for usage in the HTML views.
 */
FLOWABLE.APP_URL = {

    /* ACCOUNT URLS */

    getAccountUrl: function () {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/account';
    },

    getLogoutUrl: function () {
        return FLOWABLE.CONFIG.contextRoot + '/flow/app/logout';
    },

    /* MODEL URLS */

    getModelsUrl: function (query) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/models' + (query || "");
    },

    getModelUrl: function (modelId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/models/' + modelId;
    },

    getModelModelJsonUrl: function (modelId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/models/' + modelId + '/model-json';
    },

    getModelBpmn20ExportUrl: function (modelId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/models/' + modelId + '/bpmn20?version=' + Date.now();
    },

    getCloneModelsUrl: function (modelId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/models/' + modelId + '/clone';
    },

    getModelHistoriesUrl: function (modelId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/models/' + modelId + '/history';
    },

    getModelHistoryUrl: function (modelId, modelHistoryId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/models/' + modelId + '/history/' + modelHistoryId;
    },

    getModelHistoryModelJsonUrl: function (modelId, modelHistoryId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/models/' + modelId + '/history/' + modelHistoryId + '/model-json';
    },

    getModelHistoryBpmn20ExportUrl: function (modelId, modelHistoryId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/models/' + modelId + '/history/' + modelHistoryId + '/bpmn20?version=' + Date.now();
    },

    getCmmnModelDownloadUrl: function (modelId, modelHistoryId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/models/' + modelId + (modelHistoryId ? '/history/' + modelHistoryId : '') + '/cmmn?version=' + Date.now();
    },

    getModelParentRelationsUrl: function (modelId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/models/' + modelId + '/parent-relations';
    },

    /* APP DEFINITION URLS  */

    getAppDefinitionImportUrl: function (renewIdmIds) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/app-definitions/import?renewIdmEntries=' + renewIdmIds;
    },

    getAppDefinitionTextImportUrl: function (renewIdmIds) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/app-definitions/text/import?renewIdmEntries=' + renewIdmIds;
    },

    getAppDefinitionUrl: function (modelId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/app-definitions/' + modelId;
    },

    getAppDefinitionModelImportUrl: function (modelId, renewIdmIds) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/app-definitions/' + modelId + '/import?renewIdmEntries=' + renewIdmIds;
    },

    getAppDefinitionModelTextImportUrl: function (modelId, renewIdmIds) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/app-definitions/' + modelId + '/text/import?renewIdmEntries=' + renewIdmIds;
    },

    getAppDefinitionPublishUrl: function (modelId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/app-definitions/' + modelId + '/publish';
    },

    getAppDefinitionExportUrl: function (modelId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/app-definitions/' + modelId + '/export?version=' + Date.now();
    },

    getAppDefinitionBarExportUrl: function (modelId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/app-definitions/' + modelId + '/export-bar?version=' + Date.now();
    },

    getAppDefinitionHistoryUrl: function (modelId, historyModelId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/app-definitions/' + modelId + '/history/' + historyModelId;
    },

    getModelsForAppDefinitionUrl: function () {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/models-for-app-definition';
    },

    getCmmnModelsForAppDefinitionUrl: function () {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/cmmn-models-for-app-definition';
    },

    /* PROCESS INSTANCE URLS */

    getProcessInstanceModelJsonUrl: function (modelId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/process-instances/' + modelId + '/model-json';
    },

    getProcessInstanceModelJsonHistoryUrl: function (historyModelId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/process-instances/history/' + historyModelId + '/model-json';
    },

    /* PROCESS DEFINITION URLS */

    getProcessDefinitionModelJsonUrl: function (processDefinitionId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/process-definitions/' + processDefinitionId + '/model-json';
    },

    /* PROCESS MODEL URLS */

    getImportProcessModelUrl: function () {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/import-process-model';
    },

    getImportProcessModelTextUrl: function () {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/import-process-model/text';
    },

    /* DECISION TABLE URLS */

    getDecisionTableModelsUrl: function () {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/decision-table-models';
    },

    getDecisionTableImportUrl: function () {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/decision-table-models/import-decision-table';
    },

    getDecisionTableTextImportUrl: function () {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/decision-table-models/import-decision-table-text';
    },

    getDecisionTableModelUrl: function (modelId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/decision-table-models/' + modelId;
    },

    getDecisionTableModelValuesUrl: function (query) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/decision-table-models/values?' + query;
    },

    getDecisionTableModelsHistoryUrl: function (modelHistoryId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/decision-table-models/history/' + modelHistoryId;
    },

    getDecisionTableModelHistoryUrl: function (modelId, modelHistoryId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/decision-table-models/' + modelId + '/history/' + modelHistoryId;
    },

    /* FORM MODEL URLS */

    getFormModelsUrl: function () {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/form-models';
    },

    getFormModelValuesUrl: function (query) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/form-models/values?' + query;
    },

    getFormModelUrl: function (modelId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/form-models/' + modelId;
    },

    getFormModelHistoryUrl: function (modelId, modelHistoryId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/form-models/' + modelId + '/history/' + modelHistoryId;
    },

    /* CASE MODEL URLS */

    getCaseModelsUrl: function (query) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/case-models' + (query || "");
    },

    getCaseModelImportUrl: function () {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/import-case-model';
    },

    getCaseModelTextImportUrl: function () {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/import-case-model/text';
    },

    getCaseInstancesHistoryModelJsonUrl: function (modelHistoryId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/case-instances/history/' + modelHistoryId + '/model-json';
    },

    getCaseInstancesModelJsonUrl: function (modelId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/case-instances/' + modelId + '/model-json';
    },

    getCaseDefinitionModelJsonUrl: function (caseDefinitionId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/case-definitions/' + caseDefinitionId + '/model-json';
    },

    /* IMAGE URLS (exposed in rootscope in app.js */

    getImageUrl: function (imageId) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/image/' + imageId;
    },

    getModelThumbnailUrl: function (modelId, version) {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/models/' + modelId + '/thumbnail' + (version ? "?version=" + version : "");
    },

    /* OTHER URLS */

    getEditorUsersUrl: function () {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/editor-users';
    },

    getEditorGroupsUrl: function () {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/editor-groups';
    },

    getAboutInfoUrl: function () {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/about-info';
    },

    getReviewerUsersUrl: function () {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/reviewerUsers';
    },

    getReviewerUserRolesUrl: function () {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/reviewerUserRoles';
    },
    getListExternalFormExecutorUrl: function () {
        return FLOWABLE.CONFIG.contextRoot + '/flowDesign/listExternalFormExecutor';
    },
};
