gdjs.Score2Code = {};
gdjs.Score2Code.localVariables = [];
gdjs.Score2Code.GDNewSpriteObjects1= [];
gdjs.Score2Code.GDNewSpriteObjects2= [];
gdjs.Score2Code.GDNewTextObjects1= [];
gdjs.Score2Code.GDNewTextObjects2= [];


gdjs.Score2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1));
}}

}


};gdjs.Score2Code.asyncCallback15185092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Score2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "name", false);
}gdjs.Score2Code.localVariables.length = 0;
}
gdjs.Score2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Score2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.Score2Code.asyncCallback15185092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Score2Code.asyncCallback15185844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Score2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "name", false);
}gdjs.Score2Code.localVariables.length = 0;
}
gdjs.Score2Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Score2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.Score2Code.asyncCallback15185844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Score2Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Score2Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Score2Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Score2Code.GDNewTextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Score_").getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15182252);
}
if (isConditionTrue_0) {
{gdjs.evtTools.network.sendAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}
{ //Subevents
gdjs.Score2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Score_").getAsNumber() == 20);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Score2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Score_").getAsNumber() < 20);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Score2Code.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Score2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Score2Code.GDNewSpriteObjects1.length = 0;
gdjs.Score2Code.GDNewSpriteObjects2.length = 0;
gdjs.Score2Code.GDNewTextObjects1.length = 0;
gdjs.Score2Code.GDNewTextObjects2.length = 0;

gdjs.Score2Code.eventsList3(runtimeScene);
gdjs.Score2Code.GDNewSpriteObjects1.length = 0;
gdjs.Score2Code.GDNewSpriteObjects2.length = 0;
gdjs.Score2Code.GDNewTextObjects1.length = 0;
gdjs.Score2Code.GDNewTextObjects2.length = 0;


return;

}

gdjs['Score2Code'] = gdjs.Score2Code;
