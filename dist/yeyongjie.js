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

/***/ "./src/axios/index.js":
/*!****************************!*
  !*** ./src/axios/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* \n  1. 函数的返回值为promise, 成功的结果为response, 失败的结果为error\n  2. 能处理多种类型的请求: GET/POST/PUT/DELETE\n  3. 函数的参数为一个配置对象\n      {\n        url: '',   // 请求地址\n        method: '',   // 请求方式GET/POST/PUT/DELETE\n        params: {},  // GET/DELETE请求的query参数\n        data: {}, // POST或DELETE请求的请求体参数 \n      }\n  4. 响应json数据自动解析为js的对象/数组\n*/\n/* 发送任意类型请求的函数 */\nfunction axios({\n  url,\n  method='GET',\n  params={},\n  data={}\n}) {\n  // 返回一个promise对象\n  return new Promise((resolve, reject) => {\n\n    // 处理method(转大写)\n    method = method.toUpperCase()\n\n    // 处理query参数(拼接到url上)   id=1&xxx=abc\n    /* \n    {\n      id: 1,\n      xxx: 'abc'\n    }\n    */\n    let queryString = ''\n    Object.keys(params).forEach(key => {\n      queryString += `${key}=${params[key]}&`\n    })\n    if (queryString) { // id=1&xxx=abc&\n      // 去除最后的&\n      queryString = queryString.substring(0, queryString.length-1)\n      // 接到url\n      url += '?' + queryString\n    }\n\n\n    // 1. 执行异步ajax请求\n    // 创建xhr对象\n    const request = new XMLHttpRequest()\n    // 打开连接(初始化请求, 没有请求)\n    request.open(method, url, true)\n\n    // 发送请求\n    if (method==='GET') {\n      request.send()\n    } else if (method==='POST' || method==='PUT' || method==='DELETE'){\n      request.setRequestHeader('Content-Type', 'application/json;charset=utf-8') // 告诉服务器请求体的格式是json\n      request.send(JSON.stringify(data)) // 发送json格式请求体参数\n    }\n\n    // 绑定状态改变的监听\n    request.onreadystatechange = function () {\n      // 如果请求没有完成, 直接结束\n      if (request.readyState!==4) {\n        return\n      }\n      // 如果响应状态码在[200, 300)之间代表成功, 否则失败\n      const {status, statusText} = request\n      // 2.1. 如果请求成功了, 调用resolve()\n      if (status>=200 && status<=299) {\n        // 准备结果数据对象response\n        const response = {\n          data: JSON.parse(request.response),\n          status,\n          statusText\n        }\n        resolve(response)\n      } else { // 2.2. 如果请求失败了, 调用reject()\n        reject(new Error('request error status is ' + status))\n      }\n    }\n  })\n}\n\n/* 发送特定请求的静态方法 */\naxios.get = function (url, options) {\n  return axios(Object.assign(options, {url, method: 'GET'}))\n}\naxios.delete = function (url, options) {\n  return axios(Object.assign(options, {url, method: 'DELETE'}))\n}\naxios.post = function (url, data, options) {\n  return axios(Object.assign(options, {url, data, method: 'POST'}))\n}\naxios.put = function (url, data, options) {\n  return axios(Object.assign(options, {url, data, method: 'PUT'}))\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);\n\n//# sourceURL=webpack://xiaoYe/./src/axios/index.js?");

/***/ }),

/***/ "./src/da/stack.js":
/*!*************************!*
  !*** ./src/da/stack.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction Stack (){\r\n    \r\n    const arr = []\r\n    //进栈\r\n    this.push = function (item){\r\n        arr.push(item)\r\n    }\r\n    //出栈\r\n    this.pop = function (){\r\n        return arr.pop()\r\n    }\r\n    //查看栈数量\r\n    this.size = function (){\r\n        return arr.length\r\n    }\r\n    //查看栈顶\r\n    this.peek = function (){\r\n        return arr[arr.length -1]\r\n    }\r\n    //是否为空栈\r\n    this.isEmpty = function (){\r\n        return arr.length === 0\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);\n\n//# sourceURL=webpack://xiaoYe/./src/da/stack.js?");

/***/ }),

