/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["xiaoYe"] = factory();
	else
		root["xiaoYe"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array/declares.js":
/*!*******************************!*
  !*** ./src/array/declares.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => /* binding */ map,\n/* harmony export */   \"reduce\": () => /* binding */ reduce,\n/* harmony export */   \"filter\": () => /* binding */ filter,\n/* harmony export */   \"find\": () => /* binding */ find,\n/* harmony export */   \"findIndex\": () => /* binding */ findIndex,\n/* harmony export */   \"every\": () => /* binding */ every,\n/* harmony export */   \"some\": () => /* binding */ some\n/* harmony export */ });\nfunction map (callback){\r\n    const arr = []\r\n    //遍历本来的数组(array),调用回调,添加到新数组中\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        //传入item,index,返回一个值\r\n        let result =  callback(element,index)\r\n        arr.push(result)\r\n    }\r\n    //最终返回一个新数组\r\n    return arr \r\n}\r\n\r\nfunction reduce ( array,callback,initValue){\r\n    //赋初始化给回调的第一个参数\r\n    let total = initValue\r\n    //遍历本来的数组(array),调用回调,\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        //传total,item,index,返回一个值\r\n        let result =  callback(total,element,index)\r\n        //赋值给回调的第一个参数，达到累计效果\r\n        total = result\r\n    }\r\n    //最终返回一个值\r\n    return total \r\n}\r\n\r\nfunction filter ( array,callback){\r\n    const arr = []\r\n    //遍历本来的数组(array),调用回调\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        //传入item,index,返回一个布尔值，true则添加\r\n        callback(element,index) ? arr.push(element) : null\r\n    }\r\n    //最终返回一个新数组\r\n    return arr \r\n}\r\n\r\n\r\nfunction find ( array,callback){\r\n    \r\n    //遍历本来的数组(array),调用回调\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        //传入item,index,\r\n        let result =  callback(element,index)\r\n        // 回调返回值为true，则将该元素返回\r\n        if ( result ){\r\n            return element\r\n        }\r\n    }\r\n    return undefined\r\n}\r\n\r\nfunction findIndex ( array,callback){\r\n    \r\n    //遍历本来的数组(array),调用回调\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        //传入item,index,\r\n        let result =  callback(element,index)\r\n        // 回调返回值为true，则将该下标返回\r\n        if ( result ) return index\r\n    }\r\n    return -1\r\n}\r\n\r\nfunction every ( array,callback){\r\n    \r\n    //遍历本来的数组(array),调用回调\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        //传入item,index,\r\n        let result =  callback(element,index)\r\n        // 只要有假，直接返回false\r\n        if ( !result ) return false\r\n    }\r\n    //全部为真,才返回true\r\n    return true\r\n}\r\n\r\n\r\nfunction some ( array,callback){\r\n    \r\n    //遍历本来的数组(array),调用回调\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        //传入item,index,\r\n        let result =  callback(element,index)\r\n        // 回调返回true,\r\n        if ( result ) return true\r\n    }\r\n    return false\r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/array/declares.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*
  !*** ./src/function/apply.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => /* binding */ apply\n/* harmony export */ });\nfunction apply (fn,obj , ...args){\r\n    //当第一个参数没有传时，this为window\r\n    if ( obj === null || obj === undefined ){\r\n        obj = window\r\n    }\r\n    //this(...args)//this为原函数\r\n    //向obj添加一个函数temp:this\r\n    obj.temp = fn\r\n    //调用obj身上的temp函数执行\r\n    const result = obj.temp(...args)\r\n    //将temp函数从obj上面删除\r\n    delete obj.temp\r\n    //将原函数的返回值返回\r\n    return result\r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*
  !*** ./src/function/bind.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => /* binding */ bind\n/* harmony export */ });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\nfunction bind (fn,obj,...args){\r\n    return  (...args2) =>{\r\n        //返回一个函数，并且调用该函数执行时，旧函数自动触发调用，参数列表为args+args2\r\n        (0,_call__WEBPACK_IMPORTED_MODULE_0__.call)(fn,obj,...args,...args2)\r\n    }\r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*
  !*** ./src/function/call.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => /* binding */ call\n/* harmony export */ });\nfunction call (fn,obj , ...args){\r\n    //当第一个参数没有传时，this为window\r\n    if ( obj === null || obj === undefined ){\r\n        obj = window\r\n    }\r\n    //this(...args)//this为原函数\r\n    //向obj添加一个函数temp:this\r\n    obj.temp = fn\r\n    //调用obj身上的temp函数执行\r\n    const result = obj.temp(...args)\r\n    //将temp函数从obj上面删除\r\n    delete obj.temp\r\n    //将原函数的返回值返回\r\n    return result\r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*
  !*** ./src/function/debounce.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => /* binding */ debounce\n/* harmony export */ });\n//返回处理防抖函数的工具函数\r\nfunction debounce (callback,time){\r\n    return function (event){\r\n\r\n        if (callback.hasOwnProperty(\"timeoutId\")){\r\n            clearTimeout(callback.timeoutId)\r\n        }\r\n        \r\n        callback.timeoutId =  setTimeout(() => {\r\n            //真正调用函数处理事件\r\n            callback.call(this,event)\r\n            //事件处理完成，清除标识\r\n            delete callback.timeoutId\r\n        },time)\r\n    }\r\n  }\n\n//# sourceURL=webpack://xiaoYe/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*
  !*** ./src/function/throttle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => /* binding */ throttle\n/* harmony export */ });\n//返回一个出来节流的工具函数\r\nfunction throttle (callback,time){\r\n    let pre = 0 //上一次调用时的时间 , 0 -->保证第一次一定调用\r\n    return function (event){//真正调用的函数 this为触发事件的标签\r\n        const current = Date.now()\r\n        if ( current - pre > time){//间隔 > 指定时间，才调用真正函数执行\r\n            callback.call(this,event)\r\n            // callback(event)\r\n            //调用后，将上次调用的时间重置为当前时间\r\n            pre = current\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/function/throttle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => /* reexport safe */ _function_call__WEBPACK_IMPORTED_MODULE_0__.call,\n/* harmony export */   \"apply\": () => /* reexport safe */ _function_apply__WEBPACK_IMPORTED_MODULE_1__.apply,\n/* harmony export */   \"bind\": () => /* reexport safe */ _function_bind__WEBPACK_IMPORTED_MODULE_2__.bind,\n/* harmony export */   \"throttle\": () => /* reexport safe */ _function_throttle__WEBPACK_IMPORTED_MODULE_3__.throttle,\n/* harmony export */   \"debounce\": () => /* reexport safe */ _function_debounce__WEBPACK_IMPORTED_MODULE_4__.debounce,\n/* harmony export */   \"map\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.map,\n/* harmony export */   \"filter\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.filter,\n/* harmony export */   \"find\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.find,\n/* harmony export */   \"findIndex\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.findIndex,\n/* harmony export */   \"reduce\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.reduce,\n/* harmony export */   \"every\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.every,\n/* harmony export */   \"some\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.some\n/* harmony export */ });\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony import */ var _array_declares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declares */ \"./src/array/declares.js\");\n/**\r\n * 入口文件\r\n */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://xiaoYe/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});