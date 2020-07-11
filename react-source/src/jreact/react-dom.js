import { TEXT } from "./const";

// vnode->node, 并插入到父容器中
function render(vnode, container) {
  const node = createNode(vnode);
  container.appendChild(node);
}

// vnode->node
function createNode(vnode) {
  console.log(vnode);
  let node;
  const { type, props } = vnode;
  if (type === TEXT) {
    node = document.createTextNode("");
  } else if (typeof type === "string") {
    node = document.createElement(type);
  } else if (typeof type === "function") {
    node = type.isReactComponent
      ? updateClassComponent(type, props)
      : updateFunctionComponent(type, props);
  } else {
    node = document.createDocumentFragment();
  }

  reconcileChildren(props.children, node);
  updateNode(node, props);
  return node;
}

// 递归children
function reconcileChildren(children, node) {
  children.map((child) => {
    render(child, node);
  });
}

// 将属性添加至node
function updateNode(node, nextVal) {
  Object.keys(nextVal)
    .filter((key) => key !== "children")
    .map((k) => {
      if (k.slice(0, 2) === "on") {
        const event = k.slice(2).toLowerCase();
        node.addEventListener(event, nextVal[k]);
      } else {
        node[k] = nextVal[k];
      }
    });
}

// 函数组件
function updateFunctionComponent(func, props) {
  const vnode = func(props);
  return createNode(vnode);
}

// class组件
function updateClassComponent(func, props) {
  const mergeProps = {
    ...func.defaultProps,
    ...props,
  };
  const cmp = new func(mergeProps);
  const vnode = cmp.render();
  return createNode(vnode);
}

export default {
  render,
};