/***/ "./src/event-bus/index.js":
/*!********************************!*
  !*** ./src/event-bus/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst eventBus = {}\n\n/* \n{\n  add:  [callback1, callback2]\n  delete: [callback3]\n}\n*/\nlet callbacksObj = {}\n\n/* \n绑定事件监听\n*/\neventBus.on = function (eventName, callback) {\n  const callbacks = callbacksObj[eventName]\n  if (callbacks) {\n    callbacks.push(callback)\n  } else {\n    callbacksObj[eventName] = [callback]\n  }\n}\n\n/* \n分发事件\n*/\neventBus.emit = function (eventName, data) {\n  const callbacks = callbacksObj[eventName]\n  if (callbacks && callbacks.length > 0) {\n    callbacks.forEach(callback => {\n      callback(data)\n    })\n  }\n}\n\n/* \n移除事件监听\n*/\neventBus.off = function (eventName) {\n  if (eventName) {\n    delete callbacksObj[eventName]\n  } else {\n    callbacksObj = {}\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventBus);\n\n//# sourceURL=webpack://xiaoYe/./src/event-bus/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => /* reexport safe */ _function_call__WEBPACK_IMPORTED_MODULE_0__.call,\n/* harmony export */   \"apply\": () => /* reexport safe */ _function_apply__WEBPACK_IMPORTED_MODULE_1__.apply,\n/* harmony export */   \"bind\": () => /* reexport safe */ _function_bind__WEBPACK_IMPORTED_MODULE_2__.bind,\n/* harmony export */   \"throttle\": () => /* reexport safe */ _function_throttle__WEBPACK_IMPORTED_MODULE_3__.throttle,\n/* harmony export */   \"debounce\": () => /* reexport safe */ _function_debounce__WEBPACK_IMPORTED_MODULE_4__.debounce,\n/* harmony export */   \"map\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.map,\n/* harmony export */   \"filter\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.filter,\n/* harmony export */   \"find\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.find,\n/* harmony export */   \"findIndex\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.findIndex,\n/* harmony export */   \"reduce\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.reduce,\n/* harmony export */   \"every\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.every,\n/* harmony export */   \"some\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.some,\n/* harmony export */   \"unique1\": () => /* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_6__.unique1,\n/* harmony export */   \"unique2\": () => /* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_6__.unique2,\n/* harmony export */   \"unique3\": () => /* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_6__.unique3,\n/* harmony export */   \"concat\": () => /* reexport safe */ _array_concat__WEBPACK_IMPORTED_MODULE_7__.concat,\n/* harmony export */   \"slice\": () => /* reexport safe */ _array_slice__WEBPACK_IMPORTED_MODULE_8__.slice,\n/* harmony export */   \"flattenDeep1\": () => /* reexport safe */ _array_flattenDeep__WEBPACK_IMPORTED_MODULE_9__.flattenDeep1,\n/* harmony export */   \"flattenDeep2\": () => /* reexport safe */ _array_flattenDeep__WEBPACK_IMPORTED_MODULE_9__.flattenDeep2,\n/* harmony export */   \"compact\": () => /* reexport safe */ _array_compact__WEBPACK_IMPORTED_MODULE_10__.default,\n/* harmony export */   \"chunk\": () => /* reexport safe */ _array_chunk__WEBPACK_IMPORTED_MODULE_11__.chunk,\n/* harmony export */   \"differences\": () => /* reexport safe */ _array_difference__WEBPACK_IMPORTED_MODULE_12__.differences,\n/* harmony export */   \"mergeArray\": () => /* reexport safe */ _array_mergeArray__WEBPACK_IMPORTED_MODULE_13__.mergeArray,\n/* harmony export */   \"pull\": () => /* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_14__.pull,\n/* harmony export */   \"pullAll\": () => /* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_14__.pullAll,\n/* harmony export */   \"drop\": () => /* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_15__.drop,\n/* harmony export */   \"dropRight\": () => /* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_15__.dropRight,\n/* harmony export */   \"newInstance\": () => /* reexport safe */ _object_newInstance__WEBPACK_IMPORTED_MODULE_16__.newInstance,\n/* harmony export */   \"myInstanceof\": () => /* reexport safe */ _object_myInstanceof__WEBPACK_IMPORTED_MODULE_17__.myInstanceof,\n/* harmony export */   \"mergeObject\": () => /* reexport safe */ _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__.mergeObject,\n/* harmony export */   \"clone1\": () => /* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_19__.clone1,\n/* harmony export */   \"clone2\": () => /* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_19__.clone2,\n/* harmony export */   \"deepClone1\": () => /* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_20__.deepClone1,\n/* harmony export */   \"deepClone2\": () => /* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_20__.deepClone2,\n/* harmony export */   \"deepClone3\": () => /* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_20__.deepClone3,\n/* harmony export */   \"deepClone4\": () => /* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_20__.deepClone4,\n/* harmony export */   \"reverseString\": () => /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_21__.reverseString,\n/* harmony export */   \"palindrome\": () => /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_21__.palindrome,\n/* harmony export */   \"truncate\": () => /* reexport safe */ _string_index__WEBPACK_IMPORTED_MODULE_21__.truncate,\n/* harmony export */   \"Promise\": () => /* reexport safe */ _promise_index__WEBPACK_IMPORTED_MODULE_22__.default,\n/* harmony export */   \"PubSub\": () => /* reexport safe */ _pub_sub_index__WEBPACK_IMPORTED_MODULE_23__.default,\n/* harmony export */   \"axios\": () => /* reexport safe */ _axios_index__WEBPACK_IMPORTED_MODULE_24__.default,\n/* harmony export */   \"eventBus\": () => /* reexport safe */ _event_bus_index__WEBPACK_IMPORTED_MODULE_25__.default,\n/* harmony export */   \"Stack\": () => /* reexport safe */ _da_stack__WEBPACK_IMPORTED_MODULE_26__.default\n/* harmony export */ });\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony import */ var _array_declares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declares */ \"./src/array/declares.js\");\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony import */ var _array_flattenDeep__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/flattenDeep */ \"./src/array/flattenDeep.js\");\n/* harmony import */ var _array_compact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/compact */ \"./src/array/compact.js\");\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony import */ var _array_mergeArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/mergeArray */ \"./src/array/mergeArray.js\");\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/* harmony import */ var _object_myInstanceof__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/myInstanceof */ \"./src/object/myInstanceof.js\");\n/* harmony import */ var _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./object/mergeObject */ \"./src/object/mergeObject.js\");\n/* harmony import */ var _object_clone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./object/clone */ \"./src/object/clone.js\");\n/* harmony import */ var _object_deepClone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./object/deepClone */ \"./src/object/deepClone.js\");\n/* harmony import */ var _string_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./string/index */ \"./src/string/index.js\");\n/* harmony import */ var _promise_index__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./promise/index */ \"./src/promise/index.js\");\n/* harmony import */ var _pub_sub_index__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pub-sub/index */ \"./src/pub-sub/index.js\");\n/* harmony import */ var _axios_index__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./axios/index */ \"./src/axios/index.js\");\n/* harmony import */ var _event_bus_index__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./event-bus/index */ \"./src/event-bus/index.js\");\n/* harmony import */ var _da_stack__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./da/stack */ \"./src/da/stack.js\");\n/**\r\n * 入口文件\r\n */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://xiaoYe/./src/index.js?");

/***/ }),

