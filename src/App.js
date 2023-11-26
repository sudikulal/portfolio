import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
