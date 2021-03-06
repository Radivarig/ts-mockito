"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ArgsToMatchersValidator_1 = require("../matcher/ArgsToMatchersValidator");
var AbstractMethodStub_1 = require("./AbstractMethodStub");
var ResolvePromiseMethodStub = (function (_super) {
    __extends(ResolvePromiseMethodStub, _super);
    function ResolvePromiseMethodStub(groupIndex, matchers, value) {
        var _this = _super.call(this) || this;
        _this.groupIndex = groupIndex;
        _this.matchers = matchers;
        _this.value = value;
        _this.validator = new ArgsToMatchersValidator_1.ArgsToMatchersValidator();
        return _this;
    }
    ResolvePromiseMethodStub.prototype.isApplicable = function (args) {
        return this.validator.validate(this.matchers, args);
    };
    ResolvePromiseMethodStub.prototype.execute = function (args) {
    };
    ResolvePromiseMethodStub.prototype.getValue = function () {
        return Promise.resolve(this.value);
    };
    return ResolvePromiseMethodStub;
}(AbstractMethodStub_1.AbstractMethodStub));
exports.ResolvePromiseMethodStub = ResolvePromiseMethodStub;
//# sourceMappingURL=ResolvePromiseMethodStub.js.map