/***/ "./src/object/clone.js":
/*!*****************************!*
  !*** ./src/object/clone.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clone1\": () => /* binding */ clone1,\n/* harmony export */   \"clone2\": () => /* binding */ clone2\n/* harmony export */ });\n/**\r\n *  实现浅拷贝\r\n        方法一: 利用ES6语法\r\n        方法二: 利用ES5语法\r\n */\r\nfunction clone1 (target){\r\n    //数组\r\n    if ( Array.isArray(target) ){\r\n        return [...target]\r\n    }else if ( target !== null && typeof target === 'object' ){ //对象\r\n        return {...target}\r\n    }else { //基本类型\r\n        return target\r\n    }\r\n}\r\n\r\n//方法二: 利用ES5语法\r\n    function clone2 (target){\r\n        //对象或数组\r\n        if ( Array.isArray(target) || ( target !== null && typeof target === 'object' ) ){\r\n            const cloneTarget = Array.isArray(target) ? [] : {}\r\n            //遍历该对象本身的属性，将其添加到obj上\r\n            for (const key in target) {\r\n                if (target.hasOwnProperty(key)) {\r\n                    cloneTarget[key] = target[key];\r\n                }\r\n            }\r\n            return obj\r\n        }else{//普通类型\r\n            return target\r\n        }\r\n    }\r\n\n\n//# sourceURL=webpack://xiaoYe/./src/object/clone.js?");

