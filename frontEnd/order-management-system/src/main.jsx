// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Importa o BrowserRouter do react-router-dom
import App from "./App";
import "./styles/index.css";

const root = document.getElementById("root");

// Renderiza a aplicação dentro do BrowserRouter
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
