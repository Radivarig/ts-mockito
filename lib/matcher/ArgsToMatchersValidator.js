"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArgsToMatchersValidator = (function () {
    function ArgsToMatchersValidator() {
    }
    ArgsToMatchersValidator.prototype.validate = function (matchers, args) {
        if (matchers.length !== args.length) {
            return false;
        }
        return matchers.every(function (matcher, index) { return matcher.match(args[index]); });
    };
    return ArgsToMatchersValidator;
}());
exports.ArgsToMatchersValidator = ArgsToMatchersValidator;
//# sourceMappingURL=ArgsToMatchersValidator.js.map