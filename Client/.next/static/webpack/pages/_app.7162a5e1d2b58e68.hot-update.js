"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/components/endCoinFlip.tsx":
/*!******************************************!*\
  !*** ./pages/components/endCoinFlip.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EndCoinFlip; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _utils_etherCoinFlipABI_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/etherCoinFlipABI.json */ \"./pages/utils/etherCoinFlipABI.json\");\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction EndCoinFlip(param) {\n    var coinFlipID = param.coinFlipID;\n    _s();\n    // const [etherInput, setEtherInput] = useState('0');\n    var config = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.usePrepareContractWrite)({\n        address: \"0x077AABB3592F723E54ca0c8C0968A0C1e4DaD85C\",\n        abi: _utils_etherCoinFlipABI_json__WEBPACK_IMPORTED_MODULE_1__,\n        functionName: \"endCoinFlip\",\n        args: [\n            coinFlipID\n        ]\n    }).config;\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractWrite)(config), data = ref.data, isLoading = ref.isLoading, isSuccess = ref.isSuccess, write = ref.write;\n    var handleClick = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var transaction;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!write) return [\n                            3,\n                            2\n                        ];\n                        return [\n                            4,\n                            write()\n                        ];\n                    case 1:\n                        transaction = _state.sent();\n                        console.log(\"Transaction data:\", transaction);\n                        _state.label = 2;\n                    case 2:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleClick() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            disabled: !write || isLoading,\n            onClick: handleClick,\n            children: \"End Coin Flip\"\n        }, void 0, false, {\n            fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/endCoinFlip.tsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/endCoinFlip.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(EndCoinFlip, \"p45uWIgJEtHCmX/IwNiAKGNYRfo=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.usePrepareContractWrite,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractWrite\n    ];\n});\n_c = EndCoinFlip;\nvar _c;\n$RefreshReg$(_c, \"EndCoinFlip\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2VuZENvaW5GbGlwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFBa0U7QUFDSjtBQU8vQyxTQUFTRyxXQUFXLENBQUMsS0FBZ0MsRUFBRTtRQUFsQyxVQUFZLEdBQVosS0FBZ0MsQ0FBOUJDLFVBQVU7O0lBQzVDLHFEQUFxRDtJQUVyRCxJQUFNLE1BQVEsR0FBS0osOERBQXVCLENBQUM7UUFDdkNNLE9BQU8sRUFBRSw0Q0FBNEM7UUFDckRDLEdBQUcsRUFBRUwseURBQWdCO1FBQ3JCTSxZQUFZLEVBQUUsYUFBYTtRQUMzQkMsSUFBSSxFQUFFO1lBQUNMLFVBQVU7U0FBQztLQUNyQixDQUFDLENBTE1DLE1BQU07SUFPZCxJQUE4Q0osR0FBd0IsR0FBeEJBLHVEQUFnQixDQUFDSSxNQUFNLENBQUMsRUFBOURLLElBQUksR0FBa0NULEdBQXdCLENBQTlEUyxJQUFJLEVBQUVDLFNBQVMsR0FBdUJWLEdBQXdCLENBQXhEVSxTQUFTLEVBQUVDLFNBQVMsR0FBWVgsR0FBd0IsQ0FBN0NXLFNBQVMsRUFBRUMsS0FBSyxHQUFLWixHQUF3QixDQUFsQ1ksS0FBSztJQUV6QyxJQUFNQyxXQUFXO21CQUFHLCtGQUFZO2dCQUVsQkMsV0FBVzs7Ozs2QkFEakJGLEtBQUssRUFBTEE7OzswQkFBSzt3QkFDZTs7NEJBQU1BLEtBQUssRUFBRTswQkFBQTs7d0JBQTNCRSxXQUFXLEdBQUcsYUFBYTt3QkFDakNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixFQUFFRixXQUFXLENBQUMsQ0FBQzs7Ozs7Ozs7UUFFdEQsQ0FBQzt3QkFMS0QsV0FBVzs7O09BS2hCO0lBRUQscUJBQ0ksOERBQUNJLEtBQUc7a0JBQ0EsNEVBQUNDLFFBQU07WUFBQ0MsUUFBUSxFQUFFLENBQUNQLEtBQUssSUFBSUYsU0FBUztZQUFFVSxPQUFPLEVBQUVQLFdBQVc7c0JBQUUsZUFBYTs7Ozs7Z0JBQVM7Ozs7O1lBQ2pGLENBQ1I7QUFDTixDQUFDO0dBeEJ1QlgsV0FBVzs7UUFHWkgsMERBQXVCO1FBT0lDLG1EQUFnQjs7O0FBVjFDRSxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvZW5kQ29pbkZsaXAudHN4P2JjMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUHJlcGFyZUNvbnRyYWN0V3JpdGUsIHVzZUNvbnRyYWN0V3JpdGUgfSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgZXRoZXJDb2luRmxpcEFCSSBmcm9tICcuLi91dGlscy9ldGhlckNvaW5GbGlwQUJJLmpzb24nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgRW5kQ29pbkZsaXBQcm9wcyA9IHtcbiAgICBjb2luRmxpcElEOiBudW1iZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFbmRDb2luRmxpcCh7IGNvaW5GbGlwSUQgfTogRW5kQ29pbkZsaXBQcm9wcykge1xuICAgIC8vIGNvbnN0IFtldGhlcklucHV0LCBzZXRFdGhlcklucHV0XSA9IHVzZVN0YXRlKCcwJyk7XG5cbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdXNlUHJlcGFyZUNvbnRyYWN0V3JpdGUoe1xuICAgICAgICBhZGRyZXNzOiAnMHgwNzdBQUJCMzU5MkY3MjNFNTRjYTBjOEMwOTY4QTBDMWU0RGFEODVDJyxcbiAgICAgICAgYWJpOiBldGhlckNvaW5GbGlwQUJJLFxuICAgICAgICBmdW5jdGlvbk5hbWU6ICdlbmRDb2luRmxpcCcsXG4gICAgICAgIGFyZ3M6IFtjb2luRmxpcElEXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MsIHdyaXRlIH0gPSB1c2VDb250cmFjdFdyaXRlKGNvbmZpZyk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKHdyaXRlKSB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHdyaXRlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVHJhbnNhY3Rpb24gZGF0YTonLCB0cmFuc2FjdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyF3cml0ZSB8fCBpc0xvYWRpbmd9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5FbmQgQ29pbiBGbGlwPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlUHJlcGFyZUNvbnRyYWN0V3JpdGUiLCJ1c2VDb250cmFjdFdyaXRlIiwiZXRoZXJDb2luRmxpcEFCSSIsIkVuZENvaW5GbGlwIiwiY29pbkZsaXBJRCIsImNvbmZpZyIsImFkZHJlc3MiLCJhYmkiLCJmdW5jdGlvbk5hbWUiLCJhcmdzIiwiZGF0YSIsImlzTG9hZGluZyIsImlzU3VjY2VzcyIsIndyaXRlIiwiaGFuZGxlQ2xpY2siLCJ0cmFuc2FjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/endCoinFlip.tsx\n"));

/***/ })

});