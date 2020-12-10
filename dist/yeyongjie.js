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

/***/ "./src/array/chunk.js":
/*!****************************!*
  !*** ./src/array/chunk.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => /* binding */ chunk\n/* harmony export */ });\n//将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组\r\nfunction chunk (array,size=1){//没有传递size时，默认值为1\r\n    const bigArr = []\r\n    let smallArr = []\r\n\r\n    //传入的为空数组\r\n    if ( array.length === 0 ){\r\n        return bigArr\r\n    }\r\n\r\n    //处理size\r\n    if ( size < 1){\r\n        size = 1\r\n    }else if (size > array.length){\r\n        size = array.length\r\n    }\r\n\r\n    array.forEach(item => {\r\n        //将小数组添加到大数组(同一个只添加一次)\r\n        if (smallArr.length === 0){\r\n            bigArr.push(smallArr)\r\n        }\r\n        smallArr.push(item)\r\n\r\n        //小数组长度=size,重新创建新数组\r\n        if ( smallArr.length === size){\r\n            smallArr = []\r\n        }\r\n    });\r\n    return bigArr\r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/compact.js":
/*!******************************!*
  !*** ./src/array/compact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ compact\n/* harmony export */ });\n//返回数组中所有真值元素组成的新数组\r\nfunction compact (array){\r\n\r\n    return array.filter(item => item)\r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/array/compact.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*
  !*** ./src/array/concat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"concat\": () => /* binding */ concat\n/* harmony export */ });\n//语法: var new_array = concat(array, value1[, value2[, ...[, valueN]]]) \r\n// 功能: 将n个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变 \r\nfunction concat (array,...value){\r\n    const arr = [...array]\r\n    value.forEach( item =>{\r\n        //如果item为数组，则解开后在push，只解开一维数组\r\n        if (Array.isArray(item)){\r\n            arr.push(...item)\r\n        }else{\r\n            arr.push(item)\r\n        }\r\n    })\r\n    return arr \r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/declares.js":
/*!*******************************!*
  !*** ./src/array/declares.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => /* binding */ map,\n/* harmony export */   \"reduce\": () => /* binding */ reduce,\n/* harmony export */   \"filter\": () => /* binding */ filter,\n/* harmony export */   \"find\": () => /* binding */ find,\n/* harmony export */   \"findIndex\": () => /* binding */ findIndex,\n/* harmony export */   \"every\": () => /* binding */ every,\n/* harmony export */   \"some\": () => /* binding */ some\n/* harmony export */ });\nfunction map (callback){\r\n    const arr = []\r\n    //遍历本来的数组(array),调用回调,添加到新数组中\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        //传入item,index,返回一个值\r\n        let result =  callback(element,index)\r\n        arr.push(result)\r\n    }\r\n    //最终返回一个新数组\r\n    return arr \r\n}\r\n\r\nfunction reduce ( array,callback,initValue){\r\n    //赋初始化给回调的第一个参数\r\n    let total = initValue\r\n    //遍历本来的数组(array),调用回调,\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        //传total,item,index,返回一个值\r\n        let result =  callback(total,element,index)\r\n        //赋值给回调的第一个参数，达到累计效果\r\n        total = result\r\n    }\r\n    //最终返回一个值\r\n    return total \r\n}\r\n\r\nfunction filter ( array,callback){\r\n    const arr = []\r\n    //遍历本来的数组(array),调用回调\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        //传入item,index,返回一个布尔值，true则添加\r\n        callback(element,index) ? arr.push(element) : null\r\n    }\r\n    //最终返回一个新数组\r\n    return arr \r\n}\r\n\r\n\r\nfunction find ( array,callback){\r\n    \r\n    //遍历本来的数组(array),调用回调\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        //传入item,index,\r\n        let result =  callback(element,index)\r\n        // 回调返回值为true，则将该元素返回\r\n        if ( result ){\r\n            return element\r\n        }\r\n    }\r\n    return undefined\r\n}\r\n\r\nfunction findIndex ( array,callback){\r\n    \r\n    //遍历本来的数组(array),调用回调\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        //传入item,index,\r\n        let result =  callback(element,index)\r\n        // 回调返回值为true，则将该下标返回\r\n        if ( result ) return index\r\n    }\r\n    return -1\r\n}\r\n\r\nfunction every ( array,callback){\r\n    \r\n    //遍历本来的数组(array),调用回调\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        //传入item,index,\r\n        let result =  callback(element,index)\r\n        // 只要有假，直接返回false\r\n        if ( !result ) return false\r\n    }\r\n    //全部为真,才返回true\r\n    return true\r\n}\r\n\r\n\r\nfunction some ( array,callback){\r\n    \r\n    //遍历本来的数组(array),调用回调\r\n    for (let index = 0; index < array.length; index++) {\r\n        const element = array[index];\r\n        //传入item,index,\r\n        let result =  callback(element,index)\r\n        // 回调返回true,\r\n        if ( result ) return true\r\n    }\r\n    return false\r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/array/declares.js?");

