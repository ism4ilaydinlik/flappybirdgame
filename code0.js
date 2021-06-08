gdjs.MenuCode = {};
gdjs.MenuCode.GDLabel_95flappy_95birdObjects1= [];
gdjs.MenuCode.GDLabel_95flappy_95birdObjects2= [];
gdjs.MenuCode.GDLabel_95flappy_95birdObjects3= [];
gdjs.MenuCode.GDFlappy_95birdObjects1= [];
gdjs.MenuCode.GDFlappy_95birdObjects2= [];
gdjs.MenuCode.GDFlappy_95birdObjects3= [];
gdjs.MenuCode.GDStartObjects1= [];
gdjs.MenuCode.GDStartObjects2= [];
gdjs.MenuCode.GDStartObjects3= [];
gdjs.MenuCode.GDRateObjects1= [];
gdjs.MenuCode.GDRateObjects2= [];
gdjs.MenuCode.GDRateObjects3= [];
gdjs.MenuCode.GDRect_95blackObjects1= [];
gdjs.MenuCode.GDRect_95blackObjects2= [];
gdjs.MenuCode.GDRect_95blackObjects3= [];
gdjs.MenuCode.GDGroundObjects1= [];
gdjs.MenuCode.GDGroundObjects2= [];
gdjs.MenuCode.GDGroundObjects3= [];
gdjs.MenuCode.GDBackground_95dayObjects1= [];
gdjs.MenuCode.GDBackground_95dayObjects2= [];
gdjs.MenuCode.GDBackground_95dayObjects3= [];
gdjs.MenuCode.GDytchannelObjects1= [];
gdjs.MenuCode.GDytchannelObjects2= [];
gdjs.MenuCode.GDytchannelObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.MenuCode.GDStartObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDRect_9595blackObjects2Objects = Hashtable.newFrom({"Rect_black": gdjs.MenuCode.GDRect_95blackObjects2});gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Rect_black"), gdjs.MenuCode.GDRect_95blackObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDRect_95blackObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDRect_95blackObjects2[i].setOpacity(255);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.MenuCode.GDFlappy_95birdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Label_flappy_bird"), gdjs.MenuCode.GDLabel_95flappy_95birdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Rate"), gdjs.MenuCode.GDRateObjects2);
/* Reuse gdjs.MenuCode.GDStartObjects2 */
gdjs.MenuCode.GDRect_95blackObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDRect_9595blackObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.MenuCode.GDRect_95blackObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDRect_95blackObjects2[i].setZOrder(20);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sfx_swooshing.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDFlappy_95birdObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDFlappy_95birdObjects2[i].hide();
}
for(var i = 0, len = gdjs.MenuCode.GDLabel_95flappy_95birdObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLabel_95flappy_95birdObjects2[i].hide();
}
for(var i = 0, len = gdjs.MenuCode.GDStartObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDStartObjects2[i].hide();
}
for(var i = 0, len = gdjs.MenuCode.GDRateObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDRateObjects2[i].hide();
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Rect_black"), gdjs.MenuCode.GDRect_95blackObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDRect_95blackObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDRect_95blackObjects2[i].setOpacity(gdjs.MenuCode.GDRect_95blackObjects2[i].getOpacity() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 150));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rect_black"), gdjs.MenuCode.GDRect_95blackObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDRect_95blackObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDRect_95blackObjects1[i].getOpacity() <= 150 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDRect_95blackObjects1[k] = gdjs.MenuCode.GDRect_95blackObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDRect_95blackObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.MenuCode.GDGroundObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDGroundObjects1[i].setXOffset(gdjs.MenuCode.GDGroundObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


{


gdjs.MenuCode.eventsList1(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDLabel_95flappy_95birdObjects1.length = 0;
gdjs.MenuCode.GDLabel_95flappy_95birdObjects2.length = 0;
gdjs.MenuCode.GDLabel_95flappy_95birdObjects3.length = 0;
gdjs.MenuCode.GDFlappy_95birdObjects1.length = 0;
gdjs.MenuCode.GDFlappy_95birdObjects2.length = 0;
gdjs.MenuCode.GDFlappy_95birdObjects3.length = 0;
gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDStartObjects3.length = 0;
gdjs.MenuCode.GDRateObjects1.length = 0;
gdjs.MenuCode.GDRateObjects2.length = 0;
gdjs.MenuCode.GDRateObjects3.length = 0;
gdjs.MenuCode.GDRect_95blackObjects1.length = 0;
gdjs.MenuCode.GDRect_95blackObjects2.length = 0;
gdjs.MenuCode.GDRect_95blackObjects3.length = 0;
gdjs.MenuCode.GDGroundObjects1.length = 0;
gdjs.MenuCode.GDGroundObjects2.length = 0;
gdjs.MenuCode.GDGroundObjects3.length = 0;
gdjs.MenuCode.GDBackground_95dayObjects1.length = 0;
gdjs.MenuCode.GDBackground_95dayObjects2.length = 0;
gdjs.MenuCode.GDBackground_95dayObjects3.length = 0;
gdjs.MenuCode.GDytchannelObjects1.length = 0;
gdjs.MenuCode.GDytchannelObjects2.length = 0;
gdjs.MenuCode.GDytchannelObjects3.length = 0;

gdjs.MenuCode.eventsList2(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
