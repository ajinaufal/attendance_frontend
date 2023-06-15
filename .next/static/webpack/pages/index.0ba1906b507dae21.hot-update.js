"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_button_attendance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/button_attendance */ \"./components/button_attendance.tsx\");\n/* harmony import */ var _components_input_date_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/input_date_component */ \"./components/input_date_component.tsx\");\n/* harmony import */ var _components_sidebar_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/sidebar_components */ \"./components/sidebar_components.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/globals.css */ \"./app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Array);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"http://127.0.0.1:4000/attendance\", {\n                method: \"GET\",\n                headers: {\n                    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODgyMmJkYzdiMTI0MDQ4YWZjYThlMSIsImVtYWlsIjoiUHJpY2U2MUB5YWhvby5jb20iLCJ1c2VyaWQiOiJhYzcxODY3NC1jZTY0LTRkNzMtYmIwMC1kYTVjNDUxMjYwNmIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY4NjgwNjA3NCwiZXhwIjoxNjg3NDEwODc0fQ._qqAUkzgtH0Z0VkKObGHVh3XtBeK88qQLZLk6kOT6Bc\"\n                }\n            });\n            const jsonData = await response.json();\n            const items = jsonData.data.map((item)=>new Attendance(item));\n            setData(items);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                name: \"makan\"\n            }, void 0, false, {\n                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-center items-center h-screen px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-3/5 flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 bg-gray-800 rounded-t-2xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input_date_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input_date_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button_attendance__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: \"bg-gray-800 border-none w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                    className: \"table-auto text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-6 py-3\",\n                                                children: \"In\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-6 py-3\",\n                                                children: \"Out\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-6 py-3\",\n                                                children: \"Total Hours\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    children: data.map((attendance)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"col\",\n                                                    className: \"px-6 py-3 text-center\",\n                                                    children: attendance.inAt\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"col\",\n                                                    className: \"px-6 py-3 text-center\",\n                                                    children: attendance.outAt\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"col\",\n                                                    className: \"px-6 py-3 text-center\",\n                                                    children: \"Total Hours\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 33\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"nmZI8LV0PVHzafe1X4QnQQ+NhlQ=\");\n_c = Home;\nclass Attendance {\n    constructor(data){\n        this.user_token = data.user_token;\n        this.inAt = new Date(parseInt(data.inAt)).toLocaleString(\"id-ID\", {\n            year: \"numeric\",\n            month: \"short\",\n            day: \"numeric\",\n            hour: \"numeric\",\n            minute: \"numeric\",\n            second: \"numeric\"\n        });\n        this.createdAt = data.createdAt;\n        this.outAt = data.outAt;\n        this.totalHour = Math.floor(Math.abs((!data.outAt ? Date.now() : new Date(parseInt(data.outAt)).getTime()) - new Date(parseInt(data.inAt)).getTime()) / (1000 * 60 * 60));\n    }\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDOEQ7QUFDSztBQUNIO0FBRXBCO0FBQ2pCO0FBSVosU0FBU0s7O0lBQ3BCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQ0k7SUFDakNMLGdEQUFTQSxDQUFDO1FBQ05NO0lBQ0osR0FBRyxFQUFFO0lBQ0wsTUFBTUEsWUFBWTtRQUNkLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sb0NBQW9DO2dCQUM3REMsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxpQkFBaUI7Z0JBQ3JCO1lBQ0o7WUFDQSxNQUFNQyxXQUFXLE1BQU1KLFNBQVNLO1lBQ2hDLE1BQU1DLFFBQVFGLFNBQVNSLEtBQUtXLElBQUksQ0FBQ0MsT0FBYyxJQUFJQyxXQUFXRDtZQUM5RFgsUUFBUVM7UUFDWixFQUFFLE9BQU9JLE9BQU87WUFDWkMsUUFBUUQsTUFBTSx3QkFBd0JBO1FBQzFDO0lBQ0o7SUFDQSxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNyQixzRUFBaUJBO2dCQUFDc0IsTUFBTTs7Ozs7OzBCQUN6Qiw4REFBQ0Y7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDdEIsd0VBQWtCQTs7Ozs7OENBQ25CLDhEQUFDQSx3RUFBa0JBOzs7Ozs4Q0FDbkIsOERBQUNELHFFQUFnQkE7Ozs7Ozs7Ozs7O3NDQUVyQiw4REFBQ3lCOzRCQUFNRixXQUFVOzs4Q0FDYiw4REFBQ0c7b0NBQU1ILFdBQVU7OENBQ2IsNEVBQUNJOzswREFDRyw4REFBQ0M7Z0RBQUdDLE9BQU07Z0RBQU1OLFdBQVU7MERBQVk7Ozs7OzswREFHdEMsOERBQUNLO2dEQUFHQyxPQUFNO2dEQUFNTixXQUFVOzBEQUFZOzs7Ozs7MERBR3RDLDhEQUFDSztnREFBR0MsT0FBTTtnREFBTU4sV0FBVTswREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSzlDLDhEQUFDTzs4Q0FDSXhCLEtBQUtXLElBQUksQ0FBQ2MsMkJBQ1AsOERBQUNKOzs4REFDRyw4REFBQ0s7b0RBQUdILE9BQU07b0RBQU1OLFdBQVU7OERBQ3JCUSxXQUFXRTs7Ozs7OzhEQUVoQiw4REFBQ0Q7b0RBQUdILE9BQU07b0RBQU1OLFdBQVU7OERBQ3JCUSxXQUFXRzs7Ozs7OzhEQUVoQiw4REFBQ0Y7b0RBQUdILE9BQU07b0RBQU1OLFdBQVU7OERBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXRGO0dBakV3QmxCO0tBQUFBO0FBbUV4QixNQUFNYztJQU9GZ0IsWUFBWTdCLElBQVMsQ0FBRTtRQUNuQixJQUFJLENBQUM4QixhQUFhOUIsS0FBSzhCO1FBQ3ZCLElBQUksQ0FBQ0gsT0FBTyxJQUFJSSxLQUFLQyxTQUFTaEMsS0FBSzJCLE9BQU9NLGVBQWUsU0FBUztZQUM5REMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxRQUFRO1lBQ1JDLFFBQVE7UUFDWjtRQUNBLElBQUksQ0FBQ0MsWUFBWXhDLEtBQUt3QztRQUN0QixJQUFJLENBQUNaLFFBQVE1QixLQUFLNEI7UUFDbEIsSUFBSSxDQUFDYSxZQUFZQyxLQUFLQyxNQUFNRCxLQUFLRSxJQUFJLENBQUMsQ0FBQzVDLEtBQUs0QixRQUFRRyxLQUFLYyxRQUFRLElBQUlkLEtBQUtDLFNBQVNoQyxLQUFLNEIsUUFBUWtCLFNBQVEsSUFBSyxJQUFJZixLQUFLQyxTQUFTaEMsS0FBSzJCLE9BQU9tQixhQUFjLFFBQU8sS0FBSyxFQUFDO0lBQzFLO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IEJ1dHRvbkF0dGVuZGFuY2UgZnJvbSBcIkAvY29tcG9uZW50cy9idXR0b25fYXR0ZW5kYW5jZVwiO1xuaW1wb3J0IElucHV0RGF0ZUNvbXBvbmVudCBmcm9tIFwiQC9jb21wb25lbnRzL2lucHV0X2RhdGVfY29tcG9uZW50XCI7XG5pbXBvcnQgU2lkYWJhckNvbXBvbmVudHMgZnJvbSBcIkAvY29tcG9uZW50cy9zaWRlYmFyX2NvbXBvbmVudHNcIjtcbmltcG9ydCBUYWJsZUF0dGVuZGFuY2UgZnJvbSBcIkAvY29tcG9uZW50cy90YWJsZV9hdHRlbmRhbmNlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9hcHAvZ2xvYmFscy5jc3MnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKEFycmF5PEF0dGVuZGFuY2U+KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo0MDAwL2F0dGVuZGFuY2UnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciBleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJalkwT0RneU1tSmtZemRpTVRJME1EUTRZV1pqWVRobE1TSXNJbVZ0WVdsc0lqb2lVSEpwWTJVMk1VQjVZV2h2Ynk1amIyMGlMQ0oxYzJWeWFXUWlPaUpoWXpjeE9EWTNOQzFqWlRZMExUUmtOek10WW1Jd01DMWtZVFZqTkRVeE1qWXdObUlpTENKaFpHMXBiaUk2Wm1Gc2MyVXNJbWxoZENJNk1UWTROamd3TmpBM05Dd2laWGh3SWpveE5qZzNOREV3T0RjMGZRLl9xcUFVa3pndEgwWjBWa0tPYkdIVmgzWHRCZUs4OHFRTFpMazZrT1Q2QmMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBqc29uRGF0YS5kYXRhLm1hcCgoaXRlbTogYW55KSA9PiBuZXcgQXR0ZW5kYW5jZShpdGVtKSk7XG4gICAgICAgICAgICBzZXREYXRhKGl0ZW1zKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyc+XG4gICAgICAgICAgICA8U2lkYWJhckNvbXBvbmVudHMgbmFtZT17J21ha2FuJ30+PC9TaWRhYmFyQ29tcG9uZW50cz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gcHgtOCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMy81IGZsZXggZmxleC1jb2wnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXktMyBtZDpzcGFjZS15LTAgbWQ6c3BhY2UteC00IHAtNCBiZy1ncmF5LTgwMCByb3VuZGVkLXQtMnhsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dERhdGVDb21wb25lbnQ+PC9JbnB1dERhdGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXREYXRlQ29tcG9uZW50PjwvSW5wdXREYXRlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkF0dGVuZGFuY2U+PC9CdXR0b25BdHRlbmRhbmNlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIGJvcmRlci1ub25lIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT0ndGFibGUtYXV0byB0ZXh0LXhzIHRleHQtZ3JheS03MDAgdXBwZXJjYXNlIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIEhvdXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChhdHRlbmRhbmNlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdHRlbmRhbmNlLmluQXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2F0dGVuZGFuY2Uub3V0QXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgSG91cnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jbGFzcyBBdHRlbmRhbmNlIHtcbiAgICBwdWJsaWMgdXNlcl90b2tlbjogc3RyaW5nO1xuICAgIHB1YmxpYyBjcmVhdGVkQXQ6IHN0cmluZztcbiAgICBwdWJsaWMgaW5BdDogc3RyaW5nO1xuICAgIHB1YmxpYyBvdXRBdDogc3RyaW5nO1xuICAgIHB1YmxpYyB0b3RhbEhvdXI6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xuICAgICAgICB0aGlzLnVzZXJfdG9rZW4gPSBkYXRhLnVzZXJfdG9rZW47XG4gICAgICAgIHRoaXMuaW5BdCA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGEuaW5BdCkpLnRvTG9jYWxlU3RyaW5nKFwiaWQtSURcIiwge1xuICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgICAgICBtb250aDogXCJzaG9ydFwiLFxuICAgICAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgbWludXRlOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgIHNlY29uZDogXCJudW1lcmljXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyZWF0ZWRBdCA9IGRhdGEuY3JlYXRlZEF0O1xuICAgICAgICB0aGlzLm91dEF0ID0gZGF0YS5vdXRBdDtcbiAgICAgICAgdGhpcy50b3RhbEhvdXIgPSBNYXRoLmZsb29yKE1hdGguYWJzKCghZGF0YS5vdXRBdCA/IERhdGUubm93KCkgOiBuZXcgRGF0ZShwYXJzZUludChkYXRhLm91dEF0KSkuZ2V0VGltZSgpKSAtIG5ldyBEYXRlKHBhcnNlSW50KGRhdGEuaW5BdCkpLmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkJ1dHRvbkF0dGVuZGFuY2UiLCJJbnB1dERhdGVDb21wb25lbnQiLCJTaWRhYmFyQ29tcG9uZW50cyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsImRhdGEiLCJzZXREYXRhIiwiQXJyYXkiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImpzb25EYXRhIiwianNvbiIsIml0ZW1zIiwibWFwIiwiaXRlbSIsIkF0dGVuZGFuY2UiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJuYW1lIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRib2R5IiwiYXR0ZW5kYW5jZSIsInRkIiwiaW5BdCIsIm91dEF0IiwiY29uc3RydWN0b3IiLCJ1c2VyX3Rva2VuIiwiRGF0ZSIsInBhcnNlSW50IiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwiY3JlYXRlZEF0IiwidG90YWxIb3VyIiwiTWF0aCIsImZsb29yIiwiYWJzIiwibm93IiwiZ2V0VGltZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});