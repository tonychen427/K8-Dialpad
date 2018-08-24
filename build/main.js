(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("react-redux"), require("@fortawesome/react-fontawesome"), require("eventemitter2"), require("react-user-avatar"), require("redux"), require("redux-immutable"), require("immutable"), require("react-modal-resizable-draggable"), require("events"), require("@fortawesome/fontawesome-svg-core"), require("@fortawesome/free-solid-svg-icons"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "react-redux", "@fortawesome/react-fontawesome", "eventemitter2", "react-user-avatar", "redux", "redux-immutable", "immutable", "react-modal-resizable-draggable", "events", "@fortawesome/fontawesome-svg-core", "@fortawesome/free-solid-svg-icons"], factory);
	else if(typeof exports === 'object')
		exports["@8x8/components"] = factory(require("react"), require("prop-types"), require("react-redux"), require("@fortawesome/react-fontawesome"), require("eventemitter2"), require("react-user-avatar"), require("redux"), require("redux-immutable"), require("immutable"), require("react-modal-resizable-draggable"), require("events"), require("@fortawesome/fontawesome-svg-core"), require("@fortawesome/free-solid-svg-icons"));
	else
		root["@8x8/components"] = factory(root["react"], root["prop-types"], root["react-redux"], root["@fortawesome/react-fontawesome"], root["eventemitter2"], root["react-user-avatar"], root["redux"], root["redux-immutable"], root["immutable"], root["react-modal-resizable-draggable"], root["events"], root["@fortawesome/fontawesome-svg-core"], root["@fortawesome/free-solid-svg-icons"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_44__, __WEBPACK_EXTERNAL_MODULE_45__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/*!**************************************************!*\
  !*** ../node_modules/css-loader/lib/css-base.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ 18);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ 13);

var _imc = __webpack_require__(/*! ../../services/imc */ 14);

__webpack_require__(/*! ./styles/index.css */ 16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FloatingButton = function FloatingButton(props) {
  if (props.icon === '') return _react2.default.createElement('div', { style: { border: 'inherit' } });
  return _react2.default.createElement(
    'div',
    { onClick: function onClick() {
        props.action ? props.action(props) : null;
        // DialerService.emitUIEvent(props);
        (0, _imc.getImc)().emit(props);
      }
    },
    _react2.default.createElement(
      'div',
      {
        style: { background: props.bgcolor, color: props.color },
        className: 'floating-button ' + (props.floating ? 'floating' : ''),
        onClick: props.action
      },
      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: props.icon })
    ),
    _react2.default.createElement(
      'div',
      { className: 'button-title' },
      props.title
    )
  );
};

FloatingButton.defaultProps = {
  title: '',
  floating: false,
  color: 'gray',
  bgcolor: 'white'
};

FloatingButton.propTypes = {
  action: _propTypes2.default.func,
  floating: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  color: _propTypes2.default.string,
  bgcolor: _propTypes2.default.string
};

FloatingButton.defaultProps = {
  icon: ''
};

var _default = FloatingButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FloatingButton, 'FloatingButton', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/components/Button/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/components/Button/index.js');
}();

;

/***/ }),
/* 6 */
/*!*********************************!*\
  !*** ./services/store/index.js ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ 27);

var _reducer = __webpack_require__(/*! ../../reducer */ 28);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducer2.default);

var _default = store;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(store, 'store', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/services/store/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/services/store/index.js');
}();

;

/***/ }),
/* 7 */
/*!***************************!*\
  !*** ./actions/dialer.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDialerIndex = setDialerIndex;
var SET_DIALER_INDEX = exports.SET_DIALER_INDEX = 'SET_DIALER_INDEX';
var SET_VIEWS = exports.SET_VIEWS = 'SET_VIEWS';
function setDialerIndex(index) {
  return {
    type: SET_DIALER_INDEX,
    index: index
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SET_DIALER_INDEX, 'SET_DIALER_INDEX', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/actions/dialer.js');

  __REACT_HOT_LOADER__.register(SET_VIEWS, 'SET_VIEWS', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/actions/dialer.js');

  __REACT_HOT_LOADER__.register(setDialerIndex, 'setDialerIndex', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/actions/dialer.js');
}();

;

/***/ }),
/* 8 */
/*!*******************************!*\
  !*** ./views/Keypad/index.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Index = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ 4);

var _Button = __webpack_require__(/*! ../../components/Button */ 5);

var _Button2 = _interopRequireDefault(_Button);

var _InputTextField = __webpack_require__(/*! ../../components/InputTextField */ 19);

var _InputTextField2 = _interopRequireDefault(_InputTextField);

