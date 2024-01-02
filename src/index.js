// index.js
// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import store from "./Components/store" // Import your Redux store
// import App from "./App"; // Your main application component

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
// Import the necessary modules

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'
import 'react-toastify/dist/ReactToastify.min.css';
import { Provider } from 'react-redux'
import store from './Components/Redux/store';



ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <App />
    </Provider>
 
)


