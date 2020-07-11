import { TEXT } from "./const";

function createElement(type, config, ...children) {
  if (config) {
    delete config.__self;
    delete config.__source;
  }

  const props = {
    ...config,
    children: children.map((child) =>
      typeof child === "object" ? child : createTextNode(child)
    ),
  };

  return { type, props };
}

// 将文本节点格式化为普通标签节点相同的格式
function createTextNode(text) {
  return {
    type: TEXT,
    props: {
      children: [],
      nodeValue: text,
    },
  };
}

export default {
  createElement,
};