__webpack_require__(/*! ./styles/keys.css */ 22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var keycode = {
  shift: 16,
  enter: 13,
  deleteBack: 8,
  deleteFront: 46
};
var keys = [{ val: '1', txt: '\xA0' }, { val: '2', txt: 'ABC' }, { val: '3', txt: 'DEF' }, { val: '4', txt: 'GHI' }, { val: '5', txt: 'JKL' }, { val: '6', txt: 'MNO' }, { val: '7', txt: 'PQRS' }, { val: '8', txt: 'TUV' }, { val: '9', txt: 'WXYZ' }, { val: '*', txt: '\xA0' }, { val: '0', txt: '+' }, { val: '#', txt: '\xA0' }];

var Index = exports.Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this));

    _this.onAreaCodeClick = function () {
      return _this.__onAreaCodeClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.onClearInputBox = function () {
      return _this.__onClearInputBox__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.onInputValue = function () {
      return _this.__onInputValue__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.onKeyDown = function () {
      return _this.__onKeyDown__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.onMouseDown = function () {
      return _this.__onMouseDown__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.onMouseUp = function () {
      return _this.__onMouseUp__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.onSubmitCalling = function () {
      return _this.__onSubmitCalling__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.onUpdateAreaCodeClick = function () {
      return _this.__onUpdateAreaCodeClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.onPasteHandler = function () {
      return _this.__onPasteHandler__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.inputValueCleanup = function () {
      return _this.__inputValueCleanup__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      inputValue: '',
      showAreaCodeList: false,
      activeKey: ''
    };
    return _this;
  }

  _createClass(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // this.dialpadInputBox.focus();
    }
  }, {
    key: '__onAreaCodeClick__REACT_HOT_LOADER__',
    value: function __onAreaCodeClick__REACT_HOT_LOADER__() {
      this.setState({ showAreaCodeList: !this.state.showAreaCodeList });
    }
  }, {
    key: '__onClearInputBox__REACT_HOT_LOADER__',
    value: function __onClearInputBox__REACT_HOT_LOADER__() {
      this.setState({ inputValue: '' });
    }
  }, {
    key: '__onInputValue__REACT_HOT_LOADER__',
    value: function __onInputValue__REACT_HOT_LOADER__(evt) {
      var asYouType = this.inputValueCleanup(evt.target.value);
      this.setState({ inputValue: asYouType });
    }
  }, {
    key: '__onKeyDown__REACT_HOT_LOADER__',
    value: function __onKeyDown__REACT_HOT_LOADER__(e) {
      if (!this.props.allowDelete && (e.keyCode === keycode.deleteFront || e.keyCode === keycode.deleteBack)) {
        e.preventDefault();
      } else if (this.props.allowEnterKey && e.keyCode === keycode.enter) {
        this.onSubmitCalling();
      } else {
        var value = this.inputValueCleanup(e.key.substr(-1));
        if (value !== '' && value !== '+') {
          this.props.onKeyPadInputValue(value);
        }
      }
    }
  }, {
    key: '__onMouseDown__REACT_HOT_LOADER__',
    value: function __onMouseDown__REACT_HOT_LOADER__(e) {
      this.setState({ activeKey: e.currentTarget.dataset.ref });
      var currentKeyValue = '' + this.state.inputValue + e.currentTarget.dataset.ref;
      var asYouType = this.inputValueCleanup(currentKeyValue);
      this.setState({ inputValue: asYouType });
      this.props.onDialPadKey(e.currentTarget.dataset.ref, false);
    }
  }, {
    key: '__onMouseUp__REACT_HOT_LOADER__',
    value: function __onMouseUp__REACT_HOT_LOADER__(e) {
      this.dialpadInputBox.focus();
      this.setState({ activeKey: '' });
      this.props.onDialPadKey(e.currentTarget.dataset.ref, true);
    }
  }, {
    key: '__onSubmitCalling__REACT_HOT_LOADER__',
    value: function __onSubmitCalling__REACT_HOT_LOADER__() {
      if (!this.props.showCallButton) {
        return;
      }
      if (!(this.state.inputValue === '')) {
        this.props.onSubmitPhoneNumber(this.state.inputValue);
        this.setState({ inputValue: '' });
      } else {
        this.setState({ inputValue: this.props.lastCallNumber });
      }
    }
  }, {
    key: '__onUpdateAreaCodeClick__REACT_HOT_LOADER__',
    value: function __onUpdateAreaCodeClick__REACT_HOT_LOADER__(data) {
      this.setState({ selectedAreaCode: data });
    }
  }, {
    key: '__onPasteHandler__REACT_HOT_LOADER__',
    value: function __onPasteHandler__REACT_HOT_LOADER__(e) {
      this.props.allowPaste ? e : e.preventDefault();
    }
  }, {
    key: '__inputValueCleanup__REACT_HOT_LOADER__',
    value: function __inputValueCleanup__REACT_HOT_LOADER__(value) {
      return value.replace(/[^0-9+*#,]/g, '');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_InputTextField2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { id: 'keypad' },
          keys.map(function (data, index) {
            return _react2.default.createElement(
              'div',
              {
                key: index,
                className: 'key ' + (_this2.state.activeKey === data.val ? 'active' : ''),
                'data-ref': data.val,
                onMouseDown: _this2.onMouseDown,
                onMouseUp: _this2.onMouseUp
              },
              data.val,
              _react2.default.createElement(
                'span',
                null,
                data.txt
              )
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'keypad-action' },
          _react2.default.createElement(_Button2.default, { icon: 'phone', color: 'white', bgcolor: 'green', action: function action() {
              _this2.props.dispatch({ type: 'SET_VIEWS', view: 'INACTIVECALL' });
            } })
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

Index.propTypes = {
  dispatch: _propTypes2.default.func,
  onDialPadKey: _propTypes2.default.func,
  onKeyPadInputValue: _propTypes2.default.func,
  onSubmitPhoneNumber: _propTypes2.default.func,
  lastCallNumber: _propTypes2.default.string,
  removeCallButton: _propTypes2.default.bool,
  showCallButton: _propTypes2.default.bool,
  allowDelete: _propTypes2.default.bool,
  allowEnterKey: _propTypes2.default.bool,
  allowPaste: _propTypes2.default.bool,
  e164: _propTypes2.default.bool
};

Index.propTypes = {
  dispatch: _propTypes2.default.func,
  dialerIndex: _propTypes2.default.number
};

function mapStateToProps(state) {
  return {
    dialerIndex: state.getIn(['dialer', 'dialerIndex'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(Index);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(keycode, 'keycode', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/views/Keypad/index.js');

  __REACT_HOT_LOADER__.register(keys, 'keys', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/views/Keypad/index.js');

  __REACT_HOT_LOADER__.register(Index, 'Index', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/views/Keypad/index.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/views/Keypad/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/views/Keypad/index.js');
}();

;

/***/ }),
/* 9 */
/*!*************************************!*\
  !*** ./views/IncomingCall/index.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ 4);

var _Button = __webpack_require__(/*! ../../components/Button */ 5);

var _Button2 = _interopRequireDefault(_Button);

var _Avatar = __webpack_require__(/*! ../../components/Avatar */ 10);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _store = __webpack_require__(/*! ../../services/store/ */ 6);

var _store2 = _interopRequireDefault(_store);

var _dialer = __webpack_require__(/*! ../../actions/dialer */ 7);

__webpack_require__(/*! ./styles/index.css */ 32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var actionTypeBtn = [{ title: 'Answer', icon: 'phone', color: 'white', bgcolor: 'green', action: function action(data) {
    _store2.default.dispatch({ type: _dialer.SET_VIEWS, view: 'INACTIVECALL', data: data });
  } }, { title: '', icon: '', action: function action(data) {
    console.log(data);
  } }, { title: 'Reject', icon: 'phone-slash', color: 'white', bgcolor: 'red', action: function action(data) {
    console.log(data);
  } }];

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this));

    _this.state = { modalIsOpen: true };
    return _this;
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'keypad-action avatar' },
          _react2.default.createElement(_Avatar2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'keypad-action' },
          'John Smith'
        ),
        _react2.default.createElement(
          'div',
          { className: 'keypad-action' },
          '561-901-5698'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'InActiveCallWrapper' },
          actionTypeBtn.map(function (data, index) {
            return _react2.default.createElement(_Button2.default, { key: index, icon: data.icon, title: data.title, color: data.color, bgcolor: data.bgcolor, action: data.action });
          })
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

Index.propTypes = {
  dispatch: _propTypes2.default.func,
  dialerIndex: _propTypes2.default.number
};

function mapStateToProps(state) {
  return {
    dialerIndex: state.getIn(['dialer', 'dialerIndex'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(Index);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(actionTypeBtn, 'actionTypeBtn', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/views/IncomingCall/index.js');

  __REACT_HOT_LOADER__.register(Index, 'Index', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/views/IncomingCall/index.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/views/IncomingCall/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/views/IncomingCall/index.js');
}();

;

/***/ }),
/* 10 */
/*!************************************!*\
  !*** ./components/Avatar/index.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactUserAvatar = __webpack_require__(/*! react-user-avatar */ 24);

var _reactUserAvatar2 = _interopRequireDefault(_reactUserAvatar);

__webpack_require__(/*! ./styles/index.css */ 25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Avatar = function (_React$Component) {
  _inherits(Avatar, _React$Component);

  function Avatar(props) {
    _classCallCheck(this, Avatar);

    var _this = _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call(this, props));

    _this.state = _this.initialState = {};
    return _this;
  }

  _createClass(Avatar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactUserAvatar2.default, { size: '100',
        name: 'Will Binns-Smith',
        src: 'https://vignette.wikia.nocookie.net/recipes/images/1/1c/Avatar.svg/revision/latest?cb=20110302033947'
      });
    }
  }]);

  return Avatar;
}(_react2.default.Component);

var _default = Avatar;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Avatar, 'Avatar', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/components/Avatar/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/components/Avatar/index.js');
}();

;

/***/ }),
/* 11 */
/*!*************************************!*\
  !*** ./views/InActiveCall/index.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ 4);

var _Button = __webpack_require__(/*! ../../components/Button */ 5);

var _Button2 = _interopRequireDefault(_Button);

var _Timer = __webpack_require__(/*! ../../components/Timer */ 34);

var _Timer2 = _interopRequireDefault(_Timer);

var _Avatar = __webpack_require__(/*! ../../components/Avatar */ 10);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _dialer = __webpack_require__(/*! ../../actions/dialer */ 7);

__webpack_require__(/*! ./styles/index.css */ 36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var actionTypeBtn = [{ title: 'Mute', icon: 'microphone-slash' }, { title: 'Hold', icon: 'pause' }, { title: 'Keypad', icon: 'th' }];

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this));

    _this.hangup = function () {
      return _this.__hangup__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = { modalIsOpen: true };
    return _this;
  }

  _createClass(Index, [{
    key: '__hangup__REACT_HOT_LOADER__',
    value: function __hangup__REACT_HOT_LOADER__() {
      this.props.dispatch({ type: _dialer.SET_VIEWS, view: 'KEYPAD' });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'keypad-action avatar' },
          _react2.default.createElement(_Avatar2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'keypad-action' },
          'John Smith'
        ),
        _react2.default.createElement(
          'div',
          { className: 'keypad-action' },
          '561-901-5698'
        ),
        _react2.default.createElement(
          'div',
          { className: 'keypad-action' },
          _react2.default.createElement(_Timer2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'InActiveCallWrapper' },
          actionTypeBtn.map(function (data, index) {
            return _react2.default.createElement(_Button2.default, { Key: index, icon: data.icon, title: data.title, color: data.color });
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'keypad-action' },
          _react2.default.createElement(_Button2.default, { icon: 'phone-slash', title: 'hangup', color: 'white', bgcolor: 'red', action: this.hangup, floating: true })
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

Index.propTypes = {
  dispatch: _propTypes2.default.func
};

function mapStateToProps(state) {
  return {
    dialerIndex: state.getIn(['dialer', 'dialerIndex'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(Index);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(actionTypeBtn, 'actionTypeBtn', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/views/InActiveCall/index.js');

  __REACT_HOT_LOADER__.register(Index, 'Index', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/views/InActiveCall/index.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/views/InActiveCall/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/views/InActiveCall/index.js');
}();

;

/***/ }),
/* 12 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncomingCall = exports.DialpadModalView = exports.Keypad = exports.Dialpad = undefined;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ 4);

var _Keypad = __webpack_require__(/*! ./views/Keypad */ 8);

var _Keypad2 = _interopRequireDefault(_Keypad);

var _IncomingCall = __webpack_require__(/*! ./views/IncomingCall */ 9);

var _IncomingCall2 = _interopRequireDefault(_IncomingCall);

var _InActiveCall = __webpack_require__(/*! ./views/InActiveCall */ 11);

var _InActiveCall2 = _interopRequireDefault(_InActiveCall);

var _views = __webpack_require__(/*! ./views */ 38);

var _views2 = _interopRequireDefault(_views);

var _store = __webpack_require__(/*! ./services/store */ 6);

var _store2 = _interopRequireDefault(_store);

var _dialer = __webpack_require__(/*! ./services/dialer */ 41);

var _dialer2 = _interopRequireDefault(_dialer);

__webpack_require__(/*! ./services/fontawesome */ 43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') {
  if (!window.eght) {
    window.k9 = {};
  }
  window.k9.dialerStore = _store2.default;
}

var EnhancedKeypad = function EnhancedKeypad(props) {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(_Keypad2.default, props)
  );
};

var EnhancedIncomingCall = function EnhancedIncomingCall(props) {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(_IncomingCall2.default, props)
  );
};

var EnhancedInActiveCall = function EnhancedInActiveCall() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(_InActiveCall2.default, null)
  );
};

var EnhanceDialpadModalView = function EnhanceDialpadModalView(props) {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(_views2.default, props)
  );
};

exports.Dialpad = EnhancedInActiveCall;
exports.Keypad = EnhancedKeypad;
exports.DialpadModalView = EnhanceDialpadModalView;
exports.IncomingCall = EnhancedIncomingCall;
var _default = _dialer2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(EnhancedKeypad, 'EnhancedKeypad', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/index.js');

  __REACT_HOT_LOADER__.register(EnhancedIncomingCall, 'EnhancedIncomingCall', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/index.js');

  __REACT_HOT_LOADER__.register(EnhancedInActiveCall, 'EnhancedInActiveCall', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/index.js');

  __REACT_HOT_LOADER__.register(EnhanceDialpadModalView, 'EnhanceDialpadModalView', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/index.js');
}();

;

/***/ }),
/* 13 */
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 14 */
/*!*******************************!*\
  !*** ./services/imc/index.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setImc = setImc;
exports.getImc = getImc;

var _eventemitter = __webpack_require__(/*! eventemitter2 */ 15);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imc = new _eventemitter2.default();
function setImc(IMC) {
  imc = IMC;
}
function getImc() {
  return imc;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(imc, 'imc', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/services/imc/index.js');

  __REACT_HOT_LOADER__.register(setImc, 'setImc', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/services/imc/index.js');

  __REACT_HOT_LOADER__.register(getImc, 'getImc', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/services/imc/index.js');
}();

;

/***/ }),
/* 15 */
/*!********************************!*\
  !*** external "eventemitter2" ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("eventemitter2");

/***/ }),
/* 16 */
/*!********************************************!*\
  !*** ./components/Button/styles/index.css ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--2-1!./index.css */ 17);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ 3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!./index.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 17 */
/*!************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader?{"modules":true,"camelCase":true,"localIdentName":"[local]"}!./components/Button/styles/index.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ 2)(undefined);
// imports


// module
exports.push([module.i, ".button-title {\n  font-size: 12px;\n}\n.floating-button {\n  border-radius: 50%;\n  border-color: gray;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 50px;\n  width: 50px;\n  display: inline-block;\n  text-align: center;\n}\n.floating {\n  box-shadow: 0 7px 15px 0 #cfd7e6;\n}\n.floating-button .disable {\n  background: #8FC9F8 !important;\n  color: #D3D3D3 !important;\n}\n\n.key_row .callActionBtn {\n  padding-top: 8px;\n  background: #01cb56;\n  border: 1px solid #01cb56;\n  color: #fff;\n  font-size: 25px;\n  box-shadow: 0px 2px 8px #888;\n  margin: 12px;\n  display: inline-block;\n  height: 33px;\n  width: 33px;\n  font-weight: bolder;\n  padding: 10px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.key_row .call {\n  background: #01cb56;\n  border: 1px solid #01cb56;\n}\n.key_row .call-disable {\n  background: #d0d7e6;\n  border: 1px solid #d0d7e6;\n}\n.key_row > div.call:hover {\n  background: #66df99;\n  color: #00a244;\n}", ""]);

// exports
exports.locals = {
	"button-title": "button-title",
	"buttonTitle": "button-title",
	"floating-button": "floating-button",
	"floatingButton": "floating-button",
	"floating": "floating",
	"disable": "disable",
	"key_row": "key_row",
	"keyRow": "key_row",
	"callActionBtn": "callActionBtn",
	"call": "call",
	"call-disable": "call-disable",
	"callDisable": "call-disable"
};

/***/ }),
/* 18 */
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 19 */
/*!********************************************!*\
  !*** ./components/InputTextField/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./styles/index.css */ 20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputTextField = function InputTextField() {
  return _react2.default.createElement(
    'div',
    { className: 'keypad-action' },
    _react2.default.createElement(
      'div',
      { className: 'input-name' },
      _react2.default.createElement('input', { type: 'text', placeholder: 'phone #' }),
      _react2.default.createElement('span', { className: 'underline-animation' })
    )
  );
};

InputTextField.propTypes = {
  action: _propTypes2.default.func,
  icon: _propTypes2.default.string
};

InputTextField.defaultProps = {
  icon: ''
};

var _default = InputTextField;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(InputTextField, 'InputTextField', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/components/InputTextField/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/components/InputTextField/index.js');
}();

;

/***/ }),
/* 20 */
/*!****************************************************!*\
  !*** ./components/InputTextField/styles/index.css ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--2-1!./index.css */ 21);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ 3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!./index.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 21 */
