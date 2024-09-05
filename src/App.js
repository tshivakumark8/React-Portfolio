import "./components/style.css"
import './App.css';
import AboutSection from './components/AboutSection';
import IntroSection from './components/IntroSection';
import NavBar from "./components/NavBar"
import Projects from './components/Projects';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="App">
       <NavBar/>
       <IntroSection/>
      <AboutSection/>
      <TechStack/>
     
      <Projects/>
     
    </div>
  );
}

export default App;
