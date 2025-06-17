gdjs.VictoryScenceCode = {};
gdjs.VictoryScenceCode.localVariables = [];
gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects1_1final = [];

gdjs.VictoryScenceCode.GDNewSpriteObjects1= [];
gdjs.VictoryScenceCode.GDNewSpriteObjects2= [];
gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects2= [];
gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorder2Objects1= [];
gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorder2Objects2= [];


gdjs.VictoryScenceCode.mapOfGDgdjs_9546VictoryScenceCode_9546GDTransparentButtonWithWhiteYellowBorderObjects1Objects = Hashtable.newFrom({"TransparentButtonWithWhiteYellowBorder": gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects1});
gdjs.VictoryScenceCode.eventsList0 = function(runtimeScene) {

{

gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder"), gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects2);
for (var i = 0, k = 0, l = gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length;i<l;++i) {
    if ( gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects2[k] = gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects2[i];
        ++k;
    }
}
gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length; j < jLen ; ++j) {
        if ( gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects1_1final.indexOf(gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects2[j]) === -1 )
            gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects1_1final.push(gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Start", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects1_1final, gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScence", false);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "music8.aac", gdjs.evtTools.object.getPickedInstancesCount(gdjs.VictoryScenceCode.mapOfGDgdjs_9546VictoryScenceCode_9546GDTransparentButtonWithWhiteYellowBorderObjects1Objects), false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "music7.aac", gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, "VictoryScence"), false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15166116);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.VictoryScenceCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VictoryScenceCode.GDNewSpriteObjects1.length = 0;
gdjs.VictoryScenceCode.GDNewSpriteObjects2.length = 0;
gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorder2Objects1.length = 0;
gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorder2Objects2.length = 0;

gdjs.VictoryScenceCode.eventsList0(runtimeScene);
gdjs.VictoryScenceCode.GDNewSpriteObjects1.length = 0;
gdjs.VictoryScenceCode.GDNewSpriteObjects2.length = 0;
gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorder2Objects1.length = 0;
gdjs.VictoryScenceCode.GDTransparentButtonWithWhiteYellowBorder2Objects2.length = 0;


return;

}

gdjs['VictoryScenceCode'] = gdjs.VictoryScenceCode;