/*!********************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader?{"modules":true,"camelCase":true,"localIdentName":"[local]"}!./components/InputTextField/styles/index.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ 2)(undefined);
// imports


// module
exports.push([module.i, ".input-name{\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n}\n.input-name > input[type=text]{\n  border: none;\n  border-bottom: 2px solid #20a8d8;\n  outline: none;\n  text-align: center;\n}\n\n.underline-animation{\n  transition: all 0.5s;\n  display: inline-block;\n  bottom: 0;\n  left: -100%;\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-color: #64e4fe;\n}\n.input-name > input[type=text]:focus + .underline-animation{\n  left: 0;\n}\n", ""]);

// exports
exports.locals = {
	"input-name": "input-name",
	"inputName": "input-name",
	"underline-animation": "underline-animation",
	"underlineAnimation": "underline-animation"
};

/***/ }),
/* 22 */
/*!**************************************!*\
  !*** ./views/Keypad/styles/keys.css ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--2-1!./keys.css */ 23);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ 3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!./keys.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!./keys.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 23 */
/*!******************************************************************************************************************************!*\
  !*** ../node_modules/css-loader?{"modules":true,"camelCase":true,"localIdentName":"[local]"}!./views/Keypad/styles/keys.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ 2)(undefined);
// imports


// module
exports.push([module.i, "#keypad {\n  width: 200px;\n  margin: 0 auto 0 auto;\n}\n.key {\n  border-radius: 50px 50px 50px 50px;\n  color: #444;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  font-size: 24px;\n  float: left;\n  box-sizing: border-box;\n  margin: 8px;\n  cursor: pointer;\n  /* font-weight: lighter; */\n}\n.keypad-action {\n  width: 100%;\n  text-align: center;\n  height: 24px;\n}\n.key.active {\n  background-color: #2a3a4b !important;\n  color: #fff;\n}\n.key.active span {\n  color: #fff;\n}\n.key:hover {\n  background: #d9edfe;\n}\n.key span {\n  display:block;\n  color:#a7b8d1;\n  text-align:center;\n  font-size:10px;\n  text-transform:uppercase;\n}", ""]);

// exports
exports.locals = {
	"keypad": "keypad",
	"key": "key",
	"keypad-action": "keypad-action",
	"keypadAction": "keypad-action",
	"active": "active"
};

/***/ }),
/* 24 */
/*!************************************!*\
  !*** external "react-user-avatar" ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-user-avatar");

/***/ }),
/* 25 */
/*!********************************************!*\
  !*** ./components/Avatar/styles/index.css ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--2-1!./index.css */ 26);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ 3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!./index.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 26 */
