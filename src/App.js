import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Education from "./components/Education/Education";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import ProjectDetails from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext)
  const darkMode =theme.state.darkMode;
  
  return (
    <div className="App"
    style={{
      background:darkMode?'black': 'linear-gradient(rgb(30, 30, 29),rgb(226, 34, 143),rgb(30, 30, 29),rgb(226, 34, 143),rgb(30, 30, 29),rgb(226, 34, 143),rgb(30, 30, 29),rgb(226, 34, 143))',
      color:darkMode? 'white':'white'
    }}
    >
      
     <Navbar/>
     <Intro/>
     <About/>
     <Education/>
     <Skills/>
     <ProjectDetails/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
