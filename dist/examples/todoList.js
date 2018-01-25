(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mobx"), require("mobxStateExplorer"));
	else if(typeof define === 'function' && define.amd)
		define(["mobx", "mobxStateExplorer"], factory);
	else if(typeof exports === 'object')
		exports["examples/todoList"] = factory(require("mobx"), require("mobxStateExplorer"));
	else
		root["examples/todoList"] = factory(root["mobx"], root["mobxStateExplorer"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__) {
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
/* 0 */,
/* 1 */,
/* 2 */,
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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = __webpack_require__(10);
const mobx_state_explorer_1 = __webpack_require__(11);
class TodoList {
    constructor() {
        this.todos = [
            new TodoRow({ text: '123', finished: false }, this)
        ];
    }
    get unfinishedTodoCount() {
        return this.todos.filter(row => !row.todo.finished).length;
    }
    ;
    openForm() {
        this.form = new TodoForm((entry) => {
            this.todos.push(new TodoRow(entry, this));
        });
    }
}
__decorate([
    mobx_1.observable
], TodoList.prototype, "todos", void 0);
__decorate([
    mobx_1.computed
], TodoList.prototype, "unfinishedTodoCount", null);
__decorate([
    mobx_1.observable
], TodoList.prototype, "form", void 0);
__decorate([
    mobx_1.action
], TodoList.prototype, "openForm", null);
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
class TodoForm {
    constructor(onSubmit) {
        this.onSubmit = onSubmit;
        this.text = '';
        this.finished = false;
    }
    submit() {
        this.onSubmit({ text: this.text, finished: this.finished });
    }
}
__decorate([
    mobx_1.observable
], TodoForm.prototype, "text", void 0);
__decorate([
    mobx_1.observable
], TodoForm.prototype, "finished", void 0);
__decorate([
    mobx_1.action
], TodoForm.prototype, "submit", null);
if (window) {
    let todo = new TodoList;
    window.todo = todo;
    mobx_state_explorer_1.default(todo);
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=todoList.js.map