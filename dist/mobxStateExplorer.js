(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"), require("mobxReact"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM", "mobxReact"], factory);
	else if(typeof exports === 'object')
		exports["mobxStateExplorer"] = factory(require("React"), require("ReactDOM"), require("mobxReact"));
	else
		root["mobxStateExplorer"] = factory(root["React"], root["ReactDOM"], root["mobxReact"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(6);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

let css = __webpack_require__(5);
let style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.body.appendChild(style);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "body.mobx-explorer--is-open {\n    margin-left: 400px;\n}\n\n.mobx-explorer {\n    font-family: monospace;\n    font-size: 8pt;\n    background: #f5f5f5;\n    border: 2px #eee solid;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n}\n    .mobx-explorer.mobx-explorer--is-open {\n        width: 400px;\n        height: 100%;\n        overflow-y: scroll;\n    }\n\n.mobx-explorer--header {\n    text-align: center;\n    font-size: 7pt;\n}\n\n.mobx-explorer--content {\n    padding: 5px;\n}\n\n.mobx-explorer--key-value {\n    padding: 0 0 0 10px;\n}\n\n.mobx-explorer--decorator {\n    color: gray;\n    font-size: 7pt;\n}\n\n.mobx-explorer--label {\n    font-weight: bold;\n}\n\n.mobx-explorer--type-label {\n    font-style: italic;\n    color: blue;\n}\n\n.mobx-explorer--value {\n    color: red;\n}\n\n.mobx-explorer--value[contenteditable=true] {\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAANlBMVEUAAAAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlAsPlDmJ9nfAAAAEXRSTlMAExlAaGlreYWIiZGStNrt8RjzOw8AAABDSURBVAhbTcoxAoAgEMTACCgnqLD//6wFHpJqisBXOlyQpdMdQ5f2YbstdKXhWmUhT0txsQ1fi8szjdiaG4ni5n/gBdsTAwioKe1tAAAAAElFTkSuQmCC);\n    background-repeat: no-repeat;\n    padding: 0 0 0 15px;\n    margin: 0 5px 0 5px;\n}\n\n.mobx-explorer--value[contenteditable=true]:focus {\n    outline: 1px solid red;\n    outline-offset: 3px;\n}"

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const ReactDOM = __webpack_require__(1);
const explorer_1 = __webpack_require__(7);
function explore(obj, container) {
    if (!container) {
        container = document.createElement('div');
        document.body.appendChild(container);
    }
    ReactDOM.render(React.createElement(explorer_1.MobxExplorer, { obj: obj }, []), container);
}
exports.default = explore;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const mobx_react_1 = __webpack_require__(2);
;
class MobxExplorer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            minimized: false,
        };
        this.toggleMinMax = () => { this.setState({ minimized: !this.state.minimized }); };
    }
    render() {
        let { minimized } = this.state;
        let className = minimized ? 'mobx-explorer--is-closed' : 'mobx-explorer--is-open';
        if (document) {
            document.body.classList.remove('mobx-explorer--is-open');
            document.body.classList.remove('mobx-explorer--is-closed');
            document.body.classList.add(className);
        }
        return React.createElement("div", { className: "mobx-explorer " + className },
            React.createElement("div", { className: "mobx-explorer--header" },
                React.createElement("strong", null, "state explorer"),
                ' ',
                React.createElement("a", { href: "javascript:void(0)", onClick: this.toggleMinMax }, "[+/-]")),
            !minimized ? React.createElement("div", { className: "mobx-explorer--content" },
                React.createElement(AnyObjView, { obj: this.props.obj, trackedIds: [] })) : null);
    }
}
exports.MobxExplorer = MobxExplorer;
let AnyObjView = class AnyObjView extends React.Component {
    render() {
        let { obj, trackedIds } = this.props;
        let objId = objectId(obj);
        if (isObject(obj) && trackedIds.indexOf(objId) !== -1) {
            return `[recursion ${typeName(obj)}]`;
        }
        ;
        trackedIds = [...trackedIds, objId];
        try {
            return isArray(obj) ?
                React.createElement(ArrayView, { obj: obj, trackedIds: trackedIds })
                : isObject(obj) && getObjectKeys(obj).length > 0 ?
                    React.createElement(ObjectView, { obj: obj, trackedIds: trackedIds })
                    :
                        React.createElement(PlainValue, { obj: obj });
        }
        catch (e) {
            console.trace(e);
            console.log(e.stack);
            return '[error]';
        }
    }
};
AnyObjView = __decorate([
    mobx_react_1.observer
], AnyObjView);
let ArrayView = class ArrayView extends React.Component {
    render() {
        let { obj } = this.props;
        return React.createElement(React.Fragment, null,
            '[',
            React.createElement("div", { className: "mobx-explorer--array" }, obj.map((val, i) => React.createElement("div", { className: "mobx-explorer--key-value", key: objectId(val) },
                label(i.toString()),
                " ",
                React.createElement(AnyObjView, { obj: val, trackedIds: this.props.trackedIds })))),
            ']');
    }
};
ArrayView = __decorate([
    mobx_react_1.observer
], ArrayView);
let ObjectView = class ObjectView extends React.Component {
    render() {
        let { obj } = this.props;
        return React.createElement(React.Fragment, null,
            typeLabel(typeName(obj)),
            '{',
            React.createElement("div", { className: "mobx-explorer--object" }, getObjectKeys(obj).map(key => React.createElement("div", { className: "mobx-explorer--key-value", key: key }, isObservable(obj, key) ?
                React.createElement(ObjectValueView, { obj: obj, keyName: key, trackedIds: this.props.trackedIds })
                : isFunction(obj[key]) && isAction(obj, key) ?
                    React.createElement(ActionMethodView, { obj: obj, keyName: key })
                    :
                        React.createElement(ObjectValueView, { obj: obj, keyName: key, trackedIds: this.props.trackedIds })))),
            '}');
    }
};
ObjectView = __decorate([
    mobx_react_1.observer
], ObjectView);
let ObjectValueView = class ObjectValueView extends React.Component {
    constructor() {
        super(...arguments);
        this.handleChange = (value) => {
            this.props.obj[this.props.keyName] = value;
        };
    }
    render() {
        let { keyName, obj } = this.props;
        let value = obj[keyName];
        let decorator = isComputed(obj, keyName) ? '@computed' : isObservable(obj, keyName) ? '@observable' : '';
        let editable = isEditable(obj, keyName);
        return React.createElement(React.Fragment, null,
            label(keyName, decorator),
            isFunction(value) ?
                React.createElement("span", { className: "mobx-explorer--value" }, "Function")
                : editable ?
                    React.createElement(PlainValue, { obj: value, onChange: this.handleChange })
                    : React.createElement(AnyObjView, { obj: value, trackedIds: this.props.trackedIds }));
    }
};
ObjectValueView = __decorate([
    mobx_react_1.observer
], ObjectValueView);
let ActionMethodView = class ActionMethodView extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            funArgs: []
        };
        this.handleCall = () => {
            let { obj, keyName } = this.props;
            try {
                obj[keyName].apply(obj, []);
            }
            catch (e) {
                console.trace(e.stack);
            }
        };
    }
    render() {
        let { keyName, obj } = this.props;
        return React.createElement(React.Fragment, null,
            label(keyName, '@action', ''),
            '( args: ',
            React.createElement(PlainValue, { obj: this.state.funArgs, onChange: (val) => this.updateArgs(val) }),
            ')',
            React.createElement("a", { href: "javascript:void(0)", onClick: this.handleCall }, "call"));
    }
    updateArgs(val) {
        if (val instanceof Array) {
            this.setState({ funArgs: val });
        }
        else {
            alert('must be an array');
            this.setState({ funArgs: [] });
        }
    }
};
ActionMethodView = __decorate([
    mobx_react_1.observer
], ActionMethodView);
class PlainValue extends React.Component {
    constructor() {
        super(...arguments);
        this.onBlur = () => {
            if (this.props.onChange) {
                let val = this.span.innerHTML || '';
                try {
                    this.props.onChange(eval(this.span.innerHTML));
                }
                catch (e) {
                    alert(e);
                    this.span.innerHTML = this.valStr();
                }
            }
        };
    }
    render() {
        let { obj, onChange } = this.props;
        return React.createElement("span", { ref: e => this.span = e, className: "mobx-explorer--value", contentEditable: onChange ? true : false, onBlur: this.onBlur, dangerouslySetInnerHTML: { __html: this.valStr() } });
    }
    valStr() {
        let val;
        let { obj } = this.props;
        if (obj === undefined)
            return 'undefined';
        if (obj === null)
            return 'null';
        if (obj === false)
            return 'false';
        if (obj === true)
            return 'true';
        try {
            val = JSON.stringify(this.props.obj, null, 4);
        }
        catch (_a) {
            val = `${this.props.obj}`;
        }
        return val;
    }
}
function label(label, decorator = '', col = ':') {
    return React.createElement(React.Fragment, null,
        decorator ? React.createElement("span", { className: "mobx-explorer--decorator" }, decorator) : null,
        React.createElement("span", { className: "mobx-explorer--label" },
            " ",
            label,
            " ",
            col,
            " "));
}
function isArray(obj) {
    return obj && (obj instanceof Array) ? true : false;
}
function isObject(obj) {
    return obj && typeof obj === 'object';
}
function isFunction(obj) {
    return typeof obj === 'function';
}
function isObservable(obj, key) {
    return obj && obj.$mobx && (key in obj.$mobx.values);
}
function isComputed(obj, key) {
    return obj && obj.$mobx && (key in obj.$mobx.values) && obj.$mobx.values[key].derivation;
}
function isAction(obj, key) {
    return isFunction(obj[key]) && obj[key].isMobxAction;
}
function isEditable(obj, key) {
    if (isObservable(obj, key) && !isComputed(obj, key)) {
        let val = obj[key];
        return !isArray(val) && (!isObject(val) || getObjectKeys(obj).length === 0);
    }
    else {
        return false;
    }
}
function getObjectKeys(obj) {
    if (!obj)
        return [];
    let keys = Array.from(new Set([
        ...Object.keys(obj),
        ...Object.getOwnPropertyNames(obj),
        ...(obj.$mobx && Object.keys(obj.$mobx.values) || []),
        ...(obj.__proto__ && obj.__proto__ && Object.getOwnPropertyNames(obj.__proto__) || [])
    ]));
    let baseObj = {};
    keys = keys.filter(k => k[0] !== '_' && k[0] !== '$' && !(baseObj[k]));
    return keys;
}
function typeName(obj) {
    return obj && obj.constructor && obj.constructor.name || typeof obj;
}
function typeLabel(typeName) {
    return typeName !== 'Object' ? React.createElement("span", { className: "mobx-explorer--type-label" }, ` [${typeName}] `) : null;
}
var __next_objid = 1;
function objectId(obj) {
    if (typeof obj === 'string')
        return obj;
    if (typeof obj === 'number')
        return ':' + obj.toString();
    if (!obj)
        return `:${obj}:`;
    if (!(obj.__obj_id))
        obj.__obj_id = __next_objid++;
    return 'id:' + obj.__obj_id.toString();
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=mobxStateExplorer.js.map