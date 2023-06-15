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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_button_attendance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/button_attendance */ \"./components/button_attendance.tsx\");\n/* harmony import */ var _components_input_date_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/input_date_component */ \"./components/input_date_component.tsx\");\n/* harmony import */ var _components_sidebar_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/sidebar_components */ \"./components/sidebar_components.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/globals.css */ \"./app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Array);\n    const options = {\n        year: \"numeric\",\n        month: \"short\",\n        day: \"numeric\",\n        hour: \"numeric\",\n        minute: \"numeric\",\n        second: \"numeric\"\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"http://127.0.0.1:4000/attendance\", {\n                method: \"GET\",\n                headers: {\n                    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODgyMmJkYzdiMTI0MDQ4YWZjYThlMSIsImVtYWlsIjoiUHJpY2U2MUB5YWhvby5jb20iLCJ1c2VyaWQiOiJhYzcxODY3NC1jZTY0LTRkNzMtYmIwMC1kYTVjNDUxMjYwNmIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY4NjgwNjA3NCwiZXhwIjoxNjg3NDEwODc0fQ._qqAUkzgtH0Z0VkKObGHVh3XtBeK88qQLZLk6kOT6Bc\"\n                }\n            });\n            const jsonData = await response.json();\n            const items = jsonData.data.map((item)=>new Attendance(item));\n            console.log(items);\n            setData(items);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                name: \"makan\"\n            }, void 0, false, {\n                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-center items-center h-screen px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-3/5 flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 bg-gray-800 rounded-t-2xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input_date_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input_date_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button_attendance__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: \"bg-gray-800 border-none w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                    className: \"table-auto text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-6 py-3\",\n                                                children: \"In\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-6 py-3\",\n                                                children: \"Out\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-6 py-3\",\n                                                children: \"Total Hours\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    children: data.map((attendance)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"col\",\n                                                    className: \"px-6 py-3 text-center\",\n                                                    children: attendance.inAt\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"col\",\n                                                    className: \"px-6 py-3 text-center\",\n                                                    children: \"Out\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    scope: \"col\",\n                                                    className: \"px-6 py-3 text-center\",\n                                                    children: \"Total Hours\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 33\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ajinaufal/project/js/attendance_frontend/pages/index.tsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"nmZI8LV0PVHzafe1X4QnQQ+NhlQ=\");\n_c = Home;\nclass Attendance {\n    constructor(data){\n        this._id = data._id;\n        this.user_token = data.user_token;\n        this.inAt = new Date(parseInt(data.inAt)).toLocaleString(\"id-ID\", {\n            year: \"numeric\",\n            month: \"short\",\n            day: \"numeric\",\n            hour: \"numeric\",\n            minute: \"numeric\",\n            second: \"numeric\"\n        }).toString();\n        this.createdAt = data.createdAt;\n        this.__v = data.__v;\n        thispo;\n    }\n} // import { useEffect, useState } from 'react';\n // const MyPage = () => {\n //     const [data, setData] = useState(Array<Attendance>);\n //     useEffect(() => {\n //         fetchData();\n //     }, []);\n //     const fetchData = async () => {\n //         try {\n //             const response = await fetch('http://127.0.0.1:4000/attendance', {\n //                 method: 'GET',\n //                 headers: {\n //                     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODgyMmJkYzdiMTI0MDQ4YWZjYThlMSIsImVtYWlsIjoiUHJpY2U2MUB5YWhvby5jb20iLCJ1c2VyaWQiOiJhYzcxODY3NC1jZTY0LTRkNzMtYmIwMC1kYTVjNDUxMjYwNmIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY4NjgwNjA3NCwiZXhwIjoxNjg3NDEwODc0fQ._qqAUkzgtH0Z0VkKObGHVh3XtBeK88qQLZLk6kOT6Bc',\n //                 },\n //             });\n //             const jsonData = await response.json();\n //             const items = jsonData.data.map((item: any) => new Attendance(item));\n //             console.log(items);\n //             setData(items);\n //         } catch (error) {\n //             console.error('Error fetching data:', error);\n //         }\n //     };\n //     return (\n //         <div>\n //             <h1>My Page</h1>\n //             <ul>\n //                 {data.map((attendance) => (\n //                     <li key={attendance._id}>\n //                         {attendance.user_token}\n //                     </li>\n //                 ))}\n //             </ul>\n //         </div>\n //     );\n // };\n // export default MyPage;\n // class Attendance {\n //     public _id: string;\n //     public user_token: string;\n //     public inAt: string;\n //     public createdAt: string;\n //     public __v: number;\n //     constructor(data: any) {\n //         this._id = data._id;\n //         this.user_token = data.user_token;\n //         this.inAt = data.inAt;\n //         this.createdAt = data.createdAt;\n //         this.__v = data.__v;\n //     }\n // }\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtDQUV0RCxvRkFBb0Y7Q0FDcEYsa0NBQWtDO0NBQ2xDLDhCQUE4QjtDQUM5Qiw0QkFBNEI7Q0FDNUIsNERBQTREO0NBQzVELFlBQVk7Q0FDWixTQUFTO0NBR1QsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQiwrQkFBK0I7Q0FDL0IsbUJBQW1CO0NBQ25CLDhDQUE4QztDQUM5QyxnREFBZ0Q7Q0FDaEQsa0RBQWtEO0NBQ2xELDRCQUE0QjtDQUM1QixzQkFBc0I7Q0FDdEIsb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQixTQUFTO0NBQ1QsS0FBSztDQUVMLHlCQUF5QjtDQUV6QixxQkFBcUI7Q0FDckIsMEJBQTBCO0NBQzFCLGlDQUFpQztDQUNqQywyQkFBMkI7Q0FDM0IsZ0NBQWdDO0NBQ2hDLDBCQUEwQjtDQUUxQiwrQkFBK0I7Q0FDL0IsK0JBQStCO0NBQy9CLDZDQUE2QztDQUM3QyxpQ0FBaUM7Q0FDakMsMkNBQTJDO0NBQzNDLCtCQUErQjtDQUMvQixRQUFRO0NBQ1IsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgQnV0dG9uQXR0ZW5kYW5jZSBmcm9tIFwiQC9jb21wb25lbnRzL2J1dHRvbl9hdHRlbmRhbmNlXCI7XG5pbXBvcnQgSW5wdXREYXRlQ29tcG9uZW50IGZyb20gXCJAL2NvbXBvbmVudHMvaW5wdXRfZGF0ZV9jb21wb25lbnRcIjtcbmltcG9ydCBTaWRhYmFyQ29tcG9uZW50cyBmcm9tIFwiQC9jb21wb25lbnRzL3NpZGViYXJfY29tcG9uZW50c1wiO1xuaW1wb3J0IFRhYmxlQXR0ZW5kYW5jZSBmcm9tIFwiQC9jb21wb25lbnRzL3RhYmxlX2F0dGVuZGFuY2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL2FwcC9nbG9iYWxzLmNzcydcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoQXJyYXk8QXR0ZW5kYW5jZT4pO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwibnVtZXJpY1wiLFxuICAgICAgICBzZWNvbmQ6IFwibnVtZXJpY1wiLFxuICAgIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo0MDAwL2F0dGVuZGFuY2UnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciBleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJalkwT0RneU1tSmtZemRpTVRJME1EUTRZV1pqWVRobE1TSXNJbVZ0WVdsc0lqb2lVSEpwWTJVMk1VQjVZV2h2Ynk1amIyMGlMQ0oxYzJWeWFXUWlPaUpoWXpjeE9EWTNOQzFqWlRZMExUUmtOek10WW1Jd01DMWtZVFZqTkRVeE1qWXdObUlpTENKaFpHMXBiaUk2Wm1Gc2MyVXNJbWxoZENJNk1UWTROamd3TmpBM05Dd2laWGh3SWpveE5qZzNOREV3T0RjMGZRLl9xcUFVa3pndEgwWjBWa0tPYkdIVmgzWHRCZUs4OHFRTFpMazZrT1Q2QmMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGpzb25EYXRhLmRhdGEubWFwKChpdGVtOiBhbnkpID0+IG5ldyBBdHRlbmRhbmNlKGl0ZW0pKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW1zKTtcbiAgICAgICAgICAgIHNldERhdGEoaXRlbXMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93Jz5cbiAgICAgICAgICAgIDxTaWRhYmFyQ29tcG9uZW50cyBuYW1lPXsnbWFrYW4nfT48L1NpZGFiYXJDb21wb25lbnRzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiBweC04Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0zLzUgZmxleCBmbGV4LWNvbCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteS0zIG1kOnNwYWNlLXktMCBtZDpzcGFjZS14LTQgcC00IGJnLWdyYXktODAwIHJvdW5kZWQtdC0yeGwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0RGF0ZUNvbXBvbmVudD48L0lucHV0RGF0ZUNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dERhdGVDb21wb25lbnQ+PC9JbnB1dERhdGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uQXR0ZW5kYW5jZT48L0J1dHRvbkF0dGVuZGFuY2U+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgYm9yZGVyLW5vbmUgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPSd0YWJsZS1hdXRvIHRleHQteHMgdGV4dC1ncmF5LTcwMCB1cHBlcmNhc2UgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgSG91cnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGF0dGVuZGFuY2UpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2F0dGVuZGFuY2UuaW5BdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBIb3Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNsYXNzIEF0dGVuZGFuY2Uge1xuICAgIHB1YmxpYyBfaWQ6IHN0cmluZztcbiAgICBwdWJsaWMgdXNlcl90b2tlbjogc3RyaW5nO1xuICAgIHB1YmxpYyBjcmVhdGVkQXQ6IHN0cmluZztcbiAgICBwdWJsaWMgX192OiBudW1iZXI7XG4gICAgcHVibGljIGluQXQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xuICAgICAgICB0aGlzLl9pZCA9IGRhdGEuX2lkO1xuICAgICAgICB0aGlzLnVzZXJfdG9rZW4gPSBkYXRhLnVzZXJfdG9rZW47XG4gICAgICAgIHRoaXMuaW5BdCA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGEuaW5BdCkpLnRvTG9jYWxlU3RyaW5nKFwiaWQtSURcIiwge1xuICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgICAgICBtb250aDogXCJzaG9ydFwiLFxuICAgICAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgbWludXRlOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgIHNlY29uZDogXCJudW1lcmljXCIsXG4gICAgICAgIH0pLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlZEF0ID0gZGF0YS5jcmVhdGVkQXQ7XG4gICAgICAgIHRoaXMuX192ID0gZGF0YS5fX3Y7XG4gICAgICAgIHRoaXNwb1xuICAgIH1cblxufVxuXG5cblxuLy8gaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy8gY29uc3QgTXlQYWdlID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKEFycmF5PEF0dGVuZGFuY2U+KTtcblxuLy8gICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgICAgIGZldGNoRGF0YSgpO1xuLy8gICAgIH0sIFtdKTtcblxuLy8gICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbi8vICAgICAgICAgdHJ5IHtcbi8vICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NDAwMC9hdHRlbmRhbmNlJywge1xuLy8gICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4vLyAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpZME9EZ3lNbUprWXpkaU1USTBNRFE0WVdaallUaGxNU0lzSW1WdFlXbHNJam9pVUhKcFkyVTJNVUI1WVdodmJ5NWpiMjBpTENKMWMyVnlhV1FpT2lKaFl6Y3hPRFkzTkMxalpUWTBMVFJrTnpNdFltSXdNQzFrWVRWak5EVXhNall3Tm1JaUxDSmhaRzFwYmlJNlptRnNjMlVzSW1saGRDSTZNVFk0Tmpnd05qQTNOQ3dpWlhod0lqb3hOamczTkRFd09EYzBmUS5fcXFBVWt6Z3RIMFowVmtLT2JHSFZoM1h0QmVLODhxUUxaTGs2a09UNkJjJyxcbi8vICAgICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuLy8gICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBqc29uRGF0YS5kYXRhLm1hcCgoaXRlbTogYW55KSA9PiBuZXcgQXR0ZW5kYW5jZShpdGVtKSk7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtcyk7XG4vLyAgICAgICAgICAgICBzZXREYXRhKGl0ZW1zKTtcbi8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfTtcblxuXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgICAgIDxoMT5NeSBQYWdlPC9oMT5cbi8vICAgICAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGF0dGVuZGFuY2UpID0+IChcbi8vICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YXR0ZW5kYW5jZS5faWR9PlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge2F0dGVuZGFuY2UudXNlcl90b2tlbn1cbi8vICAgICAgICAgICAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICAgIDwvdWw+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBNeVBhZ2U7XG5cbi8vIGNsYXNzIEF0dGVuZGFuY2Uge1xuLy8gICAgIHB1YmxpYyBfaWQ6IHN0cmluZztcbi8vICAgICBwdWJsaWMgdXNlcl90b2tlbjogc3RyaW5nO1xuLy8gICAgIHB1YmxpYyBpbkF0OiBzdHJpbmc7XG4vLyAgICAgcHVibGljIGNyZWF0ZWRBdDogc3RyaW5nO1xuLy8gICAgIHB1YmxpYyBfX3Y6IG51bWJlcjtcblxuLy8gICAgIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xuLy8gICAgICAgICB0aGlzLl9pZCA9IGRhdGEuX2lkO1xuLy8gICAgICAgICB0aGlzLnVzZXJfdG9rZW4gPSBkYXRhLnVzZXJfdG9rZW47XG4vLyAgICAgICAgIHRoaXMuaW5BdCA9IGRhdGEuaW5BdDtcbi8vICAgICAgICAgdGhpcy5jcmVhdGVkQXQgPSBkYXRhLmNyZWF0ZWRBdDtcbi8vICAgICAgICAgdGhpcy5fX3YgPSBkYXRhLl9fdjtcbi8vICAgICB9XG4vLyB9Il0sIm5hbWVzIjpbIkJ1dHRvbkF0dGVuZGFuY2UiLCJJbnB1dERhdGVDb21wb25lbnQiLCJTaWRhYmFyQ29tcG9uZW50cyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsImRhdGEiLCJzZXREYXRhIiwiQXJyYXkiLCJvcHRpb25zIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwianNvbkRhdGEiLCJqc29uIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiQXR0ZW5kYW5jZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsIm5hbWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInNjb3BlIiwidGJvZHkiLCJhdHRlbmRhbmNlIiwidGQiLCJpbkF0IiwiY29uc3RydWN0b3IiLCJfaWQiLCJ1c2VyX3Rva2VuIiwiRGF0ZSIsInBhcnNlSW50IiwidG9Mb2NhbGVTdHJpbmciLCJ0b1N0cmluZyIsImNyZWF0ZWRBdCIsIl9fdiIsInRoaXNwbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});