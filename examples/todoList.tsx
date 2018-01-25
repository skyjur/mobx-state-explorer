import {observable, computed, action} from 'mobx'
import explore from 'mobx-state-explorer';

type TodoItem = {
    text: string;
    finished: boolean;
}

class TodoList {
    @observable todos : TodoRow[] = [
        new TodoRow({text: '123', finished: false}, this)
    ];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(row => !row.todo.finished).length;
    };
    @observable form ?: TodoForm;

    @action openForm() {
        this.form = new TodoForm((entry) => {
            this.todos.push(new TodoRow(entry, this))
        });
    }
}

class TodoRow {
    todo : TodoItem;

    constructor(todo: TodoItem, private list: TodoList) {
        this.todo = todo;
    }

    @action delete() {
        this.list.todos = this.list.todos.filter(row => row.todo !== this.todo)
    }
}

class TodoForm {
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
    explore(todo);
}