import React from "react";
import ReactDOM from "react-dom";

const contact = [
  {
    id: 1,
    name: "akshat",
    tell: "5786786876",
    email: "fghghf"
  },
  {
    id: 2,
    name: "divyanshu",
    tell: "467697676",
    email: "fkjgyf"
  },
  {
    id: 3,
    name: "utkarsh",
    tell: "467697676",
    email: "fkjgyf"
  }
];

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
// var a = 15;
// const customStyle = {
//   color: " "
// };
// var n = " ";
// const date = new Date(2019, 1, 1, a);
// if (a > 0 && a < 12) {
//   n = "goodmorning";
//   customStyle.color = "red";
// }
// if (a > 12 && a < 16) {
//   n = "goodevening";
//   customStyle.color = "blue";
// }
// ReactDOM.render(
//   <h1 style={customStyle}> {n}</h1>,
//   document.getElementById("root")
// );
// react props practice
// mapping completed
function Card(props){
  return (
    <div>
       
      <h2>{props.name}</h2>
      <p>{props.tell}</p>
      <p>{props.email}</p>
    </div>
  )
}
function Create(contact) {
  return <Card name={contact.name} tell={contact.tell} email={contact.email} />;
}
function App() {
  return(
    <div>
  {contact.map(Create)}
  </div>)
  }


ReactDOM.render(
  <div>
    <App/>
  </div>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <div>
//     <Card name="bnhgfhf" tell="78798799" email="fgdhgfhkgjg" />
//     <Card name="bnhgfhf" tell="787987987" email="hfsjhgjg" />
//     <Card name="zdasm," tell="7644653636" email="zgfddjj" />
//   </div>,
//   document.getElementById("root")
// );
// IMP : in functioncard c should be capital
