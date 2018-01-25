(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"), require("mobxReact"), require("mobx"), require("mobxStateExplorer"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM", "mobxReact", "mobx", "mobxStateExplorer"], factory);
	else if(typeof exports === 'object')
		exports["examples/todoList"] = factory(require("React"), require("ReactDOM"), require("mobxReact"), require("mobx"), require("mobxStateExplorer"));
	else
		root["examples/todoList"] = factory(root["React"], root["ReactDOM"], root["mobxReact"], root["mobx"], root["mobxStateExplorer"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const ReactDOM = __webpack_require__(1);
const view_1 = __webpack_require__(10);
const state_1 = __webpack_require__(11);
const mobx_state_explorer_1 = __webpack_require__(13);
let todoList = new state_1.TodoList;
let view = React.createElement(view_1.TodoAppView, { list: todoList }, []);
ReactDOM.render(view, document.getElementById('todoList'));
mobx_state_explorer_1.default(todoList);


/***/ }),
/* 10 */
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
let TodoAppView = class TodoAppView extends React.Component {
    render() {
        let { form, todos, unfinishedTodoCount } = this.props.list;
        return React.createElement(ContentWrapper, null,
            React.createElement(FormView, { form: form }),
            todos.length == 0 ? React.createElement(Empty, null) : React.createElement(React.Fragment, null,
                unfinishedTodoCount > 0 ?
                    React.createElement("h2", { className: "has-text-centered" },
                        React.createElement("span", { className: "has-text-danger" },
                            unfinishedTodoCount,
                            " ",
                            unfinishedTodoCount > 1 ? 'things' : 'thing'),
                        " left to do")
                    : React.createElement("h2", { className: "has-text-centered has-text-success" },
                        React.createElement("span", { className: "has-text-success" },
                            React.createElement(Icon, { name: "fa-check" })),
                        " Hooray! All done."),
                React.createElement(TodoTableView, { rows: todos })));
    }
};
TodoAppView = __decorate([
    mobx_react_1.observer
], TodoAppView);
exports.TodoAppView = TodoAppView;
let TodoTableView = class TodoTableView extends React.Component {
    render() {
        let { rows } = this.props;
        return React.createElement(React.Fragment, null,
            React.createElement("table", { className: "table is-size-3" }, rows.map(row => React.createElement("tr", null,
                React.createElement("td", { className: "is-narrow" },
                    React.createElement(Checkbox, { checked: row.todo.finished, onClick: row.todo.toggleFinished }),
                    ' '),
                React.createElement("td", null, this.rowText(row.todo.finished, row.todo.text))))));
    }
    rowText(finished, text) {
        return finished ?
            React.createElement("p", { className: "has-text-grey-light", style: { textDecoration: "line-through" } }, text)
            : React.createElement("p", null, text);
    }
};
TodoTableView = __decorate([
    mobx_react_1.observer
], TodoTableView);
exports.TodoTableView = TodoTableView;
let FormView = class FormView extends React.Component {
    constructor() {
        super(...arguments);
        this.updateText = (val) => {
            this.props.form.text = val;
        };
    }
    render() {
        let { form } = this.props;
        return React.createElement("form", { className: "", onSubmit: form.submit },
            React.createElement("nav", { className: "panel" },
                React.createElement("div", { className: "panel-heading" }, "Add item"),
                React.createElement("div", { className: "panel-block" },
                    React.createElement("p", { className: "control" },
                        React.createElement(Input, { value: form.text, error: form.showErrors ? form.textError : null, onChange: this.updateText }))),
                React.createElement("div", { className: "panel-block" },
                    React.createElement(Button, { onClick: form.submit, label: "Submit" }))));
    }
};
FormView = __decorate([
    mobx_react_1.observer
], FormView);
class Input extends React.Component {
    render() {
        let { error, value, onChange } = this.props;
        return React.createElement(React.Fragment, null,
            React.createElement("input", { className: "input is-fullwidth" + (error ? " is-danger" : ''), value: value, onChange: (e) => onChange(e.target.value) }),
            error ? React.createElement("p", { className: "help is-danger" }, error) : null);
    }
}
class Button extends React.Component {
    render() {
        let { onClick, label } = this.props;
        return React.createElement("button", { className: "button is-link", onClick: onClick }, label);
    }
}
class ContentWrapper extends React.Component {
    render() {
        return React.createElement(React.Fragment, null,
            React.createElement("section", { className: "hero is-primary" },
                React.createElement("div", { className: "hero-body" },
                    React.createElement("div", { className: "container has-text-centered" },
                        React.createElement("h1", { className: "title" }, "Todo List"),
                        React.createElement("h2", { className: "subtitle" }, "with state explorer")))),
            React.createElement("div", { className: "section" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "content" }, this.props.children))));
    }
}
class Checkbox extends React.Component {
    render() {
        let { checked, onClick } = this.props;
        return React.createElement("span", { style: { cursor: "pointer" }, onClick: onClick, className: checked ? "has-text-success" : "" },
            React.createElement(Icon, { name: checked ? "fa-check-square-o" : "fa-square-o" }));
    }
}
class Icon extends React.Component {
    render() {
        return React.createElement("span", { className: "icon" },
            React.createElement("i", { className: "fa " + this.props.name }));
    }
}
const Empty = () => React.createElement("h1", { style: { padding: "50px 0 50px 0" }, className: "has-text-centered has-text-grey-light" },
    React.createElement("span", { className: "is-size-1" },
        React.createElement(Icon, { name: "fa-smile-o" })),
    React.createElement("br", null),
    React.createElement("br", null),
    "Nothing todo");


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = __webpack_require__(12);
class TodoList {
    constructor() {
        this.todos = [];
        this.form = new TodoForm((entry) => {
            this.todos.push(new TodoRow(entry, this));
        });
    }
    get unfinishedTodoCount() {
        return this.todos.filter(row => !row.todo.finished).length;
    }
    ;
}
__decorate([
    mobx_1.observable
], TodoList.prototype, "todos", void 0);
__decorate([
    mobx_1.computed
], TodoList.prototype, "unfinishedTodoCount", null);
exports.TodoList = TodoList;
class TodoItem {
    constructor(text) {
        this.text = text;
        this.finished = false;
        this.toggleFinished = () => {
            this.finished = !this.finished;
        };
    }
}
__decorate([
    mobx_1.observable
], TodoItem.prototype, "finished", void 0);
__decorate([
    mobx_1.action
], TodoItem.prototype, "toggleFinished", void 0);
exports.TodoItem = TodoItem;
class TodoRow {
    constructor(todo, list) {
        this.list = list;
        this.todo = todo;
    }
    delete() {
        this.list.todos = this.list.todos.filter(row => row.todo !== this.todo);
    }
}
__decorate([
    mobx_1.action
], TodoRow.prototype, "delete", null);
exports.TodoRow = TodoRow;
class TodoForm {
    constructor(onSubmit) {
        this.onSubmit = onSubmit;
        this.text = '';
        this.showErrors = false;
        this.submit = (e) => {
            if (e) {
                e.preventDefault();
            }
            if (!this.textError) {
                this.onSubmit(new TodoItem(this.text));
                this.text = '';
                this.showErrors = false;
            }
            else {
                this.showErrors = true;
            }
        };
    }
    get textError() {
        return this.text && this.text.length > 10 ? null : 'Should be at least 10 characters long';
    }
}
__decorate([
    mobx_1.observable
], TodoForm.prototype, "text", void 0);
__decorate([
    mobx_1.observable
], TodoForm.prototype, "showErrors", void 0);
__decorate([
    mobx_1.computed
], TodoForm.prototype, "textError", null);
__decorate([
    mobx_1.action
], TodoForm.prototype, "submit", void 0);
exports.TodoForm = TodoForm;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=todoList.js.map