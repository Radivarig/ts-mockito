"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArgCaptor = (function () {
    function ArgCaptor(actions) {
        this.actions = actions;
    }
    ArgCaptor.prototype.first = function () {
        return this.byCallIndex(0);
    };
    ArgCaptor.prototype.second = function () {
        return this.byCallIndex(1);
    };
    ArgCaptor.prototype.third = function () {
        return this.byCallIndex(2);
    };
    ArgCaptor.prototype.beforeLast = function () {
        return this.byCallIndex(this.actions.length - 2);
    };
    ArgCaptor.prototype.last = function () {
        return this.byCallIndex(this.actions.length - 1);
    };
    ArgCaptor.prototype.byCallIndex = function (index) {
        if (index >= this.actions.length) {
            throw new Error("Cannot capture arguments, method has not been called so many times: " + (index + 1));
        }
        return this.actions[index].args;
    };
    return ArgCaptor;
}());
exports.ArgCaptor = ArgCaptor;
//# sourceMappingURL=ArgCaptor.js.map