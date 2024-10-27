(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["zivivle-rollup"] = {}, global.React));
})(this, (function (exports, React) { 'use strict';

  var styles = {"zivivle-btn":"Button-module_zivivle-btn__7q--u","zivivle-btn-large":"Button-module_zivivle-btn-large__WgKIo","zivivle-btn-medium":"Button-module_zivivle-btn-medium__af2v8","zivivle-btn-small":"Button-module_zivivle-btn-small__q-I9g","zivivle-btn-solid":"Button-module_zivivle-btn-solid__Ukm9M","zivivle-btn-primary":"Button-module_zivivle-btn-primary__cEEAO","zivivle-btn-disabled":"Button-module_zivivle-btn-disabled__j7EVR","zivivle-btn-secondary":"Button-module_zivivle-btn-secondary__x7S-L","zivivle-btn-outlined":"Button-module_zivivle-btn-outlined__pQiNt","zivivle-btn-text":"Button-module_zivivle-btn-text__i91fS"};

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
    var classNames = "\n    ".concat(styles["zivivle-btn"], "\n    ").concat(styles["zivivle-btn-".concat(variant)], "\n    ").concat(styles["zivivle-btn-".concat(type)], "\n    ").concat(styles["zivivle-btn-".concat(size)], "\n    ").concat(disabled ? styles["zivivle-btn-disabled"] : "", "\n  ");
    return React.createElement("button", {
      className: classNames,
      disabled: disabled,
      onClick: onClick
    }, children);
  }

  exports.Button = Button;

}));
//# sourceMappingURL=index.umd.js.map