/***/ }),

/***/ "./src/object/deepClone.js":
/*!*********************************!*
  !*** ./src/object/deepClone.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deepClone1\": () => /* binding */ deepClone1,\n/* harmony export */   \"deepClone2\": () => /* binding */ deepClone2,\n/* harmony export */   \"deepClone3\": () => /* binding */ deepClone3,\n/* harmony export */   \"deepClone4\": () => /* binding */ deepClone4\n/* harmony export */ });\n/**\r\n *     实现深拷贝\r\n        1). 大众乞丐版\r\n            问题1: 函数属性会丢失\r\n            问题2: 循环引用会出错\r\n        2). 面试基础版本\r\n            解决问题1: 函数属性还没丢失\r\n        3). 面试加强版本\r\n            解决问题2: 循环引用正常 \r\n            思路:\r\n                目标:--同一个数组/对象才能被创建一次\r\n                创建拷贝对象前:如果拷贝的对象已经存在,直接返回\r\n                创建拷贝对象后：保存拷贝的对象\r\n                缓存的容器结构 : Map -->key:target,value :cloneTarget\r\n        4). 面试加强版本2(优化遍历性能)\r\n            数组: while | for | forEach() 优于 for-in | keys()&forEach() \r\n            对象: for-in 与 keys()&forEach() 差不多\r\n */\r\nfunction deepClone1 (target){\r\n    return JSON.parse(JSON.stringify(target))\r\n}\r\n\r\n\r\nfunction deepClone2 (target){\r\n    if ( Array.isArray(target) || ( target !== null && typeof target === 'object' )){\r\n        let cloneTarget = Array.isArray(target) ? [] : {}\r\n        for (const key in target) {\r\n            if ( target.hasOwnProperty(key)) {\r\n                cloneTarget[key] = deepClone2(target[key])\r\n            }\r\n        }\r\n        return cloneTarget\r\n    }else{\r\n        return target\r\n    }\r\n}\r\n\r\n\r\nfunction deepClone3 (target,map = new Map()){\r\n    if ( Array.isArray(target) || ( target !== null && typeof target === 'object' )){\r\n        //从map容器中获取拷贝的对象,如果已经存在，直接结束\r\n        let cloneTarget = map.get(target)\r\n        if (cloneTarget){\r\n            return cloneTarget\r\n        }\r\n\r\n        cloneTarget = Array.isArray(target) ? [] : {}\r\n        //将拷贝的对象保存到map容器中\r\n        map.set(target,cloneTarget)\r\n\r\n        for (const key in target) {\r\n            if ( target.hasOwnProperty(key)) {\r\n                //递归调用的同时，传入map容器,当拷贝过一次的对象就不再重复拷贝!\r\n                cloneTarget[key] = deepClone3(target[key],map)\r\n            }\r\n        }\r\n        return cloneTarget\r\n    }else{\r\n        return target\r\n    }\r\n\r\n}\r\nfunction deepClone4 (target,map = new Map()){\r\n    if ( Array.isArray(target) || ( target !== null && typeof target === 'object' )){\r\n        //从map容器中获取拷贝的对象,如果已经存在，直接结束\r\n        let cloneTarget = map.get(target)\r\n        if (cloneTarget){\r\n            return\r\n        }\r\n\r\n        \r\n        if ( Array.isArray(target) ){\r\n            //数组->使用forEach效率高\r\n            cloneTarget = []\r\n            //将拷贝的对象保存到map容器中\r\n            map.set(target,cloneTarget)\r\n            target.forEach((item,index) => {\r\n                cloneTarget[item] = deepClone4(target[item],map)\r\n            });\r\n            return cloneTarget\r\n        }else{\r\n            cloneTarget = {}\r\n            map.set(target,cloneTarget)\r\n            //对象->使用for...in\r\n            for (const key in target) {\r\n                if ( target.hasOwnProperty(key)) {\r\n                    //递归调用的同时，传入map容器,当拷贝过一次的对象就不再重复拷贝!\r\n                    cloneTarget[key] = deepClone4(target[key],map)\r\n                }\r\n            }\r\n            return cloneTarget\r\n        }\r\n  \r\n       \r\n    }else{\r\n        return target\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/object/deepClone.js?");

