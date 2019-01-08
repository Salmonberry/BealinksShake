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
var playGame;
(function (playGame) {
    var StartScene = (function (_super) {
        __extends(StartScene, _super);
        function StartScene() {
            var _this = _super.call(this) || this;
            StartScene.instance = _this;
            return _this;
        }
        // protected partAdded(partName: string, instance: any): void {
        // 	super.partAdded(partName, instance);
        // }
        StartScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.shake.play(-1);
            this.playGamess();
        };
        StartScene.prototype.playGamess = function () {
            // console.log("aaa")
            this.loadingAnim.onLoad();
            setTimeout(function () {
                Main.instance.gotoScene(new app.secondScene());
            }, 3000);
        };
        return StartScene;
    }(eui.Component));
    playGame.StartScene = StartScene;
    __reflect(StartScene.prototype, "playGame.StartScene", ["eui.UIComponent", "egret.DisplayObject"]);
})(playGame || (playGame = {}));
//# sourceMappingURL=StartScene.js.map