import "./index.css"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import About from "./components/About"
import ScrollIndicator from "./components/ScrollIndicator"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"

export default function App() {
  return (
    <div className="w-full">
      <ScrollIndicator/>
      <NavBar/>
      <Hero/>
      <About />
      <Projects/>
      <Contacts/>
    </div>
  )
}