/*!************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader?{"modules":true,"camelCase":true,"localIdentName":"[local]"}!./components/Avatar/styles/index.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ 2)(undefined);
// imports


// module
exports.push([module.i, "\n.UserAvatar {\n  display: inline-block;\n  color: white;\n}\n\n.UserAvatar--inner {\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background: gray;\n}\n\n.UserAvatar--light {\n  color: gray;\n}\n\n.UserAvatar--light .UserAvatar--inner {\n  border: 1px solid lightgray;\n}", ""]);

// exports
exports.locals = {
	"UserAvatar": "UserAvatar",
	"userAvatar": "UserAvatar",
	"UserAvatar--inner": "UserAvatar--inner",
	"userAvatarInner": "UserAvatar--inner",
	"UserAvatar--light": "UserAvatar--light",
	"userAvatarLight": "UserAvatar--light"
};

/***/ }),
/* 27 */
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 28 */
/*!**************************!*\
  !*** ./reducer/index.js ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxImmutable = __webpack_require__(/*! redux-immutable */ 29);

var _dialer = __webpack_require__(/*! ./dialer */ 30);

var _dialer2 = _interopRequireDefault(_dialer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description Root Reducer
 */
var rootReducer = (0, _reduxImmutable.combineReducers)({ dialer: _dialer2.default });

var _default = rootReducer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(rootReducer, 'rootReducer', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/reducer/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/reducer/index.js');
}();

;

/***/ }),
/* 29 */
/*!**********************************!*\
  !*** external "redux-immutable" ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 30 */
