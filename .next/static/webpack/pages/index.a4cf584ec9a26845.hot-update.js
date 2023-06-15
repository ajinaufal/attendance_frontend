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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_button_attendance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/button_attendance */ \"./components/button_attendance.tsx\");\n/* harmony import */ var _components_input_date_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/input_date_component */ \"./components/input_date_component.tsx\");\n/* harmony import */ var _components_sidebar_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/sidebar_components */ \"./components/sidebar_components.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/globals.css */ \"./app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Array);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"http://127.0.0.1:4000/attendance\", {\n                method: \"GET\",\n                headers: {\n                    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODgyMmJkYzdiMTI0MDQ4YWZjYThlMSIsImVtYWlsIjoiUHJpY2U2MUB5YWhvby5jb20iLCJ1c2VyaWQiOiJhYzcxODY3NC1jZTY0LTRkNzMtYmIwMC1kYTVjNDUxMjYwNmIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY4NjgwNjA3NCwiZXhwIjoxNjg3NDEwODc0fQ._qqAUkzgtH0Z0VkKObGHVh3XtBeK88qQLZLk6kOT6Bc\"\n                }\n            });\n            const jsonData = await response.json();\n            const items = jsonData.data.map((item)=>new Attendance(item));\n            console.log(items);\n            setData(items);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                name: \"makan\"\n            }, void 0, false, {\n                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-center items-center h-screen px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-3/5 flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 bg-gray-800 rounded-t-2xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input_date_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input_date_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button_attendance__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: \"bg-gray-800 border-none w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                    className: \"table-auto text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-6 py-3\",\n                                                children: \"In\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-6 py-3\",\n                                                children: \"Out\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-6 py-3\",\n                                                children: \"Total Hours\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    children: data.map((attendance)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"col\",\n                                                    className: \"px-6 py-3 text-center\",\n                                                    children: attendance.inAt\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"col\",\n                                                    className: \"px-6 py-3 text-center\",\n                                                    children: \"Out\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"col\",\n                                                    className: \"px-6 py-3 text-center\",\n                                                    children: \"Total Hours\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 33\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"nmZI8LV0PVHzafe1X4QnQQ+NhlQ=\");\n_c = Home;\nclass Attendance {\n    constructor(data){\n        this._id = data._id;\n        this.user_token = data.user_token;\n        this.inAt = new Date(parseInt(data.inAt)).toLocaleString(\"id-ID\", options).toString();\n        this.createdAt = data.createdAt;\n        this.__v = data.__v;\n    }\n}\nconst options = {\n    year: \"numeric\",\n    month: \"short\",\n    day: \"numeric\",\n    hour: \"numeric\",\n    minute: \"numeric\",\n    second: \"numeric\"\n}; // import { useEffect, useState } from 'react';\n // const MyPage = () => {\n //     const [data, setData] = useState(Array<Attendance>);\n //     useEffect(() => {\n //         fetchData();\n //     }, []);\n //     const fetchData = async () => {\n //         try {\n //             const response = await fetch('http://127.0.0.1:4000/attendance', {\n //                 method: 'GET',\n //                 headers: {\n //                     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODgyMmJkYzdiMTI0MDQ4YWZjYThlMSIsImVtYWlsIjoiUHJpY2U2MUB5YWhvby5jb20iLCJ1c2VyaWQiOiJhYzcxODY3NC1jZTY0LTRkNzMtYmIwMC1kYTVjNDUxMjYwNmIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY4NjgwNjA3NCwiZXhwIjoxNjg3NDEwODc0fQ._qqAUkzgtH0Z0VkKObGHVh3XtBeK88qQLZLk6kOT6Bc',\n //                 },\n //             });\n //             const jsonData = await response.json();\n //             const items = jsonData.data.map((item: any) => new Attendance(item));\n //             console.log(items);\n //             setData(items);\n //         } catch (error) {\n //             console.error('Error fetching data:', error);\n //         }\n //     };\n //     return (\n //         <div>\n //             <h1>My Page</h1>\n //             <ul>\n //                 {data.map((attendance) => (\n //                     <li key={attendance._id}>\n //                         {attendance.user_token}\n //                     </li>\n //                 ))}\n //             </ul>\n //         </div>\n //     );\n // };\n // export default MyPage;\n // class Attendance {\n //     public _id: string;\n //     public user_token: string;\n //     public inAt: string;\n //     public createdAt: string;\n //     public __v: number;\n //     constructor(data: any) {\n //         this._id = data._id;\n //         this.user_token = data.user_token;\n //         this.inAt = data.inAt;\n //         this.createdAt = data.createdAt;\n //         this.__v = data.__v;\n //     }\n // }\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUztDQUdULGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsK0JBQStCO0NBQy9CLG1CQUFtQjtDQUNuQiw4Q0FBOEM7Q0FDOUMsZ0RBQWdEO0NBQ2hELGtEQUFrRDtDQUNsRCw0QkFBNEI7Q0FDNUIsc0JBQXNCO0NBQ3RCLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakIsU0FBUztDQUNULEtBQUs7Q0FFTCx5QkFBeUI7Q0FFekIscUJBQXFCO0NBQ3JCLDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsMkJBQTJCO0NBQzNCLGdDQUFnQztDQUNoQywwQkFBMEI7Q0FFMUIsK0JBQStCO0NBQy9CLCtCQUErQjtDQUMvQiw2Q0FBNkM7Q0FDN0MsaUNBQWlDO0NBQ2pDLDJDQUEyQztDQUMzQywrQkFBK0I7Q0FDL0IsUUFBUTtDQUNSLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IEJ1dHRvbkF0dGVuZGFuY2UgZnJvbSBcIkAvY29tcG9uZW50cy9idXR0b25fYXR0ZW5kYW5jZVwiO1xuaW1wb3J0IElucHV0RGF0ZUNvbXBvbmVudCBmcm9tIFwiQC9jb21wb25lbnRzL2lucHV0X2RhdGVfY29tcG9uZW50XCI7XG5pbXBvcnQgU2lkYWJhckNvbXBvbmVudHMgZnJvbSBcIkAvY29tcG9uZW50cy9zaWRlYmFyX2NvbXBvbmVudHNcIjtcbmltcG9ydCBUYWJsZUF0dGVuZGFuY2UgZnJvbSBcIkAvY29tcG9uZW50cy90YWJsZV9hdHRlbmRhbmNlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9hcHAvZ2xvYmFscy5jc3MnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKEFycmF5PEF0dGVuZGFuY2U+KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NDAwMC9hdHRlbmRhbmNlJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpZME9EZ3lNbUprWXpkaU1USTBNRFE0WVdaallUaGxNU0lzSW1WdFlXbHNJam9pVUhKcFkyVTJNVUI1WVdodmJ5NWpiMjBpTENKMWMyVnlhV1FpT2lKaFl6Y3hPRFkzTkMxalpUWTBMVFJrTnpNdFltSXdNQzFrWVRWak5EVXhNall3Tm1JaUxDSmhaRzFwYmlJNlptRnNjMlVzSW1saGRDSTZNVFk0Tmpnd05qQTNOQ3dpWlhod0lqb3hOamczTkRFd09EYzBmUS5fcXFBVWt6Z3RIMFowVmtLT2JHSFZoM1h0QmVLODhxUUxaTGs2a09UNkJjJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBqc29uRGF0YS5kYXRhLm1hcCgoaXRlbTogYW55KSA9PiBuZXcgQXR0ZW5kYW5jZShpdGVtKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtcyk7XG4gICAgICAgICAgICBzZXREYXRhKGl0ZW1zKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyc+XG4gICAgICAgICAgICA8U2lkYWJhckNvbXBvbmVudHMgbmFtZT17J21ha2FuJ30+PC9TaWRhYmFyQ29tcG9uZW50cz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gcHgtOCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMy81IGZsZXggZmxleC1jb2wnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXktMyBtZDpzcGFjZS15LTAgbWQ6c3BhY2UteC00IHAtNCBiZy1ncmF5LTgwMCByb3VuZGVkLXQtMnhsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dERhdGVDb21wb25lbnQ+PC9JbnB1dERhdGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXREYXRlQ29tcG9uZW50PjwvSW5wdXREYXRlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkF0dGVuZGFuY2U+PC9CdXR0b25BdHRlbmRhbmNlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIGJvcmRlci1ub25lIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT0ndGFibGUtYXV0byB0ZXh0LXhzIHRleHQtZ3JheS03MDAgdXBwZXJjYXNlIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIEhvdXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChhdHRlbmRhbmNlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdHRlbmRhbmNlLmluQXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgSG91cnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jbGFzcyBBdHRlbmRhbmNlIHtcbiAgICBwdWJsaWMgX2lkOiBzdHJpbmc7XG4gICAgcHVibGljIHVzZXJfdG9rZW46IHN0cmluZztcbiAgICBwdWJsaWMgY3JlYXRlZEF0OiBzdHJpbmc7XG4gICAgcHVibGljIF9fdjogbnVtYmVyO1xuICAgIHB1YmxpYyBpbkF0OiBzdHJpbmc7XG5cblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xuICAgICAgICB0aGlzLl9pZCA9IGRhdGEuX2lkO1xuICAgICAgICB0aGlzLnVzZXJfdG9rZW4gPSBkYXRhLnVzZXJfdG9rZW47XG4gICAgICAgIHRoaXMuaW5BdCA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGEuaW5BdCkpLnRvTG9jYWxlU3RyaW5nKFwiaWQtSURcIiwgb3B0aW9ucykudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVkQXQgPSBkYXRhLmNyZWF0ZWRBdDtcbiAgICAgICAgdGhpcy5fX3YgPSBkYXRhLl9fdjtcbiAgICB9XG5cbn1cblxuXG5jb25zdCBvcHRpb25zID0ge1xuICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICBtaW51dGU6IFwibnVtZXJpY1wiLFxuICAgIHNlY29uZDogXCJudW1lcmljXCIsXG59O1xuLy8gaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy8gY29uc3QgTXlQYWdlID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKEFycmF5PEF0dGVuZGFuY2U+KTtcblxuLy8gICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgICAgIGZldGNoRGF0YSgpO1xuLy8gICAgIH0sIFtdKTtcblxuLy8gICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbi8vICAgICAgICAgdHJ5IHtcbi8vICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NDAwMC9hdHRlbmRhbmNlJywge1xuLy8gICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4vLyAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpZME9EZ3lNbUprWXpkaU1USTBNRFE0WVdaallUaGxNU0lzSW1WdFlXbHNJam9pVUhKcFkyVTJNVUI1WVdodmJ5NWpiMjBpTENKMWMyVnlhV1FpT2lKaFl6Y3hPRFkzTkMxalpUWTBMVFJrTnpNdFltSXdNQzFrWVRWak5EVXhNall3Tm1JaUxDSmhaRzFwYmlJNlptRnNjMlVzSW1saGRDSTZNVFk0Tmpnd05qQTNOQ3dpWlhod0lqb3hOamczTkRFd09EYzBmUS5fcXFBVWt6Z3RIMFowVmtLT2JHSFZoM1h0QmVLODhxUUxaTGs2a09UNkJjJyxcbi8vICAgICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuLy8gICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBqc29uRGF0YS5kYXRhLm1hcCgoaXRlbTogYW55KSA9PiBuZXcgQXR0ZW5kYW5jZShpdGVtKSk7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtcyk7XG4vLyAgICAgICAgICAgICBzZXREYXRhKGl0ZW1zKTtcbi8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfTtcblxuXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgICAgIDxoMT5NeSBQYWdlPC9oMT5cbi8vICAgICAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGF0dGVuZGFuY2UpID0+IChcbi8vICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YXR0ZW5kYW5jZS5faWR9PlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge2F0dGVuZGFuY2UudXNlcl90b2tlbn1cbi8vICAgICAgICAgICAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICAgIDwvdWw+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBNeVBhZ2U7XG5cbi8vIGNsYXNzIEF0dGVuZGFuY2Uge1xuLy8gICAgIHB1YmxpYyBfaWQ6IHN0cmluZztcbi8vICAgICBwdWJsaWMgdXNlcl90b2tlbjogc3RyaW5nO1xuLy8gICAgIHB1YmxpYyBpbkF0OiBzdHJpbmc7XG4vLyAgICAgcHVibGljIGNyZWF0ZWRBdDogc3RyaW5nO1xuLy8gICAgIHB1YmxpYyBfX3Y6IG51bWJlcjtcblxuLy8gICAgIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xuLy8gICAgICAgICB0aGlzLl9pZCA9IGRhdGEuX2lkO1xuLy8gICAgICAgICB0aGlzLnVzZXJfdG9rZW4gPSBkYXRhLnVzZXJfdG9rZW47XG4vLyAgICAgICAgIHRoaXMuaW5BdCA9IGRhdGEuaW5BdDtcbi8vICAgICAgICAgdGhpcy5jcmVhdGVkQXQgPSBkYXRhLmNyZWF0ZWRBdDtcbi8vICAgICAgICAgdGhpcy5fX3YgPSBkYXRhLl9fdjtcbi8vICAgICB9XG4vLyB9Il0sIm5hbWVzIjpbIkJ1dHRvbkF0dGVuZGFuY2UiLCJJbnB1dERhdGVDb21wb25lbnQiLCJTaWRhYmFyQ29tcG9uZW50cyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsImRhdGEiLCJzZXREYXRhIiwiQXJyYXkiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImpzb25EYXRhIiwianNvbiIsIml0ZW1zIiwibWFwIiwiaXRlbSIsIkF0dGVuZGFuY2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJuYW1lIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRib2R5IiwiYXR0ZW5kYW5jZSIsInRkIiwiaW5BdCIsImNvbnN0cnVjdG9yIiwiX2lkIiwidXNlcl90b2tlbiIsIkRhdGUiLCJwYXJzZUludCIsInRvTG9jYWxlU3RyaW5nIiwib3B0aW9ucyIsInRvU3RyaW5nIiwiY3JlYXRlZEF0IiwiX192IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});