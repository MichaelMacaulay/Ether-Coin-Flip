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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard */ \"./pages/components/dashboard.tsx\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar StartCoinFlipButton = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"pages_components_startCoinFlipButton_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/startCoinFlipButton */ \"./pages/components/startCoinFlipButton.tsx\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.tsx -> \" + \"./components/startCoinFlipButton\"\n        ]\n    },\n    ssr: false\n});\n_c = StartCoinFlipButton;\nvar exampleQuery = \"{\\n  finishedCoinFlips(first: 5) {\\n    id\\n    winner\\n    loser\\n    blockNumber\\n  }\\n  startedCoinfFlips(first: 5) {\\n    id\\n    theCoinFlipID\\n    theBetStarter\\n    theStartingWager\\n  }\\n}\";\nvar Home = function() {\n    var ref;\n    _s();\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,urql__WEBPACK_IMPORTED_MODULE_5__.useQuery)({\n        query: exampleQuery\n    }), 1), result = ref1[0];\n    var data = result.data, fetching = result.fetching, error = result.error;\n    console.log(\"Data:\", data, \"Fetching:\", fetching, \"Error:\", error);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Ether Coin Flip\"\n                    }, void 0, false, {\n                        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"/favicon.ico\",\n                        rel: \"icon\"\n                    }, void 0, false, {\n                        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.ConnectButton, {}, void 0, false, {\n                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StartCoinFlipButton, {}, void 0, false, {\n                        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        coinFlips: (ref = result.data) === null || ref === void 0 ? void 0 : ref.startedCoinfFlips\n                    }, void 0, false, {\n                        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer)\n            }, void 0, false, {\n                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/index.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"ZX70jukugySlrGBSVPWFe8Pvtlo=\", false, function() {\n    return [\n        urql__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"StartCoinFlipButton\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQXVEO0FBRTFCO0FBQ2tCO0FBQ1o7QUFDWTtBQUNmO0FBRWhDLElBQU1NLG1CQUFtQixHQUFHSCxtREFBTyxDQUFDO1dBQU0sMk5BQTBDO0NBQUE7Ozs7OztJQUNsRkksR0FBRyxFQUFFLEtBQUs7RUFDVjtBQUZJRCxLQUFBQSxtQkFBbUI7QUFJekIsSUFBTUUsWUFBWSxHQUFJLHNNQWFyQjtBQUVELElBQU1DLElBQUksR0FBYSxXQUFPO1FBOEJBQyxHQUFXOztJQXBCdkMsSUFBaUJMLElBQWlDLG9GQUFqQ0EsOENBQVEsQ0FBQztRQUFFTSxLQUFLLEVBQUVILFlBQVk7S0FBRSxDQUFDLE1BQTNDRSxNQUFNLEdBQUlMLElBQWlDLEdBQXJDO0lBQ2IsSUFBUU8sSUFBSSxHQUFzQkYsTUFBTSxDQUFoQ0UsSUFBSSxFQUFFQyxRQUFRLEdBQVlILE1BQU0sQ0FBMUJHLFFBQVEsRUFBRUMsS0FBSyxHQUFLSixNQUFNLENBQWhCSSxLQUFLO0lBRTNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUVKLElBQUksRUFBRSxXQUFXLEVBQUVDLFFBQVEsRUFBRSxRQUFRLEVBQUVDLEtBQUssQ0FBQyxDQUFDO0lBR3JFLHFCQUNFLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBRWhCLDBFQUFnQjs7MEJBQzlCLDhEQUFDRCxrREFBSTs7a0NBQ0gsOERBQUNtQixPQUFLO2tDQUFDLGlCQUFlOzs7Ozs2QkFBUTtrQ0FDOUIsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxjQUFjO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTs7Ozs7NkJBQUc7Ozs7OztxQkFDbEM7MEJBRVAsOERBQUNDLFFBQU07MEJBQ1QsNEVBQUN4QixpRUFBYTs7Ozt5QkFBRzs7Ozs7cUJBQ047MEJBRVQsOERBQUN5QixNQUFJO2dCQUFDUCxTQUFTLEVBQUVoQixxRUFBVzs7a0NBQzFCLDhEQUFDSSxtQkFBbUI7Ozs7NkJBQUc7a0NBQ3ZCLDhEQUFDb0IsSUFBRTs7Ozs2QkFBRztrQ0FDTiw4REFBQ3RCLDZEQUFTO3dCQUFDdUIsU0FBUyxFQUFFakIsQ0FBQUEsR0FBVyxHQUFYQSxNQUFNLENBQUNFLElBQUksY0FBWEYsR0FBVyxXQUFtQixHQUE5QkEsS0FBQUEsQ0FBOEIsR0FBOUJBLEdBQVcsQ0FBRWtCLGlCQUFpQjs7Ozs7NkJBQUk7Ozs7OztxQkFDbkQ7MEJBRVAsOERBQUNDLFFBQU07Z0JBQUNYLFNBQVMsRUFBRWhCLHVFQUFhOzs7OztxQkFDdkI7Ozs7OzthQUNMLENBQ047QUFDSixDQUFDO0dBckNLTyxJQUFJOztRQVVTSiwwQ0FBUTs7O0FBVnJCSSxNQUFBQSxJQUFJO0FBdUNWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAndXJxbCc7XG5cbmNvbnN0IFN0YXJ0Q29pbkZsaXBCdXR0b24gPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4vY29tcG9uZW50cy9zdGFydENvaW5GbGlwQnV0dG9uXCIpLCB7XG4gIHNzcjogZmFsc2UsXG59KTtcblxuY29uc3QgZXhhbXBsZVF1ZXJ5ID0gYHtcbiAgZmluaXNoZWRDb2luRmxpcHMoZmlyc3Q6IDUpIHtcbiAgICBpZFxuICAgIHdpbm5lclxuICAgIGxvc2VyXG4gICAgYmxvY2tOdW1iZXJcbiAgfVxuICBzdGFydGVkQ29pbmZGbGlwcyhmaXJzdDogNSkge1xuICAgIGlkXG4gICAgdGhlQ29pbkZsaXBJRFxuICAgIHRoZUJldFN0YXJ0ZXJcbiAgICB0aGVTdGFydGluZ1dhZ2VyXG4gIH1cbn1gO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+ICB7XG5cbiAgdHlwZSBIb21lUHJvcHMgPSB7XG4gIHJlc3VsdDoge1xuICAgIGRhdGE6IGFueTtcbiAgICBmZXRjaGluZzogYm9vbGVhbjtcbiAgICBlcnJvcjogYW55O1xuICB9O1xufTtcblxuICBjb25zdCBbcmVzdWx0XSA9IHVzZVF1ZXJ5KHsgcXVlcnk6IGV4YW1wbGVRdWVyeSB9KTtcbiAgY29uc3QgeyBkYXRhLCBmZXRjaGluZywgZXJyb3IgfSA9IHJlc3VsdDtcblxuICAgIGNvbnNvbGUubG9nKCdEYXRhOicsIGRhdGEsICdGZXRjaGluZzonLCBmZXRjaGluZywgJ0Vycm9yOicsIGVycm9yKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5FdGhlciBDb2luIEZsaXA8L3RpdGxlPlxuICAgICAgICA8bGluayBocmVmPVwiL2Zhdmljb24uaWNvXCIgcmVsPVwiaWNvblwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxoZWFkZXI+XG4gICAgPENvbm5lY3RCdXR0b24gLz5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPFN0YXJ0Q29pbkZsaXBCdXR0b24gLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxEYXNoYm9hcmQgY29pbkZsaXBzPXtyZXN1bHQuZGF0YT8uc3RhcnRlZENvaW5mRmxpcHN9IC8+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJDb25uZWN0QnV0dG9uIiwiSGVhZCIsInN0eWxlcyIsImR5bmFtaWMiLCJEYXNoYm9hcmQiLCJ1c2VRdWVyeSIsIlN0YXJ0Q29pbkZsaXBCdXR0b24iLCJzc3IiLCJleGFtcGxlUXVlcnkiLCJIb21lIiwicmVzdWx0IiwicXVlcnkiLCJkYXRhIiwiZmV0Y2hpbmciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsImxpbmsiLCJocmVmIiwicmVsIiwiaGVhZGVyIiwibWFpbiIsImJyIiwiY29pbkZsaXBzIiwic3RhcnRlZENvaW5mRmxpcHMiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});