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

/***/ "./pages/components/dashboard.tsx":
/*!****************************************!*\
  !*** ./pages/components/dashboard.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _endCoinFlip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endCoinFlip */ \"./pages/components/endCoinFlip.tsx\");\n\n\nfunction Dashboard(param) {\n    var coinFlips = param.coinFlips;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/components/dashboard.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: coinFlips ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: coinFlips.map(function(coinFlip) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"Coin flip ID: \",\n                                coinFlip.theCoinFlipID,\n                                \", block number: \",\n                                coinFlip.blockNumber,\n                                \", block timestamp: \",\n                                coinFlip.blockTimestamp,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/components/dashboard.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_endCoinFlip__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    coinFlipID: coinFlip.theCoinFlipID\n                                }, void 0, false, {\n                                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/components/dashboard.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, coinFlip.id, true, {\n                            fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/components/dashboard.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/components/dashboard.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No coin flips found.\"\n                }, void 0, false, {\n                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/components/dashboard.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/components/dashboard.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/components/dashboard.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2Rhc2hib2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQXdDO0FBYXJCLFNBQVNDLFNBQVMsQ0FBQyxLQUE2QixFQUFFO1FBQS9CLFNBQVcsR0FBWCxLQUE2QixDQUEzQkMsU0FBUzs7SUFDN0MscUJBQ0ksOERBQUNDLEtBQUc7OzBCQUNKLDhEQUFDQyxJQUFFOzBCQUFDLFdBQVM7Ozs7O29CQUFLOzBCQUNsQiw4REFBQ0QsS0FBRzswQkFDQ0QsU0FBUyxpQkFDViw4REFBQ0csSUFBRTs4QkFDRUgsU0FBUyxDQUFDSSxHQUFHLENBQUMsU0FBQ0MsUUFBUTs2Q0FDNUIsOERBQUNDLElBQUU7O2dDQUFtQixnQkFDSjtnQ0FBQ0QsUUFBUSxDQUFDRSxhQUFhO2dDQUFDLGtCQUFnQjtnQ0FBQ0YsUUFBUSxDQUFDRyxXQUFXO2dDQUFDLHFCQUFtQjtnQ0FBQ0gsUUFBUSxDQUFDSSxjQUFjOzhDQUN2SCw4REFBQ0MsSUFBRTs7Ozt5Q0FBRzs4Q0FDTiw4REFBQ1osb0RBQVc7b0NBQUNhLFVBQVUsRUFBRU4sUUFBUSxDQUFDRSxhQUFhOzs7Ozt5Q0FBSTs7MkJBSDlDRixRQUFRLENBQUNPLEVBQUU7Ozs7aUNBSWY7cUJBQ0osQ0FBQzs7Ozs7d0JBQ0csaUJBRUwsOERBQUNDLEdBQUM7OEJBQUMsc0JBQW9COzs7Ozt3QkFBSTs7Ozs7b0JBRXpCOzs7Ozs7WUFDQSxDQUNSO0FBQ0YsQ0FBQztBQXJCdUJkLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9kYXNoYm9hcmQudHN4P2U4ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVuZENvaW5GbGlwIGZyb20gXCIuL2VuZENvaW5GbGlwXCI7XG4gICAgXG4gICAgdHlwZSBDb2luRmxpcCA9IHtcbiAgICAgICAgaWQ6IHN0cmluZztcbiAgICAgICAgdGhlQ29pbkZsaXBJRDogbnVtYmVyO1xuICAgICAgICBibG9ja051bWJlcjogbnVtYmVyO1xuICAgICAgICBibG9ja1RpbWVzdGFtcDogbnVtYmVyO1xuICAgIH07XG5cbiAgICB0eXBlIERhc2hib2FyZFByb3BzID0ge1xuICAgIGNvaW5GbGlwczogQ29pbkZsaXBbXSB8IHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKHsgY29pbkZsaXBzIH06IERhc2hib2FyZFByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkRhc2hib2FyZDwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Y29pbkZsaXBzID8gKFxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtjb2luRmxpcHMubWFwKChjb2luRmxpcCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17Y29pbkZsaXAuaWR9PlxuICAgICAgICAgICAgICAgIENvaW4gZmxpcCBJRDoge2NvaW5GbGlwLnRoZUNvaW5GbGlwSUR9LCBibG9jayBudW1iZXI6IHtjb2luRmxpcC5ibG9ja051bWJlcn0sIGJsb2NrIHRpbWVzdGFtcDoge2NvaW5GbGlwLmJsb2NrVGltZXN0YW1wfVxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxFbmRDb2luRmxpcCBjb2luRmxpcElEPXtjb2luRmxpcC50aGVDb2luRmxpcElEfSAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cD5ObyBjb2luIGZsaXBzIGZvdW5kLjwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICAgIH1cbiJdLCJuYW1lcyI6WyJFbmRDb2luRmxpcCIsIkRhc2hib2FyZCIsImNvaW5GbGlwcyIsImRpdiIsImgxIiwidWwiLCJtYXAiLCJjb2luRmxpcCIsImxpIiwidGhlQ29pbkZsaXBJRCIsImJsb2NrTnVtYmVyIiwiYmxvY2tUaW1lc3RhbXAiLCJiciIsImNvaW5GbGlwSUQiLCJpZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/dashboard.tsx\n"));

/***/ })

});