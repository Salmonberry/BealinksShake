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
var moiveClipe = (function (_super) {
    __extends(moiveClipe, _super);
    function moiveClipe() {
        var _this = _super.call(this) || this;
        _this._dataSet = '';
        _this._texture = '';
        _this._movieClipName = '';
        return _this;
    }
    moiveClipe.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    moiveClipe.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Object.defineProperty(moiveClipe.prototype, "dataSet", {
        get: function () {
            return this._dataSet;
        },
        set: function (value) {
            this._dataSet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(moiveClipe.prototype, "texture", {
        get: function () {
            return this._texture;
        },
        set: function (value) {
            this._texture = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(moiveClipe.prototype, "movieClipName", {
        get: function () {
            return this._movieClipName;
        },
        set: function (value) {
            this._movieClipName = value;
        },
        enumerable: true,
        configurable: true
    });
    moiveClipe.prototype.play = function (num) {
        var mcFactory = new egret.MovieClipDataFactory(RES.getRes(this.dataSet), RES.getRes(this.texture));
        var mc = new egret.MovieClip(mcFactory.generateMovieClipData(this.movieClipName));
        this.addChild(mc);
        mc.play(num);
    };
    return moiveClipe;
}(eui.Component));
__reflect(moiveClipe.prototype, "moiveClipe", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=moiveClipe.js.map