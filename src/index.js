import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

// having variable here
const name = "Awara";
const num = 7;
const dadName = "baba";

// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

//  becarful we can have only one HTML, div is the best to hold them to gether
// ReactDOM.render(<h1>Hello {name}!</h1>, document.getElementById("root"));

// this how you inject javaScript into HTML code
ReactDOM.render(
  <div>
    {/* here how we add javaScript into html all inside a javaScript file*/}
    <h1>
      Hi {name} {dadName}
    </h1>
    <h2>Hi {name + " " + dadName}</h2>
    {/* or you can write two names beside each other like that */}
    <h3>Hi {`${name} ${dadName}`}</h3>

    <p>your number is {num}</p>
    <p>your number is {3 + 9}</p>
    {/* we cant add statments like if inside the div here */}
    {/* if (name === "awara") { */}
    {/* return 7; */}
    {/* else if ( name === "Deren") { */}
    {/* return 12; */}
    {/* } */}
    <p>your number is {Math.random() * 10}</p>
    <p>your number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