/***/ }),

/***/ "./src/object/mergeObject.js":
/*!***********************************!*
  !*** ./src/object/mergeObject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeObject\": () => /* binding */ mergeObject\n/* harmony export */ });\n/**\r\n *  语法: object mergeObject(...objs)\r\n    功能: 合并多个对象,相同的属性的值合并成数组, 返回一个合并后对象(不改变原对象)\r\n    如： obj1 = {a:[1,2],b:{b:1},c:'c'}\r\n            obj2 = {a:1,b:2}\r\n            合并后: obj = {a:[1,2,3], b:[{b:1},2] ,c:'c'} \r\n */\r\nfunction mergeObject (...objects){\r\n    const obj = {}\r\n    objects.forEach( object =>{\r\n        for (const key in object) {\r\n            //对象中不存在该属性,直接添加\r\n            if ( !obj.hasOwnProperty(key)) {\r\n                const value = object[key];\r\n                obj[key] = value\r\n            }else{\r\n                //对象中存在该属性-->使用concat,将原本value和新value合并成一个数组赋值给该属性key\r\n                obj[key] = [].concat( obj[key],object[key])\r\n            }\r\n        }\r\n    })\r\n    return obj\r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/object/mergeObject.js?");

/***/ }),

/***/ "./src/object/myInstanceof.js":
/*!************************************!*
  !*** ./src/object/myInstanceof.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myInstanceof\": () => /* binding */ myInstanceof\n/* harmony export */ });\n/**\r\n * 自定义instanceof工具函数\r\n        语法: myInstanceOf(obj, Type)\r\n        功能: 判断obj是否是Type类型的实例\r\n        实现: Type的原型对象是否是obj的原型链上的某个对象, 如果是返回tru, 否则返回false\r\n        思路：一直循环找__proto__,找到null为止(空Objec的原型对象,原型链尽头了)，\r\n */\r\nfunction myInstanceof (obj,Type){\r\n    //将实例对象的隐式原型属性取出来\r\n    let prototype = obj.__proto__\r\n    //原型链的尽头是null\r\n    while ( prototype !== null ){\r\n        //如果等于Type类型的显示原型对象,表示找到了 \r\n        if ( prototype === Type.prototype){\r\n            return true \r\n        }\r\n        //继续将prototype的下一个隐式原型赋值给它,\r\n        prototype = prototype.__proto__\r\n    }\r\n    //循环结束,没找到，false\r\n    return false\r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/object/myInstanceof.js?");

/***/ }),

