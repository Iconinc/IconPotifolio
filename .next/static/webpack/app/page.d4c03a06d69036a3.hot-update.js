"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/sections/hero/ToolsShowcase.tsx":
/*!********************************************************!*\
  !*** ./src/components/sections/hero/ToolsShowcase.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _lib_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/content */ \"(app-pages-browser)/./src/lib/content.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ToolsShowcase = ()=>{\n    _s();\n    const [hoveredItem, setHoveredItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [selectedTool, setSelectedTool] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();\n    const repeatedTools = [\n        ..._lib_content__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tools,\n        ..._lib_content__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tools,\n        ..._lib_content__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tools\n    ];\n    const startScrolling = ()=>{\n        controls.start({\n            x: [\n                \"0%\",\n                \"-33.33%\"\n            ],\n            transition: {\n                x: {\n                    repeat: Infinity,\n                    repeatType: \"loop\",\n                    duration: 30,\n                    ease: \"linear\"\n                }\n            }\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        startScrolling();\n    }, []);\n    const handleToolClick = (index)=>{\n        setSelectedTool(selectedTool === index ? null : index);\n        controls.stop();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full mt-8 mb-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative overflow-hidden py-12 sm:py-14 md:py-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    className: \"flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,black_10%,transparent)]\",\n                    initial: {\n                        y: 100,\n                        opacity: 0\n                    },\n                    animate: {\n                        y: 0,\n                        opacity: 1\n                    },\n                    transition: {\n                        duration: 0.5,\n                        delay: 0.5\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        className: \"flex space-x-6 sm:space-x-8 md:space-x-12 lg:space-x-16\",\n                        animate: controls,\n                        style: {\n                            whiteSpace: \"nowrap\"\n                        },\n                        children: repeatedTools.map((tool, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative group cursor-pointer\",\n                                onMouseEnter: ()=>{\n                                    setHoveredItem(index);\n                                    if (selectedTool === null) controls.stop();\n                                },\n                                onMouseLeave: ()=>{\n                                    setHoveredItem(null);\n                                    if (selectedTool === null) startScrolling();\n                                },\n                                onClick: ()=>handleToolClick(index),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                                        className: \"w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-300\\n                      \".concat(selectedTool === index ? \"bg-gradient-to-r from-blue-50 to-purple-50 shadow-[0_0_30px_rgba(147,51,234,0.3)]\" : \"bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)]\"),\n                                        whileHover: {\n                                            scale: 1.05,\n                                            y: -5\n                                        },\n                                        whileTap: {\n                                            scale: 0.95,\n                                            transition: {\n                                                duration: 0.1\n                                            }\n                                        },\n                                        animate: {\n                                            boxShadow: selectedTool === index ? \"0 10px 40px rgba(147, 51, 234, 0.3)\" : hoveredItem === index ? \"0 8px 30px rgba(0, 0, 0, 0.15)\" : \"0 4px 20px rgba(0, 0, 0, 0.08)\",\n                                            scale: selectedTool === index ? 1.1 : 1,\n                                            y: selectedTool === index ? -8 : 0\n                                        },\n                                        children: tool.icon ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                                            src: tool.icon,\n                                            alt: tool.name,\n                                            className: \"w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain\",\n                                            animate: {\n                                                scale: selectedTool === index ? 1.1 : 1,\n                                                rotate: selectedTool === index ? 360 : 0\n                                            },\n                                            transition: {\n                                                rotate: {\n                                                    duration: 0.5\n                                                },\n                                                scale: {\n                                                    duration: 0.2\n                                                }\n                                            },\n                                            onError: (e)=>{\n                                                const target = e.target;\n                                                target.src = \"/placeholder-icon.svg\";\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/apple/Desktop/IconPotifolio/src/components/sections/hero/ToolsShowcase.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 23\n                                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-xs sm:text-sm md:text-base font-medium text-gray-600\",\n                                            children: tool.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/apple/Desktop/IconPotifolio/src/components/sections/hero/ToolsShowcase.tsx\",\n                                            lineNumber: 113,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/apple/Desktop/IconPotifolio/src/components/sections/hero/ToolsShowcase.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                                        className: \"absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 sm:px-3 py-1 sm:py-2 rounded md:rounded-lg text-xs sm:text-sm shadow-xl pointer-events-none whitespace-nowrap\",\n                                        initial: {\n                                            opacity: 0,\n                                            y: 10\n                                        },\n                                        animate: {\n                                            opacity: hoveredItem === index || selectedTool === index ? 1 : 0,\n                                            y: hoveredItem === index || selectedTool === index ? 0 : 10,\n                                            scale: selectedTool === index ? 1.1 : 1\n                                        },\n                                        transition: {\n                                            duration: 0.2\n                                        },\n                                        children: [\n                                            tool.name,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-black rotate-45\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/apple/Desktop/IconPotifolio/src/components/sections/hero/ToolsShowcase.tsx\",\n                                                lineNumber: 134,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/apple/Desktop/IconPotifolio/src/components/sections/hero/ToolsShowcase.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, \"\".concat(tool.name, \"-\").concat(index), true, {\n                                fileName: \"/Users/apple/Desktop/IconPotifolio/src/components/sections/hero/ToolsShowcase.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Desktop/IconPotifolio/src/components/sections/hero/ToolsShowcase.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Desktop/IconPotifolio/src/components/sections/hero/ToolsShowcase.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Desktop/IconPotifolio/src/components/sections/hero/ToolsShowcase.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/apple/Desktop/IconPotifolio/src/components/sections/hero/ToolsShowcase.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/apple/Desktop/IconPotifolio/src/components/sections/hero/ToolsShowcase.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ToolsShowcase, \"tlD5/TKwhVgrK5rTqoUjLgLgR8E=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation\n    ];\n});\n_c = ToolsShowcase;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToolsShowcase);\nvar _c;\n$RefreshReg$(_c, \"ToolsShowcase\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL2hlcm8vVG9vbHNTaG93Y2FzZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBQ0U7QUFDYjtBQUV4QyxNQUFNTSxnQkFBZ0I7O0lBQ3BCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBZ0I7SUFDOUQsTUFBTSxDQUFDUSxjQUFjQyxnQkFBZ0IsR0FBR1QsK0NBQVFBLENBQWdCO0lBQ2hFLE1BQU1VLFdBQVdQLDJEQUFZQTtJQUU3QixNQUFNUSxnQkFBZ0I7V0FDakJQLG9EQUFXQSxDQUFDUSxLQUFLO1dBQ2pCUixvREFBV0EsQ0FBQ1EsS0FBSztXQUNqQlIsb0RBQVdBLENBQUNRLEtBQUs7S0FDckI7SUFFRCxNQUFNQyxpQkFBaUI7UUFDckJILFNBQVNJLEtBQUssQ0FBQztZQUNiQyxHQUFHO2dCQUFDO2dCQUFNO2FBQVU7WUFDcEJDLFlBQVk7Z0JBQ1ZELEdBQUc7b0JBQ0RFLFFBQVFDO29CQUNSQyxZQUFZO29CQUNaQyxVQUFVO29CQUNWQyxNQUFNO2dCQUNSO1lBQ0Y7UUFDRjtJQUNGO0lBRUFwQixnREFBU0EsQ0FBQztRQUNSWTtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1TLGtCQUFrQixDQUFDQztRQUN2QmQsZ0JBQWdCRCxpQkFBaUJlLFFBQVEsT0FBT0E7UUFDaERiLFNBQVNjLElBQUk7SUFDZjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ3hCLGlEQUFNQSxDQUFDdUIsR0FBRztvQkFDVEMsV0FBVTtvQkFDVkMsU0FBUzt3QkFBRUMsR0FBRzt3QkFBS0MsU0FBUztvQkFBRTtvQkFDOUJDLFNBQVM7d0JBQUVGLEdBQUc7d0JBQUdDLFNBQVM7b0JBQUU7b0JBQzVCYixZQUFZO3dCQUFFSSxVQUFVO3dCQUFLVyxPQUFPO29CQUFJOzhCQUV4Qyw0RUFBQzdCLGlEQUFNQSxDQUFDdUIsR0FBRzt3QkFDVEMsV0FBVTt3QkFDVkksU0FBU3BCO3dCQUNUc0IsT0FBTzs0QkFBRUMsWUFBWTt3QkFBUztrQ0FFN0J0QixjQUFjdUIsR0FBRyxDQUFDLENBQUNDLE1BQU1aLHNCQUN4Qiw4REFBQ0U7Z0NBRUNDLFdBQVU7Z0NBQ1ZVLGNBQWM7b0NBQ1o3QixlQUFlZ0I7b0NBQ2YsSUFBSWYsaUJBQWlCLE1BQU1FLFNBQVNjLElBQUk7Z0NBQzFDO2dDQUNBYSxjQUFjO29DQUNaOUIsZUFBZTtvQ0FDZixJQUFJQyxpQkFBaUIsTUFBTUs7Z0NBQzdCO2dDQUNBeUIsU0FBUyxJQUFNaEIsZ0JBQWdCQzs7a0RBRS9CLDhEQUFDckIsaURBQU1BLENBQUN1QixHQUFHO3dDQUNUQyxXQUFXLDhJQUtSLE9BSENsQixpQkFBaUJlLFFBQ2Isc0ZBQ0E7d0NBRVJnQixZQUFZOzRDQUNWQyxPQUFPOzRDQUNQWixHQUFHLENBQUM7d0NBQ047d0NBQ0FhLFVBQVU7NENBQ1JELE9BQU87NENBQ1B4QixZQUFZO2dEQUFFSSxVQUFVOzRDQUFJO3dDQUM5Qjt3Q0FDQVUsU0FBUzs0Q0FDUFksV0FDRWxDLGlCQUFpQmUsUUFDYix3Q0FDQWpCLGdCQUFnQmlCLFFBQ2hCLG1DQUNBOzRDQUNOaUIsT0FBT2hDLGlCQUFpQmUsUUFBUSxNQUFNOzRDQUN0Q0ssR0FBR3BCLGlCQUFpQmUsUUFBUSxDQUFDLElBQUk7d0NBQ25DO2tEQUVDWSxLQUFLUSxJQUFJLGlCQUNSLDhEQUFDekMsaURBQU1BLENBQUMwQyxHQUFHOzRDQUNUQyxLQUFLVixLQUFLUSxJQUFJOzRDQUNkRyxLQUFLWCxLQUFLWSxJQUFJOzRDQUNkckIsV0FBVTs0Q0FDVkksU0FBUztnREFDUFUsT0FBT2hDLGlCQUFpQmUsUUFBUSxNQUFNO2dEQUN0Q3lCLFFBQVF4QyxpQkFBaUJlLFFBQVEsTUFBTTs0Q0FDekM7NENBQ0FQLFlBQVk7Z0RBQ1ZnQyxRQUFRO29EQUFFNUIsVUFBVTtnREFBSTtnREFDeEJvQixPQUFPO29EQUFFcEIsVUFBVTtnREFBSTs0Q0FDekI7NENBQ0E2QixTQUFTLENBQUNDO2dEQUNSLE1BQU1DLFNBQVNELEVBQUVDLE1BQU07Z0RBQ3ZCQSxPQUFPTixHQUFHLEdBQUc7NENBQ2Y7Ozs7O3NFQUdGLDhEQUFDcEI7NENBQUlDLFdBQVU7c0RBQ1pTLEtBQUtZLElBQUk7Ozs7Ozs7Ozs7O2tEQUtoQiw4REFBQzdDLGlEQUFNQSxDQUFDdUIsR0FBRzt3Q0FDVEMsV0FBVTt3Q0FDVkMsU0FBUzs0Q0FBRUUsU0FBUzs0Q0FBR0QsR0FBRzt3Q0FBRzt3Q0FDN0JFLFNBQVM7NENBQ1BELFNBQ0V2QixnQkFBZ0JpQixTQUFTZixpQkFBaUJlLFFBQVEsSUFBSTs0Q0FDeERLLEdBQ0V0QixnQkFBZ0JpQixTQUFTZixpQkFBaUJlLFFBQ3RDLElBQ0E7NENBQ05pQixPQUFPaEMsaUJBQWlCZSxRQUFRLE1BQU07d0NBQ3hDO3dDQUNBUCxZQUFZOzRDQUFFSSxVQUFVO3dDQUFJOzs0Q0FFM0JlLEtBQUtZLElBQUk7MERBQ1YsOERBQUN0QjtnREFBSUMsV0FBVTs7Ozs7Ozs7Ozs7OzsrQkE5RVosR0FBZ0JILE9BQWJZLEtBQUtZLElBQUksRUFBQyxLQUFTLE9BQU54Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0Z2QztHQTNJTWxCOztRQUdhRix1REFBWUE7OztLQUh6QkU7QUE2SU4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvaGVyby9Ub29sc1Nob3djYXNlLnRzeD9hODQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgY29udGVudERhdGEgZnJvbSBcIkAvbGliL2NvbnRlbnRcIjtcblxuY29uc3QgVG9vbHNTaG93Y2FzZSA9ICgpID0+IHtcbiAgY29uc3QgW2hvdmVyZWRJdGVtLCBzZXRIb3ZlcmVkSXRlbV0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3NlbGVjdGVkVG9vbCwgc2V0U2VsZWN0ZWRUb29sXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBjb250cm9scyA9IHVzZUFuaW1hdGlvbigpO1xuXG4gIGNvbnN0IHJlcGVhdGVkVG9vbHMgPSBbXG4gICAgLi4uY29udGVudERhdGEudG9vbHMsXG4gICAgLi4uY29udGVudERhdGEudG9vbHMsXG4gICAgLi4uY29udGVudERhdGEudG9vbHMsXG4gIF07XG5cbiAgY29uc3Qgc3RhcnRTY3JvbGxpbmcgPSAoKSA9PiB7XG4gICAgY29udHJvbHMuc3RhcnQoe1xuICAgICAgeDogW1wiMCVcIiwgXCItMzMuMzMlXCJdLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICB4OiB7XG4gICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcbiAgICAgICAgICByZXBlYXRUeXBlOiBcImxvb3BcIixcbiAgICAgICAgICBkdXJhdGlvbjogMzAsXG4gICAgICAgICAgZWFzZTogXCJsaW5lYXJcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzdGFydFNjcm9sbGluZygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlVG9vbENsaWNrID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBzZXRTZWxlY3RlZFRvb2woc2VsZWN0ZWRUb29sID09PSBpbmRleCA/IG51bGwgOiBpbmRleCk7XG4gICAgY29udHJvbHMuc3RvcCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtOCBtYi00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHB5LTEyIHNtOnB5LTE0IG1kOnB5LTE2XCI+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggb3ZlcmZsb3ctaGlkZGVuIFttYXNrLWltYWdlOmxpbmVhci1ncmFkaWVudCh0b19yaWdodCx0cmFuc3BhcmVudCx3aGl0ZV8yMCUsYmxhY2tfMTAlLHRyYW5zcGFyZW50KV1cIlxuICAgICAgICAgICAgaW5pdGlhbD17eyB5OiAxMDAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41LCBkZWxheTogMC41IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTYgc206c3BhY2UteC04IG1kOnNwYWNlLXgtMTIgbGc6c3BhY2UteC0xNlwiXG4gICAgICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtyZXBlYXRlZFRvb2xzLm1hcCgodG9vbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake3Rvb2wubmFtZX0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JvdXAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEhvdmVyZWRJdGVtKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVG9vbCA9PT0gbnVsbCkgY29udHJvbHMuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRIb3ZlcmVkSXRlbShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVG9vbCA9PT0gbnVsbCkgc3RhcnRTY3JvbGxpbmcoKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUb29sQ2xpY2soaW5kZXgpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTQgaC0xNCBzbTp3LTIwIHNtOmgtMjAgbWQ6dy0yNCBtZDpoLTI0IHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcbiAgICAgICAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUb29sID09PSBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNTAgdG8tcHVycGxlLTUwIHNoYWRvdy1bMF8wXzMwcHhfcmdiYSgxNDcsNTEsMjM0LDAuMyldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJnLWdyYXktMTAwIHNoYWRvdy1bMF80cHhfMjBweF9yZ2JhKDAsMCwwLDAuMDgpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMS4wNSxcbiAgICAgICAgICAgICAgICAgICAgICB5OiAtNSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGVUYXA9e3tcbiAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMC45NSxcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjEgfSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVG9vbCA9PT0gaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjAgMTBweCA0MHB4IHJnYmEoMTQ3LCA1MSwgMjM0LCAwLjMpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBob3ZlcmVkSXRlbSA9PT0gaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjAgOHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOClcIixcbiAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogc2VsZWN0ZWRUb29sID09PSBpbmRleCA/IDEuMSA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgeTogc2VsZWN0ZWRUb29sID09PSBpbmRleCA/IC04IDogMCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Rvb2wuaWNvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0b29sLmljb259XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Rvb2wubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOCBoLTggc206dy0xMCBzbTpoLTEwIG1kOnctMTIgbWQ6aC0xMiBvYmplY3QtY29udGFpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBzZWxlY3RlZFRvb2wgPT09IGluZGV4ID8gMS4xIDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlOiBzZWxlY3RlZFRvb2wgPT09IGluZGV4ID8gMzYwIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogeyBkdXJhdGlvbjogMC41IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7IGR1cmF0aW9uOiAwLjIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3JjID0gXCIvcGxhY2Vob2xkZXItaWNvbi5zdmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSBtZDp0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Rvb2wubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC04IHNtOi10b3AtMTAgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgYmctYmxhY2sgdGV4dC13aGl0ZSBweC0yIHNtOnB4LTMgcHktMSBzbTpweS0yIHJvdW5kZWQgbWQ6cm91bmRlZC1sZyB0ZXh0LXhzIHNtOnRleHQtc20gc2hhZG93LXhsIHBvaW50ZXItZXZlbnRzLW5vbmUgd2hpdGVzcGFjZS1ub3dyYXBcIlxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDEwIH19XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OlxuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJlZEl0ZW0gPT09IGluZGV4IHx8IHNlbGVjdGVkVG9vbCA9PT0gaW5kZXggPyAxIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICB5OlxuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJlZEl0ZW0gPT09IGluZGV4IHx8IHNlbGVjdGVkVG9vbCA9PT0gaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHNlbGVjdGVkVG9vbCA9PT0gaW5kZXggPyAxLjEgOiAxLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Rvb2wubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtYm90dG9tLTEgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgdy0xLjUgc206dy0yIGgtMS41IHNtOmgtMiBiZy1ibGFjayByb3RhdGUtNDVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sc1Nob3djYXNlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJ1c2VBbmltYXRpb24iLCJjb250ZW50RGF0YSIsIlRvb2xzU2hvd2Nhc2UiLCJob3ZlcmVkSXRlbSIsInNldEhvdmVyZWRJdGVtIiwic2VsZWN0ZWRUb29sIiwic2V0U2VsZWN0ZWRUb29sIiwiY29udHJvbHMiLCJyZXBlYXRlZFRvb2xzIiwidG9vbHMiLCJzdGFydFNjcm9sbGluZyIsInN0YXJ0IiwieCIsInRyYW5zaXRpb24iLCJyZXBlYXQiLCJJbmZpbml0eSIsInJlcGVhdFR5cGUiLCJkdXJhdGlvbiIsImVhc2UiLCJoYW5kbGVUb29sQ2xpY2siLCJpbmRleCIsInN0b3AiLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZGVsYXkiLCJzdHlsZSIsIndoaXRlU3BhY2UiLCJtYXAiLCJ0b29sIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25DbGljayIsIndoaWxlSG92ZXIiLCJzY2FsZSIsIndoaWxlVGFwIiwiYm94U2hhZG93IiwiaWNvbiIsImltZyIsInNyYyIsImFsdCIsIm5hbWUiLCJyb3RhdGUiLCJvbkVycm9yIiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/sections/hero/ToolsShowcase.tsx\n"));

/***/ })

});