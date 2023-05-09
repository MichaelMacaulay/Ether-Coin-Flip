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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _endCoinFlip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endCoinFlip */ \"./pages/components/endCoinFlip.tsx\");\n\n\n\nfunction Dashboard(param) {\n    var coinFlips = param.coinFlips;\n    var _this = this;\n    console.log(\"Raw coinFlips data:\", coinFlips);\n    var activeCoinFlips = coinFlips === null || coinFlips === void 0 ? void 0 : coinFlips.filter(function(coinFlip) {\n        return !coinFlip.isFinished;\n    });\n    console.log(\"Filtered activeCoinFlips data:\", activeCoinFlips);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: activeCoinFlips && activeCoinFlips.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: activeCoinFlips.map(function(coinFlip) {\n                        var etherWager = ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.formatEther(coinFlip.theStartingWager);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"Coin flip ID: \",\n                                coinFlip.theCoinFlipID,\n                                \", Coin flip starter: \",\n                                coinFlip.theBetStarter,\n                                \", Wager: \",\n                                etherWager,\n                                \" ether\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_endCoinFlip__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    coinFlipID: coinFlip.theCoinFlipID,\n                                    etherWager: coinFlip.theStartingWager\n                                }, void 0, false, {\n                                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 21\n                                }, _this)\n                            ]\n                        }, coinFlip.id, true, {\n                            fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No active coin flips found.\"\n                }, void 0, false, {\n                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/dashboard.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2Rhc2hib2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFnQztBQUNRO0FBY3pCLFNBQVNFLFNBQVMsQ0FBQyxLQUE2QixFQUFFO1FBQS9CLFNBQVcsR0FBWCxLQUE2QixDQUEzQkMsU0FBUzs7SUFDekNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixFQUFFRixTQUFTLENBQUMsQ0FBQztJQUM5QyxJQUFNRyxlQUFlLEdBQUdILFNBQVMsYUFBVEEsU0FBUyxXQUFRLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsU0FBUyxDQUFFSSxNQUFNLENBQUNDLFNBQUFBLFFBQVE7ZUFBSSxDQUFDQSxRQUFRLENBQUNDLFVBQVU7S0FBQSxDQUFDO0lBQzNFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRUMsZUFBZSxDQUFDLENBQUM7SUFHL0QscUJBQ0EsOERBQUNJLEtBQUc7OzBCQUNBLDhEQUFDQyxJQUFFOzBCQUFDLFdBQVM7Ozs7O29CQUFLOzBCQUNsQiw4REFBQ0QsS0FBRzswQkFDSEosZUFBZSxJQUFJQSxlQUFlLENBQUNNLE1BQU0sR0FBRyxDQUFDLGlCQUMxQyw4REFBQ0MsSUFBRTs4QkFDRlAsZUFBZSxDQUFDUSxHQUFHLENBQUMsU0FBQ04sUUFBUSxFQUFLO3dCQUMvQixJQUFNTyxVQUFVLEdBQUdmLDREQUF3QixDQUFDUSxRQUFRLENBQUNVLGdCQUFnQixDQUFDO3dCQUN0RSxxQkFDQSw4REFBQ0MsSUFBRTs7Z0NBQW1CLGdCQUNKO2dDQUFDWCxRQUFRLENBQUNZLGFBQWE7Z0NBQUMsdUJBQXFCO2dDQUFDWixRQUFRLENBQUNhLGFBQWE7Z0NBQUMsV0FBUztnQ0FBQ04sVUFBVTtnQ0FBQyxRQUN4Rzs4Q0FBQSw4REFBQ08sSUFBRTs7Ozt5Q0FBRzs4Q0FDTiw4REFBQ3JCLG9EQUFXO29DQUFDc0IsVUFBVSxFQUFFZixRQUFRLENBQUNZLGFBQWE7b0NBQUVMLFVBQVUsRUFBRVAsUUFBUSxDQUFDVSxnQkFBZ0I7Ozs7O3lDQUFJOzsyQkFIckZWLFFBQVEsQ0FBQ2dCLEVBQUU7Ozs7aUNBSWYsQ0FDSDtvQkFDTixDQUFDLENBQUM7Ozs7O3dCQUNHLGlCQUVMLDhEQUFDQyxHQUFDOzhCQUFDLDZCQUEyQjs7Ozs7d0JBQUk7Ozs7O29CQUVoQzs7Ozs7O1lBQ0osQ0FDSjtBQUNOLENBQUM7QUE3QnVCdkIsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL2Rhc2hib2FyZC50c3g/ZThlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IEVuZENvaW5GbGlwIGZyb20gXCIuL2VuZENvaW5GbGlwXCI7XG5cbnR5cGUgQ29pbkZsaXAgPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0aGVDb2luRmxpcElEOiBudW1iZXI7XG4gICAgdGhlQmV0U3RhcnRlcjogc3RyaW5nO1xuICAgIHRoZVN0YXJ0aW5nV2FnZXI6IHN0cmluZztcbiAgICBpc0ZpbmlzaGVkOiBib29sZWFuO1xufTtcblxudHlwZSBEYXNoYm9hcmRQcm9wcyA9IHtcbiAgICBjb2luRmxpcHM6IENvaW5GbGlwW10gfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoeyBjb2luRmxpcHMgfTogRGFzaGJvYXJkUHJvcHMpIHtcbiAgICBjb25zb2xlLmxvZygnUmF3IGNvaW5GbGlwcyBkYXRhOicsIGNvaW5GbGlwcyk7XG4gICAgY29uc3QgYWN0aXZlQ29pbkZsaXBzID0gY29pbkZsaXBzPy5maWx0ZXIoY29pbkZsaXAgPT4gIWNvaW5GbGlwLmlzRmluaXNoZWQpO1xuICAgIGNvbnNvbGUubG9nKCdGaWx0ZXJlZCBhY3RpdmVDb2luRmxpcHMgZGF0YTonLCBhY3RpdmVDb2luRmxpcHMpO1xuXG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxoMT5EYXNoYm9hcmQ8L2gxPlxuICAgICAgICA8ZGl2PlxuICAgICAgICB7YWN0aXZlQ29pbkZsaXBzICYmIGFjdGl2ZUNvaW5GbGlwcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2FjdGl2ZUNvaW5GbGlwcy5tYXAoKGNvaW5GbGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXRoZXJXYWdlciA9IGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihjb2luRmxpcC50aGVTdGFydGluZ1dhZ2VyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NvaW5GbGlwLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgQ29pbiBmbGlwIElEOiB7Y29pbkZsaXAudGhlQ29pbkZsaXBJRH0sIENvaW4gZmxpcCBzdGFydGVyOiB7Y29pbkZsaXAudGhlQmV0U3RhcnRlcn0sIFdhZ2VyOiB7ZXRoZXJXYWdlcn0gZXRoZXJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxFbmRDb2luRmxpcCBjb2luRmxpcElEPXtjb2luRmxpcC50aGVDb2luRmxpcElEfSBldGhlcldhZ2VyPXtjb2luRmxpcC50aGVTdGFydGluZ1dhZ2VyfSAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwPk5vIGFjdGl2ZSBjb2luIGZsaXBzIGZvdW5kLjwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJldGhlcnMiLCJFbmRDb2luRmxpcCIsIkRhc2hib2FyZCIsImNvaW5GbGlwcyIsImNvbnNvbGUiLCJsb2ciLCJhY3RpdmVDb2luRmxpcHMiLCJmaWx0ZXIiLCJjb2luRmxpcCIsImlzRmluaXNoZWQiLCJkaXYiLCJoMSIsImxlbmd0aCIsInVsIiwibWFwIiwiZXRoZXJXYWdlciIsInV0aWxzIiwiZm9ybWF0RXRoZXIiLCJ0aGVTdGFydGluZ1dhZ2VyIiwibGkiLCJ0aGVDb2luRmxpcElEIiwidGhlQmV0U3RhcnRlciIsImJyIiwiY29pbkZsaXBJRCIsImlkIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/dashboard.tsx\n"));

/***/ })

});