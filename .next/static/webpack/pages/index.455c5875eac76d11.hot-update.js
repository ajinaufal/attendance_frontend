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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_button_attendance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/button_attendance */ \"./components/button_attendance.tsx\");\n/* harmony import */ var _components_input_date_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/input_date_component */ \"./components/input_date_component.tsx\");\n/* harmony import */ var _components_sidebar_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/sidebar_components */ \"./components/sidebar_components.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/globals.css */ \"./app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Array);\n    const options = {\n        year: \"numeric\",\n        month: \"short\",\n        day: \"numeric\",\n        hour: \"numeric\",\n        minute: \"numeric\",\n        second: \"numeric\"\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"http://127.0.0.1:4000/attendance\", {\n                method: \"GET\",\n                headers: {\n                    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODgyMmJkYzdiMTI0MDQ4YWZjYThlMSIsImVtYWlsIjoiUHJpY2U2MUB5YWhvby5jb20iLCJ1c2VyaWQiOiJhYzcxODY3NC1jZTY0LTRkNzMtYmIwMC1kYTVjNDUxMjYwNmIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY4NjgwNjA3NCwiZXhwIjoxNjg3NDEwODc0fQ._qqAUkzgtH0Z0VkKObGHVh3XtBeK88qQLZLk6kOT6Bc\"\n                }\n            });\n            const jsonData = await response.json();\n            const items = jsonData.data.map((item)=>new Attendance(item));\n            console.log(items);\n            setData(items);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                name: \"makan\"\n            }, void 0, false, {\n                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-center items-center h-screen px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-3/5 flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 bg-gray-800 rounded-t-2xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input_date_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input_date_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button_attendance__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: \"bg-gray-800 border-none w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                    className: \"table-auto text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-6 py-3\",\n                                                children: \"In\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-6 py-3\",\n                                                children: \"Out\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-6 py-3\",\n                                                children: \"Total Hours\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    children: data.map((attendance)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"col\",\n                                                    className: \"px-6 py-3 text-center\",\n                                                    children: attendance.inAt\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"col\",\n                                                    className: \"px-6 py-3 text-center\",\n                                                    children: \"Out\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"col\",\n                                                    className: \"px-6 py-3 text-center\",\n                                                    children: \"Total Hours\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 33\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"nmZI8LV0PVHzafe1X4QnQQ+NhlQ=\");\n_c = Home;\nclass Attendance {\n    constructor(data){\n        this._id = data._id;\n        this.user_token = data.user_token;\n        this.inAt = new Date(parseInt(data.inAt)).toLocaleString(\"id-ID\", {\n            year: \"numeric\",\n            month: \"short\",\n            day: \"numeric\",\n            hour: \"numeric\",\n            minute: \"numeric\",\n            second: \"numeric\"\n        }).toString();\n        this.createdAt = data.createdAt;\n        this.__v = data.__v;\n        this.outAt = data.outAt;\n    }\n} // import { useEffect, useState } from 'react';\n // const MyPage = () => {\n //     const [data, setData] = useState(Array<Attendance>);\n //     useEffect(() => {\n //         fetchData();\n //     }, []);\n //     const fetchData = async () => {\n //         try {\n //             const response = await fetch('http://127.0.0.1:4000/attendance', {\n //                 method: 'GET',\n //                 headers: {\n //                     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODgyMmJkYzdiMTI0MDQ4YWZjYThlMSIsImVtYWlsIjoiUHJpY2U2MUB5YWhvby5jb20iLCJ1c2VyaWQiOiJhYzcxODY3NC1jZTY0LTRkNzMtYmIwMC1kYTVjNDUxMjYwNmIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY4NjgwNjA3NCwiZXhwIjoxNjg3NDEwODc0fQ._qqAUkzgtH0Z0VkKObGHVh3XtBeK88qQLZLk6kOT6Bc',\n //                 },\n //             });\n //             const jsonData = await response.json();\n //             const items = jsonData.data.map((item: any) => new Attendance(item));\n //             console.log(items);\n //             setData(items);\n //         } catch (error) {\n //             console.error('Error fetching data:', error);\n //         }\n //     };\n //     return (\n //         <div>\n //             <h1>My Page</h1>\n //             <ul>\n //                 {data.map((attendance) => (\n //                     <li key={attendance._id}>\n //                         {attendance.user_token}\n //                     </li>\n //                 ))}\n //             </ul>\n //         </div>\n //     );\n // };\n // export default MyPage;\n // class Attendance {\n //     public _id: string;\n //     public user_token: string;\n //     public inAt: string;\n //     public createdAt: string;\n //     public __v: number;\n //     constructor(data: any) {\n //         this._id = data._id;\n //         this.user_token = data.user_token;\n //         this.inAt = data.inAt;\n //         this.createdAt = data.createdAt;\n //         this.__v = data.__v;\n //     }\n // }\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0NBQ3JCLGtCQUFrQjtDQUNsQixzREFBc0Q7Q0FFdEQsb0ZBQW9GO0NBQ3BGLGtDQUFrQztDQUNsQyw4QkFBOEI7Q0FDOUIsNEJBQTRCO0NBQzVCLDREQUE0RDtDQUM1RCxZQUFZO0NBQ1osU0FBUztDQUdULGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsK0JBQStCO0NBQy9CLG1CQUFtQjtDQUNuQiw4Q0FBOEM7Q0FDOUMsZ0RBQWdEO0NBQ2hELGtEQUFrRDtDQUNsRCw0QkFBNEI7Q0FDNUIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakIsU0FBUztDQUNULEtBQUs7Q0FFTCx5QkFBeUI7Q0FFekIscUJBQXFCO0NBQ3JCLDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsMkJBQTJCO0NBQzNCLGdDQUFnQztDQUNoQywwQkFBMEI7Q0FFMUIsK0JBQStCO0NBQy9CLCtCQUErQjtDQUMvQiw2Q0FBNkM7Q0FDN0MsaUNBQWlDO0NBQ2pDLDJDQUEyQztDQUMzQywrQkFBK0I7Q0FDL0IsUUFBUTtDQUNSLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IEJ1dHRvbkF0dGVuZGFuY2UgZnJvbSBcIkAvY29tcG9uZW50cy9idXR0b25fYXR0ZW5kYW5jZVwiO1xuaW1wb3J0IElucHV0RGF0ZUNvbXBvbmVudCBmcm9tIFwiQC9jb21wb25lbnRzL2lucHV0X2RhdGVfY29tcG9uZW50XCI7XG5pbXBvcnQgU2lkYWJhckNvbXBvbmVudHMgZnJvbSBcIkAvY29tcG9uZW50cy9zaWRlYmFyX2NvbXBvbmVudHNcIjtcbmltcG9ydCBUYWJsZUF0dGVuZGFuY2UgZnJvbSBcIkAvY29tcG9uZW50cy90YWJsZV9hdHRlbmRhbmNlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9hcHAvZ2xvYmFscy5jc3MnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKEFycmF5PEF0dGVuZGFuY2U+KTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJzaG9ydFwiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIm51bWVyaWNcIixcbiAgICAgICAgc2Vjb25kOiBcIm51bWVyaWNcIixcbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NDAwMC9hdHRlbmRhbmNlJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpZME9EZ3lNbUprWXpkaU1USTBNRFE0WVdaallUaGxNU0lzSW1WdFlXbHNJam9pVUhKcFkyVTJNVUI1WVdodmJ5NWpiMjBpTENKMWMyVnlhV1FpT2lKaFl6Y3hPRFkzTkMxalpUWTBMVFJrTnpNdFltSXdNQzFrWVRWak5EVXhNall3Tm1JaUxDSmhaRzFwYmlJNlptRnNjMlVzSW1saGRDSTZNVFk0Tmpnd05qQTNOQ3dpWlhod0lqb3hOamczTkRFd09EYzBmUS5fcXFBVWt6Z3RIMFowVmtLT2JHSFZoM1h0QmVLODhxUUxaTGs2a09UNkJjJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBqc29uRGF0YS5kYXRhLm1hcCgoaXRlbTogYW55KSA9PiBuZXcgQXR0ZW5kYW5jZShpdGVtKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtcyk7XG4gICAgICAgICAgICBzZXREYXRhKGl0ZW1zKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyc+XG4gICAgICAgICAgICA8U2lkYWJhckNvbXBvbmVudHMgbmFtZT17J21ha2FuJ30+PC9TaWRhYmFyQ29tcG9uZW50cz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gcHgtOCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMy81IGZsZXggZmxleC1jb2wnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXktMyBtZDpzcGFjZS15LTAgbWQ6c3BhY2UteC00IHAtNCBiZy1ncmF5LTgwMCByb3VuZGVkLXQtMnhsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dERhdGVDb21wb25lbnQ+PC9JbnB1dERhdGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXREYXRlQ29tcG9uZW50PjwvSW5wdXREYXRlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkF0dGVuZGFuY2U+PC9CdXR0b25BdHRlbmRhbmNlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIGJvcmRlci1ub25lIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT0ndGFibGUtYXV0byB0ZXh0LXhzIHRleHQtZ3JheS03MDAgdXBwZXJjYXNlIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIEhvdXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChhdHRlbmRhbmNlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdHRlbmRhbmNlLmluQXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgSG91cnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jbGFzcyBBdHRlbmRhbmNlIHtcbiAgICBwdWJsaWMgX2lkOiBzdHJpbmc7XG4gICAgcHVibGljIHVzZXJfdG9rZW46IHN0cmluZztcbiAgICBwdWJsaWMgY3JlYXRlZEF0OiBzdHJpbmc7XG4gICAgcHVibGljIF9fdjogbnVtYmVyO1xuICAgIHB1YmxpYyBpbkF0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBhbnkpIHtcbiAgICAgICAgdGhpcy5faWQgPSBkYXRhLl9pZDtcbiAgICAgICAgdGhpcy51c2VyX3Rva2VuID0gZGF0YS51c2VyX3Rva2VuO1xuICAgICAgICB0aGlzLmluQXQgPSBuZXcgRGF0ZShwYXJzZUludChkYXRhLmluQXQpKS50b0xvY2FsZVN0cmluZyhcImlkLUlEXCIsIHtcbiAgICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgbW9udGg6IFwic2hvcnRcIixcbiAgICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgIG1pbnV0ZTogXCJudW1lcmljXCIsXG4gICAgICAgICAgICBzZWNvbmQ6IFwibnVtZXJpY1wiLFxuICAgICAgICB9KS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLmNyZWF0ZWRBdCA9IGRhdGEuY3JlYXRlZEF0O1xuICAgICAgICB0aGlzLl9fdiA9IGRhdGEuX192O1xuICAgICAgICB0aGlzLm91dEF0ID0gZGF0YS5vdXRBdDtcbiAgICB9XG5cbn1cblxuXG5cbi8vIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbi8vIGNvbnN0IE15UGFnZSA9ICgpID0+IHtcbi8vICAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShBcnJheTxBdHRlbmRhbmNlPik7XG5cbi8vICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgICAgICBmZXRjaERhdGEoKTtcbi8vICAgICB9LCBbXSk7XG5cbi8vICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4vLyAgICAgICAgIHRyeSB7XG4vLyAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjQwMDAvYXR0ZW5kYW5jZScsIHtcbi8vICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuLy8gICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyIGV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqWTBPRGd5TW1Ka1l6ZGlNVEkwTURRNFlXWmpZVGhsTVNJc0ltVnRZV2xzSWpvaVVISnBZMlUyTVVCNVlXaHZieTVqYjIwaUxDSjFjMlZ5YVdRaU9pSmhZemN4T0RZM05DMWpaVFkwTFRSa056TXRZbUl3TUMxa1lUVmpORFV4TWpZd05tSWlMQ0poWkcxcGJpSTZabUZzYzJVc0ltbGhkQ0k2TVRZNE5qZ3dOakEzTkN3aVpYaHdJam94TmpnM05ERXdPRGMwZlEuX3FxQVVremd0SDBaMFZrS09iR0hWaDNYdEJlSzg4cVFMWkxrNmtPVDZCYycsXG4vLyAgICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbi8vICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0ganNvbkRhdGEuZGF0YS5tYXAoKGl0ZW06IGFueSkgPT4gbmV3IEF0dGVuZGFuY2UoaXRlbSkpO1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbXMpO1xuLy8gICAgICAgICAgICAgc2V0RGF0YShpdGVtcyk7XG4vLyAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH07XG5cblxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICA8aDE+TXkgUGFnZTwvaDE+XG4vLyAgICAgICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICAgICAge2RhdGEubWFwKChhdHRlbmRhbmNlKSA9PiAoXG4vLyAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2F0dGVuZGFuY2UuX2lkfT5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHthdHRlbmRhbmNlLnVzZXJfdG9rZW59XG4vLyAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgICAgICAgKSl9XG4vLyAgICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgTXlQYWdlO1xuXG4vLyBjbGFzcyBBdHRlbmRhbmNlIHtcbi8vICAgICBwdWJsaWMgX2lkOiBzdHJpbmc7XG4vLyAgICAgcHVibGljIHVzZXJfdG9rZW46IHN0cmluZztcbi8vICAgICBwdWJsaWMgaW5BdDogc3RyaW5nO1xuLy8gICAgIHB1YmxpYyBjcmVhdGVkQXQ6IHN0cmluZztcbi8vICAgICBwdWJsaWMgX192OiBudW1iZXI7XG5cbi8vICAgICBjb25zdHJ1Y3RvcihkYXRhOiBhbnkpIHtcbi8vICAgICAgICAgdGhpcy5faWQgPSBkYXRhLl9pZDtcbi8vICAgICAgICAgdGhpcy51c2VyX3Rva2VuID0gZGF0YS51c2VyX3Rva2VuO1xuLy8gICAgICAgICB0aGlzLmluQXQgPSBkYXRhLmluQXQ7XG4vLyAgICAgICAgIHRoaXMuY3JlYXRlZEF0ID0gZGF0YS5jcmVhdGVkQXQ7XG4vLyAgICAgICAgIHRoaXMuX192ID0gZGF0YS5fX3Y7XG4vLyAgICAgfVxuLy8gfSJdLCJuYW1lcyI6WyJCdXR0b25BdHRlbmRhbmNlIiwiSW5wdXREYXRlQ29tcG9uZW50IiwiU2lkYWJhckNvbXBvbmVudHMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJkYXRhIiwic2V0RGF0YSIsIkFycmF5Iiwib3B0aW9ucyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImpzb25EYXRhIiwianNvbiIsIml0ZW1zIiwibWFwIiwiaXRlbSIsIkF0dGVuZGFuY2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJuYW1lIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRib2R5IiwiYXR0ZW5kYW5jZSIsInRkIiwiaW5BdCIsImNvbnN0cnVjdG9yIiwiX2lkIiwidXNlcl90b2tlbiIsIkRhdGUiLCJwYXJzZUludCIsInRvTG9jYWxlU3RyaW5nIiwidG9TdHJpbmciLCJjcmVhdGVkQXQiLCJfX3YiLCJvdXRBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});