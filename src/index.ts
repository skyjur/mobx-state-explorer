import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable, computed, action} from 'mobx';
import {MobxExplorer} from '../src/explorer';

export default function explore(obj: any, container?: HTMLElement) {
    if(!container) {
        container = document.createElement('div');
        document.body.appendChild(container);
    }
    ReactDOM.render(React.createElement(MobxExplorer, {obj: obj}, []), container);
}
