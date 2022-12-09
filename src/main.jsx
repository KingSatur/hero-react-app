import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HerosApp } from "./HerosApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HerosApp />
  </BrowserRouter>
);
