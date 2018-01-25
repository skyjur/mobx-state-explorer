import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import * as state from './state';

@observer
export class TodoAppView extends React.Component<{list: state.TodoList}> {
    render() {
        let {form, todos, unfinishedTodoCount } = this.props.list;
        return <ContentWrapper>
            <FormView form={form} />
            {todos.length == 0 ?  <Empty /> : <>
                { unfinishedTodoCount > 0 ?
                    <h2 className="has-text-centered">
                        <span className="has-text-danger">{unfinishedTodoCount} {unfinishedTodoCount > 1 ? 'things' : 'thing'}</span> left to do</h2>
                    : <h2 className="has-text-centered has-text-success">
                        <span className="has-text-success"><Icon name="fa-check" /></span> Hooray! All done.
                    </h2>}
                <TodoTableView rows={todos} />
            </> }
        </ContentWrapper>
    }
}

@observer
export class TodoTableView extends React.Component<{rows: state.TodoRow[]}> {
    render() {
        let {rows} = this.props;
        return <>
            <table className="table is-size-3">
                {rows.map(row => <tr>
                    <td className="is-narrow">
                        <Checkbox checked={row.todo.finished} onClick={row.todo.toggleFinished} />{' '}
                    </td>
                    <td>{this.rowText(row.todo.finished, row.todo.text)}</td>
                </tr>)}
            </table>
        </>
    }

    rowText(finished: boolean, text: string) {
        return finished ?
            <p className="has-text-grey-light" style={{textDecoration: "line-through"}}>{text}</p>
            : <p>{text}</p>;
    }
}

@observer
class FormView extends React.Component<{form: state.TodoForm}> {
    render() {
        let {form} = this.props;
        return <form className="" onSubmit={form.submit}>
            <nav className="panel">
                <div className="panel-heading">Add item</div>
                <div className="panel-block">
                    <p className="control">
                        <Input value={form.text} error={form.showErrors ? form.textError : null} onChange={this.updateText} />
                    </p>
                </div>
                <div className="panel-block">
                    <Button onClick={form.submit} label="Submit" />
                </div>
            </nav>
        </form>
    }

    updateText = (val: string) => {
        this.props.form.text = val;
    }
}

class Input extends React.Component<{value: string, error: string | null, onChange: (val: string) => void}> {
    render() {
        let {error, value, onChange} = this.props;
        return <>
            <input
                className={"input is-fullwidth" + (error ? " is-danger" : '')}
                value={value}
                onChange={(e) => onChange(e.target.value)} />
            { error ? <p className="help is-danger">{error}</p> : null }
        </>
    }
}

class Button extends React.Component<{label: string, onClick: ()=>void}> {
    render() {
        let {onClick, label} = this.props;
        return <button className="button is-link" onClick={onClick}>{label}</button>
    }
}

class ContentWrapper extends React.Component {
    render() {
        return <>
           <section className="hero is-primary">
            <div className="hero-body">
                <div className="container has-text-centered">
                <h1 className="title">
                    Todo List
                </h1>
                <h2 className="subtitle">
                    with state explorer
                </h2>
                </div>
            </div>
            </section>
            <div className="section">
                <div className="container">
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        </>
    }
}

class Checkbox extends React.Component<{checked: boolean, onClick: () => void}> {
    render() {
        let {checked, onClick} = this.props;
        return <span style={{cursor: "pointer"}} onClick={onClick} className={checked ? "has-text-success" : ""} >
            <Icon name={ checked ? "fa-check-square-o" : "fa-square-o" } />
        </span>
    }
}

class Icon extends React.Component<{name: string}> {
    render() {
        return <span className="icon">
            <i className={"fa " + this.props.name}></i>
        </span>
    }
}
 
const Empty : React.SFC = () => <h1 style={{padding: "50px 0 50px 0"}} className="has-text-centered has-text-grey-light">
        <span className="is-size-1"><Icon name="fa-smile-o" /></span>
        <br /><br />
        Nothing todo
    </h1>