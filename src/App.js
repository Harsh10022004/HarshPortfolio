import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import MyName from "./Components/Myname";
import About from './Components/About/about';
import Skills from './Components/Skills/skills'
import Education from './Components/Education/education.js';
import Experience from './Components/Experience/experience.js';

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="mb-4" />
          <Routes>
            <Route path = "/" element={ 
              <MyName 
                text={[
                  "I am MERN stack Developer",
                  "I am AI Enthusiast",
                  "I love Solving Complex Mathematical and Machine Learning Problems",
                ]}
                TypingSpeed={100}
                EraseSpeed={50}
                duration={1000}/>
              } 
            /> 
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
