import './stylesheets/main.css';

import React from "react";
import {render} from "react-dom";
import App from "./components/app";

main();

function main(){
  var div = document.createElement('div');
  document.body.appendChild(div);
}
render(<App/>,document.getElementById("app"));
