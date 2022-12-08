import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage";
import DetailsPage from "./components/DetailsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/Details/:articleID"} element={<DetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
