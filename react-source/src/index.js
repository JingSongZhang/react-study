// import React, {Component} from "react";
// import ReactDOM from "react-dom";

import React from "./jreact/";
import ReactDOM from "./jreact/react-dom";
import Component from "./jreact/Component";
import "./index.css";

function FunctionComponent(props) {
  return (
    <div className="border">
      FunctionComponent-{props.name}
      <button
        onClick={() => {
          console.log("omg"); //sy-log
        }}>
        click
      </button>
    </div>
  );
}

class ClassComponent extends Component {
  static defaultProps = {
    color: "green"
  };
  render() {
    return (
      <div className="border">
        ClassComponent-{this.props.name}
        <p className={this.props.color}>color</p>
      </div>
    );
  }
}

const jsx = (
  <div className="border">
    <p>React</p>
    <a href="https://github.com/JingSongZhang">JingSongZhang</a>
    <FunctionComponent name="function" />
    <ClassComponent name="class" />

    {/* {[1, 2].map(item => (
      <React.Fragment key={item}>{item}</React.Fragment>
    ))} */}

    <>
      <h1>1</h1>
      <h2>2</h2>
    </>
  </div>
);

ReactDOM.render(jsx, document.getElementById("root"));

//多个节点
// fragment
