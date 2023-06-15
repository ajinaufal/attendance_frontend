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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_button_attendance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/button_attendance */ \"./components/button_attendance.tsx\");\n/* harmony import */ var _components_input_date_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/input_date_component */ \"./components/input_date_component.tsx\");\n/* harmony import */ var _components_sidebar_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/sidebar_components */ \"./components/sidebar_components.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/globals.css */ \"./app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Array);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"http://127.0.0.1:4000/attendance\", {\n                method: \"GET\",\n                headers: {\n                    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODgyMmJkYzdiMTI0MDQ4YWZjYThlMSIsImVtYWlsIjoiUHJpY2U2MUB5YWhvby5jb20iLCJ1c2VyaWQiOiJhYzcxODY3NC1jZTY0LTRkNzMtYmIwMC1kYTVjNDUxMjYwNmIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY4NjgwNjA3NCwiZXhwIjoxNjg3NDEwODc0fQ._qqAUkzgtH0Z0VkKObGHVh3XtBeK88qQLZLk6kOT6Bc\"\n                }\n            });\n            const jsonData = await response.json();\n            const items = jsonData.data.map((item)=>new Attendance(item));\n            console.log(items);\n            setData(items);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                name: \"makan\"\n            }, void 0, false, {\n                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-center items-center h-screen px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-3/5 flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 bg-gray-800 rounded-t-2xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input_date_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input_date_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button_attendance__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: \"bg-gray-800 border-none w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                    className: \"table-auto text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-6 py-3\",\n                                                children: \"In\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-6 py-3\",\n                                                children: \"Out\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-6 py-3\",\n                                                children: \"Total Hours\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    children: data.map((attendance)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"col\",\n                                                    className: \"px-6 py-3 text-center\",\n                                                    children: attendance.inAt\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"col\",\n                                                    className: \"px-6 py-3 text-center\",\n                                                    children: \"Out\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"col\",\n                                                    className: \"px-6 py-3 text-center\",\n                                                    children: \"Total Hours\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 33\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"nmZI8LV0PVHzafe1X4QnQQ+NhlQ=\");\n_c = Home;\nclass Attendance {\n    constructor(data){\n        this._id = data._id;\n        this.user_token = data.user_token;\n        this.inAt = new Date(parseInt(data.inAt));\n        this.createdAt = data.createdAt;\n        this.__v = data.__v;\n    }\n} // import { useEffect, useState } from 'react';\n // const MyPage = () => {\n //     const [data, setData] = useState(Array<Attendance>);\n //     useEffect(() => {\n //         fetchData();\n //     }, []);\n //     const fetchData = async () => {\n //         try {\n //             const response = await fetch('http://127.0.0.1:4000/attendance', {\n //                 method: 'GET',\n //                 headers: {\n //                     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODgyMmJkYzdiMTI0MDQ4YWZjYThlMSIsImVtYWlsIjoiUHJpY2U2MUB5YWhvby5jb20iLCJ1c2VyaWQiOiJhYzcxODY3NC1jZTY0LTRkNzMtYmIwMC1kYTVjNDUxMjYwNmIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY4NjgwNjA3NCwiZXhwIjoxNjg3NDEwODc0fQ._qqAUkzgtH0Z0VkKObGHVh3XtBeK88qQLZLk6kOT6Bc',\n //                 },\n //             });\n //             const jsonData = await response.json();\n //             const items = jsonData.data.map((item: any) => new Attendance(item));\n //             console.log(items);\n //             setData(items);\n //         } catch (error) {\n //             console.error('Error fetching data:', error);\n //         }\n //     };\n //     return (\n //         <div>\n //             <h1>My Page</h1>\n //             <ul>\n //                 {data.map((attendance) => (\n //                     <li key={attendance._id}>\n //                         {attendance.user_token}\n //                     </li>\n //                 ))}\n //             </ul>\n //         </div>\n //     );\n // };\n // export default MyPage;\n // class Attendance {\n //     public _id: string;\n //     public user_token: string;\n //     public inAt: string;\n //     public createdAt: string;\n //     public __v: number;\n //     constructor(data: any) {\n //         this._id = data._id;\n //         this.user_token = data.user_token;\n //         this.inAt = data.inAt;\n //         this.createdAt = data.createdAt;\n //         this.__v = data.__v;\n //     }\n // }\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHNCQUFzQjtDQUN0QixvQkFBb0I7Q0FDcEIsaUJBQWlCO0NBQ2pCLFNBQVM7Q0FDVCxLQUFLO0NBRUwseUJBQXlCO0NBRXpCLHFCQUFxQjtDQUNyQiwwQkFBMEI7Q0FDMUIsaUNBQWlDO0NBQ2pDLDJCQUEyQjtDQUMzQixnQ0FBZ0M7Q0FDaEMsMEJBQTBCO0NBRTFCLCtCQUErQjtDQUMvQiwrQkFBK0I7Q0FDL0IsNkNBQTZDO0NBQzdDLGlDQUFpQztDQUNqQywyQ0FBMkM7Q0FDM0MsK0JBQStCO0NBQy9CLFFBQVE7Q0FDUixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBCdXR0b25BdHRlbmRhbmNlIGZyb20gXCJAL2NvbXBvbmVudHMvYnV0dG9uX2F0dGVuZGFuY2VcIjtcbmltcG9ydCBJbnB1dERhdGVDb21wb25lbnQgZnJvbSBcIkAvY29tcG9uZW50cy9pbnB1dF9kYXRlX2NvbXBvbmVudFwiO1xuaW1wb3J0IFNpZGFiYXJDb21wb25lbnRzIGZyb20gXCJAL2NvbXBvbmVudHMvc2lkZWJhcl9jb21wb25lbnRzXCI7XG5pbXBvcnQgVGFibGVBdHRlbmRhbmNlIGZyb20gXCJAL2NvbXBvbmVudHMvdGFibGVfYXR0ZW5kYW5jZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vYXBwL2dsb2JhbHMuY3NzJ1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShBcnJheTxBdHRlbmRhbmNlPik7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjQwMDAvYXR0ZW5kYW5jZScsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyIGV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTBPRGd5TW1Ka1l6ZGlNVEkwTURRNFlXWmpZVGhsTVNJc0ltVnRZV2xzSWpvaVVISnBZMlUyTVVCNVlXaHZieTVqYjIwaUxDSjFjMlZ5YVdRaU9pSmhZemN4T0RZM05DMWpaVFkwTFRSa056TXRZbUl3TUMxa1lUVmpORFV4TWpZd05tSWlMQ0poWkcxcGJpSTZabUZzYzJVc0ltbGhkQ0k2TVRZNE5qZ3dOakEzTkN3aVpYaHdJam94TmpnM05ERXdPRGMwZlEuX3FxQVVremd0SDBaMFZrS09iR0hWaDNYdEJlSzg4cVFMWkxrNmtPVDZCYycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0ganNvbkRhdGEuZGF0YS5tYXAoKGl0ZW06IGFueSkgPT4gbmV3IEF0dGVuZGFuY2UoaXRlbSkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbXMpO1xuICAgICAgICAgICAgc2V0RGF0YShpdGVtcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cnPlxuICAgICAgICAgICAgPFNpZGFiYXJDb21wb25lbnRzIG5hbWU9eydtYWthbid9PjwvU2lkYWJhckNvbXBvbmVudHM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHB4LTgnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTMvNSBmbGV4IGZsZXgtY29sJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBzcGFjZS15LTMgbWQ6c3BhY2UteS0wIG1kOnNwYWNlLXgtNCBwLTQgYmctZ3JheS04MDAgcm91bmRlZC10LTJ4bCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXREYXRlQ29tcG9uZW50PjwvSW5wdXREYXRlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0RGF0ZUNvbXBvbmVudD48L0lucHV0RGF0ZUNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25BdHRlbmRhbmNlPjwvQnV0dG9uQXR0ZW5kYW5jZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBib3JkZXItbm9uZSB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9J3RhYmxlLWF1dG8gdGV4dC14cyB0ZXh0LWdyYXktNzAwIHVwcGVyY2FzZSBiZy1ncmF5LTUwIGRhcms6YmctZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBIb3Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoYXR0ZW5kYW5jZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXR0ZW5kYW5jZS5pbkF0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIEhvdXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY2xhc3MgQXR0ZW5kYW5jZSB7XG4gICAgcHVibGljIF9pZDogc3RyaW5nO1xuICAgIHB1YmxpYyB1c2VyX3Rva2VuOiBzdHJpbmc7XG4gICAgcHVibGljIGNyZWF0ZWRBdDogc3RyaW5nO1xuICAgIHB1YmxpYyBfX3Y6IG51bWJlcjtcbiAgICBpbkF0OiBEYXRlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YTogYW55KSB7XG4gICAgICAgIHRoaXMuX2lkID0gZGF0YS5faWQ7XG4gICAgICAgIHRoaXMudXNlcl90b2tlbiA9IGRhdGEudXNlcl90b2tlbjtcbiAgICAgICAgdGhpcy5pbkF0ID0gbmV3IERhdGUocGFyc2VJbnQoZGF0YS5pbkF0KSk7XG4gICAgICAgIHRoaXMuY3JlYXRlZEF0ID0gZGF0YS5jcmVhdGVkQXQ7XG4gICAgICAgIHRoaXMuX192ID0gZGF0YS5fX3Y7XG4gICAgfVxufVxuXG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG4vLyBjb25zdCBNeVBhZ2UgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoQXJyYXk8QXR0ZW5kYW5jZT4pO1xuXG4vLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICAgICAgZmV0Y2hEYXRhKCk7XG4vLyAgICAgfSwgW10pO1xuXG4vLyAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuLy8gICAgICAgICB0cnkge1xuLy8gICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo0MDAwL2F0dGVuZGFuY2UnLCB7XG4vLyAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbi8vICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciBleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJalkwT0RneU1tSmtZemRpTVRJME1EUTRZV1pqWVRobE1TSXNJbVZ0WVdsc0lqb2lVSEpwWTJVMk1VQjVZV2h2Ynk1amIyMGlMQ0oxYzJWeWFXUWlPaUpoWXpjeE9EWTNOQzFqWlRZMExUUmtOek10WW1Jd01DMWtZVFZqTkRVeE1qWXdObUlpTENKaFpHMXBiaUk2Wm1Gc2MyVXNJbWxoZENJNk1UWTROamd3TmpBM05Dd2laWGh3SWpveE5qZzNOREV3T0RjMGZRLl9xcUFVa3pndEgwWjBWa0tPYkdIVmgzWHRCZUs4OHFRTFpMazZrT1Q2QmMnLFxuLy8gICAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4vLyAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IGpzb25EYXRhLmRhdGEubWFwKChpdGVtOiBhbnkpID0+IG5ldyBBdHRlbmRhbmNlKGl0ZW0pKTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW1zKTtcbi8vICAgICAgICAgICAgIHNldERhdGEoaXRlbXMpO1xuLy8gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4vLyAgICAgICAgIH1cbi8vICAgICB9O1xuXG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgPGgxPk15IFBhZ2U8L2gxPlxuLy8gICAgICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoYXR0ZW5kYW5jZSkgPT4gKFxuLy8gICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXthdHRlbmRhbmNlLl9pZH0+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7YXR0ZW5kYW5jZS51c2VyX3Rva2VufVxuLy8gICAgICAgICAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgICAgICAgICkpfVxuLy8gICAgICAgICAgICAgPC91bD5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IE15UGFnZTtcblxuLy8gY2xhc3MgQXR0ZW5kYW5jZSB7XG4vLyAgICAgcHVibGljIF9pZDogc3RyaW5nO1xuLy8gICAgIHB1YmxpYyB1c2VyX3Rva2VuOiBzdHJpbmc7XG4vLyAgICAgcHVibGljIGluQXQ6IHN0cmluZztcbi8vICAgICBwdWJsaWMgY3JlYXRlZEF0OiBzdHJpbmc7XG4vLyAgICAgcHVibGljIF9fdjogbnVtYmVyO1xuXG4vLyAgICAgY29uc3RydWN0b3IoZGF0YTogYW55KSB7XG4vLyAgICAgICAgIHRoaXMuX2lkID0gZGF0YS5faWQ7XG4vLyAgICAgICAgIHRoaXMudXNlcl90b2tlbiA9IGRhdGEudXNlcl90b2tlbjtcbi8vICAgICAgICAgdGhpcy5pbkF0ID0gZGF0YS5pbkF0O1xuLy8gICAgICAgICB0aGlzLmNyZWF0ZWRBdCA9IGRhdGEuY3JlYXRlZEF0O1xuLy8gICAgICAgICB0aGlzLl9fdiA9IGRhdGEuX192O1xuLy8gICAgIH1cbi8vIH0iXSwibmFtZXMiOlsiQnV0dG9uQXR0ZW5kYW5jZSIsIklucHV0RGF0ZUNvbXBvbmVudCIsIlNpZGFiYXJDb21wb25lbnRzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJBcnJheSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwianNvbkRhdGEiLCJqc29uIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiQXR0ZW5kYW5jZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsIm5hbWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInNjb3BlIiwidGJvZHkiLCJhdHRlbmRhbmNlIiwidGQiLCJpbkF0IiwiY29uc3RydWN0b3IiLCJfaWQiLCJ1c2VyX3Rva2VuIiwiRGF0ZSIsInBhcnNlSW50IiwiY3JlYXRlZEF0IiwiX192Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});