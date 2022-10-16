import React from "react";
import ReactDOM from "react-dom";
//intro to jsx
// ReactDOM.render(
//   <div>
//     <h1>Hello</h1>
//     <ul>
//       <li>hey</li>
//       <li>hii</li>
//       <li>how</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );
// const num = 7;
// ReactDOM.render(
//   <p>my lucky number is {num}</p>,
//   document.getElementById("root")
// );
//intro to styles implementation
var a = 15;
const customStyle = {
  color: " "
};
var n = " ";
const date = new Date(2019, 1, 1, a);
if (a > 0 && a < 12) {
  n = "goodmorning";
  customStyle.color = "red";
}
if (a > 12 && a < 16) {
  n = "goodevening";
  customStyle.color = "blue";
}
ReactDOM.render(
  <h1 style={customStyle}> {n}</h1>,
  document.getElementById("root")
);
