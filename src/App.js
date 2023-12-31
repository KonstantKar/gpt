import React, { ReactDOM } from "react";
import "./App.css";

import {
  Footer,
  Blog,
  Possibility,
  WhatGPT,
  Header,
  CTA,
  Features,
} from "./containers";
import { Brand, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
