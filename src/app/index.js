import React from "react";
import {render} from "react-dom";
import App from "./components/app";
main();
function main(){
  var app = document.createElement('div');
  document.body.appendChild(app);
}
render(<App/>,window.document.getElementById("app"));
