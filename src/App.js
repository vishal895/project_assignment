import React, { useState } from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
import Nav from "./Component/Nav";
import DetailPage from "./Pages/DetailPage";
import { Route, Routes } from "react-router-dom";
import Fileexplore from "./Pages/FileExplore/fileexplore";

function App() {
  // const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      {/* e-commmerce */}
      {/* <Nav onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<MainPage searchQuery={searchQuery} />} />
        <Route path="/product/:id" element={<DetailPage/>} />
      </Routes> */}



      {/* file explore */}
      <Fileexplore/>
    </div>
  );
}

export default App;
