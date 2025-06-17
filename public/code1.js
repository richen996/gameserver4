gdjs.GameScenceCode = {};
gdjs.GameScenceCode.localVariables = [];
gdjs.GameScenceCode.forEachIndex2 = 0;

gdjs.GameScenceCode.forEachObjects2 = [];

gdjs.GameScenceCode.forEachTemporary2 = null;

gdjs.GameScenceCode.forEachTotalCount2 = 0;

gdjs.GameScenceCode.GDplayerObjects1= [];
gdjs.GameScenceCode.GDplayerObjects2= [];
gdjs.GameScenceCode.GDplayerObjects3= [];
gdjs.GameScenceCode.GDbulletObjects1= [];
gdjs.GameScenceCode.GDbulletObjects2= [];
gdjs.GameScenceCode.GDbulletObjects3= [];
gdjs.GameScenceCode.GDenemyObjects1= [];
gdjs.GameScenceCode.GDenemyObjects2= [];
gdjs.GameScenceCode.GDenemyObjects3= [];
gdjs.GameScenceCode.GDAirWallObjects1= [];
gdjs.GameScenceCode.GDAirWallObjects2= [];
gdjs.GameScenceCode.GDAirWallObjects3= [];
gdjs.GameScenceCode.GDNewSpriteObjects1= [];
gdjs.GameScenceCode.GDNewSpriteObjects2= [];
gdjs.GameScenceCode.GDNewSpriteObjects3= [];
gdjs.GameScenceCode.GDTestObjects1= [];
gdjs.GameScenceCode.GDTestObjects2= [];
gdjs.GameScenceCode.GDTestObjects3= [];
gdjs.GameScenceCode.GDGoldGreenBarObjects1= [];
gdjs.GameScenceCode.GDGoldGreenBarObjects2= [];
gdjs.GameScenceCode.GDGoldGreenBarObjects3= [];
gdjs.GameScenceCode.GDMetalRedBarObjects1= [];
gdjs.GameScenceCode.GDMetalRedBarObjects2= [];
gdjs.GameScenceCode.GDMetalRedBarObjects3= [];
gdjs.GameScenceCode.GDenemy2Objects1= [];
gdjs.GameScenceCode.GDenemy2Objects2= [];
gdjs.GameScenceCode.GDenemy2Objects3= [];
gdjs.GameScenceCode.GDenemy3Objects1= [];
gdjs.GameScenceCode.GDenemy3Objects2= [];
gdjs.GameScenceCode.GDenemy3Objects3= [];
gdjs.GameScenceCode.GDNewSprite2Objects1= [];
gdjs.GameScenceCode.GDNewSprite2Objects2= [];
gdjs.GameScenceCode.GDNewSprite2Objects3= [];
gdjs.GameScenceCode.GDcoinObjects1= [];
gdjs.GameScenceCode.GDcoinObjects2= [];
gdjs.GameScenceCode.GDcoinObjects3= [];
gdjs.GameScenceCode.GDcoinBarObjects1= [];
gdjs.GameScenceCode.GDcoinBarObjects2= [];
gdjs.GameScenceCode.GDcoinBarObjects3= [];
gdjs.GameScenceCode.GDBG_9595Forest2Objects1= [];
gdjs.GameScenceCode.GDBG_9595Forest2Objects2= [];
gdjs.GameScenceCode.GDBG_9595Forest2Objects3= [];
gdjs.GameScenceCode.GDzObjects1= [];
gdjs.GameScenceCode.GDzObjects2= [];
gdjs.GameScenceCode.GDzObjects3= [];
gdjs.GameScenceCode.GDdefenseObjects1= [];
gdjs.GameScenceCode.GDdefenseObjects2= [];
gdjs.GameScenceCode.GDdefenseObjects3= [];
gdjs.GameScenceCode.GDxObjects1= [];
gdjs.GameScenceCode.GDxObjects2= [];
gdjs.GameScenceCode.GDxObjects3= [];
gdjs.GameScenceCode.GDattackObjects1= [];
gdjs.GameScenceCode.GDattackObjects2= [];
gdjs.GameScenceCode.GDattackObjects3= [];
gdjs.GameScenceCode.GDskillObjects1= [];
gdjs.GameScenceCode.GDskillObjects2= [];
gdjs.GameScenceCode.GDskillObjects3= [];
gdjs.GameScenceCode.GDRedFlameObjects1= [];
gdjs.GameScenceCode.GDRedFlameObjects2= [];
gdjs.GameScenceCode.GDRedFlameObjects3= [];
gdjs.GameScenceCode.GDBlueFlameObjects1= [];
gdjs.GameScenceCode.GDBlueFlameObjects2= [];
gdjs.GameScenceCode.GDBlueFlameObjects3= [];
gdjs.GameScenceCode.GDMagic2Objects1= [];
gdjs.GameScenceCode.GDMagic2Objects2= [];
gdjs.GameScenceCode.GDMagic2Objects3= [];
gdjs.GameScenceCode.GDBlueExplosionObjects1= [];
gdjs.GameScenceCode.GDBlueExplosionObjects2= [];
gdjs.GameScenceCode.GDBlueExplosionObjects3= [];
gdjs.GameScenceCode.GDspaceObjects1= [];
gdjs.GameScenceCode.GDspaceObjects2= [];
gdjs.GameScenceCode.GDspaceObjects3= [];
gdjs.GameScenceCode.GDskill2Objects1= [];
gdjs.GameScenceCode.GDskill2Objects2= [];
gdjs.GameScenceCode.GDskill2Objects3= [];
gdjs.GameScenceCode.GDAObjects1= [];
gdjs.GameScenceCode.GDAObjects2= [];
gdjs.GameScenceCode.GDAObjects3= [];
gdjs.GameScenceCode.GDBObjects1= [];
gdjs.GameScenceCode.GDBObjects2= [];
gdjs.GameScenceCode.GDBObjects3= [];
gdjs.GameScenceCode.GDYObjects1= [];
gdjs.GameScenceCode.GDYObjects2= [];
gdjs.GameScenceCode.GDYObjects3= [];
gdjs.GameScenceCode.GDbackObjects1= [];
gdjs.GameScenceCode.GDbackObjects2= [];
gdjs.GameScenceCode.GDbackObjects3= [];
gdjs.GameScenceCode.GDscoreObjects1= [];
gdjs.GameScenceCode.GDscoreObjects2= [];
gdjs.GameScenceCode.GDscoreObjects3= [];


gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.GameScenceCode.GDbulletObjects1});
gdjs.GameScenceCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameScenceCode.GDplayerObjects1, gdjs.GameScenceCode.GDplayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScenceCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.GameScenceCode.GDplayerObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.GameScenceCode.GDplayerObjects2[k] = gdjs.GameScenceCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.GameScenceCode.GDplayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameScenceCode.GDbulletObjects1, gdjs.GameScenceCode.GDbulletObjects2);

{for(var i = 0, len = gdjs.GameScenceCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.GameScenceCode.GDbulletObjects2[i].addPolarForce(0, -(500), 1);
}
}{for(var i = 0, len = gdjs.GameScenceCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.GameScenceCode.GDbulletObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

/* Reuse gdjs.GameScenceCode.GDplayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScenceCode.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.GameScenceCode.GDplayerObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.GameScenceCode.GDplayerObjects1[k] = gdjs.GameScenceCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.GameScenceCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScenceCode.GDbulletObjects1 */
{for(var i = 0, len = gdjs.GameScenceCode.GDbulletObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDbulletObjects1[i].addPolarForce(0, 500, 1);
}
}}

}


};gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.GameScenceCode.GDNewSpriteObjects1});
gdjs.GameScenceCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameScenceCode.GDplayerObjects1, gdjs.GameScenceCode.GDplayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScenceCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.GameScenceCode.GDplayerObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.GameScenceCode.GDplayerObjects2[k] = gdjs.GameScenceCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.GameScenceCode.GDplayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameScenceCode.GDNewSpriteObjects1, gdjs.GameScenceCode.GDNewSpriteObjects2);

