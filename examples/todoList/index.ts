import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {TodoAppView} from './view';
import {TodoList} from './state';
import explore from 'mobx-state-explorer';

let todoList = new TodoList;
let view = React.createElement(TodoAppView, {list: todoList}, []);

ReactDOM.render(view, document.getElementById('todoList'));

explore(todoList);