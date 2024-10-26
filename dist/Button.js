'use strict';

var tslib_es6_js = require('/Users/zivivle/Documents/GitHub/rollup/node_modules/tslib/tslib.es6.js');
var React = require('react');

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

module.exports = Button;
//# sourceMappingURL=Button.js.map
