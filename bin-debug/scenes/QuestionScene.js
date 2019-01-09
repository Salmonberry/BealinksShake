var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var HauntedHouse;
(function (HauntedHouse) {
    var QuestionScene = (function (_super) {
        __extends(QuestionScene, _super);
        function QuestionScene() {
            var _this = _super.call(this) || this;
            QuestionScene.instance = _this;
            return _this;
        }
        QuestionScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            // this.textTweenGroup.play(0);
            // this.questionFirstSoundChanel = RES.getRes('question_first_bgm_mp3').play(0,1);
            this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick, this);
        };
        QuestionScene.prototype.onStartButtonClick = function () {
            this.startMask.visible = false;
            this.startButton.visible = false;
            // init();
            //  this.onStarquestion();
        };
        QuestionScene.prototype.onStartQuestion = function () {
            this.textTweenGroup.play(0);
            this.questionFirstSoundChanel = RES.getRes('question_first_bgm_mp3').play(0, 1);
            this.questionFirstSoundChanel.addEventListener(egret.Event.SOUND_COMPLETE, this.onquestionFirstSoundChanel, this);
            console.log("dddd");
        };
        QuestionScene.prototype.onquestionFirstSoundChanel = function () {
            this.questionSecondSoundChanel = RES.getRes('question_second_bgm_mp3').play(0, 1);
            this.questionSecondSoundChanel.addEventListener(egret.Event.SOUND_COMPLETE, this.onquestionSecondSoundChanel, this);
        };
        QuestionScene.prototype.onquestionSecondSoundChanel = function () {
            this.questionThirdSoundChanel = RES.getRes('question_third_bgm_mp3').play(0, 1);
            this.questionThirdSoundChanel.addEventListener(egret.Event.SOUND_COMPLETE, this.onquestionThirdSoundChanel, this);
        };
        QuestionScene.prototype.onquestionThirdSoundChanel = function () {
            this.questionForthSoundChanel = RES.getRes('question_forth_bgm_mp3').play(0, 1);
            this.questionForthSoundChanel.addEventListener(egret.Event.SOUND_COMPLETE, this.nextScene, this);
        };
        QuestionScene.prototype.nextScene = function () {
            // mouse.setButtonMode(this.QusetionSceneButton, true);
            // this.QusetionSceneButton.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>Main.instance.gotoScene(new SeeScene), this);
            console.log("dsdsdsd");
        };
        return QuestionScene;
    }(eui.Component));
    HauntedHouse.QuestionScene = QuestionScene;
    __reflect(QuestionScene.prototype, "HauntedHouse.QuestionScene", ["eui.UIComponent", "egret.DisplayObject"]);
})(HauntedHouse || (HauntedHouse = {}));
//# sourceMappingURL=QuestionScene.js.map