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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard */ \"./pages/components/dashboard.tsx\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar StartCoinFlipButton = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"pages_components_startCoinFlipButton_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/startCoinFlipButton */ \"./pages/components/startCoinFlipButton.tsx\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.tsx -> \" + \"./components/startCoinFlipButton\"\n        ]\n    },\n    ssr: false\n});\n_c = StartCoinFlipButton;\nvar exampleQuery = \"{\\n  finishedCoinFlips(first: 5) {\\n    id\\n    winner\\n    blockNumber\\n    blockTimestamp\\n  }\\n  startedCoinFlips(first: 5) {\\n    id\\n    theCoinFlipID\\n    blockNumber\\n    blockTimestamp\\n  }\\n}\";\nvar Home = function(param) {\n    var coinFlips = param.coinFlips;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,urql__WEBPACK_IMPORTED_MODULE_5__.useQuery)({\n        query: exampleQuery\n    }), 1), result = ref[0];\n    var data = result.data, fetching = result.fetching, error = result.error;\n    console.log(\"Data:\", data, \"Fetching:\", fetching, \"Error:\", error);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Ether Coin Flip\"\n                    }, void 0, false, {\n                        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"/favicon.ico\",\n                        rel: \"icon\"\n                    }, void 0, false, {\n                        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.ConnectButton, {}, void 0, false, {\n                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StartCoinFlipButton, {}, void 0, false, {\n                        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        coinFlips: coinFlips\n                    }, void 0, false, {\n                        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer)\n            }, void 0, false, {\n                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/index.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"ZX70jukugySlrGBSVPWFe8Pvtlo=\", false, function() {\n    return [\n        urql__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"StartCoinFlipButton\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQXVEO0FBRTFCO0FBQ2tCO0FBQ1o7QUFDWTtBQUNmO0FBRWhDLElBQU1NLG1CQUFtQixHQUFHSCxtREFBTyxDQUFDO1dBQU0sMk5BQTBDO0NBQUE7Ozs7OztJQUNsRkksR0FBRyxFQUFFLEtBQUs7RUFDVjtBQUZJRCxLQUFBQSxtQkFBbUI7QUFJekIsSUFBTUUsWUFBWSxHQUFJLDBNQWFyQjtBQUVELElBQU1DLElBQUksR0FBYSxnQkFBbUI7UUFBaEJDLFNBQVMsU0FBVEEsU0FBUzs7SUFDakMsSUFBaUJMLEdBQWlDLG9GQUFqQ0EsOENBQVEsQ0FBQztRQUFFTSxLQUFLLEVBQUVILFlBQVk7S0FBRSxDQUFDLE1BQTNDSSxNQUFNLEdBQUlQLEdBQWlDLEdBQXJDO0lBQ2IsSUFBUVEsSUFBSSxHQUFzQkQsTUFBTSxDQUFoQ0MsSUFBSSxFQUFFQyxRQUFRLEdBQVlGLE1BQU0sQ0FBMUJFLFFBQVEsRUFBRUMsS0FBSyxHQUFLSCxNQUFNLENBQWhCRyxLQUFLO0lBRTNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUVKLElBQUksRUFBRSxXQUFXLEVBQUVDLFFBQVEsRUFBRSxRQUFRLEVBQUVDLEtBQUssQ0FBQyxDQUFDO0lBR3JFLHFCQUNFLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBRWpCLDBFQUFnQjs7MEJBQzlCLDhEQUFDRCxrREFBSTs7a0NBQ0gsOERBQUNvQixPQUFLO2tDQUFDLGlCQUFlOzs7Ozs2QkFBUTtrQ0FDOUIsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxjQUFjO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTs7Ozs7NkJBQUc7Ozs7OztxQkFDbEM7MEJBRVAsOERBQUNDLFFBQU07MEJBQ1QsNEVBQUN6QixpRUFBYTs7Ozt5QkFBRzs7Ozs7cUJBQ047MEJBRVQsOERBQUMwQixNQUFJO2dCQUFDUCxTQUFTLEVBQUVqQixxRUFBVzs7a0NBQzFCLDhEQUFDSSxtQkFBbUI7Ozs7NkJBQUc7a0NBQ3ZCLDhEQUFDcUIsSUFBRTs7Ozs2QkFBRztrQ0FDTiw4REFBQ3ZCLDZEQUFTO3dCQUFDTSxTQUFTLEVBQUVBLFNBQVM7Ozs7OzZCQUFHOzs7Ozs7cUJBQzdCOzBCQUVQLDhEQUFDa0IsUUFBTTtnQkFBQ1QsU0FBUyxFQUFFakIsdUVBQWE7Ozs7O3FCQUN2Qjs7Ozs7O2FBQ0wsQ0FDTjtBQUNKLENBQUM7R0E1QktPLElBQUk7O1FBQ1NKLDBDQUFROzs7QUFEckJJLE1BQUFBLElBQUk7QUE4QlYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0QnV0dG9uIH0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmQnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICd1cnFsJztcblxuY29uc3QgU3RhcnRDb2luRmxpcEJ1dHRvbiA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9jb21wb25lbnRzL3N0YXJ0Q29pbkZsaXBCdXR0b25cIiksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBleGFtcGxlUXVlcnkgPSBge1xuICBmaW5pc2hlZENvaW5GbGlwcyhmaXJzdDogNSkge1xuICAgIGlkXG4gICAgd2lubmVyXG4gICAgYmxvY2tOdW1iZXJcbiAgICBibG9ja1RpbWVzdGFtcFxuICB9XG4gIHN0YXJ0ZWRDb2luRmxpcHMoZmlyc3Q6IDUpIHtcbiAgICBpZFxuICAgIHRoZUNvaW5GbGlwSURcbiAgICBibG9ja051bWJlclxuICAgIGJsb2NrVGltZXN0YW1wXG4gIH1cbn1gO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICh7IGNvaW5GbGlwcyB9KSA9PiB7XG4gIGNvbnN0IFtyZXN1bHRdID0gdXNlUXVlcnkoeyBxdWVyeTogZXhhbXBsZVF1ZXJ5IH0pO1xuICBjb25zdCB7IGRhdGEsIGZldGNoaW5nLCBlcnJvciB9ID0gcmVzdWx0O1xuXG4gICAgY29uc29sZS5sb2coJ0RhdGE6JywgZGF0YSwgJ0ZldGNoaW5nOicsIGZldGNoaW5nLCAnRXJyb3I6JywgZXJyb3IpO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkV0aGVyIENvaW4gRmxpcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvZmF2aWNvbi5pY29cIiByZWw9XCJpY29uXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGhlYWRlcj5cbiAgICA8Q29ubmVjdEJ1dHRvbiAvPlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8U3RhcnRDb2luRmxpcEJ1dHRvbiAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPERhc2hib2FyZCBjb2luRmxpcHM9e2NvaW5GbGlwc30vPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiQ29ubmVjdEJ1dHRvbiIsIkhlYWQiLCJzdHlsZXMiLCJkeW5hbWljIiwiRGFzaGJvYXJkIiwidXNlUXVlcnkiLCJTdGFydENvaW5GbGlwQnV0dG9uIiwic3NyIiwiZXhhbXBsZVF1ZXJ5IiwiSG9tZSIsImNvaW5GbGlwcyIsInF1ZXJ5IiwicmVzdWx0IiwiZGF0YSIsImZldGNoaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJsaW5rIiwiaHJlZiIsInJlbCIsImhlYWRlciIsIm1haW4iLCJiciIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});