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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _endCoinFlip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endCoinFlip */ \"./pages/components/endCoinFlip.tsx\");\n\n\n\nfunction Dashboard(param) {\n    var coinFlips = param.coinFlips;\n    var _this = this;\n    console.log(\"Raw coinFlips data:\", coinFlips);\n    var activeCoinFlips = coinFlips === null || coinFlips === void 0 ? void 0 : coinFlips.filter(function(coinFlip) {\n        return coinFlip.isFinished === false;\n    });\n    console.log(\"Filtered activeCoinFlips data:\", activeCoinFlips);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: activeCoinFlips && activeCoinFlips.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: activeCoinFlips.map(function(coinFlip) {\n                        var etherWager = ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.formatEther(coinFlip.theStartingWager);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"Coin flip ID: \",\n                                coinFlip.theCoinFlipID,\n                                \", Coin flip starter: \",\n                                coinFlip.theBetStarter,\n                                \", Wager: \",\n                                etherWager,\n                                \" ether\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_endCoinFlip__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    coinFlipID: coinFlip.theCoinFlipID,\n                                    etherWager: coinFlip.theStartingWager\n                                }, void 0, false, {\n                                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 21\n                                }, _this)\n                            ]\n                        }, coinFlip.id, true, {\n                            fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No active coin flips found.\"\n                }, void 0, false, {\n                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2Rhc2hib2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFnQztBQUNRO0FBY3pCLFNBQVNFLFNBQVMsQ0FBQyxLQUE2QixFQUFFO1FBQS9CLFNBQVcsR0FBWCxLQUE2QixDQUEzQkMsU0FBUzs7SUFDekNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixFQUFFRixTQUFTLENBQUMsQ0FBQztJQUM5QyxJQUFNRyxlQUFlLEdBQUdILFNBQVMsYUFBVEEsU0FBUyxXQUFRLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsU0FBUyxDQUFFSSxNQUFNLENBQUNDLFNBQUFBLFFBQVE7ZUFBSUEsUUFBUSxDQUFDQyxVQUFVLEtBQUssS0FBSztLQUFBLENBQUM7SUFDcEZMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdDQUFnQyxFQUFFQyxlQUFlLENBQUMsQ0FBQztJQUcvRCxxQkFDQSw4REFBQ0ksS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7MEJBQUMsV0FBUzs7Ozs7b0JBQUs7MEJBQ2xCLDhEQUFDRCxLQUFHOzBCQUNISixlQUFlLElBQUlBLGVBQWUsQ0FBQ00sTUFBTSxHQUFHLENBQUMsaUJBQzFDLDhEQUFDQyxJQUFFOzhCQUNGUCxlQUFlLENBQUNRLEdBQUcsQ0FBQyxTQUFDTixRQUFRLEVBQUs7d0JBQy9CLElBQU1PLFVBQVUsR0FBR2YsNERBQXdCLENBQUNRLFFBQVEsQ0FBQ1UsZ0JBQWdCLENBQUM7d0JBQ3RFLHFCQUNBLDhEQUFDQyxJQUFFOztnQ0FBbUIsZ0JBQ0o7Z0NBQUNYLFFBQVEsQ0FBQ1ksYUFBYTtnQ0FBQyx1QkFBcUI7Z0NBQUNaLFFBQVEsQ0FBQ2EsYUFBYTtnQ0FBQyxXQUFTO2dDQUFDTixVQUFVO2dDQUFDLFFBQ3hHOzhDQUFBLDhEQUFDTyxJQUFFOzs7O3lDQUFHOzhDQUNOLDhEQUFDckIsb0RBQVc7b0NBQUNzQixVQUFVLEVBQUVmLFFBQVEsQ0FBQ1ksYUFBYTtvQ0FBRUwsVUFBVSxFQUFFUCxRQUFRLENBQUNVLGdCQUFnQjs7Ozs7eUNBQUk7OzJCQUhyRlYsUUFBUSxDQUFDZ0IsRUFBRTs7OztpQ0FJZixDQUNIO29CQUNOLENBQUMsQ0FBQzs7Ozs7d0JBQ0csaUJBRUwsOERBQUNDLEdBQUM7OEJBQUMsNkJBQTJCOzs7Ozt3QkFBSTs7Ozs7b0JBRWhDOzs7Ozs7WUFDSixDQUNKO0FBQ04sQ0FBQztBQTdCdUJ2QixLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvZGFzaGJvYXJkLnRzeD9lOGU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgRW5kQ29pbkZsaXAgZnJvbSBcIi4vZW5kQ29pbkZsaXBcIjtcblxudHlwZSBDb2luRmxpcCA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHRoZUNvaW5GbGlwSUQ6IG51bWJlcjtcbiAgICB0aGVCZXRTdGFydGVyOiBzdHJpbmc7XG4gICAgdGhlU3RhcnRpbmdXYWdlcjogc3RyaW5nO1xuICAgIGlzRmluaXNoZWQ6IGJvb2xlYW47XG59O1xuXG50eXBlIERhc2hib2FyZFByb3BzID0ge1xuICAgIGNvaW5GbGlwczogQ29pbkZsaXBbXSB8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCh7IGNvaW5GbGlwcyB9OiBEYXNoYm9hcmRQcm9wcykge1xuICAgIGNvbnNvbGUubG9nKCdSYXcgY29pbkZsaXBzIGRhdGE6JywgY29pbkZsaXBzKTtcbiAgICBjb25zdCBhY3RpdmVDb2luRmxpcHMgPSBjb2luRmxpcHM/LmZpbHRlcihjb2luRmxpcCA9PiBjb2luRmxpcC5pc0ZpbmlzaGVkID09PSBmYWxzZSk7XG4gICAgY29uc29sZS5sb2coJ0ZpbHRlcmVkIGFjdGl2ZUNvaW5GbGlwcyBkYXRhOicsIGFjdGl2ZUNvaW5GbGlwcyk7XG5cblxuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGgxPkRhc2hib2FyZDwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIHthY3RpdmVDb2luRmxpcHMgJiYgYWN0aXZlQ29pbkZsaXBzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7YWN0aXZlQ29pbkZsaXBzLm1hcCgoY29pbkZsaXApID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldGhlcldhZ2VyID0gZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKGNvaW5GbGlwLnRoZVN0YXJ0aW5nV2FnZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17Y29pbkZsaXAuaWR9PlxuICAgICAgICAgICAgICAgICAgICBDb2luIGZsaXAgSUQ6IHtjb2luRmxpcC50aGVDb2luRmxpcElEfSwgQ29pbiBmbGlwIHN0YXJ0ZXI6IHtjb2luRmxpcC50aGVCZXRTdGFydGVyfSwgV2FnZXI6IHtldGhlcldhZ2VyfSBldGhlclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEVuZENvaW5GbGlwIGNvaW5GbGlwSUQ9e2NvaW5GbGlwLnRoZUNvaW5GbGlwSUR9IGV0aGVyV2FnZXI9e2NvaW5GbGlwLnRoZVN0YXJ0aW5nV2FnZXJ9IC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPHA+Tm8gYWN0aXZlIGNvaW4gZmxpcHMgZm91bmQuPC9wPlxuICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbImV0aGVycyIsIkVuZENvaW5GbGlwIiwiRGFzaGJvYXJkIiwiY29pbkZsaXBzIiwiY29uc29sZSIsImxvZyIsImFjdGl2ZUNvaW5GbGlwcyIsImZpbHRlciIsImNvaW5GbGlwIiwiaXNGaW5pc2hlZCIsImRpdiIsImgxIiwibGVuZ3RoIiwidWwiLCJtYXAiLCJldGhlcldhZ2VyIiwidXRpbHMiLCJmb3JtYXRFdGhlciIsInRoZVN0YXJ0aW5nV2FnZXIiLCJsaSIsInRoZUNvaW5GbGlwSUQiLCJ0aGVCZXRTdGFydGVyIiwiYnIiLCJjb2luRmxpcElEIiwiaWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/dashboard.tsx\n"));

/***/ })

});