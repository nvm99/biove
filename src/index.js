import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import firebase from 'firebase/app';
require('firebase/auth');
var firebaseConfig = {
  apiKey: "AIzaSyCsuyVBFxBacPt-kgGtnU7lzVcanEpMYfY",
  authDomain: "biove-fbee4.firebaseapp.com",
  projectId: "biove-fbee4",
  storageBucket: "biove-fbee4.appspot.com",
  messagingSenderId: "152663085070",
  appId: "1:152663085070:web:fd2f506c492ae0cbf96c5f",
  measurementId: "G-SEFHV9KE98"
};
firebase.initializeApp(firebaseConfig );
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
