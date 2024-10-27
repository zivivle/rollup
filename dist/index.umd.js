(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('style-inject')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'style-inject'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["zivivle-rollup"] = {}, global.React, global.styleInject));
})(this, (function (exports, React, styleInject) { 'use strict';

  var css_248z = ".Button_btn__NIQbY {\n  border: none;\n  padding: 0.5rem 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  transition: background-color 0.3s ease, color 0.3s ease;\n  cursor: pointer;\n}\n.Button_btn__NIQbY.Button_btn-large__CcOWP {\n  border-radius: 0.5rem;\n  font-size: 1rem;\n  padding: 0rem 1rem;\n  min-width: 5rem;\n  min-height: 3.5rem;\n}\n.Button_btn__NIQbY.Button_btn-medium__JOFIb {\n  border-radius: 0.375rem;\n  font-size: 1rem;\n  padding: 0rem 1rem;\n  min-width: 5rem;\n  min-height: 3rem;\n}\n.Button_btn__NIQbY.Button_btn-small__bg-Np {\n  border-radius: 0.25rem;\n  font-size: 0.875rem;\n  padding: 0rem 1rem;\n  min-width: 3.75rem;\n  min-height: 2.5rem;\n}\n.Button_btn__NIQbY.Button_btn-solid__qLCt2.Button_btn-primary__FfG4y {\n  background-color: #000;\n  color: #fff;\n}\n.Button_btn__NIQbY.Button_btn-solid__qLCt2.Button_btn-primary__FfG4y:hover:not(.Button_btn-disabled__Q4zTb) {\n  background-color: #374151;\n}\n.Button_btn__NIQbY.Button_btn-solid__qLCt2.Button_btn-secondary__yK4s3 {\n  background-color: #f7f8f9;\n  color: #000;\n}\n.Button_btn__NIQbY.Button_btn-solid__qLCt2.Button_btn-secondary__yK4s3:hover:not(.Button_btn-disabled__Q4zTb) {\n  background-color: #fff;\n}\n.Button_btn__NIQbY.Button_btn-solid__qLCt2.Button_btn-disabled__Q4zTb {\n  background-color: #dbdcdf;\n  color: #c2c4c8;\n  cursor: not-allowed;\n}\n.Button_btn__NIQbY.Button_btn-outlined__WFbHG {\n  background: transparent;\n  border: 1px solid currentColor;\n  color: #000;\n}\n.Button_btn__NIQbY.Button_btn-outlined__WFbHG.Button_btn-primary__FfG4y {\n  border: 1px solid #000;\n}\n.Button_btn__NIQbY.Button_btn-outlined__WFbHG.Button_btn-primary__FfG4y:hover:not(.Button_btn-disabled__Q4zTb) {\n  background-color: #f3f4f6;\n}\n.Button_btn__NIQbY.Button_btn-outlined__WFbHG.Button_btn-secondary__yK4s3 {\n  border: 1px solid #e0e0e2;\n}\n.Button_btn__NIQbY.Button_btn-outlined__WFbHG.Button_btn-secondary__yK4s3:hover:not(.Button_btn-disabled__Q4zTb) {\n  background-color: #f3f4f6;\n}\n.Button_btn__NIQbY.Button_btn-outlined__WFbHG.Button_btn-large__CcOWP {\n  font-size: 1rem;\n}\n.Button_btn__NIQbY.Button_btn-outlined__WFbHG.Button_btn-medium__JOFIb {\n  font-size: 0.875rem;\n}\n.Button_btn__NIQbY.Button_btn-outlined__WFbHG.Button_btn-small__bg-Np {\n  font-size: 0.75rem;\n}\n.Button_btn__NIQbY.Button_btn-outlined__WFbHG.Button_btn-disabled__Q4zTb {\n  border: 1px solid #e0e0e2;\n  color: #c2c4c8;\n  cursor: not-allowed;\n}\n.Button_btn__NIQbY.Button_btn-text__Ai7xS {\n  background: transparent;\n  color: #000;\n}\n.Button_btn__NIQbY.Button_btn-text__Ai7xS:hover:not(.Button_btn-disabled__Q4zTb) {\n  background-color: #f3f4f6;\n}\n.Button_btn__NIQbY.Button_btn-text__Ai7xS.Button_btn-secondary__yK4s3 {\n  color: #171719;\n}\n.Button_btn__NIQbY.Button_btn-text__Ai7xS.Button_btn-disabled__Q4zTb {\n  color: #c2c4c8;\n  cursor: not-allowed;\n}";
  styleInject(css_248z);

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

  exports.Button = Button;

}));
//# sourceMappingURL=index.umd.js.map
