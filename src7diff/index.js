import { createElement, render, renderDom } from './element';
import diff from './diff';
import patch from './patch';
let vertualDom = createElement('ul', { class: 'list' }, [
    createElement('li', { class: 'item' }, ['a']),
    createElement('li', { class: 'item' }, ['b']),
    createElement('li', { class: 'item' }, ['c']),
]);
let vertualDom2 = createElement('ul', { class: 'list-group' }, [
    createElement('li', { class: 'item' }, ['a']),
    createElement('li', { class: 'item' }, ['b']),
    createElement('li', { class: 'item' }, ['3']),
]);
let el = render(vertualDom);

renderDom(el, window.root);
let patches = diff(vertualDom, vertualDom2);
console.log(patches);
// 给元素打补丁，从新更新试图
patch(el, patches);
