/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/styles/styles.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--4-2!./src/styles/styles.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap);\"]);\n// Module\nexports.push([module.i, \".start{transition:opacity 1s;display:flex;justify-content:center;align-items:center;background:#000}.start.hide{opacity:0}a.menu{position:relative;padding:10px 30px;margin:0 15px;color:#21ebff;text-decoration:none;text-transform:uppercase;letter-spacing:2px;font-size:20px;transition:.5s;-webkit-box-reflect:below 2px linear-gradient(transparent, #0003)}a.menu:nth-child(1){filter:hue-rotate(115deg)}a.menu:nth-child(3){filter:hue-rotate(270deg)}a.menu:hover{background:#21ebff;color:#111;box-shadow:0 0 50px #21ebff;transition-delay:.5s}a.menu:before{content:\\\"\\\";position:absolute;top:0;left:0;width:10px;height:10px;border-top:2px solid #21ebff;border-left:2px solid #21ebff;transition:.5s;transition-delay:.5s}a.menu:hover:before{width:98%;height:96%;transition-delay:0s}a.menu:after{content:\\\"\\\";position:absolute;bottom:0;right:0;width:10px;height:10px;border-bottom:2px solid #21ebff;border-right:2px solid #21ebff;transition:.5s;transition-delay:.5s}a.menu:hover:after{width:98%;height:96%;transition-delay:0s}.w-nav{position:relative}.w-nav .search{position:absolute;margin:auto;top:0;right:260px;left:0;bottom:0;width:48px;height:48px;background-color:#21ebff;border-radius:50%;z-index:4;box-shadow:0 0 25px 0 rgba(0,0,0,.4);transition:1s all}.w-nav .search:hover{cursor:pointer}.w-nav .search::before{content:\\\" \\\";position:absolute;margin:auto;top:20px;left:20px;right:0;bottom:0;width:12px;height:4px;background-color:#000;transform:rotate(45deg);transition:.5s all}.w-nav .search::after{content:\\\" \\\";position:absolute;margin:auto;top:-5px;left:-5px;right:0;bottom:0;width:25px;height:25px;border-radius:50%;border:2px solid #000;transition:.5s all}.w-nav input{position:absolute;margin:auto;top:0px;left:0px;right:0;bottom:0;width:300px;height:45px;outline:none;border:none;background-color:#21ebff;color:#000;text-shadow:0 0 10px #21ebff;padding:0 80px 0 20px;border-radius:30px;box-shadow:0 0 25px 0 #21ebff,0 20px 25px 0 rgba(0,0,0,.2);opacity:0;z-index:5;letter-spacing:.1em;transition:1s all}.w-nav input:hover{cursor:pointer}.w-nav input:focus{width:300px;opacity:1;cursor:text}.w-nav input:focus~.search{right:-260px;background-color:#fff;z-index:6}.w-nav input:focus~.search::before{top:0;left:0;width:25px}.w-nav input:focus~.search::after{top:0;left:0;width:25px;height:4px;border:none;background-color:#000;border-radius:0;transform:rotate(-45deg)}.w-nav input::placeholder{color:#000}html{box-sizing:border-box;font-size:16px}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;font-family:\\\"Poppins\\\",sans-serif}body{display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:#000;width:100vw;height:100vh}.d-none{display:none}.weather{opacity:0;transition:opacity 1s;height:81%;width:60%;color:#21ebff}.weather.show{opacity:1}.weather:before{content:\\\"\\\";position:absolute;top:5%;left:20%;width:10px;height:10px;border-top:4px solid #21ebff;border-left:4px solid #21ebff;border-radius:4px;transition:.5s;transition-delay:.5s}.weather.show:before{width:59%;height:79%;transition-delay:0s}.weather:after{content:\\\"\\\";position:absolute;bottom:14%;right:20%;width:10px;height:10px;border-bottom:4px solid #21ebff;border-right:4px solid #21ebff;border-radius:4px;transition:.5s;transition-delay:.5s}.weather.show:after{width:59%;height:79%;transition-delay:0s}.back{opacity:0;transition:opacity 1s;display:flex;justify-content:center;align-items:center;margin-top:50px;height:20px;width:50px}.back.show{opacity:1}.back a.menu{filter:hue-rotate(0deg)}.w-container{margin:auto;display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:98%;height:98%}.w-container .w-nav{width:98%;height:10%}.w-container .w-body{width:98%;height:88%;background-color:#17151c}.not-found-base{width:100%;height:100%;display:none;justify-content:center;align-items:center}.not-found-base .not-found-box{position:relative;transition:.5s;-webkit-box-reflect:below 5px linear-gradient(transparent, #0003)}.not-found-base .not-found-box h3{text-transform:uppercase;letter-spacing:2px;font-size:20px;font-weight:500;padding:10px;margin:10px 20px}.not-found-base .not-found-box.show{background:#21ebff;color:#111;box-shadow:0 0 10px #21ebff;transition-delay:.5s}.not-found-base .not-found-box:before{content:\\\"\\\";position:absolute;top:0;left:0;width:10px;height:10px;border-top:2px solid #21ebff;border-left:2px solid #21ebff;transition:.5s;transition-delay:.5s}.not-found-base .not-found-box.show:before{width:98%;height:96%;transition-delay:0s}.not-found-base .not-found-box:after{content:\\\"\\\";position:absolute;bottom:0;right:0;width:10px;height:10px;border-bottom:2px solid #21ebff;border-right:2px solid #21ebff;transition:.5s;transition-delay:.5s}.not-found-base .not-found-box.show:after{width:98%;height:96%;transition-delay:0s}.weather-base{display:flex;width:100%;height:100%}.weather-base .w-box-l,.weather-base .w-box-r{width:50%;height:100%;border:2px solid #fff;display:flex;flex-direction:column;justify-content:space-between;align-items:center}.w-box-l .box-l-1,.w-box-l .box-l-2{width:100%;height:50%;border:2px solid #bf1b1b}.box-l-1{display:flex;justify-content:center;align-items:center}.box-l-1 .box-data{width:75%;height:85%;border:2px solid #21ebff}.box-l-1 .box-data .box-top,.box-l-1 .box-data .box-bottom{width:100%;height:50%;border:2px solid #fff}.box-l-1 .box-data .box-top{display:flex;justify-content:center;align-items:center}.box-l-1 .box-data .box-top h3{font-weight:500;font-size:4em}.box-l-1 .box-data .box-bottom{display:flex;justify-content:center;align-items:center}.box-l-1 .box-data .box-bottom img{height:5rem;margin-right:5px;background-color:#21ebff;border-radius:50%}.box-l-1 .box-data .box-bottom p{text-transform:uppercase;font-size:1em;margin-left:5px}.box-l-2{display:flex;justify-content:center;align-items:center}.box-l-2 .box-data{width:60%;height:60%;border:2px solid #21ebff}.w-box-r .box-r-1,.w-box-r .box-r-2,.w-box-r .box-r-3{width:100%;height:33.33%;border:2px solid #bf1b1b}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_weather_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/weather-utils */ \"./src/js/weather-utils.js\");\n/* harmony import */ var _js_menu_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/menu-utils */ \"./src/js/menu-utils.js\");\n\n\n\n\nconst menuObj = _js_menu_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nconst wheater = _js_weather_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\nconst start = (() => {\n  menuObj.start();\n  wheater.getApiData('London');\n  wheater.getApiData('Lonsdhvfds');\n})();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/dom-utils.js":
/*!*****************************!*\
  !*** ./src/js/dom-utils.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DomObj = (() => {\n  const injectView = (data) => {\n    console.log('Injecting view!');\n    console.log(data);\n  };\n  return {\n    injectView,\n  }\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DomObj);\n\n//# sourceURL=webpack:///./src/js/dom-utils.js?");

/***/ }),