/***/ "./src/object/newInstance.js":
/*!***********************************!*
  !*** ./src/object/newInstance.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newInstance\": () => /* binding */ newInstance\n/* harmony export */ });\n// //自定义new工具函数\r\n// 语法: newInstance(Fn, ...args)\r\n// 功能: 创建Fn构造函数的实例对象\r\n// 实现: 创建空对象obj, 调用Fn指定this为obj, 返回obj\r\nfunction newInstance(Fn, ...args) {\r\n    const obj = {}\r\n\r\n    //调用Fn指定this为obj\r\n    let result = Fn.apply(obj,args)\r\n\r\n    /**判断构造函数的返回结果-->\r\n     * 返回的是一个对象类型的数据(数组/函数/对象),则new的结果是return的结果，否则为新建的对象\r\n    */\r\n   if ( result instanceof Object){\r\n       return result\r\n   }\r\n    //将obj的__proto__指向Fn的原型对象\r\n    obj.__proto__ = Fn.prototype  //将构造函数的显示原型属性赋值给实例对象的隐式原型属性\r\n    return obj\r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/object/newInstance.js?");

/***/ }),

/***/ "./src/promise/index.js":
/*!******************************!*
  !*** ./src/promise/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst PENDING = 'pending' // 初始未确定的状态\nconst RESOLVED = 'resolved' // 成功的状态\nconst REJECTED = 'rejected' // 失败的状态\n\n/* \nPromise构造函数\n*/\nfunction Promise(excutor) {\n\n  const self = this // Promise的实例对象\n  self.status = PENDING // 状态属性, 初始值为pending, 代表初始未确定的状态\n  self.data = undefined // 用来存储结果数据的属性, 初始值为undefined\n  self.callbacks = [] // {onResolved(){}, onRejected(){}}\n\n  /* \n  将promise的状态改为成功, 指定成功的value\n  */\n  function resolve(value) {\n    // 如果当前不是pending, 直接结束\n    if (self.status !== PENDING) return\n\n    self.status = RESOLVED // 将状态改为成功\n    self.data = value // 保存成功的value\n\n    // 异步调用所有缓存的待执行成功的回调函数\n    if (self.callbacks.length > 0) {\n      // 启动一个延迟时间为0的定时器, 在定时器的回调中执行所有成功的回调\n      setTimeout(() => {\n        self.callbacks.forEach(cbsObj => {\n          cbsObj.onResolved(value)\n        })\n      })\n    }\n  }\n\n  /* \n  将promise的状态改为失败, 指定失败的reason\n  */\n  function reject(reason) {\n    // 如果当前不是pending, 直接结束\n    if (self.status !== PENDING) return\n\n    self.status = REJECTED // 将状态改为失败\n    self.data = reason // 保存reason数据\n\n    // 异步调用所有缓存的待执行失败的回调函数\n    if (self.callbacks.length > 0) {\n      // 启动一个延迟时间为0的定时器, 在定时器的回调中执行所有失败的回调\n      setTimeout(() => {\n        self.callbacks.forEach(cbsObj => {\n          cbsObj.onRejected(reason)\n        })\n      })\n    }\n  }\n\n  // 调用excutor来启动异步任务\n  try {\n    excutor(resolve, reject)\n  } catch (error) { // 执行器执行出错, 当前promise变为失败\n    console.log('-----')\n    reject(error)\n  }\n\n}\n\n/* \n用来指定成功/失败回调函数的方法\n    1). 如果当前promise是resolved, 异步执行成功的回调函数onResolved\n    2). 如果当前promise是rejected, 异步执行成功的回调函数onRejected\n    3). 如果当前promise是pending, 保存回调函数\n返回一个新的promise对象\n    它的结果状态由onResolved或者onRejected执行的结果决定\n    2.1). 抛出error ==> 变为rejected, 结果值为error\n    2.2). 返回值不是promise   ==> 变为resolved, 结果值为返回值\n    2.3). 返回值是promise    ===> 由这个promise的决定新的promise的结果(成功/失败)\n*/\nPromise.prototype.then = function (onResolved, onRejected) {\n  const self = this\n\n  onResolved = typeof onResolved === 'function' ? onResolved : value => value // 将value向下传递\n  onRejected = typeof onRejected === 'function' ? onRejected : reason => {\n    throw reason\n  } // 将reason向下传递\n\n  return new Promise((resolve, reject) => { // 什么时候改变它的状态\n\n    /* \n    1. 调用指定的回调函数\n    2. 根据回调执行结果来更新返回promise的状态\n    */\n    function handle(callback) {\n      try {\n        const result = callback(self.data)\n        if (!(result instanceof Promise)) { //  2.2). 返回值不是promise   ==> 变为resolved, 结果值为返回值\n          resolve(result)\n        } else { // 2.3). 返回值是promise    ===> 由这个promise的决定新的promise的结果(成功/失败)\n          result.then(\n            value => resolve(value),\n            reason => reject(reason)\n          )\n          // result.then(resolve, reject)\n        }\n      } catch (error) { // 2.1). 抛出error ==> 变为rejected, 结果值为error\n        reject(error)\n      }\n    }\n\n    if (self.status === RESOLVED) {\n      setTimeout(() => {\n        handle(onResolved)\n      })\n    } else if (self.status === REJECTED) {\n      setTimeout(() => {\n        handle(onRejected)\n      })\n    } else { // PENDING\n      self.callbacks.push({\n        onResolved(value) {\n          handle(onResolved)\n        },\n        onRejected(reason) {\n          handle(onRejected)\n        }\n      })\n    }\n  })\n}\n\n/* \n用来指定失败回调函数的方法\ncatch是then的语法糖\n*/\nPromise.prototype.catch = function (onRejected) {\n  return this.then(undefined, onRejected)\n}\n\n/* \n用来返回一个指定vlaue的成功的promise\nvalue可能是一个一般的值, 也可能是promise对象\n*/\nPromise.resolve = function (value) {\n  return new Promise((resolve, reject) => {\n    // 如果value是一个promise, 最终返回的promise的结果由value决定\n    if (value instanceof Promise) {\n      value.then(resolve, reject)\n    } else { // value不是promise, 返回的是成功的promise, 成功的值就是value\n      resolve(value)\n    }\n  })\n}\n\n/* \n用来返回一个指定reason的失败的promise\n*/\nPromise.reject = function (reason) {\n  return new Promise((resolve, reject) => {\n    reject(reason)\n  })\n}\n\n/* \n返回一个promise, 只有当数组中所有promise都成功才成功, 否则失败\n*/\nPromise.all = function (promises) {\n  return new Promise((resolve, reject) => {\n\n    let resolvedCount = 0 // 已经成功的数量 \n    const values = new Array(promises.length) // 用来保存成功promise的value值\n    // 遍历所有promise, 取其对应的结果\n    promises.forEach((p, index) => {\n      p.then(\n        value => {\n          resolvedCount++\n          values[index] = value\n          if (resolvedCount === promises.length) { // 都成功了\n            resolve(values)\n          }\n        },\n        reason => reject(reason)\n      )\n    })\n  })\n}\n\n/* \n返回一个promise, 由第一个完成promise决定\n*/\nPromise.race = function (promises) {\n  return new Promise((resolve, reject) => {\n    // 遍历所有promise, 取其对应的结果\n    promises.forEach(p => {\n      // 返回的promise由第一个完成p来决定其结果\n      p.then(resolve, reject)\n    })\n  })\n}\n\n/* \n返回一个延迟指定时间才成功(也可能失败)的promise\n*/\nPromise.resolveDelay = function (value, time) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      // 如果value是一个promise, 最终返回的promise的结果由value决定\n      if (value instanceof Promise) {\n        value.then(resolve, reject)\n      } else { // value不是promise, 返回的是成功的promise, 成功的值就是value\n        resolve(value)\n      }\n    }, time)\n  })\n}\n\n/* \n返回一个延迟指定时间才失败的promise\n*/\nPromise.rejectDelay = function (reason, time) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      reject(reason)\n    }, time)\n  })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promise);\n\n//# sourceURL=webpack://xiaoYe/./src/promise/index.js?");

/***/ }),

