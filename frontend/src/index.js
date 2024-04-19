import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import "./styles.css"; 

import App from "./app";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
);