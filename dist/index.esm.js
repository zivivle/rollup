import { __rest, __assign } from '/Users/zivivle/Documents/GitHub/rollup/node_modules/tslib/tslib.es6.js';
import React from 'react';

var Button = function (_a) {
  var label = _a.label,
    onClick = _a.onClick,
    _b = _a.type,
    type = _b === void 0 ? "button" : _b,
    _c = _a.className,
    className = _c === void 0 ? "" : _c,
    props = __rest(_a, ["label", "onClick", "type", "className"]);
  return React.createElement("button", __assign({
    type: type,
    className: "btn ".concat(className),
    onClick: onClick
  }, props), label);
};

export { Button };
//# sourceMappingURL=index.esm.js.map
