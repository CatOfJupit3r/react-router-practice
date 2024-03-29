import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {About} from "./components/About";
import {Home} from "./components/Home";
import {Contacts} from "./components/Contacts";
import {NotFound} from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import Books from "./components/Books";
import SingleBook from "./components/SingleBook";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                    <Route element={<MainLayout />} path={"/"}>
                        <Route index element={<Home />} />
                        <Route element={<About />} path={"about"}/>
                        <Route element={<Contacts/>} path={"contacts"}/>
                        <Route element={<Books/>} path={"books"}/>
                        <Route element={<SingleBook/>} path={"books/:slug"}/>
                        <Route element={<NotFound />} path = "*"/>
                    </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
