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
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        return _super.call(this) || this;
    }
    StartScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.shake.play(-1);
        this.playGame();
    };
    StartScene.prototype.playGame = function () {
        this.loadingAnim.onLoad();
        setTimeout(function () {
            Main.instance.gotoScene(new secondScene());
        }, 3000);
    };
    return StartScene;
}(eui.Component));
__reflect(StartScene.prototype, "StartScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=StartScene.js.map