{for(var i = 0, len = gdjs.GameScenceCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.GameScenceCode.GDNewSpriteObjects2[i].addPolarForce(0, -(500), 1);
}
}{for(var i = 0, len = gdjs.GameScenceCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.GameScenceCode.GDNewSpriteObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

/* Reuse gdjs.GameScenceCode.GDplayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScenceCode.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.GameScenceCode.GDplayerObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.GameScenceCode.GDplayerObjects1[k] = gdjs.GameScenceCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.GameScenceCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScenceCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.GameScenceCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDNewSpriteObjects1[i].addPolarForce(0, 500, 1);
}
}}

}


};gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDskillObjects1Objects = Hashtable.newFrom({"skill": gdjs.GameScenceCode.GDskillObjects1});
gdjs.GameScenceCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameScenceCode.GDplayerObjects1, gdjs.GameScenceCode.GDplayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScenceCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.GameScenceCode.GDplayerObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.GameScenceCode.GDplayerObjects2[k] = gdjs.GameScenceCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.GameScenceCode.GDplayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameScenceCode.GDskillObjects1, gdjs.GameScenceCode.GDskillObjects2);

{for(var i = 0, len = gdjs.GameScenceCode.GDskillObjects2.length ;i < len;++i) {
    gdjs.GameScenceCode.GDskillObjects2[i].addPolarForce(0, -(500), 1);
}
}{for(var i = 0, len = gdjs.GameScenceCode.GDskillObjects2.length ;i < len;++i) {
    gdjs.GameScenceCode.GDskillObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

/* Reuse gdjs.GameScenceCode.GDplayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScenceCode.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.GameScenceCode.GDplayerObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.GameScenceCode.GDplayerObjects1[k] = gdjs.GameScenceCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.GameScenceCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScenceCode.GDskillObjects1 */
{for(var i = 0, len = gdjs.GameScenceCode.GDskillObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDskillObjects1[i].addPolarForce(0, 500, 1);
}
}}

}


};gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.GameScenceCode.GDenemyObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy2Objects1Objects = Hashtable.newFrom({"enemy2": gdjs.GameScenceCode.GDenemy2Objects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy3Objects1Objects = Hashtable.newFrom({"enemy3": gdjs.GameScenceCode.GDenemy3Objects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDcoinObjects1Objects = Hashtable.newFrom({"coin": gdjs.GameScenceCode.GDcoinObjects1});
gdjs.GameScenceCode.eventsList3 = function(runtimeScene) {

};gdjs.GameScenceCode.eventsList4 = function(runtimeScene) {

};gdjs.GameScenceCode.eventsList5 = function(runtimeScene) {

};gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.GameScenceCode.GDenemyObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.GameScenceCode.GDbulletObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDRedFlameObjects1Objects = Hashtable.newFrom({"RedFlame": gdjs.GameScenceCode.GDRedFlameObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy2Objects1Objects = Hashtable.newFrom({"enemy2": gdjs.GameScenceCode.GDenemy2Objects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.GameScenceCode.GDbulletObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDBlueFlameObjects1Objects = Hashtable.newFrom({"BlueFlame": gdjs.GameScenceCode.GDBlueFlameObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy3Objects1Objects = Hashtable.newFrom({"enemy3": gdjs.GameScenceCode.GDenemy3Objects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.GameScenceCode.GDbulletObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDBlueExplosionObjects1Objects = Hashtable.newFrom({"BlueExplosion": gdjs.GameScenceCode.GDBlueExplosionObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.GameScenceCode.GDenemyObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDskillObjects1Objects = Hashtable.newFrom({"skill": gdjs.GameScenceCode.GDskillObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDRedFlameObjects1Objects = Hashtable.newFrom({"RedFlame": gdjs.GameScenceCode.GDRedFlameObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy2Objects1Objects = Hashtable.newFrom({"enemy2": gdjs.GameScenceCode.GDenemy2Objects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDskillObjects1Objects = Hashtable.newFrom({"skill": gdjs.GameScenceCode.GDskillObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDBlueFlameObjects1Objects = Hashtable.newFrom({"BlueFlame": gdjs.GameScenceCode.GDBlueFlameObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy3Objects1Objects = Hashtable.newFrom({"enemy3": gdjs.GameScenceCode.GDenemy3Objects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDskillObjects1Objects = Hashtable.newFrom({"skill": gdjs.GameScenceCode.GDskillObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDBlueExplosionObjects1Objects = Hashtable.newFrom({"BlueExplosion": gdjs.GameScenceCode.GDBlueExplosionObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.GameScenceCode.GDenemyObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.GameScenceCode.GDNewSpriteObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.GameScenceCode.GDNewSpriteObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy2Objects1Objects = Hashtable.newFrom({"enemy2": gdjs.GameScenceCode.GDenemy2Objects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.GameScenceCode.GDNewSpriteObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.GameScenceCode.GDNewSpriteObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy3Objects1Objects = Hashtable.newFrom({"enemy3": gdjs.GameScenceCode.GDenemy3Objects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.GameScenceCode.GDNewSpriteObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.GameScenceCode.GDNewSpriteObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GameScenceCode.GDplayerObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDcoinObjects1Objects = Hashtable.newFrom({"coin": gdjs.GameScenceCode.GDcoinObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDAirWallObjects1Objects = Hashtable.newFrom({"AirWall": gdjs.GameScenceCode.GDAirWallObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GameScenceCode.GDplayerObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GameScenceCode.GDplayerObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GameScenceCode.GDplayerObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GameScenceCode.GDplayerObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.GameScenceCode.GDenemyObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GameScenceCode.GDplayerObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy2Objects1Objects = Hashtable.newFrom({"enemy2": gdjs.GameScenceCode.GDenemy2Objects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GameScenceCode.GDplayerObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy3Objects1Objects = Hashtable.newFrom({"enemy3": gdjs.GameScenceCode.GDenemy3Objects1});
gdjs.GameScenceCode.asyncCallback15051620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameScenceCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("coinBar"), gdjs.GameScenceCode.GDcoinBarObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Score_").setNumber((( gdjs.GameScenceCode.GDcoinBarObjects2.length === 0 ) ? 0 :gdjs.GameScenceCode.GDcoinBarObjects2[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Score2", false);
}gdjs.GameScenceCode.localVariables.length = 0;
}
gdjs.GameScenceCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameScenceCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameScenceCode.asyncCallback15051620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameScenceCode.asyncCallback15053092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameScenceCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("coinBar"), gdjs.GameScenceCode.GDcoinBarObjects2);

{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Score_").setNumber((( gdjs.GameScenceCode.GDcoinBarObjects2.length === 0 ) ? 0 :gdjs.GameScenceCode.GDcoinBarObjects2[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Score2", false);
}gdjs.GameScenceCode.localVariables.length = 0;
}
gdjs.GameScenceCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameScenceCode.localVariables);
for (const obj of gdjs.GameScenceCode.GDcoinBarObjects1) asyncObjectsList.addObject("coinBar", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameScenceCode.asyncCallback15053092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameScenceCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScenceCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.GameScenceCode.GDplayerObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.GameScenceCode.GDplayerObjects2[k] = gdjs.GameScenceCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.GameScenceCode.GDplayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameScenceCode.GDNewSpriteObjects2);
{for(var i = 0, len = gdjs.GameScenceCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.GameScenceCode.GDNewSpriteObjects2[i].addPolarForce(0, -(500), 1);
}
}{for(var i = 0, len = gdjs.GameScenceCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.GameScenceCode.GDNewSpriteObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScenceCode.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.GameScenceCode.GDplayerObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.GameScenceCode.GDplayerObjects1[k] = gdjs.GameScenceCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.GameScenceCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameScenceCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.GameScenceCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDNewSpriteObjects1[i].addPolarForce(0, 500, 1);
}
}}

}


};gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GameScenceCode.GDplayerObjects1});
gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDcoinObjects1Objects = Hashtable.newFrom({"coin": gdjs.GameScenceCode.GDcoinObjects1});
gdjs.GameScenceCode.eventsList9 = function(runtimeScene) {

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
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Y", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14999444);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects1);
gdjs.GameScenceCode.GDbulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDbulletObjects1Objects, (( gdjs.GameScenceCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.GameScenceCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.GameScenceCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.GameScenceCode.GDplayerObjects1[0].getCenterYInScene()), "");
}
{ //Subevents
gdjs.GameScenceCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15003308);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects1);
gdjs.GameScenceCode.GDNewSpriteObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDNewSpriteObjects1Objects, (( gdjs.GameScenceCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.GameScenceCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.GameScenceCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.GameScenceCode.GDplayerObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.GameScenceCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDNewSpriteObjects1[i].getBehavior("Scale").setScale(5);
}
}
{ //Subevents
gdjs.GameScenceCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15007660);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects1);
gdjs.GameScenceCode.GDskillObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDskillObjects1Objects, (( gdjs.GameScenceCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.GameScenceCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.GameScenceCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.GameScenceCode.GDplayerObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.GameScenceCode.GDskillObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDskillObjects1[i].getBehavior("Scale").setScale(1);
}
}
{ //Subevents
gdjs.GameScenceCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "怪物生成");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "怪物生成1");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "怪物生成2");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "金幣生成");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "玩家傷害CD");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "music6.aac", gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, "GameScence"), false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "怪物生成") >= 2;
if (isConditionTrue_0) {
gdjs.GameScenceCode.GDenemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemyObjects1Objects, gdjs.randomInRange(0, 1280), gdjs.randomInRange(0, 720), "");
}{for(var i = 0, len = gdjs.GameScenceCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemyObjects1[i].getBehavior("Scale").setScale(4);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "怪物生成");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "怪物生成1") >= 4;
if (isConditionTrue_0) {
gdjs.GameScenceCode.GDenemy2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy2Objects1Objects, gdjs.randomInRange(0, 1280), gdjs.randomInRange(0, 720), "");
}{for(var i = 0, len = gdjs.GameScenceCode.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemy2Objects1[i].getBehavior("Scale").setScale(4);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "怪物生成1");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "怪物生成2") >= 6;
if (isConditionTrue_0) {
gdjs.GameScenceCode.GDenemy3Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy3Objects1Objects, gdjs.randomInRange(0, 1280), gdjs.randomInRange(0, 720), "");
}{for(var i = 0, len = gdjs.GameScenceCode.GDenemy3Objects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemy3Objects1[i].getBehavior("Scale").setScale(4);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "怪物生成2");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "金幣生成") >= 2.5;
if (isConditionTrue_0) {
gdjs.GameScenceCode.GDcoinObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDcoinObjects1Objects, gdjs.randomInRange(0, 1280), gdjs.randomInRange(0, 720), "");
}{for(var i = 0, len = gdjs.GameScenceCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDcoinObjects1[i].getBehavior("Scale").setScale(4);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "金幣生成");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.GameScenceCode.GDenemyObjects1);

for (gdjs.GameScenceCode.forEachIndex2 = 0;gdjs.GameScenceCode.forEachIndex2 < gdjs.GameScenceCode.GDenemyObjects1.length;++gdjs.GameScenceCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects2);
gdjs.GameScenceCode.GDenemyObjects2.length = 0;


gdjs.GameScenceCode.forEachTemporary2 = gdjs.GameScenceCode.GDenemyObjects1[gdjs.GameScenceCode.forEachIndex2];
gdjs.GameScenceCode.GDenemyObjects2.push(gdjs.GameScenceCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.GameScenceCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemyObjects2[i].addForceTowardObject((gdjs.GameScenceCode.GDplayerObjects2.length !== 0 ? gdjs.GameScenceCode.GDplayerObjects2[0] : null), 360, 0);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy2"), gdjs.GameScenceCode.GDenemy2Objects1);

for (gdjs.GameScenceCode.forEachIndex2 = 0;gdjs.GameScenceCode.forEachIndex2 < gdjs.GameScenceCode.GDenemy2Objects1.length;++gdjs.GameScenceCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects2);
gdjs.GameScenceCode.GDenemy2Objects2.length = 0;


gdjs.GameScenceCode.forEachTemporary2 = gdjs.GameScenceCode.GDenemy2Objects1[gdjs.GameScenceCode.forEachIndex2];
gdjs.GameScenceCode.GDenemy2Objects2.push(gdjs.GameScenceCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.GameScenceCode.GDenemy2Objects2.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemy2Objects2[i].addForceTowardObject((gdjs.GameScenceCode.GDplayerObjects2.length !== 0 ? gdjs.GameScenceCode.GDplayerObjects2[0] : null), 325, 0);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy3"), gdjs.GameScenceCode.GDenemy3Objects1);

for (gdjs.GameScenceCode.forEachIndex2 = 0;gdjs.GameScenceCode.forEachIndex2 < gdjs.GameScenceCode.GDenemy3Objects1.length;++gdjs.GameScenceCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects2);
gdjs.GameScenceCode.GDenemy3Objects2.length = 0;


gdjs.GameScenceCode.forEachTemporary2 = gdjs.GameScenceCode.GDenemy3Objects1[gdjs.GameScenceCode.forEachIndex2];
gdjs.GameScenceCode.GDenemy3Objects2.push(gdjs.GameScenceCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.GameScenceCode.GDenemy3Objects2.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemy3Objects2[i].addForceTowardObject((gdjs.GameScenceCode.GDplayerObjects2.length !== 0 ? gdjs.GameScenceCode.GDplayerObjects2[0] : null), 290, 0);
}
}}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.GameScenceCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDplayerObjects1[i].addForce(0, -(500), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.GameScenceCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDplayerObjects1[i].addForce(0, 500, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.GameScenceCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDplayerObjects1[i].addForce(-(500), 0, 0);
}
}{for(var i = 0, len = gdjs.GameScenceCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDplayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.GameScenceCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDplayerObjects1[i].addForce(500, 0, 0);
}
}{for(var i = 0, len = gdjs.GameScenceCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDplayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.GameScenceCode.GDbulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.GameScenceCode.GDenemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemyObjects1Objects, gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDbulletObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15027836);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScenceCode.GDenemyObjects1 */
gdjs.GameScenceCode.GDRedFlameObjects1.length = 0;

{for(var i = 0, len = gdjs.GameScenceCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemyObjects1[i].returnVariable(gdjs.GameScenceCode.GDenemyObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDRedFlameObjects1Objects, (( gdjs.GameScenceCode.GDenemyObjects1.length === 0 ) ? 0 :gdjs.GameScenceCode.GDenemyObjects1[0].getAABBCenterX()), (( gdjs.GameScenceCode.GDenemyObjects1.length === 0 ) ? 0 :gdjs.GameScenceCode.GDenemyObjects1[0].getAABBCenterY()), "");
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "music2.aac", 0, false, 15, 1);
}{for(var i = 0, len = gdjs.GameScenceCode.GDRedFlameObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDRedFlameObjects1[i].setParticleLifeTimeMax(0.2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.GameScenceCode.GDbulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy2"), gdjs.GameScenceCode.GDenemy2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy2Objects1Objects, gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDbulletObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15029556);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScenceCode.GDenemy2Objects1 */
gdjs.GameScenceCode.GDBlueFlameObjects1.length = 0;

{for(var i = 0, len = gdjs.GameScenceCode.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemy2Objects1[i].returnVariable(gdjs.GameScenceCode.GDenemy2Objects1[i].getVariables().getFromIndex(0)).sub(1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDBlueFlameObjects1Objects, (( gdjs.GameScenceCode.GDenemy2Objects1.length === 0 ) ? 0 :gdjs.GameScenceCode.GDenemy2Objects1[0].getAABBCenterX()), (( gdjs.GameScenceCode.GDenemy2Objects1.length === 0 ) ? 0 :gdjs.GameScenceCode.GDenemy2Objects1[0].getAABBCenterY()), "");
}{for(var i = 0, len = gdjs.GameScenceCode.GDBlueFlameObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDBlueFlameObjects1[i].setParticleLifeTimeMax(0.2);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "music2.aac", 0, false, 15, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.GameScenceCode.GDbulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy3"), gdjs.GameScenceCode.GDenemy3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy3Objects1Objects, gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDbulletObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15031644);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScenceCode.GDenemy3Objects1 */
gdjs.GameScenceCode.GDBlueExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.GameScenceCode.GDenemy3Objects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemy3Objects1[i].returnVariable(gdjs.GameScenceCode.GDenemy3Objects1[i].getVariables().getFromIndex(0)).sub(1);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "music2.aac", 0, false, 15, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDBlueExplosionObjects1Objects, (( gdjs.GameScenceCode.GDenemy3Objects1.length === 0 ) ? 0 :gdjs.GameScenceCode.GDenemy3Objects1[0].getAABBCenterX()), (( gdjs.GameScenceCode.GDenemy3Objects1.length === 0 ) ? 0 :gdjs.GameScenceCode.GDenemy3Objects1[0].getAABBCenterY()), "");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.GameScenceCode.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("skill"), gdjs.GameScenceCode.GDskillObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemyObjects1Objects, gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDskillObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15033604);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScenceCode.GDenemyObjects1 */
gdjs.GameScenceCode.GDRedFlameObjects1.length = 0;

{for(var i = 0, len = gdjs.GameScenceCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemyObjects1[i].returnVariable(gdjs.GameScenceCode.GDenemyObjects1[i].getVariables().getFromIndex(0)).sub(2);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDRedFlameObjects1Objects, (( gdjs.GameScenceCode.GDenemyObjects1.length === 0 ) ? 0 :gdjs.GameScenceCode.GDenemyObjects1[0].getAABBCenterX()), (( gdjs.GameScenceCode.GDenemyObjects1.length === 0 ) ? 0 :gdjs.GameScenceCode.GDenemyObjects1[0].getAABBCenterY()), "");
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "music1.aac", 0, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy2"), gdjs.GameScenceCode.GDenemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("skill"), gdjs.GameScenceCode.GDskillObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy2Objects1Objects, gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDskillObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15035244);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScenceCode.GDenemy2Objects1 */
gdjs.GameScenceCode.GDBlueFlameObjects1.length = 0;

{for(var i = 0, len = gdjs.GameScenceCode.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemy2Objects1[i].returnVariable(gdjs.GameScenceCode.GDenemy2Objects1[i].getVariables().getFromIndex(0)).sub(2);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDBlueFlameObjects1Objects, (( gdjs.GameScenceCode.GDenemy2Objects1.length === 0 ) ? 0 :gdjs.GameScenceCode.GDenemy2Objects1[0].getAABBCenterX()), (( gdjs.GameScenceCode.GDenemy2Objects1.length === 0 ) ? 0 :gdjs.GameScenceCode.GDenemy2Objects1[0].getAABBCenterY()), "");
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "music1.aac", 0, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy3"), gdjs.GameScenceCode.GDenemy3Objects1);
gdjs.copyArray(runtimeScene.getObjects("skill"), gdjs.GameScenceCode.GDskillObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy3Objects1Objects, gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDskillObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15036884);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScenceCode.GDenemy3Objects1 */
gdjs.GameScenceCode.GDBlueExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.GameScenceCode.GDenemy3Objects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemy3Objects1[i].returnVariable(gdjs.GameScenceCode.GDenemy3Objects1[i].getVariables().getFromIndex(0)).sub(2);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "music1.aac", 0, false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDBlueExplosionObjects1Objects, (( gdjs.GameScenceCode.GDenemy3Objects1.length === 0 ) ? 0 :gdjs.GameScenceCode.GDenemy3Objects1[0].getAABBCenterX()), (( gdjs.GameScenceCode.GDenemy3Objects1.length === 0 ) ? 0 :gdjs.GameScenceCode.GDenemy3Objects1[0].getAABBCenterY()), "");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameScenceCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.GameScenceCode.GDenemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemyObjects1Objects, gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameScenceCode.GDNewSpriteObjects1 */
/* Reuse gdjs.GameScenceCode.GDenemyObjects1 */
{for(var i = 0, len = gdjs.GameScenceCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemyObjects1[i].separateFromObjectsList(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDNewSpriteObjects1Objects, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameScenceCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy2"), gdjs.GameScenceCode.GDenemy2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy2Objects1Objects, gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameScenceCode.GDNewSpriteObjects1 */
/* Reuse gdjs.GameScenceCode.GDenemy2Objects1 */
{for(var i = 0, len = gdjs.GameScenceCode.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemy2Objects1[i].separateFromObjectsList(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDNewSpriteObjects1Objects, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameScenceCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy3"), gdjs.GameScenceCode.GDenemy3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy3Objects1Objects, gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameScenceCode.GDNewSpriteObjects1 */
/* Reuse gdjs.GameScenceCode.GDenemy3Objects1 */
{for(var i = 0, len = gdjs.GameScenceCode.GDenemy3Objects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemy3Objects1[i].separateFromObjectsList(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDNewSpriteObjects1Objects, true);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.GameScenceCode.GDenemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScenceCode.GDenemyObjects1.length;i<l;++i) {
    if ( gdjs.GameScenceCode.GDenemyObjects1[i].getVariableNumber(gdjs.GameScenceCode.GDenemyObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameScenceCode.GDenemyObjects1[k] = gdjs.GameScenceCode.GDenemyObjects1[i];
        ++k;
    }
}
gdjs.GameScenceCode.GDenemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScenceCode.GDenemyObjects1 */
{for(var i = 0, len = gdjs.GameScenceCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy2"), gdjs.GameScenceCode.GDenemy2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScenceCode.GDenemy2Objects1.length;i<l;++i) {
    if ( gdjs.GameScenceCode.GDenemy2Objects1[i].getVariableNumber(gdjs.GameScenceCode.GDenemy2Objects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameScenceCode.GDenemy2Objects1[k] = gdjs.GameScenceCode.GDenemy2Objects1[i];
        ++k;
    }
}
gdjs.GameScenceCode.GDenemy2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScenceCode.GDenemy2Objects1 */
{for(var i = 0, len = gdjs.GameScenceCode.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemy2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy3"), gdjs.GameScenceCode.GDenemy3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScenceCode.GDenemy3Objects1.length;i<l;++i) {
    if ( gdjs.GameScenceCode.GDenemy3Objects1[i].getVariableNumber(gdjs.GameScenceCode.GDenemy3Objects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameScenceCode.GDenemy3Objects1[k] = gdjs.GameScenceCode.GDenemy3Objects1[i];
        ++k;
    }
}
gdjs.GameScenceCode.GDenemy3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScenceCode.GDenemy3Objects1 */
{for(var i = 0, len = gdjs.GameScenceCode.GDenemy3Objects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemy3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("coin"), gdjs.GameScenceCode.GDcoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDplayerObjects1Objects, gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDcoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameScenceCode.GDcoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("coinBar"), gdjs.GameScenceCode.GDcoinBarObjects1);
{for(var i = 0, len = gdjs.GameScenceCode.GDcoinBarObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDcoinBarObjects1[i].SetValue(gdjs.GameScenceCode.GDcoinBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameScenceCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDcoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Score_").add(1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.GameScenceCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.GameScenceCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDscoreObjects1[i].getBehavior("Text").setText("Score : " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Score_").getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AirWall"), gdjs.GameScenceCode.GDAirWallObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.GameScenceCode.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy2"), gdjs.GameScenceCode.GDenemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("enemy3"), gdjs.GameScenceCode.GDenemy3Objects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.GameScenceCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDplayerObjects1[i].separateFromObjectsList(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDAirWallObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.GameScenceCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemyObjects1[i].separateFromObjectsList(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDplayerObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.GameScenceCode.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemy2Objects1[i].separateFromObjectsList(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDplayerObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.GameScenceCode.GDenemy3Objects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDenemy3Objects1[i].separateFromObjectsList(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDplayerObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.GameScenceCode.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDplayerObjects1Objects, gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15046668);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.GameScenceCode.GDMetalRedBarObjects1);
{for(var i = 0, len = gdjs.GameScenceCode.GDMetalRedBarObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDMetalRedBarObjects1[i].SetValue(gdjs.GameScenceCode.GDMetalRedBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy2"), gdjs.GameScenceCode.GDenemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDplayerObjects1Objects, gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15048124);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.GameScenceCode.GDMetalRedBarObjects1);
{for(var i = 0, len = gdjs.GameScenceCode.GDMetalRedBarObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDMetalRedBarObjects1[i].SetValue(gdjs.GameScenceCode.GDMetalRedBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy3"), gdjs.GameScenceCode.GDenemy3Objects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDplayerObjects1Objects, gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDenemy3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15049580);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.GameScenceCode.GDMetalRedBarObjects1);
{for(var i = 0, len = gdjs.GameScenceCode.GDMetalRedBarObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDMetalRedBarObjects1[i].SetValue(gdjs.GameScenceCode.GDMetalRedBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MetalRedBar"), gdjs.GameScenceCode.GDMetalRedBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScenceCode.GDMetalRedBarObjects1.length;i<l;++i) {
    if ( gdjs.GameScenceCode.GDMetalRedBarObjects1[i].IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameScenceCode.GDMetalRedBarObjects1[k] = gdjs.GameScenceCode.GDMetalRedBarObjects1[i];
        ++k;
    }
}
gdjs.GameScenceCode.GDMetalRedBarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.GameScenceCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDplayerObjects1[i].getBehavior("Animation").setAnimationName("die");
}
}{for(var i = 0, len = gdjs.GameScenceCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDplayerObjects1[i].clearForces();
}
}
{ //Subevents
gdjs.GameScenceCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("coinBar"), gdjs.GameScenceCode.GDcoinBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScenceCode.GDcoinBarObjects1.length;i<l;++i) {
    if ( gdjs.GameScenceCode.GDcoinBarObjects1[i].IsFull((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameScenceCode.GDcoinBarObjects1[k] = gdjs.GameScenceCode.GDcoinBarObjects1[i];
        ++k;
    }
}
gdjs.GameScenceCode.GDcoinBarObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameScenceCode.eventsList7(runtimeScene);} //End of subevents
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
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15055380);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.GameScenceCode.eventsList8(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("coin"), gdjs.GameScenceCode.GDcoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameScenceCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDplayerObjects1Objects, gdjs.GameScenceCode.mapOfGDgdjs_9546GameScenceCode_9546GDcoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameScenceCode.GDcoinObjects1 */
{for(var i = 0, len = gdjs.GameScenceCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.GameScenceCode.GDcoinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GameScenceCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameScenceCode.GDplayerObjects1.length = 0;
gdjs.GameScenceCode.GDplayerObjects2.length = 0;
gdjs.GameScenceCode.GDplayerObjects3.length = 0;
gdjs.GameScenceCode.GDbulletObjects1.length = 0;
gdjs.GameScenceCode.GDbulletObjects2.length = 0;
gdjs.GameScenceCode.GDbulletObjects3.length = 0;
gdjs.GameScenceCode.GDenemyObjects1.length = 0;
gdjs.GameScenceCode.GDenemyObjects2.length = 0;
gdjs.GameScenceCode.GDenemyObjects3.length = 0;
gdjs.GameScenceCode.GDAirWallObjects1.length = 0;
gdjs.GameScenceCode.GDAirWallObjects2.length = 0;
gdjs.GameScenceCode.GDAirWallObjects3.length = 0;
gdjs.GameScenceCode.GDNewSpriteObjects1.length = 0;
gdjs.GameScenceCode.GDNewSpriteObjects2.length = 0;
gdjs.GameScenceCode.GDNewSpriteObjects3.length = 0;
gdjs.GameScenceCode.GDTestObjects1.length = 0;
gdjs.GameScenceCode.GDTestObjects2.length = 0;
gdjs.GameScenceCode.GDTestObjects3.length = 0;
gdjs.GameScenceCode.GDGoldGreenBarObjects1.length = 0;
gdjs.GameScenceCode.GDGoldGreenBarObjects2.length = 0;
gdjs.GameScenceCode.GDGoldGreenBarObjects3.length = 0;
gdjs.GameScenceCode.GDMetalRedBarObjects1.length = 0;
gdjs.GameScenceCode.GDMetalRedBarObjects2.length = 0;
gdjs.GameScenceCode.GDMetalRedBarObjects3.length = 0;
gdjs.GameScenceCode.GDenemy2Objects1.length = 0;
gdjs.GameScenceCode.GDenemy2Objects2.length = 0;
gdjs.GameScenceCode.GDenemy2Objects3.length = 0;
gdjs.GameScenceCode.GDenemy3Objects1.length = 0;
gdjs.GameScenceCode.GDenemy3Objects2.length = 0;
gdjs.GameScenceCode.GDenemy3Objects3.length = 0;
gdjs.GameScenceCode.GDNewSprite2Objects1.length = 0;
gdjs.GameScenceCode.GDNewSprite2Objects2.length = 0;
gdjs.GameScenceCode.GDNewSprite2Objects3.length = 0;
gdjs.GameScenceCode.GDcoinObjects1.length = 0;
gdjs.GameScenceCode.GDcoinObjects2.length = 0;
gdjs.GameScenceCode.GDcoinObjects3.length = 0;
gdjs.GameScenceCode.GDcoinBarObjects1.length = 0;
gdjs.GameScenceCode.GDcoinBarObjects2.length = 0;
gdjs.GameScenceCode.GDcoinBarObjects3.length = 0;
gdjs.GameScenceCode.GDBG_9595Forest2Objects1.length = 0;
gdjs.GameScenceCode.GDBG_9595Forest2Objects2.length = 0;
gdjs.GameScenceCode.GDBG_9595Forest2Objects3.length = 0;
gdjs.GameScenceCode.GDzObjects1.length = 0;
gdjs.GameScenceCode.GDzObjects2.length = 0;
gdjs.GameScenceCode.GDzObjects3.length = 0;
gdjs.GameScenceCode.GDdefenseObjects1.length = 0;
gdjs.GameScenceCode.GDdefenseObjects2.length = 0;
gdjs.GameScenceCode.GDdefenseObjects3.length = 0;
gdjs.GameScenceCode.GDxObjects1.length = 0;
gdjs.GameScenceCode.GDxObjects2.length = 0;
gdjs.GameScenceCode.GDxObjects3.length = 0;
gdjs.GameScenceCode.GDattackObjects1.length = 0;
gdjs.GameScenceCode.GDattackObjects2.length = 0;
gdjs.GameScenceCode.GDattackObjects3.length = 0;
gdjs.GameScenceCode.GDskillObjects1.length = 0;
gdjs.GameScenceCode.GDskillObjects2.length = 0;
gdjs.GameScenceCode.GDskillObjects3.length = 0;
gdjs.GameScenceCode.GDRedFlameObjects1.length = 0;
gdjs.GameScenceCode.GDRedFlameObjects2.length = 0;
gdjs.GameScenceCode.GDRedFlameObjects3.length = 0;
gdjs.GameScenceCode.GDBlueFlameObjects1.length = 0;
gdjs.GameScenceCode.GDBlueFlameObjects2.length = 0;
gdjs.GameScenceCode.GDBlueFlameObjects3.length = 0;
gdjs.GameScenceCode.GDMagic2Objects1.length = 0;
gdjs.GameScenceCode.GDMagic2Objects2.length = 0;
gdjs.GameScenceCode.GDMagic2Objects3.length = 0;
gdjs.GameScenceCode.GDBlueExplosionObjects1.length = 0;
gdjs.GameScenceCode.GDBlueExplosionObjects2.length = 0;
gdjs.GameScenceCode.GDBlueExplosionObjects3.length = 0;
gdjs.GameScenceCode.GDspaceObjects1.length = 0;
gdjs.GameScenceCode.GDspaceObjects2.length = 0;
gdjs.GameScenceCode.GDspaceObjects3.length = 0;
gdjs.GameScenceCode.GDskill2Objects1.length = 0;
gdjs.GameScenceCode.GDskill2Objects2.length = 0;
gdjs.GameScenceCode.GDskill2Objects3.length = 0;
gdjs.GameScenceCode.GDAObjects1.length = 0;
gdjs.GameScenceCode.GDAObjects2.length = 0;
gdjs.GameScenceCode.GDAObjects3.length = 0;
gdjs.GameScenceCode.GDBObjects1.length = 0;
gdjs.GameScenceCode.GDBObjects2.length = 0;
gdjs.GameScenceCode.GDBObjects3.length = 0;
gdjs.GameScenceCode.GDYObjects1.length = 0;
gdjs.GameScenceCode.GDYObjects2.length = 0;
gdjs.GameScenceCode.GDYObjects3.length = 0;
gdjs.GameScenceCode.GDbackObjects1.length = 0;
gdjs.GameScenceCode.GDbackObjects2.length = 0;
gdjs.GameScenceCode.GDbackObjects3.length = 0;
gdjs.GameScenceCode.GDscoreObjects1.length = 0;
gdjs.GameScenceCode.GDscoreObjects2.length = 0;
gdjs.GameScenceCode.GDscoreObjects3.length = 0;

gdjs.GameScenceCode.eventsList9(runtimeScene);
gdjs.GameScenceCode.GDplayerObjects1.length = 0;
gdjs.GameScenceCode.GDplayerObjects2.length = 0;
gdjs.GameScenceCode.GDplayerObjects3.length = 0;
gdjs.GameScenceCode.GDbulletObjects1.length = 0;
gdjs.GameScenceCode.GDbulletObjects2.length = 0;
gdjs.GameScenceCode.GDbulletObjects3.length = 0;
gdjs.GameScenceCode.GDenemyObjects1.length = 0;
gdjs.GameScenceCode.GDenemyObjects2.length = 0;
gdjs.GameScenceCode.GDenemyObjects3.length = 0;
gdjs.GameScenceCode.GDAirWallObjects1.length = 0;
gdjs.GameScenceCode.GDAirWallObjects2.length = 0;
gdjs.GameScenceCode.GDAirWallObjects3.length = 0;
gdjs.GameScenceCode.GDNewSpriteObjects1.length = 0;
gdjs.GameScenceCode.GDNewSpriteObjects2.length = 0;
gdjs.GameScenceCode.GDNewSpriteObjects3.length = 0;
gdjs.GameScenceCode.GDTestObjects1.length = 0;
gdjs.GameScenceCode.GDTestObjects2.length = 0;
gdjs.GameScenceCode.GDTestObjects3.length = 0;
gdjs.GameScenceCode.GDGoldGreenBarObjects1.length = 0;
gdjs.GameScenceCode.GDGoldGreenBarObjects2.length = 0;
gdjs.GameScenceCode.GDGoldGreenBarObjects3.length = 0;
gdjs.GameScenceCode.GDMetalRedBarObjects1.length = 0;
gdjs.GameScenceCode.GDMetalRedBarObjects2.length = 0;
gdjs.GameScenceCode.GDMetalRedBarObjects3.length = 0;
gdjs.GameScenceCode.GDenemy2Objects1.length = 0;
gdjs.GameScenceCode.GDenemy2Objects2.length = 0;
gdjs.GameScenceCode.GDenemy2Objects3.length = 0;
gdjs.GameScenceCode.GDenemy3Objects1.length = 0;
gdjs.GameScenceCode.GDenemy3Objects2.length = 0;
gdjs.GameScenceCode.GDenemy3Objects3.length = 0;
gdjs.GameScenceCode.GDNewSprite2Objects1.length = 0;
gdjs.GameScenceCode.GDNewSprite2Objects2.length = 0;
gdjs.GameScenceCode.GDNewSprite2Objects3.length = 0;
gdjs.GameScenceCode.GDcoinObjects1.length = 0;
gdjs.GameScenceCode.GDcoinObjects2.length = 0;
gdjs.GameScenceCode.GDcoinObjects3.length = 0;
gdjs.GameScenceCode.GDcoinBarObjects1.length = 0;
gdjs.GameScenceCode.GDcoinBarObjects2.length = 0;
gdjs.GameScenceCode.GDcoinBarObjects3.length = 0;
gdjs.GameScenceCode.GDBG_9595Forest2Objects1.length = 0;
gdjs.GameScenceCode.GDBG_9595Forest2Objects2.length = 0;
gdjs.GameScenceCode.GDBG_9595Forest2Objects3.length = 0;
gdjs.GameScenceCode.GDzObjects1.length = 0;
gdjs.GameScenceCode.GDzObjects2.length = 0;
gdjs.GameScenceCode.GDzObjects3.length = 0;
gdjs.GameScenceCode.GDdefenseObjects1.length = 0;
gdjs.GameScenceCode.GDdefenseObjects2.length = 0;
gdjs.GameScenceCode.GDdefenseObjects3.length = 0;
gdjs.GameScenceCode.GDxObjects1.length = 0;
gdjs.GameScenceCode.GDxObjects2.length = 0;
gdjs.GameScenceCode.GDxObjects3.length = 0;
gdjs.GameScenceCode.GDattackObjects1.length = 0;
gdjs.GameScenceCode.GDattackObjects2.length = 0;
gdjs.GameScenceCode.GDattackObjects3.length = 0;
gdjs.GameScenceCode.GDskillObjects1.length = 0;
gdjs.GameScenceCode.GDskillObjects2.length = 0;
gdjs.GameScenceCode.GDskillObjects3.length = 0;
gdjs.GameScenceCode.GDRedFlameObjects1.length = 0;
gdjs.GameScenceCode.GDRedFlameObjects2.length = 0;
gdjs.GameScenceCode.GDRedFlameObjects3.length = 0;
gdjs.GameScenceCode.GDBlueFlameObjects1.length = 0;
gdjs.GameScenceCode.GDBlueFlameObjects2.length = 0;
gdjs.GameScenceCode.GDBlueFlameObjects3.length = 0;
gdjs.GameScenceCode.GDMagic2Objects1.length = 0;
gdjs.GameScenceCode.GDMagic2Objects2.length = 0;
gdjs.GameScenceCode.GDMagic2Objects3.length = 0;
gdjs.GameScenceCode.GDBlueExplosionObjects1.length = 0;
gdjs.GameScenceCode.GDBlueExplosionObjects2.length = 0;
gdjs.GameScenceCode.GDBlueExplosionObjects3.length = 0;
gdjs.GameScenceCode.GDspaceObjects1.length = 0;
gdjs.GameScenceCode.GDspaceObjects2.length = 0;
gdjs.GameScenceCode.GDspaceObjects3.length = 0;
gdjs.GameScenceCode.GDskill2Objects1.length = 0;
gdjs.GameScenceCode.GDskill2Objects2.length = 0;
gdjs.GameScenceCode.GDskill2Objects3.length = 0;
gdjs.GameScenceCode.GDAObjects1.length = 0;
gdjs.GameScenceCode.GDAObjects2.length = 0;
gdjs.GameScenceCode.GDAObjects3.length = 0;
gdjs.GameScenceCode.GDBObjects1.length = 0;
gdjs.GameScenceCode.GDBObjects2.length = 0;
gdjs.GameScenceCode.GDBObjects3.length = 0;
gdjs.GameScenceCode.GDYObjects1.length = 0;
gdjs.GameScenceCode.GDYObjects2.length = 0;
gdjs.GameScenceCode.GDYObjects3.length = 0;
gdjs.GameScenceCode.GDbackObjects1.length = 0;
gdjs.GameScenceCode.GDbackObjects2.length = 0;
gdjs.GameScenceCode.GDbackObjects3.length = 0;
gdjs.GameScenceCode.GDscoreObjects1.length = 0;
gdjs.GameScenceCode.GDscoreObjects2.length = 0;
gdjs.GameScenceCode.GDscoreObjects3.length = 0;


return;

}

gdjs['GameScenceCode'] = gdjs.GameScenceCode;
