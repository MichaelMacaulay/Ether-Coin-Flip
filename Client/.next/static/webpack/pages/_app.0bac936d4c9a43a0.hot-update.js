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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _endCoinFlip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endCoinFlip */ \"./pages/components/endCoinFlip.tsx\");\n\n\n\nfunction Dashboard(param) {\n    var activeCoinFlips = param.activeCoinFlips, finishedCoinFlips = param.finishedCoinFlips;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: activeCoinFlips && activeCoinFlips.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: activeCoinFlips.map(function(coinFlip) {\n                        var etherWager = ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.formatEther(coinFlip.theStartingWager);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"Active coin flip ID: \",\n                                coinFlip.theCoinFlipID,\n                                \", Coin flip starter: \",\n                                coinFlip.theBetStarter,\n                                \", Wager: \",\n                                etherWager,\n                                \" ether.\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 37\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_endCoinFlip__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    coinFlipID: coinFlip.theCoinFlipID,\n                                    etherWager: coinFlip.theStartingWager\n                                }, void 0, false, {\n                                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 37\n                                }, _this)\n                            ]\n                        }, coinFlip.id, true, {\n                            fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 33\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 21\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No active coin flips found.\"\n                }, void 0, false, {\n                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Finished Coin Flips\"\n                    }, void 0, false, {\n                        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this),\n                    finishedCoinFlips && finishedCoinFlips.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: finishedCoinFlips.map(function(coinFlip) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    \"Finished coin flip ID: \",\n                                    coinFlip.theCoinFlipID,\n                                    \", Winner: \",\n                                    coinFlip.winner,\n                                    \", Loser: \",\n                                    coinFlip.loser,\n                                    \".\"\n                                ]\n                            }, coinFlip.id, true, {\n                                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 29\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No finished coin flips found.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2Rhc2hib2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFnQztBQUNRO0FBcUJ6QixTQUFTRSxTQUFTLENBQUMsS0FBc0QsRUFBRTtRQUF0REMsZUFBZSxHQUFqQixLQUFzRCxDQUFwREEsZUFBZSxFQUFFQyxpQkFBaUIsR0FBcEMsS0FBc0QsQ0FBbkNBLGlCQUFpQjs7SUFDbEUscUJBQ0ksOERBQUNDLEtBQUc7OzBCQUNBLDhEQUFDQyxJQUFFOzBCQUFDLFdBQVM7Ozs7O29CQUFLOzBCQUNsQiw4REFBQ0QsS0FBRzswQkFDQ0YsZUFBZSxJQUFJQSxlQUFlLENBQUNJLE1BQU0sR0FBRyxDQUFDLGlCQUMxQyw4REFBQ0MsSUFBRTs4QkFDRUwsZUFBZSxDQUFDTSxHQUFHLENBQUMsU0FBQ0MsUUFBUSxFQUFLO3dCQUMvQixJQUFNQyxVQUFVLEdBQUdYLDREQUF3QixDQUFDVSxRQUFRLENBQUNJLGdCQUFnQixDQUFDO3dCQUN0RSxxQkFDSSw4REFBQ0MsSUFBRTs7Z0NBQW1CLHVCQUNHO2dDQUFDTCxRQUFRLENBQUNNLGFBQWE7Z0NBQUMsdUJBQXFCO2dDQUFDTixRQUFRLENBQUNPLGFBQWE7Z0NBQUMsV0FBUztnQ0FBQ04sVUFBVTtnQ0FBQyxTQUMvRzs4Q0FBQSw4REFBQ08sSUFBRTs7Ozt5Q0FBRzs4Q0FDTiw4REFBQ2pCLG9EQUFXO29DQUFDa0IsVUFBVSxFQUFFVCxRQUFRLENBQUNNLGFBQWE7b0NBQUVMLFVBQVUsRUFBRUQsUUFBUSxDQUFDSSxnQkFBZ0I7Ozs7O3lDQUFJOzsyQkFIckZKLFFBQVEsQ0FBQ1UsRUFBRTs7OztpQ0FJZixDQUNQO29CQUNOLENBQUMsQ0FBQzs7Ozs7d0JBQ0QsaUJBRUwsOERBQUNDLEdBQUM7OEJBQUMsNkJBQTJCOzs7Ozt3QkFBSTs7Ozs7b0JBRXBDOzBCQUNOLDhEQUFDaEIsS0FBRzs7a0NBQ0EsOERBQUNpQixJQUFFO2tDQUFDLHFCQUFtQjs7Ozs7NEJBQUs7b0JBQzNCbEIsaUJBQWlCLElBQUlBLGlCQUFpQixDQUFDRyxNQUFNLEdBQUcsQ0FBQyxpQkFDOUMsOERBQUNDLElBQUU7a0NBQ0VKLGlCQUFpQixDQUFDSyxHQUFHLENBQUMsU0FBQ0MsUUFBUTtpREFDNUIsOERBQUNLLElBQUU7O29DQUFtQix5QkFDSztvQ0FBQ0wsUUFBUSxDQUFDTSxhQUFhO29DQUFDLFlBQVU7b0NBQUNOLFFBQVEsQ0FBQ2EsTUFBTTtvQ0FBQyxXQUFTO29DQUFDYixRQUFRLENBQUNjLEtBQUs7b0NBQUMsR0FDdkc7OytCQUZTZCxRQUFRLENBQUNVLEVBQUU7Ozs7cUNBRWY7eUJBQ1IsQ0FBQzs7Ozs7NEJBQ0QsaUJBRUwsOERBQUNDLEdBQUM7a0NBQUMsK0JBQTZCOzs7Ozs0QkFBSTs7Ozs7O29CQUV0Qzs7Ozs7O1lBQ0osQ0FDUjtBQUNOLENBQUM7QUF0Q3VCbkIsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL2Rhc2hib2FyZC50c3g/ZThlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IEVuZENvaW5GbGlwIGZyb20gXCIuL2VuZENvaW5GbGlwXCI7XG5cbnR5cGUgU3RhcnRlZENvaW5GbGlwID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdGhlQ29pbkZsaXBJRDogbnVtYmVyO1xuICAgIHRoZUJldFN0YXJ0ZXI6IHN0cmluZztcbiAgICB0aGVTdGFydGluZ1dhZ2VyOiBzdHJpbmc7XG59O1xuXG50eXBlIEZpbmlzaGVkQ29pbkZsaXAgPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0aGVDb2luRmxpcElEOiBudW1iZXI7XG4gICAgd2lubmVyOiBzdHJpbmc7XG4gICAgbG9zZXI6IHN0cmluZztcbn07XG5cbnR5cGUgRGFzaGJvYXJkUHJvcHMgPSB7XG4gICAgYWN0aXZlQ29pbkZsaXBzOiBTdGFydGVkQ29pbkZsaXBbXSB8IHVuZGVmaW5lZDtcbiAgICBmaW5pc2hlZENvaW5GbGlwczogRmluaXNoZWRDb2luRmxpcFtdIHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKHsgYWN0aXZlQ29pbkZsaXBzLCBmaW5pc2hlZENvaW5GbGlwcyB9OiBEYXNoYm9hcmRQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+RGFzaGJvYXJkPC9oMT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2FjdGl2ZUNvaW5GbGlwcyAmJiBhY3RpdmVDb2luRmxpcHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZUNvaW5GbGlwcy5tYXAoKGNvaW5GbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXRoZXJXYWdlciA9IGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihjb2luRmxpcC50aGVTdGFydGluZ1dhZ2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjb2luRmxpcC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY3RpdmUgY29pbiBmbGlwIElEOiB7Y29pbkZsaXAudGhlQ29pbkZsaXBJRH0sIENvaW4gZmxpcCBzdGFydGVyOiB7Y29pbkZsaXAudGhlQmV0U3RhcnRlcn0sIFdhZ2VyOiB7ZXRoZXJXYWdlcn0gZXRoZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbmRDb2luRmxpcCBjb2luRmxpcElEPXtjb2luRmxpcC50aGVDb2luRmxpcElEfSBldGhlcldhZ2VyPXtjb2luRmxpcC50aGVTdGFydGluZ1dhZ2VyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8cD5ObyBhY3RpdmUgY29pbiBmbGlwcyBmb3VuZC48L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+RmluaXNoZWQgQ29pbiBGbGlwczwvaDI+XG4gICAgICAgICAgICAgICAge2ZpbmlzaGVkQ29pbkZsaXBzICYmIGZpbmlzaGVkQ29pbkZsaXBzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaW5pc2hlZENvaW5GbGlwcy5tYXAoKGNvaW5GbGlwKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y29pbkZsaXAuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaW5pc2hlZCBjb2luIGZsaXAgSUQ6IHtjb2luRmxpcC50aGVDb2luRmxpcElEfSwgV2lubmVyOiB7Y29pbkZsaXAud2lubmVyfSwgTG9zZXI6IHtjb2luRmxpcC5sb3Nlcn0uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxwPk5vIGZpbmlzaGVkIGNvaW4gZmxpcHMgZm91bmQuPC9wPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJldGhlcnMiLCJFbmRDb2luRmxpcCIsIkRhc2hib2FyZCIsImFjdGl2ZUNvaW5GbGlwcyIsImZpbmlzaGVkQ29pbkZsaXBzIiwiZGl2IiwiaDEiLCJsZW5ndGgiLCJ1bCIsIm1hcCIsImNvaW5GbGlwIiwiZXRoZXJXYWdlciIsInV0aWxzIiwiZm9ybWF0RXRoZXIiLCJ0aGVTdGFydGluZ1dhZ2VyIiwibGkiLCJ0aGVDb2luRmxpcElEIiwidGhlQmV0U3RhcnRlciIsImJyIiwiY29pbkZsaXBJRCIsImlkIiwicCIsImgyIiwid2lubmVyIiwibG9zZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/dashboard.tsx\n"));

/***/ })

});