/*!***************************!*\
  !*** ./reducer/dialer.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(/*! immutable */ 31);

var _immutable2 = _interopRequireDefault(_immutable);

var _dialer = __webpack_require__(/*! ../actions/dialer */ 7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * @module dialer
  * @description dialer(state=[], action);
  */
var initialState = _immutable2.default.Map({
  dialerIndex: 0,
  view: 'INCOMINGCALL'
});

function dialer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _dialer.SET_DIALER_INDEX:
      {
        return state.set('dialerIndex', action.payload.index);
      }
    case _dialer.SET_VIEWS:
      {
        return state.set('view', action.view);
      }
    default:
      return state;
  }
}

var _default = dialer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/reducer/dialer.js');

  __REACT_HOT_LOADER__.register(dialer, 'dialer', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/reducer/dialer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/reducer/dialer.js');
}();

;

/***/ }),
/* 31 */
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 32 */
/*!*********************************************!*\
  !*** ./views/IncomingCall/styles/index.css ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--2-1!./index.css */ 33);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ 3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!./index.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 33 */
/*!*************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader?{"modules":true,"camelCase":true,"localIdentName":"[local]"}!./views/IncomingCall/styles/index.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ 2)(undefined);
// imports


// module
exports.push([module.i, ".flexible-modal {\n  position: absolute;\n  z-index: 9999;\n  border: 1px solid #ccc;\n  background: white;\n  box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.4)\n}\n.flexible-modal-mask {\n  /* position: fixed;\n  height: 100%;\n  background: rgba(55, 55, 55, 0.6);\n  top:0;\n  left:0;\n  right:0;\n  bottom:0; */\n}\n.flexible-modal-resizer {\n  position:absolute;\n  right:0;\n  bottom:0;\n  cursor:se-resize;\n  margin:5px;\n  border-bottom: solid 2px #333;\n  border-right: solid 2px #333;\n}\n.flexible-modal-drag-area{\n  background: #20a8d8;\n  height: 25px;\n  position:absolute;\n  right:0;\n  top:0;\n  cursor:move;\n}", ""]);

// exports
exports.locals = {
	"flexible-modal": "flexible-modal",
	"flexibleModal": "flexible-modal",
	"flexible-modal-mask": "flexible-modal-mask",
	"flexibleModalMask": "flexible-modal-mask",
	"flexible-modal-resizer": "flexible-modal-resizer",
	"flexibleModalResizer": "flexible-modal-resizer",
	"flexible-modal-drag-area": "flexible-modal-drag-area",
	"flexibleModalDragArea": "flexible-modal-drag-area"
};

/***/ }),
/* 34 */
/*!***********************************!*\
  !*** ./components/Timer/index.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _timeElapsed = __webpack_require__(/*! ./timeElapsed */ 35);

