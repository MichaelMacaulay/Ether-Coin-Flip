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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/chains */ \"./node_modules/wagmi/dist/chains.js\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/providers/public */ \"./node_modules/wagmi/dist/providers/public.js\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n/* harmony import */ var _graphprotocol_client_urql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @graphprotocol/client-urql */ \"./node_modules/@graphprotocol/client-urql/esm/index.js\");\n/* harmony import */ var _graphclient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.graphclient */ \"./.graphclient/index.ts\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.goerli, \n].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === \"true\" ? [\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.goerli\n] : [])), [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__.publicProvider)()\n]), chains = ref.chains, provider = ref.provider, webSocketProvider = ref.webSocketProvider;\nvar connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.getDefaultWallets)({\n    appName: \"RainbowKit App\",\n    chains: chains\n}).connectors;\nvar wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors: connectors,\n    provider: provider,\n    webSocketProvider: webSocketProvider\n});\nvar exampleQuery = \"{\\nfinishedCoinFlips(first: 5) {\\n    id\\n    winner\\n    blockNumber\\n    blockTimestamp\\n}\\nstartedCoinfFlips(first: 5) {\\n    id\\n    theCoinFlipID\\n    blockNumber\\n    blockTimestamp\\n}\\n}\";\nvar client = (0,urql__WEBPACK_IMPORTED_MODULE_9__.createClient)({\n    url: \"graphclient://dummy\",\n    requestPolicy: \"cache-and-network\",\n    exchanges: [\n        (0,_graphprotocol_client_urql__WEBPACK_IMPORTED_MODULE_10__.graphExchange)(_graphclient__WEBPACK_IMPORTED_MODULE_3__)\n    ]\n});\nconsole.log(result);\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])((0,urql__WEBPACK_IMPORTED_MODULE_9__.useQuery)({\n        exampleQuery: exampleQuery\n    }), 2), _$result = ref[0], reexecuteQuery = ref[1];\n    var data = _$result.data, fetching = _$result.fetching, error = _$result.error;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.RainbowKitProvider, {\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(urql__WEBPACK_IMPORTED_MODULE_9__.Provider, {\n                value: client,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])({}, pageProps), void 0, false, {\n                    fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/_app.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/_app.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/_app.tsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/micmac/Documents/GitHub/docs/Ether-Coin-Flip/ethercoinflip/pages/_app.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"ct3FlcZGh+a1CrbiqJ/T+fFQJXg=\", false, function() {\n    return [\n        urql__WEBPACK_IMPORTED_MODULE_9__.useQuery\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBK0I7QUFDWTtBQUNvQztBQUUrQjtBQUN4RTtBQUNrQjtBQUNvQjtBQUNqQjtBQUNaO0FBSS9DLElBQWdERSxHQU0vQyxHQU4rQ0Esc0RBQWUsQ0FDN0Q7SUFDRUcsZ0RBQU07Q0FFUCxDQUhELE1BR0MsQ0FEQyxxRkFBSU8sT0FBTyxDQUFDQyxHQUFHLENBQUNDLDJCQUEyQixLQUFLLE1BQU0sR0FBRztJQUFDVCxnREFBTTtDQUFDLEdBQUcsRUFBRSxDQUFuRSxDQUNKLEVBQ0Q7SUFBQ0Msc0VBQWMsRUFBRTtDQUFDLENBQ25CLEVBTk9TLE1BQU0sR0FBa0NiLEdBTS9DLENBTk9hLE1BQU0sRUFBRUMsUUFBUSxHQUF3QmQsR0FNL0MsQ0FOZWMsUUFBUSxFQUFFQyxpQkFBaUIsR0FBS2YsR0FNL0MsQ0FOeUJlLGlCQUFpQjtBQVEzQyxJQUFNLFVBQVksR0FBS2pCLHlFQUFpQixDQUFDO0lBQ3ZDbUIsT0FBTyxFQUFFLGdCQUFnQjtJQUN6QkosTUFBTSxFQUFOQSxNQUFNO0NBQ1AsQ0FBQyxDQUhNRyxVQUFVO0FBS2xCLElBQU1FLFdBQVcsR0FBR2pCLG1EQUFZLENBQUM7SUFDL0JrQixXQUFXLEVBQUUsSUFBSTtJQUNqQkgsVUFBVSxFQUFWQSxVQUFVO0lBQ1ZGLFFBQVEsRUFBUkEsUUFBUTtJQUNSQyxpQkFBaUIsRUFBakJBLGlCQUFpQjtDQUNsQixDQUFDO0FBRUYsSUFBTUssWUFBWSxHQUFJLG1NQWFyQjtBQUVELElBQU1DLE1BQU0sR0FBR2hCLGtEQUFnQixDQUFDO0lBQzVCaUIsR0FBRyxFQUFFLHFCQUFxQjtJQUMxQkMsYUFBYSxFQUFFLG1CQUFtQjtJQUNsQ0MsU0FBUyxFQUFFO1FBQUNoQiwwRUFBYSxDQUFDQyx5Q0FBVyxDQUFDO0tBQUM7Q0FDMUMsQ0FBQztBQUdGZ0IsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE1BQU0sQ0FBQztBQUVuQixTQUFTQyxLQUFLLENBQUMsS0FBa0MsRUFBRTtRQUFsQ0MsU0FBUyxHQUFYLEtBQWtDLENBQWhDQSxTQUFTLEVBQUVDLFNBQVMsR0FBdEIsS0FBa0MsQ0FBckJBLFNBQVM7O0lBRWpDLElBQWlDdkIsR0FFL0IscUZBRitCQSw4Q0FBUSxDQUFDO1FBQ3RDYSxZQUFZLEVBQVpBLFlBQVk7S0FDZixDQUFDLE1BRktPLFFBQU0sR0FBb0JwQixHQUUvQixHQUZXLEVBQUV3QixjQUFjLEdBQUl4QixHQUUvQixHQUYyQjtJQUc3QixJQUFReUIsSUFBSSxHQUFzQkwsUUFBTSxDQUFoQ0ssSUFBSSxFQUFFQyxRQUFRLEdBQVlOLFFBQU0sQ0FBMUJNLFFBQVEsRUFBRUMsS0FBSyxHQUFLUCxRQUFNLENBQWhCTyxLQUFLO0lBRS9CLHFCQUNFLDhEQUFDaEMsOENBQVc7UUFBQ21CLE1BQU0sRUFBRUgsV0FBVztrQkFDOUIsNEVBQUNuQixzRUFBa0I7WUFBQ2MsTUFBTSxFQUFFQSxNQUFNO3NCQUNoQyw0RUFBQ1AsMENBQVE7Z0JBQUM2QixLQUFLLEVBQUVkLE1BQU07MEJBQ3JCLDRFQUFDUSxTQUFTLHNGQUFLQyxTQUFTOzs7O3dCQUFJOzs7OztvQkFDbkI7Ozs7O2dCQUNROzs7OztZQUNULENBQ2Q7QUFDSixDQUFDO0dBaEJRRixLQUFLOztRQUV1QnJCLDBDQUFROzs7QUFGcENxQixLQUFBQSxLQUFLO0FBa0JkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgJ0ByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBnZXREZWZhdWx0V2FsbGV0cywgUmFpbmJvd0tpdFByb3ZpZGVyIH0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnLCB1c2VQcmVwYXJlQ29udHJhY3RXcml0ZSwgdXNlQ29udHJhY3RXcml0ZSB9IGZyb20gJ3dhZ21pJztcbmltcG9ydCB7IGdvZXJsaSB9IGZyb20gJ3dhZ21pL2NoYWlucyc7XG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9wdWJsaWMnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IGFzIGNyZWF0ZVVycWxDbGllbnQsIFByb3ZpZGVyLCB1c2VRdWVyeSB9IGZyb20gJ3VycWwnO1xuaW1wb3J0IHsgZ3JhcGhFeGNoYW5nZSB9IGZyb20gJ0BncmFwaHByb3RvY29sL2NsaWVudC11cnFsJztcbmltcG9ydCAqIGFzIEdyYXBoQ2xpZW50IGZyb20gJy4uLy5ncmFwaGNsaWVudCc7XG5pbXBvcnQgZXRoZXJDb2luRmxpcEFCSSBmcm9tICcuL3V0aWxzL2V0aGVyQ29pbkZsaXBBQkkuanNvbic7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciwgd2ViU29ja2V0UHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcbiAgW1xuICAgIGdvZXJsaSxcbiAgICAuLi4ocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRU5BQkxFX1RFU1RORVRTID09PSAndHJ1ZScgPyBbZ29lcmxpXSA6IFtdKSxcbiAgXSxcbiAgW3B1YmxpY1Byb3ZpZGVyKCldXG4pO1xuXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcbiAgYXBwTmFtZTogJ1JhaW5ib3dLaXQgQXBwJyxcbiAgY2hhaW5zLFxufSk7XG5cbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gIGNvbm5lY3RvcnMsXG4gIHByb3ZpZGVyLFxuICB3ZWJTb2NrZXRQcm92aWRlcixcbn0pO1xuXG5jb25zdCBleGFtcGxlUXVlcnkgPSBge1xuZmluaXNoZWRDb2luRmxpcHMoZmlyc3Q6IDUpIHtcbiAgICBpZFxuICAgIHdpbm5lclxuICAgIGJsb2NrTnVtYmVyXG4gICAgYmxvY2tUaW1lc3RhbXBcbn1cbnN0YXJ0ZWRDb2luZkZsaXBzKGZpcnN0OiA1KSB7XG4gICAgaWRcbiAgICB0aGVDb2luRmxpcElEXG4gICAgYmxvY2tOdW1iZXJcbiAgICBibG9ja1RpbWVzdGFtcFxufVxufWBcblxuY29uc3QgY2xpZW50ID0gY3JlYXRlVXJxbENsaWVudCh7XG4gICAgdXJsOiAnZ3JhcGhjbGllbnQ6Ly9kdW1teScsXG4gICAgcmVxdWVzdFBvbGljeTogJ2NhY2hlLWFuZC1uZXR3b3JrJyxcbiAgICBleGNoYW5nZXM6IFtncmFwaEV4Y2hhbmdlKEdyYXBoQ2xpZW50KV0sXG59KTtcblxuXG5jb25zb2xlLmxvZyhyZXN1bHQpXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcblxuICAgIGNvbnN0IFtyZXN1bHQsIHJlZXhlY3V0ZVF1ZXJ5XSA9IHVzZVF1ZXJ5KHtcbiAgICAgICAgZXhhbXBsZVF1ZXJ5LFxuICAgIH0pO1xuICAgIGNvbnN0IHsgZGF0YSwgZmV0Y2hpbmcsIGVycm9yIH0gPSByZXN1bHQ7XG5cbiAgcmV0dXJuIChcbiAgICA8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XG4gICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfT5cbiAgICAgICAgPFByb3ZpZGVyIHZhbHVlPXtjbGllbnR9PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgIDwvV2FnbWlDb25maWc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJnb2VybGkiLCJwdWJsaWNQcm92aWRlciIsImNyZWF0ZVVycWxDbGllbnQiLCJQcm92aWRlciIsInVzZVF1ZXJ5IiwiZ3JhcGhFeGNoYW5nZSIsIkdyYXBoQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0VOQUJMRV9URVNUTkVUUyIsImNoYWlucyIsInByb3ZpZGVyIiwid2ViU29ja2V0UHJvdmlkZXIiLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJleGFtcGxlUXVlcnkiLCJjbGllbnQiLCJ1cmwiLCJyZXF1ZXN0UG9saWN5IiwiZXhjaGFuZ2VzIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicmVleGVjdXRlUXVlcnkiLCJkYXRhIiwiZmV0Y2hpbmciLCJlcnJvciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});