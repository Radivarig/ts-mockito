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
var Matcher_1 = require("./Matcher");
var MatchingStringMatcher = (function (_super) {
    __extends(MatchingStringMatcher, _super);
    function MatchingStringMatcher(expectedValue) {
        var _this = _super.call(this) || this;
        _this.expectedValue = expectedValue;
        return _this;
    }
    MatchingStringMatcher.prototype.match = function (value) {
        return value.match(this.expectedValue);
    };
    MatchingStringMatcher.prototype.toString = function () {
        return "match(" + this.expectedValue + ")";
    };
    return MatchingStringMatcher;
}(Matcher_1.Matcher));
exports.MatchingStringMatcher = MatchingStringMatcher;
//# sourceMappingURL=MatchingStringMatcher.js.map