import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import './App.css';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
