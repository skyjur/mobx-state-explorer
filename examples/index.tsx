import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable, computed, action} from 'mobx';
import {MobxExplorer, expose} from '../src/explorer';

type TodoItem = {
    text: string;
    finished: boolean;
}

export class TodoList {
    @observable todos : TodoRow[] = [
        new TodoRow({text: '123', finished: false}, this)
    ];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(row => !row.obj.finished).length;
    };
    @observable form ?: TodoForm;

    @action openForm() {
        this.form = new TodoForm((entry) => {
            this.todos.push(new TodoRow(entry, this))
        });
    }
}

export class TodoRow {
    @observable obj : TodoItem;

    constructor(obj: TodoItem, private list: TodoList) {
        this.obj = obj;
    }

    @action delete() {
        this.list.todos = this.list.todos.filter(row => row.obj !== this.obj)
    }
}

export class TodoForm {
    @observable text = '';
    @observable finished = false;

    constructor(private onSubmit: (data: TodoItem) => void) {}

    @action submit() {
        this.onSubmit({text: this.text, finished: this.finished});
    }
}

if(window) {
    let todo = new TodoList;
    (window as any).todo=todo;
    ReactDOM.render(
        <MobxExplorer obj={todo} />,
        document.getElementById('reactRoot')
    );
}