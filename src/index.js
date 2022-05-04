import React from 'react';
import ReactDOM from 'react-dom';
import { add, divide, multiply, subtract } from './calculater';
import App from "./Components/App";

ReactDOM.render(
   <div>
   <App />,
    <ul> 
    <li>{add(1,2)}</li>
    <li>{multiply(4,5)} </li>
    <li>{subtract(4,9)}</li>
    <li>{divide(12,4)}</li>
   </ul>
    </div>,
   
    document.getElementById("root")
    );