var _timeElapsed2 = _interopRequireDefault(_timeElapsed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
  _inherits(Stopwatch, _React$Component);

  function Stopwatch(props) {
    _classCallCheck(this, Stopwatch);

    var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this, props));

    _this.toggle = function () {
      return _this.__toggle__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.lap = function () {
      return _this.__lap__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.reset = function () {
      return _this.__reset__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.update = function () {
      return _this.__update__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = _this.initialState = {
      isRunning: false,
      lapTimes: [],
      timeElapsed: 0
    };
    return _this;
  }

  _createClass(Stopwatch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startTimer();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        timeElapsed: 0
      });
    }
  }, {
    key: '__toggle__REACT_HOT_LOADER__',
    value: function __toggle__REACT_HOT_LOADER__() {
      var _this2 = this;

      this.setState({ isRunning: !this.state.isRunning }, function () {
        _this2.state.isRunning ? _this2.startTimer() : clearInterval(_this2.timer);
      });
    }
  }, {
    key: '__lap__REACT_HOT_LOADER__',
    value: function __lap__REACT_HOT_LOADER__() {
      var _state = this.state,
          lapTimes = _state.lapTimes,
          timeElapsed = _state.timeElapsed;

      this.setState({ lapTimes: lapTimes.concat(timeElapsed) });
    }
  }, {
    key: '__reset__REACT_HOT_LOADER__',
    value: function __reset__REACT_HOT_LOADER__() {
      clearInterval(this.timer);
      this.setState(this.initialState);
    }
  }, {
    key: 'startTimer',
    value: function startTimer() {
      this.startTime = Date.now();
      this.timer = setInterval(this.update, 10);
    }
  }, {
    key: '__update__REACT_HOT_LOADER__',
    value: function __update__REACT_HOT_LOADER__() {
      var delta = Date.now() - this.startTime;
      this.setState({ timeElapsed: this.state.timeElapsed + delta });
      this.startTime = Date.now();
    }
  }, {
    key: 'render',
    value: function render() {
      var timeElapsed = this.state.timeElapsed;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_timeElapsed2.default, { id: 'timer', timeElapsed: timeElapsed })
      );
    }
  }]);

  return Stopwatch;
}(_react2.default.Component);

