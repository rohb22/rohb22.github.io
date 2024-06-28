import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects";
import Contacts from "./components/Contacts"


export default function App() {
  return (
    <>
    <Navbar />
    <Profile />
    <About />
    <Skills />
    <Projects />
    <Contacts />
    </>
  )
}