/***/ }),

/***/ "./src/array/difference.js":
/*!*********************************!*
  !*** ./src/array/difference.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"differences\": () => /* binding */ differences\n/* harmony export */ });\n/**\r\n *  差集：得到当前数组元素中不与其他数组元素相同的元素(不改变原数组)\r\n        如: difference([1,3,5,7,6], [5, 8],[5,6])  ==> [1, 3, 7]\r\n */\r\nfunction differences (array,...arrays){\r\n    const arr = []\r\n\r\n    if (array.length === 0){\r\n        return arr\r\n    }else if (arrays.length == 0){\r\n        return [...array]\r\n    }\r\n\r\n    array.forEach(item => {\r\n        let result = true //默认为true --> 添加\r\n        //遍历二维数组arrays\r\n        for (let index = 0; index < arrays.length; index++) {\r\n            //如果在一维数组(arrays[index])中找到与item相同,则为false-->不添加\r\n            if ( arrays[index].indexOf(item) !== -1){\r\n                result = false \r\n                //找到相同了,不添加 -->后续不需要在查找\r\n                break\r\n            }\r\n        }\r\n        if ( result ){\r\n            arr.push(item)\r\n        }\r\n    })\r\n\r\n    return arr \r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drop.js":
/*!***************************!*
  !*** ./src/array/drop.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drop\": () => /* binding */ drop,\n/* harmony export */   \"dropRight\": () => /* binding */ dropRight\n/* harmony export */ });\n/**\r\n *  1. drop(array, count): \r\n        得到当前数组过滤掉左边count个后剩余元素组成的数组\r\n        说明: 不改变当前数组, count默认是1\r\n        如: drop([1,3,5,7], 2) ===> [5, 7]\r\n    2. dropRight(array, count): \r\n        得到当前数组过滤掉右边count个后剩余元素组成的数组\r\n        说明: 不改变当前数组, count默认是1\r\n        如: dropRight([1,3,5,7], 2) ===> [1, 3]\r\n */\r\nfunction drop (array,count=1){\r\n    if ( count < 1){\r\n        count = 1\r\n    }\r\n    return array.filter((item,index) => index >= count) \r\n}\r\nfunction dropRight (array,count=1){\r\n    return array.filter((item,index) => index < array.length - count)\r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/array/drop.js?");

/***/ }),

