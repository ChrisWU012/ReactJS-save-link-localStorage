import "./App.css";
import LinkList from './Components/LinkList'
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import SideBar from "./Components/SideBar";
import HomePage from "./Components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (

    <div className="App">
      <SearchBar getData={(data) => {
        setSearchTerm(data);
      }} />
      <div className="app-body">
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/links" element={<LinkList keyword={searchTerm} />}></Route>
        </Routes>
      </div>
    </div>

  )
}

export default App;