let css = require('./style.css');
let style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.body.appendChild(style);