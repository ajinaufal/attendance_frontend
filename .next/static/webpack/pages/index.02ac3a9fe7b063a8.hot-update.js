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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_button_attendance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/button_attendance */ \"./components/button_attendance.tsx\");\n/* harmony import */ var _components_input_date_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/input_date_component */ \"./components/input_date_component.tsx\");\n/* harmony import */ var _components_sidebar_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/sidebar_components */ \"./components/sidebar_components.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/globals.css */ \"./app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Array);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"http://127.0.0.1:4000/attendance\", {\n                method: \"GET\",\n                headers: {\n                    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODgyMmJkYzdiMTI0MDQ4YWZjYThlMSIsImVtYWlsIjoiUHJpY2U2MUB5YWhvby5jb20iLCJ1c2VyaWQiOiJhYzcxODY3NC1jZTY0LTRkNzMtYmIwMC1kYTVjNDUxMjYwNmIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY4NjgwNjA3NCwiZXhwIjoxNjg3NDEwODc0fQ._qqAUkzgtH0Z0VkKObGHVh3XtBeK88qQLZLk6kOT6Bc\"\n                }\n            });\n            const jsonData = await response.json();\n            const items = jsonData.data.map((item)=>new Attendance(item));\n            setData(items);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                name: \"makan\"\n            }, void 0, false, {\n                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-center items-center h-screen px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-3/5 flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 bg-gray-800 rounded-t-2xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input_date_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input_date_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button_attendance__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: \"bg-gray-800 border-none w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                    className: \"table-auto text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-6 py-3\",\n                                                children: \"In\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-6 py-3\",\n                                                children: \"Out\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-6 py-3\",\n                                                children: \"Total Hours\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    children: data.map((attendance)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"col\",\n                                                    className: \"px-6 py-3 text-center\",\n                                                    children: attendance.inAt\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"col\",\n                                                    className: \"px-6 py-3 text-center\",\n                                                    children: attendance.outAt\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"col\",\n                                                    className: \"px-6 py-3 text-center\",\n                                                    children: \"Total Hours\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 33\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"nmZI8LV0PVHzafe1X4QnQQ+NhlQ=\");\n_c = Home;\nclass Attendance {\n    constructor(data){\n        this.user_token = data.user_token;\n        this.inAt = new Date(parseInt(data.inAt)).toLocaleString(\"id-ID\", {\n            year: \"numeric\",\n            month: \"short\",\n            day: \"numeric\",\n            hour: \"numeric\",\n            minute: \"numeric\",\n            second: \"numeric\"\n        });\n        this.createdAt = data.createdAt;\n        this.outAt = data.outAt;\n        this.totalHour = ()=>{\n            let ouAt;\n            var inAt = new Date(parseInt(data.inAt)).getTime();\n            if (!data.outAt) {\n                ouAt = Date.now();\n            } else {\n                ouAt = new Date(parseInt(data.outAt)).getTime();\n            }\n            return Math.floor(Math.abs(ouAt - inAt) / (1000 * 60 * 60));\n        };\n    }\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDOEQ7QUFDSztBQUNIO0FBRXBCO0FBQ2pCO0FBSVosU0FBU0s7O0lBQ3BCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQ0k7SUFDakNMLGdEQUFTQSxDQUFDO1FBQ05NO0lBQ0osR0FBRyxFQUFFO0lBQ0wsTUFBTUEsWUFBWTtRQUNkLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sb0NBQW9DO2dCQUM3REMsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxpQkFBaUI7Z0JBQ3JCO1lBQ0o7WUFDQSxNQUFNQyxXQUFXLE1BQU1KLFNBQVNLO1lBQ2hDLE1BQU1DLFFBQVFGLFNBQVNSLEtBQUtXLElBQUksQ0FBQ0MsT0FBYyxJQUFJQyxXQUFXRDtZQUM5RFgsUUFBUVM7UUFDWixFQUFFLE9BQU9JLE9BQU87WUFDWkMsUUFBUUQsTUFBTSx3QkFBd0JBO1FBQzFDO0lBQ0o7SUFDQSxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNyQixzRUFBaUJBO2dCQUFDc0IsTUFBTTs7Ozs7OzBCQUN6Qiw4REFBQ0Y7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDdEIsd0VBQWtCQTs7Ozs7OENBQ25CLDhEQUFDQSx3RUFBa0JBOzs7Ozs4Q0FDbkIsOERBQUNELHFFQUFnQkE7Ozs7Ozs7Ozs7O3NDQUVyQiw4REFBQ3lCOzRCQUFNRixXQUFVOzs4Q0FDYiw4REFBQ0c7b0NBQU1ILFdBQVU7OENBQ2IsNEVBQUNJOzswREFDRyw4REFBQ0M7Z0RBQUdDLE9BQU07Z0RBQU1OLFdBQVU7MERBQVk7Ozs7OzswREFHdEMsOERBQUNLO2dEQUFHQyxPQUFNO2dEQUFNTixXQUFVOzBEQUFZOzs7Ozs7MERBR3RDLDhEQUFDSztnREFBR0MsT0FBTTtnREFBTU4sV0FBVTswREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSzlDLDhEQUFDTzs4Q0FDSXhCLEtBQUtXLElBQUksQ0FBQ2MsMkJBQ1AsOERBQUNKOzs4REFDRyw4REFBQ0s7b0RBQUdILE9BQU07b0RBQU1OLFdBQVU7OERBQ3JCUSxXQUFXRTs7Ozs7OzhEQUVoQiw4REFBQ0Q7b0RBQUdILE9BQU07b0RBQU1OLFdBQVU7OERBQ3JCUSxXQUFXRzs7Ozs7OzhEQUVoQiw4REFBQ0Y7b0RBQUdILE9BQU07b0RBQU1OLFdBQVU7OERBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXRGO0dBakV3QmxCO0tBQUFBO0FBbUV4QixNQUFNYztJQU9GZ0IsWUFBWTdCLElBQVMsQ0FBRTtRQUNuQixJQUFJLENBQUM4QixhQUFhOUIsS0FBSzhCO1FBQ3ZCLElBQUksQ0FBQ0gsT0FBTyxJQUFJSSxLQUFLQyxTQUFTaEMsS0FBSzJCLE9BQU9NLGVBQWUsU0FBUztZQUM5REMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxRQUFRO1lBQ1JDLFFBQVE7UUFDWjtRQUNBLElBQUksQ0FBQ0MsWUFBWXhDLEtBQUt3QztRQUN0QixJQUFJLENBQUNaLFFBQVE1QixLQUFLNEI7UUFDbEIsSUFBSSxDQUFDYSxZQUFZO1lBQ2IsSUFBSUM7WUFDSixJQUFJZixPQUFPLElBQUlJLEtBQUtDLFNBQVNoQyxLQUFLMkIsT0FBT2dCO1lBQ3pDLElBQUksQ0FBQzNDLEtBQUs0QixPQUFPO2dCQUNiYyxPQUFPWCxLQUFLYTtZQUNoQixPQUFPO2dCQUNIRixPQUFPLElBQUlYLEtBQUtDLFNBQVNoQyxLQUFLNEIsUUFBUWU7WUFDMUM7WUFFQSxPQUFPRSxLQUFLQyxNQUFNRCxLQUFLRSxJQUFJTCxPQUFPZixRQUFTLFFBQU8sS0FBSyxFQUFDO1FBRTVEO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgQnV0dG9uQXR0ZW5kYW5jZSBmcm9tIFwiQC9jb21wb25lbnRzL2J1dHRvbl9hdHRlbmRhbmNlXCI7XG5pbXBvcnQgSW5wdXREYXRlQ29tcG9uZW50IGZyb20gXCJAL2NvbXBvbmVudHMvaW5wdXRfZGF0ZV9jb21wb25lbnRcIjtcbmltcG9ydCBTaWRhYmFyQ29tcG9uZW50cyBmcm9tIFwiQC9jb21wb25lbnRzL3NpZGViYXJfY29tcG9uZW50c1wiO1xuaW1wb3J0IFRhYmxlQXR0ZW5kYW5jZSBmcm9tIFwiQC9jb21wb25lbnRzL3RhYmxlX2F0dGVuZGFuY2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL2FwcC9nbG9iYWxzLmNzcydcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoQXJyYXk8QXR0ZW5kYW5jZT4pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjQwMDAvYXR0ZW5kYW5jZScsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyIGV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTBPRGd5TW1Ka1l6ZGlNVEkwTURRNFlXWmpZVGhsTVNJc0ltVnRZV2xzSWpvaVVISnBZMlUyTVVCNVlXaHZieTVqYjIwaUxDSjFjMlZ5YVdRaU9pSmhZemN4T0RZM05DMWpaVFkwTFRSa056TXRZbUl3TUMxa1lUVmpORFV4TWpZd05tSWlMQ0poWkcxcGJpSTZabUZzYzJVc0ltbGhkQ0k2TVRZNE5qZ3dOakEzTkN3aVpYaHdJam94TmpnM05ERXdPRGMwZlEuX3FxQVVremd0SDBaMFZrS09iR0hWaDNYdEJlSzg4cVFMWkxrNmtPVDZCYycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGpzb25EYXRhLmRhdGEubWFwKChpdGVtOiBhbnkpID0+IG5ldyBBdHRlbmRhbmNlKGl0ZW0pKTtcbiAgICAgICAgICAgIHNldERhdGEoaXRlbXMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93Jz5cbiAgICAgICAgICAgIDxTaWRhYmFyQ29tcG9uZW50cyBuYW1lPXsnbWFrYW4nfT48L1NpZGFiYXJDb21wb25lbnRzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiBweC04Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0zLzUgZmxleCBmbGV4LWNvbCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteS0zIG1kOnNwYWNlLXktMCBtZDpzcGFjZS14LTQgcC00IGJnLWdyYXktODAwIHJvdW5kZWQtdC0yeGwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0RGF0ZUNvbXBvbmVudD48L0lucHV0RGF0ZUNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dERhdGVDb21wb25lbnQ+PC9JbnB1dERhdGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uQXR0ZW5kYW5jZT48L0J1dHRvbkF0dGVuZGFuY2U+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgYm9yZGVyLW5vbmUgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPSd0YWJsZS1hdXRvIHRleHQteHMgdGV4dC1ncmF5LTcwMCB1cHBlcmNhc2UgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgSG91cnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGF0dGVuZGFuY2UpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2F0dGVuZGFuY2UuaW5BdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXR0ZW5kYW5jZS5vdXRBdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBIb3Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNsYXNzIEF0dGVuZGFuY2Uge1xuICAgIHB1YmxpYyB1c2VyX3Rva2VuOiBzdHJpbmc7XG4gICAgcHVibGljIGNyZWF0ZWRBdDogc3RyaW5nO1xuICAgIHB1YmxpYyBpbkF0OiBzdHJpbmc7XG4gICAgcHVibGljIG91dEF0OiBzdHJpbmc7XG4gICAgcHVibGljIHRvdGFsSG91cjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YTogYW55KSB7XG4gICAgICAgIHRoaXMudXNlcl90b2tlbiA9IGRhdGEudXNlcl90b2tlbjtcbiAgICAgICAgdGhpcy5pbkF0ID0gbmV3IERhdGUocGFyc2VJbnQoZGF0YS5pbkF0KSkudG9Mb2NhbGVTdHJpbmcoXCJpZC1JRFwiLCB7XG4gICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgICAgICBtaW51dGU6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgc2Vjb25kOiBcIm51bWVyaWNcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3JlYXRlZEF0ID0gZGF0YS5jcmVhdGVkQXQ7XG4gICAgICAgIHRoaXMub3V0QXQgPSBkYXRhLm91dEF0O1xuICAgICAgICB0aGlzLnRvdGFsSG91ciA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBvdUF0OiBudW1iZXI7XG4gICAgICAgICAgICB2YXIgaW5BdCA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGEuaW5BdCkpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmICghZGF0YS5vdXRBdCkge1xuICAgICAgICAgICAgICAgIG91QXQgPSBEYXRlLm5vdygpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91QXQgPSBuZXcgRGF0ZShwYXJzZUludChkYXRhLm91dEF0KSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLmFicyhvdUF0IC0gaW5BdCkgLyAoMTAwMCAqIDYwICogNjApKTtcblxuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJCdXR0b25BdHRlbmRhbmNlIiwiSW5wdXREYXRlQ29tcG9uZW50IiwiU2lkYWJhckNvbXBvbmVudHMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJkYXRhIiwic2V0RGF0YSIsIkFycmF5IiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJqc29uRGF0YSIsImpzb24iLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJBdHRlbmRhbmNlIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwibmFtZSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwic2NvcGUiLCJ0Ym9keSIsImF0dGVuZGFuY2UiLCJ0ZCIsImluQXQiLCJvdXRBdCIsImNvbnN0cnVjdG9yIiwidXNlcl90b2tlbiIsIkRhdGUiLCJwYXJzZUludCIsInRvTG9jYWxlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsImNyZWF0ZWRBdCIsInRvdGFsSG91ciIsIm91QXQiLCJnZXRUaW1lIiwibm93IiwiTWF0aCIsImZsb29yIiwiYWJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});