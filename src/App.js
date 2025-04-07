import React, { useState } from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
import Nav from "./Component/Nav";
import DetailPage from "./Pages/DetailPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <Nav onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<MainPage searchQuery={searchQuery} />} />
        <Route path="/product/:id" element={<DetailPage/>} />
      </Routes>
    </div>
  );
}

export default App;
