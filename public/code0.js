gdjs.TitleScenceCode = {};
gdjs.TitleScenceCode.localVariables = [];
gdjs.TitleScenceCode.GDStartGameButtonObjects1_1final = [];

gdjs.TitleScenceCode.GDStartGameButtonObjects1= [];
gdjs.TitleScenceCode.GDStartGameButtonObjects2= [];
gdjs.TitleScenceCode.GDGameStartObjects1= [];
gdjs.TitleScenceCode.GDGameStartObjects2= [];
gdjs.TitleScenceCode.GDStartGameButton2Objects1= [];
gdjs.TitleScenceCode.GDStartGameButton2Objects2= [];


gdjs.TitleScenceCode.mapOfGDgdjs_9546TitleScenceCode_9546GDStartGameButtonObjects1Objects = Hashtable.newFrom({"StartGameButton": gdjs.TitleScenceCode.GDStartGameButtonObjects1});
gdjs.TitleScenceCode.eventsList0 = function(runtimeScene) {

{

gdjs.TitleScenceCode.GDStartGameButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.TitleScenceCode.GDStartGameButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("StartGameButton"), gdjs.TitleScenceCode.GDStartGameButtonObjects2);
for (var i = 0, k = 0, l = gdjs.TitleScenceCode.GDStartGameButtonObjects2.length;i<l;++i) {
    if ( gdjs.TitleScenceCode.GDStartGameButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.TitleScenceCode.GDStartGameButtonObjects2[k] = gdjs.TitleScenceCode.GDStartGameButtonObjects2[i];
        ++k;
    }
}
gdjs.TitleScenceCode.GDStartGameButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.TitleScenceCode.GDStartGameButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.TitleScenceCode.GDStartGameButtonObjects1_1final.indexOf(gdjs.TitleScenceCode.GDStartGameButtonObjects2[j]) === -1 )
            gdjs.TitleScenceCode.GDStartGameButtonObjects1_1final.push(gdjs.TitleScenceCode.GDStartGameButtonObjects2[j]);
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
gdjs.copyArray(gdjs.TitleScenceCode.GDStartGameButtonObjects1_1final, gdjs.TitleScenceCode.GDStartGameButtonObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScence", false);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "music8.aac", gdjs.evtTools.object.getPickedInstancesCount(gdjs.TitleScenceCode.mapOfGDgdjs_9546TitleScenceCode_9546GDStartGameButtonObjects1Objects), false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "music5.aac", 0, false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14983244);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.TitleScenceCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleScenceCode.GDStartGameButtonObjects1.length = 0;
gdjs.TitleScenceCode.GDStartGameButtonObjects2.length = 0;
gdjs.TitleScenceCode.GDGameStartObjects1.length = 0;
gdjs.TitleScenceCode.GDGameStartObjects2.length = 0;
gdjs.TitleScenceCode.GDStartGameButton2Objects1.length = 0;
gdjs.TitleScenceCode.GDStartGameButton2Objects2.length = 0;

gdjs.TitleScenceCode.eventsList0(runtimeScene);
gdjs.TitleScenceCode.GDStartGameButtonObjects1.length = 0;
gdjs.TitleScenceCode.GDStartGameButtonObjects2.length = 0;
gdjs.TitleScenceCode.GDGameStartObjects1.length = 0;
gdjs.TitleScenceCode.GDGameStartObjects2.length = 0;
gdjs.TitleScenceCode.GDStartGameButton2Objects1.length = 0;
gdjs.TitleScenceCode.GDStartGameButton2Objects2.length = 0;


return;

}

gdjs['TitleScenceCode'] = gdjs.TitleScenceCode;
