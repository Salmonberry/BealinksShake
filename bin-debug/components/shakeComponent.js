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
var shakeComponent = (function (_super) {
    __extends(shakeComponent, _super);
    function shakeComponent() {
        return _super.call(this) || this;
    }
    shakeComponent.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    shakeComponent.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.movieClip();
    };
    shakeComponent.prototype.movieClip = function () {
        var data = RES.getRes("shake_json");
        var txtr = RES.getRes("shake_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc1 = new egret.MovieClip(mcFactory.generateMovieClipData("shake"));
        this.addChild(mc1);
        mc1.play(-1);
    };
    return shakeComponent;
}(eui.Component));
__reflect(shakeComponent.prototype, "shakeComponent", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=shakeComponent.js.map