var _default = Stopwatch;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Stopwatch, 'Stopwatch', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/components/Timer/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/components/Timer/index.js');
}();

;

/***/ }),
/* 35 */
/*!*****************************************!*\
  !*** ./components/Timer/timeElapsed.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeElapsed = function (_React$Component) {
  _inherits(TimeElapsed, _React$Component);

  function TimeElapsed() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TimeElapsed);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimeElapsed.__proto__ || Object.getPrototypeOf(TimeElapsed)).call.apply(_ref, [this].concat(args))), _this), _this.leftPad = function () {
      var _this2;

      return (_this2 = _this).__leftPad__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimeElapsed, [{
    key: 'getUnits',
    value: function getUnits() {
      var seconds = this.props.timeElapsed / 1000;
      return {
        min: Math.floor(seconds / 60).toString(),
        sec: Math.floor(seconds % 60).toString(),
        msec: (seconds % 1).toFixed(3).substring(2)
      };
    }
  }, {
    key: '__leftPad__REACT_HOT_LOADER__',
    value: function __leftPad__REACT_HOT_LOADER__(width, n) {
      if (('' + n).length > width) {
        return n;
      }
      var padding = new Array(width).join('0');
      return (padding + n).slice(-width);
    }
  }, {
    key: 'render',
    value: function render() {
      var units = this.getUnits();
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          null,
          this.leftPad(2, units.min),
          ':'
        ),
        _react2.default.createElement(
          'span',
          null,
          this.leftPad(2, units.sec)
        )
      );
    }
  }]);

  return TimeElapsed;
}(_react2.default.Component);

TimeElapsed.propTypes = {
  timeElapsed: _propTypes2.default.number
};

var _default = TimeElapsed;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TimeElapsed, 'TimeElapsed', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/components/Timer/timeElapsed.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/components/Timer/timeElapsed.js');
}();

;

/***/ }),
/* 36 */
/*!*********************************************!*\
  !*** ./views/InActiveCall/styles/index.css ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--2-1!./index.css */ 37);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ 3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!./index.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 37 */
