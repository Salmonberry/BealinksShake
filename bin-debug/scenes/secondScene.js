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
var app;
(function (app) {
    var secondScene = (function (_super) {
        __extends(secondScene, _super);
        function secondScene() {
            var _this = _super.call(this) || this;
            _this.step = 6;
            _this.MaxHeight = 294;
            _this.MinHeight = 0;
            _this.grabHeight = 0;
            _this.num = 0; //記錄點擊次數
            _this.currentHeight = 0;
            _this.key = false; //判斷當前是否發生點擊
            return _this;
        }
        secondScene.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        secondScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.sliver.width = 0;
            this.sliver.maxWidth = this.MaxHeight;
            this.sliver.minWidth = this.MinHeight;
            this.graf.play(-1);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onUpdateHeight, this);
            this.onGlide();
        };
        secondScene.prototype.onUpdateHeight = function () {
            this.key = true;
            this.onGlide();
        };
        secondScene.prototype.onGlide = function () {
            var _this = this;
            if (this.key) {
                if (this.currentHeight < 286) {
                    this.currentHeight = this.currentHeight + this.step;
                    this.sliver.width = this.currentHeight;
                }
                else {
                    this.sliver.width = this.currentHeight;
                }
                this.key = !this.key;
            }
            else {
                setInterval(function () {
                    _this.sliver.width = _this.sliver.width - _this.step;
                }, 2000);
            }
        };
        secondScene.prototype.noteifyGameComplete = function () {
            if (this.sliver.width == 286) {
                console.log("complete");
            }
        };
        return secondScene;
    }(eui.Component));
    app.secondScene = secondScene;
    __reflect(secondScene.prototype, "app.secondScene", ["eui.UIComponent", "egret.DisplayObject"]);
})(app || (app = {}));
//# sourceMappingURL=secondScene.js.map