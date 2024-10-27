(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["zivivle-rollup"] = {}, global.React));
})(this, (function (exports, React) { 'use strict';

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
      var classNames = "\n    zivivle-btn\n    zivivle-btn-".concat(variant, "\n    zivivle-btn-").concat(type, "\n    zivivle-btn-").concat(size, "\n    ").concat(disabled ? "zivivle-btn-disabled" : "", "\n  ");
      return React.createElement("button", {
        className: classNames,
        disabled: disabled,
        onClick: onClick
      }, children);
    }

    exports.Button = Button;

}));
//# sourceMappingURL=index.umd.js.map