/*!*************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader?{"modules":true,"camelCase":true,"localIdentName":"[local]"}!./views/InActiveCall/styles/index.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ 2)(undefined);
// imports


// module
exports.push([module.i, ".keypad-action.avatar {\n  margin-top: 40px;\n}\n\n.InActiveCallWrapper {\n  width: 200px;\n  margin: 0 auto 0 auto;\n}\n.InActiveCallWrapper > div {\n  border-radius: 50px 50px 50px 50px;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  font-size: 24px;\n  float: left;\n  box-sizing: border-box;\n  margin: 10px 8px 30px;\n  cursor: pointer;\n  border: 1px solid lightgray;\n}\n.InActiveCallWrapper > div .floating-button:hover {\n  background: gray;\n  color: white;\n}", ""]);

// exports
exports.locals = {
	"keypad-action": "keypad-action",
	"keypadAction": "keypad-action",
	"avatar": "avatar",
	"InActiveCallWrapper": "InActiveCallWrapper",
	"inActiveCallWrapper": "InActiveCallWrapper",
	"floating-button": "floating-button",
	"floatingButton": "floating-button"
};

/***/ }),
/* 38 */
/*!************************!*\
  !*** ./views/index.js ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ 4);

var _reactModalResizableDraggable = __webpack_require__(/*! react-modal-resizable-draggable */ 39);

var _reactModalResizableDraggable2 = _interopRequireDefault(_reactModalResizableDraggable);

var _constants = __webpack_require__(/*! ../common/constants */ 40);

var _InActiveCall = __webpack_require__(/*! ./InActiveCall */ 11);

var _InActiveCall2 = _interopRequireDefault(_InActiveCall);

var _IncomingCall = __webpack_require__(/*! ./IncomingCall */ 9);

var _IncomingCall2 = _interopRequireDefault(_IncomingCall);

var _Keypad = __webpack_require__(/*! ./Keypad */ 8);

var _Keypad2 = _interopRequireDefault(_Keypad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactModalResizableDraggable2.default,
          {
            disableResize: true,
            initWidth: 260,
            initHeight: 400,
            top: window.innerHeight - 420,
            left: window.innerWidth - 300,
            onRequestClose: this.closeModal,
            isOpen: this.props.openDialer && this.props.view !== ''
          },
          this.props.view === _constants.KEYPAD && _react2.default.createElement(_Keypad2.default, null),
          this.props.view === _constants.INCOMINGCALL && _react2.default.createElement(_IncomingCall2.default, null),
          this.props.view === _constants.INACTIVECALL && _react2.default.createElement(_InActiveCall2.default, null)
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

Index.propTypes = {
  openDialer: _propTypes2.default.bool,
  view: _propTypes2.default.string
};

function mapStateToProps(state) {
  return {
    view: state.getIn(['dialer', 'view'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(Index);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Index, 'Index', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/views/index.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/views/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/views/index.js');
}();

;

/***/ }),
/* 39 */
/*!**************************************************!*\
  !*** external "react-modal-resizable-draggable" ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-modal-resizable-draggable");

/***/ }),
/* 40 */
/*!*****************************!*\
  !*** ./common/constants.js ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var INCOMINGCALL = exports.INCOMINGCALL = 'INCOMINGCALL';
var KEYPAD = exports.KEYPAD = 'KEYPAD';
var INACTIVECALL = exports.INACTIVECALL = 'INACTIVECALL';
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(INCOMINGCALL, 'INCOMINGCALL', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/common/constants.js');

  __REACT_HOT_LOADER__.register(KEYPAD, 'KEYPAD', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/common/constants.js');

  __REACT_HOT_LOADER__.register(INACTIVECALL, 'INACTIVECALL', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/common/constants.js');
}();

;

/***/ }),
/* 41 */
/*!**********************************!*\
  !*** ./services/dialer/index.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dialer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(/*! events */ 42);

var _events2 = _interopRequireDefault(_events);

var _store = __webpack_require__(/*! ../store/ */ 6);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialer = exports.Dialer = function (_EventEmitter) {
  _inherits(Dialer, _EventEmitter);

  function Dialer() {
    _classCallCheck(this, Dialer);

    var _this = _possibleConstructorReturn(this, (Dialer.__proto__ || Object.getPrototypeOf(Dialer)).call(this));

    _this.updateCallState = function () {
      return _this.__updateCallState__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.emitUIEvent = function () {
      return _this.__emitUIEvent__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.on('call-state', function (payload) {
      _this.updateCallState(payload);
    });
    return _this;
  }

  _createClass(Dialer, [{
    key: '__updateCallState__REACT_HOT_LOADER__',
    value: function __updateCallState__REACT_HOT_LOADER__(payload) {
      _store2.default.dispatch({ type: 'SET_DIALER_INDEX', payload: payload });
    }
  }, {
    key: '__emitUIEvent__REACT_HOT_LOADER__',
    value: function __emitUIEvent__REACT_HOT_LOADER__(payload) {
      this.emit('uiEvent', payload);
    }
  }]);

  return Dialer;
}(_events2.default);

var _default = Dialer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Dialer, 'Dialer', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/services/dialer/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/tchen/TempProject/cc-discovery/K8-Dialpad/src/services/dialer/index.js');
}();

;

/***/ }),
/* 42 */
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 43 */
/*!***************************************!*\
  !*** ./services/fontawesome/index.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fontawesomeSvgCore = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ 44);

var _freeSolidSvgIcons = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 45);

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faPhone);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faPhoneSlash);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faTimes);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faMicrophoneSlash);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faPause);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faTh);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 44 */
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),
/* 45 */
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ })
/******/ ]);
});