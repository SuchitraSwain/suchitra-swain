import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import ProjectList from "./pages/Projects/ProjectList";
import DevFest from "./pages/DevFest/DevFest";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-me" element={<Contact />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/:url" element={<ProjectDetails />} />
          <Route path="/devfest" element={<DevFest />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
