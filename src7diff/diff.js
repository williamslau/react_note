function diff(oldTree, newTree) {
    let patches = {};
    let index = 0;
    // 递归
    walk(oldTree, newTree, index, patches);
    return patches;
}
function diffAttr(oldAttrs, newAttrs) {
    let patch = {};
    // 判断老的属性和新的属性的关系
    for (let key in oldAttrs) {
        if (oldAttrs[key] !== newAttrs[key]) {
            patch[key] = newAttrs[key];  // 有可能是undefined
        }
    }
    for (let key in newAttrs) {
        if (!oldAttrs.hasOwnProperty(key)) {
            patch[key] = newAttrs[key];
        }
    }
    return patch;
}
const ATTRS = 'ATTRS';
const TEXT = 'TEXT';
const REMOVE = 'REMOVE';
const REPLACE = 'REPLACE';
let Index = 0;
function diffChildren(oldChildren, newChildren, patches) {
    // 比较老的第一个和新的第一个
    oldChildren.forEach((child, idx) => {
        walk(child, newChildren[idx], ++Index, patches);
    });
}
function isString(node) {
    return Object.prototype.toString.call(node) === '[object String]';
}
function walk(oldNode, newNode, index, patches) {
    let currentPatch = [];
    if (!newNode) {
        currentPatch.push({ type: REMOVE, index });
    } else if (isString(oldNode) && isString(newNode)) {   // 判断文本是否一致
        if (oldNode !== newNode) {
            currentPatch.push({ type: TEXT, text: newNode });
        }
    } else if (oldNode.type === newNode.type) {    // 比较标签
        // 比较属性
        let attrs = diffAttr(oldNode.props, newNode.props);
        if (Object.keys(attrs).length > 0) {
            currentPatch.push({ type: ATTRS, attrs });
        }
        // 如果有儿子节点，遍历儿子
        diffChildren(oldNode.children, newNode.children, patches);
    } else {
        currentPatch.push({ type: REPLACE, newNode });
    }
    if (currentPatch.length > 0) {
        // 当前补丁包确实有补丁，将元素放到打补丁中
        patches[index] = currentPatch;
    }
};
export default diff;