/***/ "./src/pub-sub/index.js":
/*!******************************!*
  !*** ./src/pub-sub/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* \n自定义消息订阅与发布\n*/\n\nconst PubSub = {}\n/* \n  {\n    add: {\n      token1: callback1, \n      token2: callback2\n    },\n    update: {\n      token3: callback3\n    }\n  }\n*/\nlet callbacksObj = {} // 保存所有回调的容器\nlet id = 0 // 用于生成token的标记\n\n// 1. 订阅消息\nPubSub.subscribe = function (msgName, callback) {\n\n  // 确定token\n  const token = 'token_' + ++id\n  // 取出当前消息对应的callbacks\n  const callbacks = callbacksObj[msgName]\n  if (!callbacks) {\n    callbacksObj[msgName] = {\n      [token]: callback\n    }\n  } else {\n    callbacks[token] = callback\n  }\n  // 返回token\n  return token\n}\n\n\n// 2. 发布异步的消息\nPubSub.publish = function (msgName, data) {\n  // 取出当前消息对应的callbacks\n  let callbacks = callbacksObj[msgName]\n  // 如果有值\n  if (callbacks) {\n    // callbacks = Object.assign({}, callbacks)\n    // 启动定时器, 异步执行所有的回调函数\n    setTimeout(() => {\n      Object.values(callbacks).forEach(callback => {\n        callback(data)\n      })\n    }, 0)\n  }\n}\n\n// 3. 发布同步的消息\nPubSub.publishSync = function (msgName, data) {\n  // 取出当前消息对应的callbacks\n  const callbacks = callbacksObj[msgName]\n  // 如果有值\n  if (callbacks) {\n    // 立即同步执行所有的回调函数\n    Object.values(callbacks).forEach(callback => {\n      callback(data)\n    })\n  }\n}\n\n/*\n4. 取消消息订阅\n  1). 没有传值, flag为undefined\n  2). 传入token字符串\n  3). msgName字符串\n*/\nPubSub.unsubscribe = function (flag) {\n  // 如果flag没有指定或者为null, 取消所有\n  if (flag === undefined) {\n    callbacksObj = {}\n  } else if (typeof flag === 'string') {\n    if (flag.indexOf('token_') === 0) { // flag是token\n      // 找到flag对应的callbacks\n      const callbacks = Object.values(callbacksObj).find(callbacks => callbacks.hasOwnProperty(flag))\n      // 如果存在, 删除对应的属性\n      if (callbacks) {\n        delete callbacks[flag]\n      }\n    } else { // flag是msgName\n      delete callbacksObj[flag]\n    }\n\n  } else {\n    throw new Error('如果传入参数, 必须是字符串类型')\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PubSub);\n\n//# sourceURL=webpack://xiaoYe/./src/pub-sub/index.js?");

/***/ }),

/***/ "./src/string/index.js":
/*!*****************************!*
  !*** ./src/string/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reverseString\": () => /* binding */ reverseString,\n/* harmony export */   \"palindrome\": () => /* binding */ palindrome,\n/* harmony export */   \"truncate\": () => /* binding */ truncate\n/* harmony export */ });\n/**\r\n *  1. 字符串倒序: reverseString(str)  生成一个倒序的字符串\r\n    2. 字符串是否是回文: palindrome(str) 如果给定的字符串是回文，则返回 true ；否则返回 false\r\n    3. 截取字符串: truncate(str, num) 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束\r\n */\r\nfunction reverseString (str){\r\n    return  str.split(\"\").reverse().join(\"\")\r\n}\r\nfunction palindrome (str){\r\n    return str === reverseString(str)\r\n}\r\nfunction truncate (str,num){\r\n    return str.length > num ? str.substring(0,num) + '...' : str\r\n\r\n}\n\n//# sourceURL=webpack://xiaoYe/./src/string/index.js?");

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