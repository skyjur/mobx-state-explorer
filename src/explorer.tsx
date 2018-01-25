import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

export class MobxExplorer extends React.Component<{obj: any}> {
    render() {
        return <div className="mobx-explorer">
            <AnyObjView obj={this.props.obj} trackedIds={[]} />
        </div>
    }
}

@observer
class AnyObjView extends React.Component<{obj: any, trackedIds: Array<string>}> {
    render() : any {
        let {obj, trackedIds} = this.props;
        let objId = objectId(obj);
        
        if(isObject(obj) && trackedIds.indexOf(objId) !== -1) {
            return `[recursion ${typeName(obj)}]`
        };
        
        trackedIds = [... trackedIds, objId];

        return isArray(obj) ?
                <ArrayView obj={obj} trackedIds={trackedIds} />
            : isObject(obj) && getObjectKeys(obj).length > 0 ?
                <ObjectView obj={obj} trackedIds={trackedIds} />
            :
                <PlainValue obj={obj} />
    }
}

@observer
class ArrayView extends React.Component<{obj: any, trackedIds: Array<string>}> {
    render() {
        let {obj} = this.props;
        return <>
            {'['}
            <div className="mobx-explorer--array">
                {obj.map((val: any, i: number) => <div className="mobx-explorer--key-value" key={objectId(val)}>
                    {label(i.toString())} <AnyObjView obj={val} trackedIds={this.props.trackedIds} />
                </div>)}
            </div>
            {']'}
        </>
    }
}

@observer
class ObjectView extends React.Component<{obj: any, trackedIds: Array<string>}> {
    render() : any {
        let {obj} = this.props;
        return <>
            {typeLabel(typeName(obj))}
            {'{'}
            <div className="mobx-explorer--object">
                {getObjectKeys(obj).map(key => <div className="mobx-explorer--key-value" key={key}>
                    {isObservable(obj, key) ?
                        <ObjectValueView obj={obj} keyName={key} trackedIds={this.props.trackedIds} />
                    : isFunction(obj[key]) && isAction(obj, key) ?
                        <ActionMethodView obj={obj} keyName={key} />
                    : 
                        <ObjectValueView obj={obj} keyName={key} trackedIds={this.props.trackedIds} />}
                </div>)}
            </div>
            {'}'}
        </>
    }
}

@observer
class ObjectValueView extends React.Component<{keyName: string, obj: any, trackedIds: Array<string>}> {
    render() {
        let {keyName, obj} = this.props;
        let value = obj[keyName];
        let decorator = isComputed(obj, keyName) ? '@computed' : isObservable(obj, keyName) ? '@observable' : '';
        let editable = isEditable(obj, keyName);
        return <>
            {label(keyName, decorator)}
            {isFunction(value) ?
                <span className="mobx-explorer--value">Function</span>
            : editable ?
                <PlainValue obj={value} onChange={this.handleChange} />
                : <AnyObjView obj={value} trackedIds={this.props.trackedIds} /> }
        </>
    }

    handleChange = (value: any) => {
        this.props.obj[this.props.keyName] = value;
    }
}

@observer
class ActionMethodView extends React.Component<{keyName: string, obj: any, editable?: boolean}> {
    private args: HTMLSpanElement;
    state = {
        funArgs: [] as Array<any>
    }

    render() {
        let {keyName, obj} = this.props;
        return <>
            {label(keyName, '@action', '')}
            {'( args: '}
            <PlainValue obj={this.state.funArgs}
                onChange={(val) => this.updateArgs(val)} />
            {')'}
            <a href="javascript:void(0)" onClick={this.handleCall}>call</a>
        </>;
    }

    updateArgs(val: any) {
        if(val instanceof Array) {
            this.setState({funArgs: val})
        } else {
            alert('must be an array')
            this.setState({funArgs: []})
        }
    }

    handleCall = () => {
        let {obj, keyName} = this.props;
        try {
            obj[keyName].apply(obj, []);
        } catch(e) {
            console.trace(e.stack);
        }
    }
}

class PlainValue extends React.Component<{obj: any, onChange?: (value: any) => void}> {
    span: HTMLSpanElement;

    render() {
        let {obj, onChange} = this.props;
        return <span
            ref={e => this.span = e!}
            className="mobx-explorer--value"
            contentEditable={onChange ? true : false}
            onBlur={this.onBlur}
            dangerouslySetInnerHTML={{__html: this.valStr()}} />
    }

    onBlur = () => {
        if(this.props.onChange) {
            let val = this.span.innerHTML || '';
            try {
                this.props.onChange(eval(this.span.innerHTML));
            } catch (e) {
                alert(e);
                this.span.innerHTML = this.valStr();
            }
        }
    }

    valStr() {
        let val;
        let {obj} = this.props;
        if(obj === undefined) return 'undefined';
        if(obj === null) return 'null';
        if(obj === false) return 'false';
        if(obj === true) return 'true';
        try {
            val = JSON.stringify(this.props.obj, null, 4);
        } catch {
            val = `${this.props.obj}`;
        }
        return val;
    }
}

function label(label: string, decorator: string = '', col: any = ':') {
    return <>
        {decorator ? <span className="mobx-explorer--decorator">{decorator}</span> : null}
        <span className="mobx-explorer--label"> {label} {col} </span>
    </>
}

function isArray(obj: any) {
    return obj && obj.map && obj.forEach ? true : false
}

function isObject(obj: any) {
    return obj && typeof obj === 'object'
}

function isFunction(obj: any) {
    return typeof obj === 'function';
}

function isObservable(obj: any, key: string) {
    return obj && obj.$mobx && (key in obj.$mobx.values);
}

function isComputed(obj: any, key: string) {
    return obj && obj.$mobx && (key in obj.$mobx.values) && obj.$mobx.values[key].derivation;
}

function isAction(obj: any, key: string) {
    return isFunction(obj[key]) && obj[key].isMobxAction;
}

function isEditable(obj: any, key: string) {
    if(isObservable(obj, key) && !isComputed(obj, key)) {
        let val = obj[key];
        return !isArray(val) && (!isObject(val) || getObjectKeys(obj).length === 0);
    } else {
        return false;
    }
}

function getObjectKeys(obj: any) : string[] {
    if(!obj) return [];
    let keys = Array.from(new Set([
        ... Object.keys(obj),
        ... Object.getOwnPropertyNames(obj),
        ... (obj.$mobx && Object.keys(obj.$mobx.values) || []),
        ... (obj.__proto__ && obj.__proto__ && Object.getOwnPropertyNames(obj.__proto__) || [])
    ]));
    let baseObj : any = {};
    keys = keys.filter(k => k[0] !== '_' && k[0] !== '$' && !(baseObj[k]));
    return keys;
}

function typeName(obj: any) : string {
    return obj && obj.constructor && obj.constructor.name || typeof obj;
}

function typeLabel(typeName: string) {
    return typeName !== 'Object' ? <span className="mobx-explorer--type-label">{` [${typeName}] `}</span> : null;
}

var __next_objid=1;
function objectId(obj: any) : string {
    if(typeof obj === 'string') return obj;
    if(typeof obj === 'number') return ':' + obj.toString();
    if(!obj) return `:${obj}:`;
    if(!(obj.__obj_id)) obj.__obj_id=__next_objid++;
    return 'id:' + obj.__obj_id.toString();
}