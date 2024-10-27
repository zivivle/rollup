'use strict';

var React = require('react');
var Button_module = require('./Button.module.css.js');

function Button(_a) {
  var _b = _a.variant,
    variant = _b === void 0 ? "solid" : _b,
    _c = _a.type,
    type = _c === void 0 ? "primary" : _c,
    _d = _a.size,
    size = _d === void 0 ? "medium" : _d,
    _e = _a.disabled,
    disabled = _e === void 0 ? false : _e,
    children = _a.children,
    onClick = _a.onClick;
  var classNames = "\n    ".concat(Button_module["zivivle-btn"], "\n    ").concat(Button_module["zivivle-btn-".concat(variant)], "\n    ").concat(Button_module["zivivle-btn-".concat(type)], "\n    ").concat(Button_module["zivivle-btn-".concat(size)], "\n    ").concat(disabled ? Button_module["zivivle-btn-disabled"] : "", "\n  ");
  return React.createElement("button", {
    className: classNames,
    disabled: disabled,
    onClick: onClick
  }, children);
}

module.exports = Button;
//# sourceMappingURL=Button.js.map
