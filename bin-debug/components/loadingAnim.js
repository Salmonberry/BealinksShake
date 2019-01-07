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
var loadingAnim = (function (_super) {
    __extends(loadingAnim, _super);
    function loadingAnim() {
        return _super.call(this) || this;
    }
    loadingAnim.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    loadingAnim.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    loadingAnim.prototype.onLoad = function () {
        this.loading.play();
    };
    return loadingAnim;
}(eui.Component));
__reflect(loadingAnim.prototype, "loadingAnim", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=loadingAnim.js.map