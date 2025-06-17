gdjs.nameCode = {};
gdjs.nameCode.localVariables = [];
gdjs.nameCode.GDNewSpriteObjects1= [];
gdjs.nameCode.GDNewSpriteObjects2= [];
gdjs.nameCode.GDNewTextObjects1= [];
gdjs.nameCode.GDNewTextObjects2= [];
gdjs.nameCode.GDNewTextInputObjects1= [];
gdjs.nameCode.GDNewTextInputObjects2= [];


gdjs.nameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1));
}}

}


};gdjs.nameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.nameCode.GDNewTextInputObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name").setString((( gdjs.nameCode.GDNewTextInputObjects1.length === 0 ) ? "" :gdjs.nameCode.GDNewTextInputObjects1[0].getBehavior("Text").getText()));
}{gdjs.evtTools.network.sendAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}
{ //Subevents
gdjs.nameCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.nameCode.asyncCallback15184404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.nameCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScence", false);
}gdjs.nameCode.localVariables.length = 0;
}
gdjs.nameCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.nameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.nameCode.asyncCallback15184404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.nameCode.asyncCallback14842428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.nameCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "VictoryScence", false);
}gdjs.nameCode.localVariables.length = 0;
}
gdjs.nameCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.nameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.nameCode.asyncCallback14842428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.nameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.nameCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nameCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.nameCode.GDNewTextInputObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.nameCode.GDNewTextInputObjects1[k] = gdjs.nameCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.nameCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15199364);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.nameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Score_").getAsNumber() < 20);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.nameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Score_").getAsNumber() == 20);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.nameCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.nameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.nameCode.GDNewSpriteObjects1.length = 0;
gdjs.nameCode.GDNewSpriteObjects2.length = 0;
gdjs.nameCode.GDNewTextObjects1.length = 0;
gdjs.nameCode.GDNewTextObjects2.length = 0;
gdjs.nameCode.GDNewTextInputObjects1.length = 0;
gdjs.nameCode.GDNewTextInputObjects2.length = 0;

gdjs.nameCode.eventsList4(runtimeScene);
gdjs.nameCode.GDNewSpriteObjects1.length = 0;
gdjs.nameCode.GDNewSpriteObjects2.length = 0;
gdjs.nameCode.GDNewTextObjects1.length = 0;
gdjs.nameCode.GDNewTextObjects2.length = 0;
gdjs.nameCode.GDNewTextInputObjects1.length = 0;
gdjs.nameCode.GDNewTextInputObjects2.length = 0;


return;

}

gdjs['nameCode'] = gdjs.nameCode;
