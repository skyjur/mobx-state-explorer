import {observable, computed, action} from 'mobx'
import explore from 'mobx-state-explorer';


export class TodoList {
    @observable todos : TodoRow[] = [
    ];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(row => !row.todo.finished).length;
    };
    form = new TodoForm((entry) => {
        this.todos.push(new TodoRow(entry, this));
    });
}

export class TodoItem {
    @observable finished: boolean = false;

    constructor(public text: string) {}

    @action toggleFinished = () => {
        this.finished = !this.finished;
    }
}

export class TodoRow {
    todo : TodoItem;

    constructor(todo: TodoItem, private list: TodoList) {
        this.todo = todo;
    }

    @action delete() {
        this.list.todos = this.list.todos.filter(row => row.todo !== this.todo)
    }
}

export class TodoForm {
    @observable text = '';
    @observable showErrors = false;

    constructor(private onSubmit: (data: TodoItem) => void) {}

    @computed get textError() {
        return this.text && this.text.length > 10 ? null : 'Should be at least 10 characters long';
    }

    @action submit = (e?: {preventDefault: () => void}) => {
        if(e) { e.preventDefault(); }
        if(!this.textError) {
            this.onSubmit(new TodoItem(this.text));
            this.text = '';
            this.showErrors = false;
        } else {
            this.showErrors = true;
        }
    }
}
