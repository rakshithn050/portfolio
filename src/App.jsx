import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Experience from "./Components/Experience/Experience";
import Background from "./Components/Background/Background";

const App = () => (
  <div className="app">
    <Background />
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default App;
