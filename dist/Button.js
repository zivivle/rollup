import React from 'react';
import './Button.scss.js';

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
  var classNames = "\n    btn\n    btn-".concat(variant, "\n    btn-").concat(type, "\n    btn-").concat(size, "\n    ").concat(disabled ? "btn-disabled" : "", "\n  ");
  return React.createElement("button", {
    className: classNames,
    disabled: disabled,
    onClick: onClick
  }, children);
}

export { Button as default };
//# sourceMappingURL=Button.js.map
=Button.js.map
