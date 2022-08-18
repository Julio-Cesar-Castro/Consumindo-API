import React, { Component } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contatos from "./Contatos";
import Sobre from "./Sobre";
import Main from "../Main/Main";

export default class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/contatos">Contatos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contatos" element={<Contatos />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
