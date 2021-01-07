module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_ConfigureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/ConfigureStore */ \"./store/ConfigureStore.js\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redux-saga */ \"next-redux-saga\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/hyuninsim/nodebird-frontend/pages/_app.js\";\n// 공통적인 것을 처리하기위한 곳(pages내의)\n\n\n\n\n\n\n\nconst App = ({\n  Component\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        charSet: \"UTF-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"NodeBirdFE\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 13\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true);\n};\n\nApp.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_ConfigureStore__WEBPACK_IMPORTED_MODULE_5__[\"default\"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_6___default()(App)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsIndpdGhSZWR1eFNhZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWlCO0FBQ3pCLHNCQUNJO0FBQUEsNEJBQ0EscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFNLGVBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFLQSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEE7QUFBQSxrQkFESjtBQVNILENBVkQ7O0FBWUFELEdBQUcsQ0FBQ0UsU0FBSixHQUFnQjtBQUNaRCxXQUFTLEVBQUVFLGlEQUFTLENBQUNDLFdBQVYsQ0FBc0JDO0FBRHJCLENBQWhCO0FBSWVDLDRIQUFPLENBQUNDLFNBQVIsQ0FBa0JDLHNEQUFhLENBQUNSLEdBQUQsQ0FBL0IsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDqs7XthrXsoIHsnbgg6rKD7J2EIOyymOumrO2VmOq4sOychO2VnCDqs7MocGFnZXPrgrTsnZgpXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9Db25maWd1cmVTdG9yZSc7XG5pbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tICduZXh0LXJlZHV4LXNhZ2EnXG5jb25zdCBBcHAgPSAoe0NvbXBvbmVudH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J1VURi04Jy8+XG4gICAgICAgICAgICA8dGl0bGU+Tm9kZUJpcmRGRTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgod2l0aFJlZHV4U2FnYShBcHApKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n // combineReducers\n// user와 post에서 export하는 것이 함수이기 때문에 사용\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"combineReducers\"])({\n  index: (state = {}, action) => {\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n        console.log(\"HYDRATE\", action);\n        return _objectSpread(_objectSpread({}, state), action.payload);\n\n      default:\n        return state;\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtDQUdBO0FBQ0E7O0FBR0EsTUFBTUEsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDQyxPQUFLLEVBQUUsQ0FBQ0MsS0FBSyxHQUFHLEVBQVQsRUFBYUMsTUFBYixLQUF3QjtBQUM3QixZQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxXQUFLQywwREFBTDtBQUNFQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSixNQUF2QjtBQUNBLCtDQUNLRCxLQURMLEdBRUtDLE1BQU0sQ0FBQ0ssT0FGWjs7QUFJRjtBQUNFLGVBQU9OLEtBQVA7QUFSSjtBQVVELEdBWmlDO0FBYWxDTyxxREFia0M7QUFjbENDLHFEQUFJQTtBQWQ4QixDQUFELENBQW5DO0FBaUJlWCwwRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIWURSQVRFfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5cbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcidcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCdcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuXG4vLyBjb21iaW5lUmVkdWNlcnNcbi8vIHVzZXLsmYAgcG9zdOyXkOyEnCBleHBvcnTtlZjripQg6rKD7J20IO2VqOyImOydtOq4sCDrlYzrrLjsl5Ag7IKs7JqpXG5cblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgSFlEUkFURTpcbiAgICAgICAgY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9LFxuICB1c2VyLFxuICBwb3N0LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: \"숑이\"\n    },\n    content: \"첫 번째 게시글 #산책 #간식\",\n    Images: [{\n      src: \"https://i.pinimg.com/originals/70/98/dd/7098dd7e46ee7b223ce933aa2557ebca.jpg\"\n    }, {\n      src: \"https://t1.daumcdn.net/liveboard/dispatch/7e1be989984a477ea5105a47f6db1ea4.jpg\"\n    }, {\n      src: \"https://t1.daumcdn.net/liveboard/dispatch/4229a694440d48d48252be239bcf2887.jpg\"\n    }],\n    Comments: [{\n      User: {\n        nickname: \"방구\"\n      },\n      content: \"같이 산책가자\"\n    }, {\n      User: {\n        nickname: \"둥근\"\n      },\n      content: \"간식 정보좀 주세여\"\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false\n};\nconst ADD_POST = 'ADD_POST';\nconst addPost = {\n  type: ADD_POST\n};\nconst dummyPost = {\n  id: 2,\n  content: '더미데이터 입니다',\n  User: {\n    id: 1,\n    nickname: '숑이'\n  },\n  Images: [],\n  Comments: []\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost, ...state.mainPosts],\n        //새게시물이 위로 올라가기 위해 앞에다가 추가한다\n        postAdded: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzP2E3ZTMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJhZGRQb3N0IiwidHlwZSIsImR1bW15UG9zdCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sTUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxXQUFTLEVBQUUsQ0FDVDtBQUNFQyxNQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFJLEVBQUU7QUFDSkQsUUFBRSxFQUFFLENBREE7QUFFSkUsY0FBUSxFQUFFO0FBRk4sS0FGUjtBQU1FQyxXQUFPLEVBQUUsa0JBTlg7QUFPRUMsVUFBTSxFQUFFLENBQ047QUFDRUMsU0FBRyxFQUNEO0FBRkosS0FETSxFQUtOO0FBQ0VBLFNBQUcsRUFDRDtBQUZKLEtBTE0sRUFTTjtBQUNFQSxTQUFHLEVBQ0Q7QUFGSixLQVRNLENBUFY7QUFxQkVDLFlBQVEsRUFBRSxDQUNSO0FBQ0VMLFVBQUksRUFBRTtBQUNKQyxnQkFBUSxFQUFFO0FBRE4sT0FEUjtBQUlFQyxhQUFPLEVBQUU7QUFKWCxLQURRLEVBT1I7QUFDRUYsVUFBSSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUU7QUFETixPQURSO0FBSUVDLGFBQU8sRUFBRTtBQUpYLEtBUFE7QUFyQlosR0FEUyxDQURlO0FBcUN4QkksWUFBVSxFQUFDLEVBckNhO0FBc0N4QkMsV0FBUyxFQUFFO0FBdENhLENBQXJCO0FBeUNQLE1BQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNPLE1BQU1DLE9BQU8sR0FBRztBQUNuQkMsTUFBSSxFQUFFRjtBQURhLENBQWhCO0FBR1AsTUFBTUcsU0FBUyxHQUFHO0FBQ2RaLElBQUUsRUFBQyxDQURXO0FBRWRHLFNBQU8sRUFBQyxXQUZNO0FBR2RGLE1BQUksRUFBQztBQUNERCxNQUFFLEVBQUMsQ0FERjtBQUVERSxZQUFRLEVBQUM7QUFGUixHQUhTO0FBT2RFLFFBQU0sRUFBQyxFQVBPO0FBUWRFLFVBQVEsRUFBQztBQVJLLENBQWxCOztBQVdBLE1BQU1PLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEdBQUdoQixZQUFULEVBQXVCaUIsTUFBdkIsS0FBa0M7QUFDaEQsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0UsU0FBS0YsUUFBTDtBQUNFLDZDQUNPSyxLQURQO0FBRUlmLGlCQUFTLEVBQUUsQ0FBQ2EsU0FBRCxFQUFZLEdBQUdFLEtBQUssQ0FBQ2YsU0FBckIsQ0FGZjtBQUVnRDtBQUM5Q1MsaUJBQVMsRUFBRTtBQUhiOztBQU1GO0FBQ0UsYUFBT00sS0FBUDtBQVRKO0FBV0QsQ0FaRDs7QUFjZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbWFpblBvc3RzOiBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBVc2VyOiB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuaWNrbmFtZTogXCLsiJHsnbRcIixcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiBcIuyyqyDrsojsp7gg6rKM7Iuc6riAICPsgrDssYUgI+qwhOyLnVwiLFxuICAgICAgSW1hZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6XG4gICAgICAgICAgICBcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy83MC85OC9kZC83MDk4ZGQ3ZTQ2ZWU3YjIyM2NlOTMzYWEyNTU3ZWJjYS5qcGdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgIFwiaHR0cHM6Ly90MS5kYXVtY2RuLm5ldC9saXZlYm9hcmQvZGlzcGF0Y2gvN2UxYmU5ODk5ODRhNDc3ZWE1MTA1YTQ3ZjZkYjFlYTQuanBnXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6XG4gICAgICAgICAgICBcImh0dHBzOi8vdDEuZGF1bWNkbi5uZXQvbGl2ZWJvYXJkL2Rpc3BhdGNoLzQyMjlhNjk0NDQwZDQ4ZDQ4MjUyYmUyMzliY2YyODg3LmpwZ1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIENvbW1lbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICBuaWNrbmFtZTogXCLrsKnqtaxcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IFwi6rCZ7J20IOyCsOyxheqwgOyekFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgbmlja25hbWU6IFwi65Gl6re8XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50OiBcIuqwhOyLnSDsoJXrs7TsooAg7KO87IS47JesXCIsXG4gICAgICAgIH1dLFxuICAgIH1dLFxuICAgIGltYWdlUGF0aHM6W10sXG4gICAgcG9zdEFkZGVkOiBmYWxzZVxufTtcblxuY29uc3QgQUREX1BPU1QgPSAnQUREX1BPU1QnXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcbiAgICB0eXBlOiBBRERfUE9TVFxufVxuY29uc3QgZHVtbXlQb3N0ID0ge1xuICAgIGlkOjIsXG4gICAgY29udGVudDon642U66+4642w7J207YSwIOyeheuLiOuLpCcsXG4gICAgVXNlcjp7XG4gICAgICAgIGlkOjEsXG4gICAgICAgIG5pY2tuYW1lOifsiJHsnbQnXG4gICAgfSxcbiAgICBJbWFnZXM6W10sXG4gICAgQ29tbWVudHM6W11cblxufVxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERF9QT1NUOlxuICAgICAgcmV0dXJue1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSwgLy/sg4jqsozsi5zrrLzsnbQg7JyE66GcIOyYrOudvOqwgOq4sCDsnITtlbQg7JWe7JeQ64uk6rCAIOy2lOqwgO2VnOuLpFxuICAgICAgICBwb3N0QWRkZWQ6IHRydWVcbiAgICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequestAction\", function() { return loginRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  isLoggingIn: false,\n  //로그인 시도중\n  isLoggedIn: false,\n  isLoggingOut: false,\n  isLoggedOut: false,\n  me: null,\n  //자신의 정보\n  signUpData: {},\n  loginData: {}\n};\nconst loginRequestAction = data => {\n  return {\n    type: 'LOG_IN_REQUEST',\n    data\n  };\n};\nconst logoutRequestAction = () => {\n  return {\n    type: 'LOG_OUT_REQUEST'\n  };\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case \"LOG_IN_REQUEST\":\n      console.log('reducer login');\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingIn: true\n      });\n\n    case \"LOG_IN_SUCCESS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingIn: false,\n        isLoggedIn: true,\n        me: _objectSpread(_objectSpread({}, action.data), {}, {\n          nickname: 'Sample'\n        })\n      });\n\n    case \"LOG_IN_FAILURE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingIn: false,\n        isLoggedIn: false\n      });\n\n    case \"LOG_OUT_REQUEST\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingOut: true\n      });\n\n    case \"LOG_OUT_SUCCESS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingOut: false,\n        isLoggedIn: false,\n        me: null\n      });\n\n    case \"LOG_OUT_FAILURE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingOut: false,\n        isLoggedIn: false\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnaW5nSW4iLCJpc0xvZ2dlZEluIiwiaXNMb2dnaW5nT3V0IiwiaXNMb2dnZWRPdXQiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwibmlja25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxZQUFZLEdBQUc7QUFDMUJDLGFBQVcsRUFBRSxLQURhO0FBQ047QUFDcEJDLFlBQVUsRUFBRSxLQUZjO0FBRzFCQyxjQUFZLEVBQUUsS0FIWTtBQUkxQkMsYUFBVyxFQUFFLEtBSmE7QUFLMUJDLElBQUUsRUFBRSxJQUxzQjtBQUtoQjtBQUNWQyxZQUFVLEVBQUUsRUFOYztBQU8xQkMsV0FBUyxFQUFFO0FBUGUsQ0FBckI7QUFVQSxNQUFNQyxrQkFBa0IsR0FBSUMsSUFBRCxJQUFVO0FBQzFDLFNBQU07QUFDSkMsUUFBSSxFQUFFLGdCQURGO0FBRUpEO0FBRkksR0FBTjtBQUtELENBTk07QUFPQSxNQUFNRSxtQkFBbUIsR0FBRyxNQUFNO0FBQ3ZDLFNBQU07QUFDSkQsUUFBSSxFQUFFO0FBREYsR0FBTjtBQUlELENBTE07O0FBT1AsTUFBTUUsT0FBTyxHQUFHLENBQUNDLEtBQUssR0FBR2IsWUFBVCxFQUF1QmMsTUFBdkIsS0FBa0M7QUFDaEQsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0UsU0FBSyxnQkFBTDtBQUNFSyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsNkNBQ0tILEtBREw7QUFFRVosbUJBQVcsRUFBQztBQUZkOztBQUlGLFNBQUssZ0JBQUw7QUFDRSw2Q0FDS1ksS0FETDtBQUVFWixtQkFBVyxFQUFDLEtBRmQ7QUFHRUMsa0JBQVUsRUFBRSxJQUhkO0FBSUVHLFVBQUUsa0NBQU1TLE1BQU0sQ0FBQ0wsSUFBYjtBQUFtQlEsa0JBQVEsRUFBQztBQUE1QjtBQUpKOztBQU1GLFNBQUssZ0JBQUw7QUFDRSw2Q0FDS0osS0FETDtBQUVFWixtQkFBVyxFQUFDLEtBRmQ7QUFHRUMsa0JBQVUsRUFBRTtBQUhkOztBQUtGLFNBQUssaUJBQUw7QUFDRSw2Q0FDS1csS0FETDtBQUVFVixvQkFBWSxFQUFFO0FBRmhCOztBQUlGLFNBQUssaUJBQUw7QUFDRSw2Q0FDS1UsS0FETDtBQUVFVixvQkFBWSxFQUFFLEtBRmhCO0FBR0VELGtCQUFVLEVBQUUsS0FIZDtBQUlFRyxVQUFFLEVBQUU7QUFKTjs7QUFNRixTQUFLLGlCQUFMO0FBQ0UsNkNBQ0tRLEtBREw7QUFFRVYsb0JBQVksRUFBRSxLQUZoQjtBQUdFRCxrQkFBVSxFQUFFO0FBSGQ7O0FBTUY7QUFDRSxhQUFPVyxLQUFQO0FBeENKO0FBMENELENBM0NEOztBQTZDZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNMb2dnaW5nSW46IGZhbHNlLCAvL+uhnOq3uOyduCDsi5zrj4TspJFcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIGlzTG9nZ2luZ091dDogZmFsc2UsIFxuICBpc0xvZ2dlZE91dDogZmFsc2UsXG4gIG1lOiBudWxsLCAvL+yekOyLoOydmCDsoJXrs7RcbiAgc2lnblVwRGF0YToge30sXG4gIGxvZ2luRGF0YToge30sXG59O1xuXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcbiAgcmV0dXJue1xuICAgIHR5cGU6ICdMT0dfSU5fUkVRVUVTVCcsXG4gICAgZGF0YVxuICB9XG5cbn1cbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm57XG4gICAgdHlwZTogJ0xPR19PVVRfUkVRVUVTVCcsXG4gIH1cblxufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJMT0dfSU5fUkVRVUVTVFwiOlxuICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgbG9naW4nKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9nZ2luZ0luOnRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgXCJMT0dfSU5fU1VDQ0VTU1wiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9nZ2luZ0luOmZhbHNlLFxuICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxuICAgICAgICBtZTogey4uLmFjdGlvbi5kYXRhLCBuaWNrbmFtZTonU2FtcGxlJ30sXG4gICAgICB9O1xuICAgIGNhc2UgXCJMT0dfSU5fRkFJTFVSRVwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9nZ2luZ0luOmZhbHNlLFxuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICAgIH07XG4gICAgY2FzZSBcIkxPR19PVVRfUkVRVUVTVFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9nZ2luZ091dDogdHJ1ZSwgXG4gICAgICB9O1xuICAgIGNhc2UgXCJMT0dfT1VUX1NVQ0NFU1NcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLCBcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgIG1lOiBudWxsLFxuICAgICAgfTtcbiAgICBjYXNlIFwiTE9HX09VVF9GQUlMVVJFXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2dnaW5nT3V0OiBmYWxzZSwgXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ \"./sagas/post.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./sagas/user.js\");\n\n\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_post__WEBPACK_IMPORTED_MODULE_1__[\"default\"])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcz83N2UzIl0sIm5hbWVzIjpbInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInVzZXJTYWdhIiwicG9zdFNhZ2EiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdlLFVBQVVBLFFBQVYsR0FBb0I7QUFDL0IsUUFBTUMsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDQyw2Q0FBRCxDQURFLEVBRU5ELCtEQUFJLENBQUNFLDZDQUFELENBRkUsQ0FBRCxDQUFUO0FBSUgiLCJmaWxlIjoiLi9zYWdhcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YWxsLCBmb3JrfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0J1xuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcidcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKXtcbiAgICB5aWVsZCBhbGwoW1xuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcbiAgICAgICAgZm9yayhwb3N0U2FnYSksXG4gICAgXSlcbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sagas/index.js\n");

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return postSaga; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction addPostAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/post', data);\n}\n\nfunction* addPost(action) {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      type: 'ADD_POST_SUCCESS'\n    });\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      type: 'ADD_POST_FAILURE',\n      data: err.response.data\n    });\n  }\n}\n\nfunction* watchAddPost() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])('ADD_POST_REQUEST', addPost);\n}\n\nfunction* postSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchAddPost)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzPzNhYmEiXSwibmFtZXMiOlsiYWRkUG9zdEFQSSIsImRhdGEiLCJheGlvcyIsImdldCIsImFkZFBvc3QiLCJhY3Rpb24iLCJkZWxheSIsInB1dCIsInR5cGUiLCJlcnIiLCJyZXNwb25zZSIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJwb3N0U2FnYSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBR0EsU0FBU0EsVUFBVCxDQUFvQkMsSUFBcEIsRUFBeUI7QUFDckIsU0FBT0MsNENBQUssQ0FBQ0MsR0FBTixDQUFVLFdBQVYsRUFBdUJGLElBQXZCLENBQVA7QUFDSDs7QUFFRCxVQUFVRyxPQUFWLENBQWtCQyxNQUFsQixFQUF5QjtBQUNyQixNQUFHO0FBQ0MsVUFBTUMsZ0VBQUssQ0FBQyxJQUFELENBQVg7QUFDQSxVQUFNQyw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBQztBQURDLEtBQUQsQ0FBVDtBQUdILEdBTEQsQ0FLQyxPQUFNQyxHQUFOLEVBQVU7QUFDUCxVQUFNRiw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBQyxrQkFEQztBQUVOUCxVQUFJLEVBQUVRLEdBQUcsQ0FBQ0MsUUFBSixDQUFhVDtBQUZiLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsVUFBVVUsWUFBVixHQUF3QjtBQUNwQixRQUFNQyxxRUFBVSxDQUFDLGtCQUFELEVBQXFCUixPQUFyQixDQUFoQjtBQUNIOztBQUVjLFVBQVVTLFFBQVYsR0FBb0I7QUFDL0IsUUFBTUMsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDSixZQUFELENBREUsQ0FBRCxDQUFUO0FBR0giLCJmaWxlIjoiLi9zYWdhcy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgeyBhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCJcblxuXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpe1xuICAgIHJldHVybiBheGlvcy5nZXQoJy9hcGkvcG9zdCcsIGRhdGEpXG59XG5cbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbil7XG4gICAgdHJ5e1xuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKVxuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHlwZTonQUREX1BPU1RfU1VDQ0VTUydcbiAgICAgICAgfSlcbiAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6J0FERF9QT1NUX0ZBSUxVUkUnLFxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKXtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KCdBRERfUE9TVF9SRVFVRVNUJywgYWRkUG9zdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCl7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxuICAgIF0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/post.js\n");

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userSaga; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction loginAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/login', data);\n}\n\nfunction* login(action) {\n  try {\n    //const result = yield call(loginAPI, action.data) //call(함수 이름, 매개변수)\n    console.log('saga login');\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      type: 'LOG_IN_SUCCESS',\n      data: action.data\n    });\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      type: 'LOG_IN_FAILURE',\n      data: err.response.data\n    });\n  }\n} // function logoutAPI(){\n//     return axios.post('/api/logout')\n// }\n\n\nfunction* logout() {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(1000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      type: 'LOG_OUT_SUCCESS'\n    });\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])({\n      type: 'LOG_OUT_FAILURE',\n      data: err.response.data\n    });\n  }\n}\n\nfunction* watchLogIn() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])('LOG_IN_REQUEST', login);\n}\n\nfunction* watchLogOut() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])('LOG_OUT_REQUEST', logout);\n}\n\nfunction* userSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"])(watchLogOut)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzP2EzODYiXSwibmFtZXMiOlsibG9naW5BUEkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwibG9naW4iLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZGVsYXkiLCJwdXQiLCJ0eXBlIiwiZXJyIiwicmVzcG9uc2UiLCJsb2dvdXQiLCJ3YXRjaExvZ0luIiwidGFrZUxhdGVzdCIsIndhdGNoTG9nT3V0IiwidXNlclNhZ2EiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXVCO0FBQ25CLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxZQUFYLEVBQXlCRixJQUF6QixDQUFQO0FBQ0g7O0FBRUQsVUFBVUcsS0FBVixDQUFnQkMsTUFBaEIsRUFBdUI7QUFDbkIsTUFBRztBQUNDO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDQSxVQUFNQyxnRUFBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU1DLDhEQUFHLENBQUM7QUFDTkMsVUFBSSxFQUFDLGdCQURDO0FBRU5ULFVBQUksRUFBRUksTUFBTSxDQUFDSjtBQUZQLEtBQUQsQ0FBVDtBQUlILEdBUkQsQ0FRQyxPQUFNVSxHQUFOLEVBQVU7QUFDUCxVQUFNRiw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBQyxnQkFEQztBQUVOVCxVQUFJLEVBQUVVLEdBQUcsQ0FBQ0MsUUFBSixDQUFhWDtBQUZiLEtBQUQsQ0FBVDtBQUtIO0FBQ0osQyxDQUNEO0FBQ0E7QUFDQTs7O0FBRUEsVUFBVVksTUFBVixHQUFrQjtBQUNkLE1BQUc7QUFDQyxVQUFNTCxnRUFBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU1DLDhEQUFHLENBQUM7QUFDTkMsVUFBSSxFQUFDO0FBREMsS0FBRCxDQUFUO0FBR0gsR0FMRCxDQUtDLE9BQU1DLEdBQU4sRUFBVTtBQUNQLFVBQU1GLDhEQUFHLENBQUM7QUFDTkMsVUFBSSxFQUFDLGlCQURDO0FBRU5ULFVBQUksRUFBRVUsR0FBRyxDQUFDQyxRQUFKLENBQWFYO0FBRmIsS0FBRCxDQUFUO0FBS0g7QUFDSjs7QUFFRCxVQUFVYSxVQUFWLEdBQXNCO0FBQ2xCLFFBQU1DLHFFQUFVLENBQUMsZ0JBQUQsRUFBbUJYLEtBQW5CLENBQWhCO0FBQ0g7O0FBQ0QsVUFBVVksV0FBVixHQUF1QjtBQUNuQixRQUFNRCxxRUFBVSxDQUFDLGlCQUFELEVBQW9CRixNQUFwQixDQUFoQjtBQUNIOztBQUdjLFVBQVVJLFFBQVYsR0FBb0I7QUFDL0IsUUFBTUMsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDTCxVQUFELENBREUsRUFFTkssK0RBQUksQ0FBQ0gsV0FBRCxDQUZFLENBQUQsQ0FBVDtBQUlIIiwiZmlsZSI6Ii4vc2FnYXMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiXG5cbmZ1bmN0aW9uIGxvZ2luQVBJKGRhdGEpe1xuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSlcbn1cblxuZnVuY3Rpb24qIGxvZ2luKGFjdGlvbil7XG4gICAgdHJ5e1xuICAgICAgICAvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9naW5BUEksIGFjdGlvbi5kYXRhKSAvL2NhbGwo7ZWo7IiYIOydtOumhCwg66ek6rCc67OA7IiYKVxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBsb2dpbicpXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApXG4gICAgICAgIHlpZWxkIHB1dCh7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgdHlwZTonTE9HX0lOX1NVQ0NFU1MnLFxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcbiAgICAgICAgfSlcbiAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6J0xPR19JTl9GQUlMVVJFJyxcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXG4gICAgICAgIH0pXG5cbiAgICB9XG59XG4vLyBmdW5jdGlvbiBsb2dvdXRBUEkoKXtcbi8vICAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKVxuLy8gfVxuXG5mdW5jdGlvbiogbG9nb3V0KCl7XG4gICAgdHJ5e1xuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKVxuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHlwZTonTE9HX09VVF9TVUNDRVNTJyxcbiAgICAgICAgfSlcbiAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6J0xPR19PVVRfRkFJTFVSRScsXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxuICAgICAgICB9KVxuXG4gICAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpe1xuICAgIHlpZWxkIHRha2VMYXRlc3QoJ0xPR19JTl9SRVFVRVNUJywgbG9naW4pXG59XG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKXtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KCdMT0dfT1VUX1JFUVVFU1QnLCBsb2dvdXQpXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCl7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcbiAgICAgICAgZm9yayh3YXRjaExvZ091dClcbiAgICBdKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/user.js\n");