/***/ "./src/js/menu-utils.js":
/*!******************************!*\
  !*** ./src/js/menu-utils.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst MenUtil = (() => {\n  const menuBox = document.getElementById('menu-box');\n  const weatherBox = document.getElementById('weather-box');\n  const startBtn = document.getElementById('start-btn');\n  const backBox = document.getElementById('back-box');\n  const backBtn = document.getElementById('back-btn');\n\n  const start = () => {\n    weatherBox.style.display = 'none';\n    backBox.style.display = 'none';\n    setTimeout(() => {\n      menuBox.classList.remove('hide');\n      menuBox.addEventListener('transitionend', (e) => {\n        e.preventDefault();\n        startBtn.addEventListener('click', (e) => {\n          e.preventDefault();\n          menuBox.classList.add('hide');\n          setTimeout(() => {\n            menuBox.style.display = 'none';\n            weatherBox.style.display = 'flex';\n            backBox.style.display = 'flex';\n            setTimeout(() => {\n              weatherBox.classList.add('show');\n              backBox.classList.add('show');\n              backBtn.addEventListener('click', (e) => {\n                e.preventDefault();\n                weatherBox.classList.remove('show');\n                backBox.classList.remove('show');\n                setTimeout(() => {\n                  weatherBox.style.display = 'none';\n                  backBox.style.display = 'none';\n                  menuBox.style.display = 'flex';\n                  menuBox.classList.remove('hide');\n                }, 1000);\n              }, false, { once: true });\n            }, 250);\n          }, 1000);\n        }, false, { once: true });\n      });\n    }, 250);\n  };\n  return {\n    start,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenUtil);\n\n\n//# sourceURL=webpack:///./src/js/menu-utils.js?");

/***/ }),

/***/ "./src/js/msg-utils.js":
/*!*****************************!*\
  !*** ./src/js/msg-utils.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils */ \"./src/js/dom-utils.js\");\n\n\nconst Messager = (() => {\n  const domTransductor = _dom_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n  const getSuccess = (query, units, data) => {\n    if (query === data.name) {\n      console.log(data.name);\n    } else {\n      console.log('City not found');\n    }\n  };\n\n  const getError = (query, units, error) => {\n    console.log(error);\n  };\n\n  return {\n    getSuccess,\n    getError    \n  }\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Messager);\n\n//# sourceURL=webpack:///./src/js/msg-utils.js?");

/***/ }),

/***/ "./src/js/weather-utils.js":
/*!*********************************!*\
  !*** ./src/js/weather-utils.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _msg_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msg-utils */ \"./src/js/msg-utils.js\");\n\n\nconst WeatherData = (() => {\n  const OW_URL = 'https://api.openweathermap.org/data/2.5/weather';\n  const APPID = '983197df0bcd0f30394e4bdf565daf58';\n  const TEMP_UNITS = ['metric', 'imperial'];\n  const msgTransductor = _msg_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n  const getApiData = async (query, units = TEMP_UNITS[0]) => {\n    try {\n      const resp = await fetch(`${OW_URL}?q=${query}&appid=${APPID}&units=${units}`);\n      const weatherData = await resp.json();\n      msgTransductor.getSuccess(query, units, weatherData);\n    } catch(error) {\n      msgTransductor.getError(query, units, error);\n    }\n  };\n\n  return {\n    getApiData,\n  }\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WeatherData);\n\n\n//# sourceURL=webpack:///./src/js/weather-utils.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--4-2!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/styles/styles.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/styles.scss?");

/***/ })

/******/ });