/***/ "./src/array/flattenDeep.js":
/*!**********************************!*
  !*** ./src/array/flattenDeep.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"flattenDeep1\": () => /* binding */ flattenDeep1,\n/* harmony export */   \"flattenDeep2\": () => /* binding */ flattenDeep2\n/* harmony export */ });\n/**\r\n * 1. 理解: \r\n        取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中\r\n        如: [1, [3, [2, 4]]]  ==>  [1, 3, 2, 4]\r\n    2. 实现:\r\n        方法一: 递归 + reduce() + concat()\r\n        方法二: ... + some() + concat()\r\n */\r\n\r\n/**\r\n * \r\n *  方法一: 递归 + reduce() + concat() -->[1, [3, [2, 4]]]\r\n *  1. [1]\r\n * \r\n *  2. [3]\r\n * \r\n *  3. [2,4]\r\n * \r\n *  4. [3,2,4]\r\n *  \r\n *  5. [1,3,2,4]\r\n */\r\nfunction flattenDeep1 (array){\r\n    return array.reduce((pre,item)=>{\r\n        //判断每一个item是否为数组，false则直接添加,\r\n       if ( !Array.isArray(item) ){\r\n           pre.push(item)\r\n       }else{\r\n           //item为数组,递归,因为函数返回一个数组，使用扩展运算符解开，再2通过concat和原来的数组合并\r\n          pre = pre.concat(...flattenDeep1(item))\r\n       }\r\n        //将数组返回\r\n        return pre\r\n    },[])\r\n}\r\n\r\n\r\n// 方法二: ... + some() + concat()\r\nfunction flattenDeep2 (array){\r\n    //通过和concat解开一层，并和空数组合并到一起\r\n    let arr = [].concat(...array)\r\n    //判断arr里面的item是否还有为数组的-->some：只要有一项为true则true\r\n    while ( arr.some( item => Array.isArray(item)) ) {\r\n        //再次使用concat解开一层数组,\r\n        arr = [].concat(...arr)\r\n    }\r\n    //循环结束,数组中的每个item都不再是数组了!\r\n    return arr \r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/array/flattenDeep.js?");

/***/ }),

