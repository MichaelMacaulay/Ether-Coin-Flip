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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EndCoinFlip; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _utils_etherCoinFlipABI_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/etherCoinFlipABI.json */ \"./pages/utils/etherCoinFlipABI.json\");\n\nvar _s = $RefreshSig$();\n\n\nfunction EndCoinFlip(param) {\n    var coinFlipID = param.coinFlipID, etherWager = param.etherWager;\n    _s();\n    // const [etherInput, setEtherInput] = useState('0');\n    // const value = isNaN(parseFloat(etherInput)) ? undefined : ethers.utils.parseEther(etherInput.toString());\n    var config = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.usePrepareContractWrite)({\n        address: \"0x077AABB3592F723E54ca0c8C0968A0C1e4DaD85C\",\n        abi: _utils_etherCoinFlipABI_json__WEBPACK_IMPORTED_MODULE_1__,\n        functionName: \"endCoinFlip\",\n        args: [\n            coinFlipID\n        ],\n        overrides: {\n            etherWager: etherWager\n        }\n    }).config;\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractWrite)(config), data = ref.data, isLoading = ref.isLoading, isSuccess = ref.isSuccess, write = ref.write;\n    var handleClick = function() {\n        write === null || write === void 0 ? void 0 : write();\n    // setEtherInput('0');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            disabled: !write || isLoading,\n            onClick: handleClick,\n            children: \"End Coin Flip\"\n        }, void 0, false, {\n            fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/endCoinFlip.tsx\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/Client/pages/components/endCoinFlip.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(EndCoinFlip, \"p45uWIgJEtHCmX/IwNiAKGNYRfo=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.usePrepareContractWrite,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractWrite\n    ];\n});\n_c = EndCoinFlip;\nvar _c;\n$RefreshReg$(_c, \"EndCoinFlip\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2VuZENvaW5GbGlwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFrRTtBQUNKO0FBUy9DLFNBQVNHLFdBQVcsQ0FBQyxLQUE0QyxFQUFFO1FBQTVDQyxVQUFVLEdBQVosS0FBNEMsQ0FBMUNBLFVBQVUsRUFBRUMsVUFBVSxHQUF4QixLQUE0QyxDQUE5QkEsVUFBVTs7SUFDeEQscURBQXFEO0lBRXJELDRHQUE0RztJQUU1RyxJQUFNLE1BQVEsR0FBS0wsOERBQXVCLENBQUM7UUFDdkNPLE9BQU8sRUFBRSw0Q0FBNEM7UUFDckRDLEdBQUcsRUFBRU4seURBQWdCO1FBQ3JCTyxZQUFZLEVBQUUsYUFBYTtRQUMzQkMsSUFBSSxFQUFFO1lBQUNOLFVBQVU7U0FBQztRQUNsQk8sU0FBUyxFQUFFO1lBQUVOLFVBQVUsRUFBVkEsVUFBVTtTQUFFO0tBQzVCLENBQUMsQ0FOTUMsTUFBTTtJQVFkLElBQThDTCxHQUF3QixHQUF4QkEsdURBQWdCLENBQUNLLE1BQU0sQ0FBQyxFQUE5RE0sSUFBSSxHQUFrQ1gsR0FBd0IsQ0FBOURXLElBQUksRUFBRUMsU0FBUyxHQUF1QlosR0FBd0IsQ0FBeERZLFNBQVMsRUFBRUMsU0FBUyxHQUFZYixHQUF3QixDQUE3Q2EsU0FBUyxFQUFFQyxLQUFLLEdBQUtkLEdBQXdCLENBQWxDYyxLQUFLO0lBRXpDLElBQU1DLFdBQVcsR0FBRyxXQUFNO1FBQ3RCRCxLQUFLLGFBQUxBLEtBQUssV0FBSSxHQUFUQSxLQUFBQSxDQUFTLEdBQVRBLEtBQUssRUFBSSxDQUFDO0lBQ1Ysc0JBQXNCO0lBQzFCLENBQUM7SUFFRCxxQkFDSSw4REFBQ0UsS0FBRztrQkFDQSw0RUFBQ0MsUUFBTTtZQUFDQyxRQUFRLEVBQUUsQ0FBQ0osS0FBSyxJQUFJRixTQUFTO1lBQUVPLE9BQU8sRUFBRUosV0FBVztzQkFBRSxlQUFhOzs7OztnQkFBUzs7Ozs7WUFDakYsQ0FDUjtBQUNOLENBQUM7R0F6QnVCYixXQUFXOztRQUtaSCwwREFBdUI7UUFRSUMsbURBQWdCOzs7QUFiMUNFLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9lbmRDb2luRmxpcC50c3g/YmMxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VQcmVwYXJlQ29udHJhY3RXcml0ZSwgdXNlQ29udHJhY3RXcml0ZSB9IGZyb20gJ3dhZ21pJztcbmltcG9ydCBldGhlckNvaW5GbGlwQUJJIGZyb20gJy4uL3V0aWxzL2V0aGVyQ29pbkZsaXBBQkkuanNvbic7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgRW5kQ29pbkZsaXBQcm9wcyA9IHtcbiAgICBjb2luRmxpcElEOiBudW1iZXI7XG4gICAgZXRoZXJXYWdlcjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRW5kQ29pbkZsaXAoeyBjb2luRmxpcElELCBldGhlcldhZ2VyIH06IEVuZENvaW5GbGlwUHJvcHMpIHtcbiAgICAvLyBjb25zdCBbZXRoZXJJbnB1dCwgc2V0RXRoZXJJbnB1dF0gPSB1c2VTdGF0ZSgnMCcpO1xuXG4gICAgLy8gY29uc3QgdmFsdWUgPSBpc05hTihwYXJzZUZsb2F0KGV0aGVySW5wdXQpKSA/IHVuZGVmaW5lZCA6IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKGV0aGVySW5wdXQudG9TdHJpbmcoKSk7XG5cbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdXNlUHJlcGFyZUNvbnRyYWN0V3JpdGUoe1xuICAgICAgICBhZGRyZXNzOiAnMHgwNzdBQUJCMzU5MkY3MjNFNTRjYTBjOEMwOTY4QTBDMWU0RGFEODVDJyxcbiAgICAgICAgYWJpOiBldGhlckNvaW5GbGlwQUJJLFxuICAgICAgICBmdW5jdGlvbk5hbWU6ICdlbmRDb2luRmxpcCcsXG4gICAgICAgIGFyZ3M6IFtjb2luRmxpcElEXSxcbiAgICAgICAgb3ZlcnJpZGVzOiB7IGV0aGVyV2FnZXIgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzU3VjY2Vzcywgd3JpdGUgfSA9IHVzZUNvbnRyYWN0V3JpdGUoY29uZmlnKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICB3cml0ZT8uKCk7XG4gICAgICAgIC8vIHNldEV0aGVySW5wdXQoJzAnKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyF3cml0ZSB8fCBpc0xvYWRpbmd9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5FbmQgQ29pbiBGbGlwPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlUHJlcGFyZUNvbnRyYWN0V3JpdGUiLCJ1c2VDb250cmFjdFdyaXRlIiwiZXRoZXJDb2luRmxpcEFCSSIsIkVuZENvaW5GbGlwIiwiY29pbkZsaXBJRCIsImV0aGVyV2FnZXIiLCJjb25maWciLCJhZGRyZXNzIiwiYWJpIiwiZnVuY3Rpb25OYW1lIiwiYXJncyIsIm92ZXJyaWRlcyIsImRhdGEiLCJpc0xvYWRpbmciLCJpc1N1Y2Nlc3MiLCJ3cml0ZSIsImhhbmRsZUNsaWNrIiwiZGl2IiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/endCoinFlip.tsx\n"));

/***/ })

});