/***/ }),

/***/ "./store/ConfigureStore.js":
/*!*********************************!*\
  !*** ./store/ConfigureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.js\");\n\n\n\n\n\n\n\nconst configureStore = context => {\n  console.log(context);\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();\n  const middlewares = [sagaMiddleware];\n  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...middlewares));\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], enhancer);\n  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9Db25maWd1cmVTdG9yZS5qcz9jOGQ0Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJzYWdhVGFzayIsInJ1biIsInJvb3RTYWdhIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUlDLE9BQUQsSUFBYTtBQUNsQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDQSxRQUFNRyxjQUFjLEdBQUdDLGlEQUFvQixFQUEzQztBQUNBLFFBQU1DLFdBQVcsR0FBRyxDQUFDRixjQUFELENBQXBCO0FBQ0EsUUFBTUcsUUFBUSxHQUFHLFFBQ2JDLFNBRGEsR0FFYkMsb0ZBQW1CLENBQ25CQyw2REFBZSxDQUFDLEdBQUdKLFdBQUosQ0FESSxDQUZ2QjtBQUtBLFFBQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsaURBQUQsRUFBVU4sUUFBVixDQUF6QjtBQUNBSSxPQUFLLENBQUNHLFFBQU4sR0FBaUJWLGNBQWMsQ0FBQ1csR0FBZixDQUFtQkMsOENBQW5CLENBQWpCO0FBQ0EsU0FBT0wsS0FBUDtBQUNELENBWkQ7O0FBY0EsTUFBTU0sT0FBTyxHQUFHQyx3RUFBYSxDQUFDbEIsY0FBRCxFQUFpQjtBQUFFbUIsT0FBSztBQUFQLENBQWpCLENBQTdCO0FBRWVGLHNFQUFmIiwiZmlsZSI6Ii4vc3RvcmUvQ29uZmlndXJlU3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoY29udGV4dCkgPT4ge1xuICBjb25zb2xlLmxvZyhjb250ZXh0KTtcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhcbiAgICAgIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcyksXG4gICAgKTtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHsgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIH0pO1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/ConfigureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXNhZ2FcIj81MGI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtc2FnYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-saga\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ })

/******/ });