/***/ "./src/array/mergeArray.js":
/*!*********************************!*
  !*** ./src/array/mergeArray.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeArray\": () => /* binding */ mergeArray\n/* harmony export */ });\n/**\r\n * 将arr2与arr1的元素进行合并(如果arr1中存在该元素,则保留arr1的，抛弃其他的)组成一个新的数组(不改变原数组)\r\n        如: mergeArray([1,3,5,7,5], [5, 8],[6]) ==> [1, 3, 5, 7, 5, 8,6]\r\n */\r\nfunction mergeArray (array,...arrays){\r\n    const arr = [...array]\r\n\r\n    //处理异常\r\n    if (arrays.length === 0){\r\n        return arr\r\n    }\r\n\r\n    //遍历二维\r\n    arrays.forEach(itemArr =>{\r\n        //遍历一维\r\n        itemArr.forEach( item => {\r\n            //找不到相同\r\n            if (arr.indexOf(item) === -1){\r\n                arr.push(item)\r\n            }\r\n        });\r\n    })\r\n\r\n    return arr \r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/array/mergeArray.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*
  !*** ./src/array/pull.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pull\": () => /* binding */ pull,\n/* harmony export */   \"pullAll\": () => /* binding */ pullAll\n/* harmony export */ });\n/**\r\n * \r\n   1. pull(array, ...values): \r\n        删除原数组中与value相同的元素, 返回所有删除元素的数组\r\n        说明: 原数组发生了改变\r\n        如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 原数组变为[1, 5], 返回值为[3,3,7]\r\n    2. pullAll(array, values): \r\n        功能与pull一致, 只是参数变为数组\r\n        如: pullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组1变为[1, 5], 返回值为[3,3,7] \r\n */\r\nfunction pull (array,...values){\r\n    const arr = []\r\n\r\n    if (values.length === 0){\r\n        return arr\r\n    }\r\n    for (let index = 0; index < array.length; index++) {\r\n        const item = array[index];\r\n        //找到同value值一样的item\r\n        if ( values.indexOf(item) !== -1){\r\n            //删除item\r\n            array.splice(index,1)\r\n            //将删除的item添加到数组中\r\n            arr.push(item)\r\n\r\n            index-- //因为array删除了一个元素,如果下标不-1，每次循环会跳过一个item\r\n        }\r\n    }\r\n\r\n    return arr\r\n\r\n}\r\nfunction pullAll (array,value){\r\n    return pull(array,...value)\r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/array/pull.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*
  !*** ./src/array/slice.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slice\": () => /* binding */ slice\n/* harmony export */ });\n/**\r\n *  语法: var new_array = slice(array, [begin[, end]])\r\n    功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变\r\n */\r\nfunction slice (array,begin,end){\r\n    const arr = []\r\n    //如果为空数组\r\n    if (array.length === 0){\r\n        console.log('空数组')\r\n        return arr\r\n    }\r\n\r\n    //没有指定\r\n    begin = begin || 0\r\n    end = end || array.length\r\n\r\n    //超出范围\r\n    if ( begin < 0){\r\n        begin = 0\r\n    }\r\n    if ( end > array.length){\r\n        end = array.length\r\n    }\r\n    for (let index = begin; index < end; index++) {\r\n        arr.push(array[index])\r\n    }\r\n    return arr \r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*
  !*** ./src/array/unique.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unique1\": () => /* binding */ unique1,\n/* harmony export */   \"unique2\": () => /* binding */ unique2,\n/* harmony export */   \"unique3\": () => /* binding */ unique3\n/* harmony export */ });\n//数组去重\r\n\r\n//方式一：利用双重循环，forEach+indexOf，效率比较低\r\nfunction unique1 (array){\r\n    const  arr = []\r\n    array.forEach(element => {\r\n        //新数组arr中不存在该元素，push\r\n        if ( arr.indexOf(element) === -1){//内部也用了循环\r\n            arr.push(element)\r\n        }\r\n    });\r\n    return arr\r\n}\r\n\r\n/*方式二：利用循环+对象容器，只需要遍历一次，效率较高\r\n            对象的key为item，value不关注，直接赋值true\r\n*/\r\nfunction unique2 (array){\r\n    const arr = []\r\n    const obj = {}\r\n    array.forEach(element => { \r\n        //判断对象中是否存在该元素,不存在则push\r\n        if ( !obj.hasOwnProperty(element) ){\r\n            arr.push(element)\r\n            //数组中添加该元素后，也将该元素添加到对象中\r\n            obj[element] = true\r\n        }\r\n    });\r\n    return arr\r\n}\r\n\r\n/**\r\n * 方式三：利用Array.from + set对象\r\n */\r\nfunction unique3 (array){\r\n    // return [...new Set(array)]\r\n    return Array.from(new Set(array))\r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/array/unique.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*
  !*** ./src/function/apply.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => /* binding */ apply\n/* harmony export */ });\nfunction apply (fn,obj , args){\r\n    //当第一个参数没有传时，this为window\r\n    if ( obj === null || obj === undefined ){\r\n        obj = window\r\n    }\r\n    //this(...args)//this为原函数\r\n    //向obj添加一个函数temp:this\r\n    obj.temp = fn\r\n    //调用obj身上的temp函数执行\r\n    const result = obj.temp(...args)\r\n    //将temp函数从obj上面删除\r\n    delete obj.temp\r\n    //将原函数的返回值返回\r\n    return result\r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/function/apply.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => /* reexport safe */ _function_call__WEBPACK_IMPORTED_MODULE_0__.call,\n/* harmony export */   \"apply\": () => /* reexport safe */ _function_apply__WEBPACK_IMPORTED_MODULE_1__.apply,\n/* harmony export */   \"bind\": () => /* reexport safe */ _function_bind__WEBPACK_IMPORTED_MODULE_2__.bind,\n/* harmony export */   \"throttle\": () => /* reexport safe */ _function_throttle__WEBPACK_IMPORTED_MODULE_3__.throttle,\n/* harmony export */   \"debounce\": () => /* reexport safe */ _function_debounce__WEBPACK_IMPORTED_MODULE_4__.debounce,\n/* harmony export */   \"map\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.map,\n/* harmony export */   \"filter\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.filter,\n/* harmony export */   \"find\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.find,\n/* harmony export */   \"findIndex\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.findIndex,\n/* harmony export */   \"reduce\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.reduce,\n/* harmony export */   \"every\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.every,\n/* harmony export */   \"some\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.some,\n/* harmony export */   \"unique1\": () => /* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_6__.unique1,\n/* harmony export */   \"unique2\": () => /* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_6__.unique2,\n/* harmony export */   \"unique3\": () => /* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_6__.unique3,\n/* harmony export */   \"concat\": () => /* reexport safe */ _array_concat__WEBPACK_IMPORTED_MODULE_7__.concat,\n/* harmony export */   \"slice\": () => /* reexport safe */ _array_slice__WEBPACK_IMPORTED_MODULE_8__.slice,\n/* harmony export */   \"flattenDeep1\": () => /* reexport safe */ _array_flattenDeep__WEBPACK_IMPORTED_MODULE_9__.flattenDeep1,\n/* harmony export */   \"flattenDeep2\": () => /* reexport safe */ _array_flattenDeep__WEBPACK_IMPORTED_MODULE_9__.flattenDeep2,\n/* harmony export */   \"compact\": () => /* reexport safe */ _array_compact__WEBPACK_IMPORTED_MODULE_10__.default,\n/* harmony export */   \"chunk\": () => /* reexport safe */ _array_chunk__WEBPACK_IMPORTED_MODULE_11__.chunk,\n/* harmony export */   \"differences\": () => /* reexport safe */ _array_difference__WEBPACK_IMPORTED_MODULE_12__.differences,\n/* harmony export */   \"mergeArray\": () => /* reexport safe */ _array_mergeArray__WEBPACK_IMPORTED_MODULE_13__.mergeArray,\n/* harmony export */   \"pull\": () => /* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_14__.pull,\n/* harmony export */   \"pullAll\": () => /* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_14__.pullAll,\n/* harmony export */   \"drop\": () => /* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_15__.drop,\n/* harmony export */   \"dropRight\": () => /* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_15__.dropRight,\n/* harmony export */   \"newInstance\": () => /* reexport safe */ _object_newInstance__WEBPACK_IMPORTED_MODULE_16__.newInstance\n/* harmony export */ });\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony import */ var _array_declares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declares */ \"./src/array/declares.js\");\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony import */ var _array_flattenDeep__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/flattenDeep */ \"./src/array/flattenDeep.js\");\n/* harmony import */ var _array_compact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/compact */ \"./src/array/compact.js\");\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony import */ var _array_mergeArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/mergeArray */ \"./src/array/mergeArray.js\");\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/**\r\n * 入口文件\r\n */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://xiaoYe/./src/index.js?");

/***/ }),

/***/ "./src/object/newInstance.js":
/*!***********************************!*
  !*** ./src/object/newInstance.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newInstance\": () => /* binding */ newInstance\n/* harmony export */ });\n// //自定义new工具函数\r\n// 语法: newInstance(Fn, ...args)\r\n// 功能: 创建Fn构造函数的实例对象\r\n// 实现: 创建空对象obj, 调用Fn指定this为obj, 返回obj\r\nfunction newInstance(Fn, ...args) {\r\n    const obj = {}\r\n\r\n    //调用Fn指定this为obj\r\n    let result = Fn.apply(obj,args)\r\n\r\n    /**判断构造函数的返回结果-->\r\n     * 返回的是一个对象类型的数据(数组/函数/对象),则new的结果是return的结果，否则为新建的对象\r\n    */\r\n   if ( result instanceof Object){\r\n       return result\r\n   }\r\n    //将obj的__proto__指向Fn的原型对象\r\n    obj.__proto__ = Fn.prototype \r\n    return obj\r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/object/newInstance.js?");

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