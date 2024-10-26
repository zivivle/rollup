(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('/Users/zivivle/Documents/GitHub/rollup/node_modules/tslib/tslib.es6.js'), require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', '/Users/zivivle/Documents/GitHub/rollup/node_modules/tslib/tslib.es6.js', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["zivivle-rollup"] = {}, global.tslib_es6_js, global.React));
})(this, (function (exports, tslib_es6_js, React) { 'use strict';

    var Button = function (_a) {
      var label = _a.label,
        onClick = _a.onClick,
        _b = _a.type,
        type = _b === void 0 ? "button" : _b,
        _c = _a.className,
        className = _c === void 0 ? "" : _c,
        props = tslib_es6_js.__rest(_a, ["label", "onClick", "type", "className"]);
      return React.createElement("button", tslib_es6_js.__assign({
        type: type,
        className: "btn ".concat(className),
        onClick: onClick
      }, props), label);
    };

    exports.Button = Button;

}));
//# sourceMappingURL=index.umd.js.map
