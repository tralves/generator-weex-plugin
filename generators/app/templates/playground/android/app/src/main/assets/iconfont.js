/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(192)
	var __weex_style__ = __webpack_require__(193)
	var __weex_script__ = __webpack_require__(194)

	__weex_define__('@weex-component/c90fb40e28668dc487c3cb9e5dc4fabd', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/c90fb40e28668dc487c3cb9e5dc4fabd',undefined,undefined)

/***/ },

/***/ 192:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "title1"
	      ],
	      "attr": {
	        "value": "Assets: "
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "title2"
	      ],
	      "attr": {
	        "value": "http ttf: "
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "title3"
	      ],
	      "attr": {
	        "value": "http woff: "
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "title4"
	      ],
	      "attr": {
	        "value": "file: "
	      }
	    }
	  ]
	}

/***/ },

/***/ 193:
/***/ function(module, exports) {

	module.exports = {
	  "title1": {
	    "color": "#FF0000",
	    "fontSize": 36,
	    "fontFamily": "iconfont1"
	  },
	  "title2": {
	    "color": "#FF0000",
	    "fontSize": 36,
	    "fontFamily": "iconfont2"
	  },
	  "title3": {
	    "color": "#FF0000",
	    "fontSize": 36,
	    "fontFamily": "iconfont3"
	  },
	  "title4": {
	    "color": "#FF0000",
	    "fontSize": 36,
	    "fontFamily": "iconfont4"
	  }
	}

/***/ },

/***/ 194:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  created: function created() {
	    var domModule = __weex_require__('@weex-module/dom');

	    domModule.addRule('fontFace', {
	      'fontFamily': "iconfont1",
	      'src': "url('iconfont.ttf')"
	    });
	    domModule.addRule('fontFace', {
	      'fontFamily': "iconfont2",
	      'src': "url('http://at.alicdn.com/t/font_1469606063_76593.ttf')"
	    });
	    domModule.addRule('fontFace', {
	      'fontFamily': "iconfont3",
	      'src': "url('http://at.alicdn.com/t/font_1469606522_9417143.woff')"
	    });
	    domModule.addRule('fontFace', {
	      'fontFamily': "iconfont4",
	      'src': "url('file:///storage/emulated/0/Android/data/com.alibaba.weex/cache/http:__at.alicdn.com_t_font_1469606063_76593.ttf')"
	    });
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });
